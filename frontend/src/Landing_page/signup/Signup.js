import React, { useState } from 'react';
import './Signup.css';

// Change this to the dashboard URL where your dashboard app is served.
// Default below points to the dashboard dev server that typically runs on port 3002 in your setup.
// If you serve the dashboard at a different host/port/path, update this value.
const DASHBOARD_URL = 'http://localhost:3002/';
// dev-proxy control server used to spawn the dashboard when needed
const DEV_PROXY = 'http://localhost:4000/start-dashboard';
// Backend API base URL
const API_BASE_URL = 'http://localhost:3003/api/auth';

function Signup() {
    const [mode, setMode] = useState('signup'); // 'signup' | 'login'
    const [form, setForm] = useState({ name: '', email: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const onChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // basic validation
        if (mode === 'signup' && !form.name.trim()) {
            setError('Please enter your full name');
            return;
        }
        if (!validateEmail(form.email)) {
            setError('Please enter a valid email');
            return;
        }
        if (form.password.length < 4) {
            setError('Password should be at least 4 characters');
            return;
        }

        setLoading(true);

        try {
            // Call the appropriate authentication endpoint
            const endpoint = mode === 'signup' ? '/signup' : '/login';
            // Prepare request body
            const requestBody = {
                email: form.email,
                password: form.password
            };
            if (mode === 'signup') {
                requestBody.name = form.name;
            }

            const response = await fetch(`${API_BASE_URL}${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include', // Include cookies in request
                body: JSON.stringify(requestBody)
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.error || 'An error occurred. Please try again.');
                setLoading(false);
                return;
            }

            // Authentication successful - JWT token is stored in httpOnly cookie
            // Now attempt to start dashboard automatically via the dev-proxy control endpoint
            try {
                const resp = await fetch(DEV_PROXY, { method: 'POST' });
                if (resp.ok) {
                    const dashboardData = await resp.json();
                    const port = dashboardData.port;
                    if (port) {
                        window.location.href = `http://localhost:${port}/`;
                        return;
                    }
                }
                // fallback to configured URL if proxy didn't return a port
                window.location.href = DASHBOARD_URL;
            } catch (err) {
                // if the control endpoint isn't available, still attempt redirect
                window.location.href = DASHBOARD_URL;
            }
        } catch (err) {
            console.error('Authentication error:', err);
            setError('Network error. Please check your connection and try again.');
            setLoading(false);
        }
    };

    return (
        <div className="zc-auth-page">
            <div className="zc-auth-card">
                <div className="zc-brand">
                    <div className="zc-logo">S</div>
                    <div className="zc-title">Stoxly</div>
                </div>

                <div className="zc-switch">
                    <button
                        className={mode === 'signup' ? 'active' : ''}
                        onClick={() => { setMode('signup'); setError(''); }}
                    >
                        Create account
                    </button>
                    <button
                        className={mode === 'login' ? 'active' : ''}
                        onClick={() => { setMode('login'); setError(''); }}
                    >
                        Sign in
                    </button>
                </div>

                <form className="zc-form" onSubmit={handleSubmit}>
                    {mode === 'signup' && (
                        <label className="zc-field">
                            <span className="zc-label">Full name</span>
                            <input name="name" value={form.name} onChange={onChange} placeholder="Jane Doe" />
                        </label>
                    )}

                    <label className="zc-field">
                        <span className="zc-label">Email</span>
                        <input name="email" value={form.email} onChange={onChange} placeholder="you@example.com" />
                    </label>

                    <label className="zc-field">
                        <span className="zc-label">Password</span>
                        <input name="password" type="password" value={form.password} onChange={onChange} placeholder="Choose a password" />
                    </label>

                    {error && <div className="zc-error">{error}</div>}

                    <button className="zc-submit" type="submit" disabled={loading}>
                        {loading ? 'Please wait…' : mode === 'signup' ? 'Create account' : 'Sign in'}
                    </button>
                </form>

                <div className="zc-footnote">
                    By continuing you agree to the terms of service.
                </div>
            </div>
        </div>
    );
}

export default Signup;