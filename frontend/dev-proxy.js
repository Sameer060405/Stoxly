// dev-proxy.js
// Starts the frontend CRA dev server and exposes a small HTTP endpoint
// POST /start-dashboard -> will spawn `npm start` in ../dashboard (detached)

const http = require('http');
const { spawn, exec } = require('child_process');
const net = require('net');

const FRONTEND_PORT = Number(process.env.PORT) || 3000; // CRA will use this
const PROXY_PORT = 4000; // endpoint port to listen for start requests
const PREFERRED_DASHBOARD_PORT = Number(process.env.DASHBOARD_PORT) || 3002; // preferred dashboard port
const DASHBOARD_PORT_START = 3000; // first port to try for dashboard; will search upward

function isPortOpen(port, host = '127.0.0.1') {
  return new Promise((resolve) => {
    const socket = new net.Socket();
    socket.setTimeout(500);
    socket.on('connect', () => { socket.destroy(); resolve(true); });
    socket.on('error', () => { resolve(false); });
    socket.on('timeout', () => { resolve(false); });
    socket.connect(port, host);
  });
}

async function findFreePort(start = DASHBOARD_PORT_START, avoid = []) {
  for (let p = start; p < 65535; p++) {
    if (avoid.includes(p)) continue;
    // if port not open => free
    const open = await isPortOpen(p);
    if (!open) return p;
  }
  throw new Error('no-free-port-found');
}

function killProcessOnPort(port) {
  return new Promise((resolve, reject) => {
    const platform = process.platform;
    if (platform === 'win32') {
      // netstat -ano | findstr :<port>
      const cmd = `netstat -ano | findstr :${port}`;
      exec(cmd, { shell: true }, (err, stdout) => {
        if (err || !stdout) return reject(new Error('no-process-found'));
        // parse lines and extract PID (last column)
        const lines = stdout.trim().split(/\r?\n/).filter(Boolean);
        const pids = new Set();
        for (const line of lines) {
          const parts = line.trim().split(/\s+/);
          const pid = parts[parts.length - 1];
          if (/^\d+$/.test(pid)) pids.add(pid);
        }
        if (pids.size === 0) return reject(new Error('no-pid'));
        // kill each pid
        const tasks = Array.from(pids).map(pid => new Promise((res) => {
          exec(`taskkill /PID ${pid} /F`, { shell: true }, () => res());
        }));
        Promise.all(tasks).then(() => resolve(true));
      });
    } else {
      // unix: lsof -ti :port
      exec(`lsof -ti :${port}`, (err, stdout) => {
        if (err || !stdout) return reject(new Error('no-process-found'));
        const pids = stdout.trim().split(/\r?\n/).filter(Boolean);
        if (pids.length === 0) return reject(new Error('no-pid'));
        const tasks = pids.map(pid => new Promise((res) => {
          process.kill(Number(pid), 'SIGKILL');
          res();
        }));
        Promise.all(tasks).then(() => resolve(true));
      });
    }
  });
}

let dashboardChild = null;
let dashboardPort = null;

async function ensureDashboardStarted() {
  try {
    // if we already started a dashboard child in this proxy session, and port is open, return it
    if (dashboardChild && dashboardPort) {
      if (await isPortOpen(dashboardPort)) {
        return { started: false, port: dashboardPort, alreadyRunning: true };
      }
      // otherwise clear and continue
      dashboardChild = null; dashboardPort = null;
    }

    // prefer configured preferred port, fallback to scanning if taken
    let port = PREFERRED_DASHBOARD_PORT;
    const preferredOpen = await isPortOpen(port);
    if (preferredOpen) {
      // try to free the port by killing the process that holds it (best-effort)
      await killProcessOnPort(port).catch(() => {});
      // re-check
      const stillOpen = await isPortOpen(port);
      if (stillOpen || [FRONTEND_PORT, PROXY_PORT].includes(port)) {
        port = await findFreePort(DASHBOARD_PORT_START, [FRONTEND_PORT, PROXY_PORT]);
      }
    } else if ([FRONTEND_PORT, PROXY_PORT].includes(port)) {
      port = await findFreePort(DASHBOARD_PORT_START, [FRONTEND_PORT, PROXY_PORT]);
    }

    const dashPath = require('path').resolve(__dirname, '..', 'dashboard');
    const fs = require('fs');
    try {
      const scriptPath = require('path').join(dashPath, 'node_modules', 'react-scripts', 'scripts', 'start.js');
      if (fs.existsSync(scriptPath)) {
        // spawn node directly so we don't spawn an extra terminal on Windows
        dashboardChild = spawn(process.execPath, [scriptPath], {
          cwd: dashPath,
          detached: false,
          stdio: 'ignore',
          shell: false,
          windowsHide: true,
          env: Object.assign({}, process.env, { PORT: String(port), BROWSER: 'none' }),
        });
        dashboardPort = port;
        return { started: true, port };
      }
    } catch (e) {
      console.warn('Direct spawn failed, falling back to npm start', e && e.message);
    }

    // fallback to npm start (non-detached) so it terminates with this proxy
    dashboardChild = spawn('npm', ['start'], {
      cwd: dashPath,
      detached: false,
      stdio: 'inherit',
      shell: true,
      windowsHide: true,
      env: Object.assign({}, process.env, { PORT: String(port), BROWSER: 'none' }),
    });
    dashboardPort = port;
    return { started: true, port };
  } catch (err) {
    return { error: String(err) };
  }
}

function stopDashboard() {
  if (!dashboardChild) return { stopped: false, reason: 'not-running' };
  try {
    dashboardChild.kill();
    dashboardChild = null; dashboardPort = null;
    return { stopped: true };
  } catch (e) {
    return { stopped: false, error: String(e) };
  }
}

// Start CRA dev server (start:app)
const cra = spawn('npm', ['run', 'start:app'], { stdio: 'inherit', shell: true });

// Start small HTTP server for control commands
const server = http.createServer(async (req, res) => {
  // Basic CORS for dev convenience
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') { res.writeHead(204); res.end(); return; }

  if (req.method === 'POST' && req.url === '/start-dashboard') {
    const result = await ensureDashboardStarted();
    if (result.error) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: false, error: result.error }));
      return;
    }

    const port = result.port;
    // wait up to 10s for the dashboard port to accept connections
    const deadline = Date.now() + 10000;
    while (Date.now() < deadline) {
      if (await isPortOpen(port)) break;
      await new Promise((r) => setTimeout(r, 300));
    }

    const nowOpen = await isPortOpen(port);
    res.writeHead(nowOpen ? 200 : 500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ ok: nowOpen, port: port, started: result.started }));
    return;
  }

  res.writeHead(404); res.end('Not found');
});

// choose an available proxy port (prefer PROXY_PORT, otherwise fallback to OS-assigned port)
(async () => {
  function getAvailablePort(preferred) {
    return new Promise((resolve, reject) => {
      const tester = net.createServer();
      tester.once('error', (err) => {
        if (err && err.code === 'EADDRINUSE') {
          // preferred taken; ask OS for a free port
          const tester2 = net.createServer();
          tester2.listen(0, () => {
            const p = tester2.address().port;
            tester2.close(() => resolve(p));
          });
          tester2.once('error', (e) => reject(e));
        } else {
          reject(err);
        }
      });
      tester.listen(preferred, () => {
        const p = tester.address().port;
        tester.close(() => resolve(p));
      });
    });
  }

  let chosenPort;
  try {
    chosenPort = await getAvailablePort(PROXY_PORT);
  } catch (err) {
    console.error('Failed to find available proxy port:', err);
    chosenPort = 0; // let OS choose
  }

  server.listen(chosenPort, () => {
    const actual = server.address().port;
    console.log(`dev-proxy control server listening on http://localhost:${actual}`);
    console.log(`If you POST to /start-dashboard it will attempt to spawn the dashboard on a free port starting at ${DASHBOARD_PORT_START}`);
  });
})();

process.on('exit', () => { try { cra.kill(); server.close(); } catch (e) {} });
