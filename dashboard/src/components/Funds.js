import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Funds.css";
import { useBalance } from "./BalanceContext";

const formatRupee = (n) => `₹${Number(n).toFixed(2)}`;

const Funds = () => {
  const { balance, addFunds, withdrawFunds } = useBalance();
  const [addOpen, setAddOpen] = useState(false);
  const [withdrawOpen, setWithdrawOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("UPI");
  const [note, setNote] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [successData, setSuccessData] = useState({});

  const openAdd = () => {
    setAmount("");
    setMethod("UPI");
    setNote("");
    setAddOpen(true);
  };

  const openWithdraw = () => {
    setAmount("");
    setNote("");
    setWithdrawOpen(true);
  };

  const closeAll = () => {
    setAddOpen(false);
    setWithdrawOpen(false);
    setShowSuccess(false);
  };

  const confirmAdd = () => {
    const n = Number(amount);
    if (!n || n <= 0) {
      setNote("Enter a valid amount");
      return;
    }
    // simulate UPI optimized flow: accept and add immediately
    addFunds(n);
    setSuccessData({ type: "add", amount: n, method });
    setShowSuccess(true);
    // clear input after a short delay and close
    setTimeout(() => closeAll(), 1500);
  };

  const confirmWithdraw = () => {
    const n = Number(amount);
    if (!n || n <= 0) {
      setNote("Enter a valid amount");
      return;
    }
    if (n > balance) {
      setNote("Insufficient balance");
      return;
    }
    const ok = withdrawFunds(n);
    if (!ok) {
      setNote("Could not withdraw");
      return;
    }
    setSuccessData({ type: "withdraw", amount: n });
    setShowSuccess(true);
    setTimeout(() => closeAll(), 1500);
  };

  return (
    <>
      <div className="funds fancy">
        <div className="funds-left">
          <div className="funds-title">Wallet</div>
          <div className="funds-sub">Instant transfers, safe & quick</div>
        </div>
        <div className="funds-actions">
          <button className="btn btn-gradient" onClick={openAdd}>
            <span className="icon">＋</span>
            Add funds
          </button>
          <button className="btn btn-outline" onClick={openWithdraw}>
            <span className="icon">⇩</span>
            Withdraw
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="table">
            <div className="data">
              <p>Available margin</p>
              <p className="imp colored">{formatRupee(balance)}</p>
            </div>
            <div className="data">
              <p>Used margin</p>
              <p className="imp">0.00</p>
            </div>
            <div className="data">
              <p>Available cash</p>
              <p className="imp">{formatRupee(balance)}</p>
            </div>
            <hr />
            <div className="data">
              <p>Opening Balance</p>
              <p>{formatRupee(balance)}</p>
            </div>
            <div className="data">
              <p>Previous balance</p>
              <p>0.00</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="commodity">
            <p>You don't have a commodity account</p>
            <Link className="btn btn-blue">Open Account</Link>
          </div>
        </div>
      </div>

      {/* Add Funds Modal */}
      {addOpen && (
        <div className="zc-modal">
          <div className="zc-card zc-add">
            <div className="zc-card-header">
              <div className="zc-icon">💸</div>
              <div>
                <h3>Add funds</h3>
                <div className="zc-sub">Fast & secure UPI transfer</div>
              </div>
              <button className="zc-close" onClick={() => setAddOpen(false)} aria-label="Close">
                ×
              </button>
            </div>

            <div className="zc-card-body">
              <label className="zc-label">Amount</label>
              <input
                className="zc-input"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount in ₹"
                min="0"
              />

              <label className="zc-label">Payment method</label>
              <div className="zc-methods">
                {["UPI", "Debit Card", "Credit Card"].map((m) => (
                  <button
                    key={m}
                    className={`zc-method ${method === m ? "active" : ""}`}
                    onClick={() => setMethod(m)}
                  >
                    {m}
                  </button>
                ))}
              </div>

              {method === "UPI" && (
                <div className="zc-upi">
                  <div className="zc-qr">QR</div>
                  <div className="zc-upi-right">
                    <div className="zc-upi-tip">Pay using your UPI app or enter UPI ID</div>
                    <input
                      className="zc-input small"
                      placeholder="example@upi"
                    />
                  </div>
                </div>
              )}

              <div className="zc-actions">
                <button className="btn btn-muted" onClick={() => setAddOpen(false)}>
                  Cancel
                </button>
                <button className="btn btn-gradient" onClick={confirmAdd}>
                  Confirm
                </button>
              </div>

              {note && <div className="zc-note error">{note}</div>}
            </div>
          </div>
        </div>
      )}

      {/* Withdraw Modal */}
      {withdrawOpen && (
        <div className="zc-modal">
          <div className="zc-card zc-withdraw">
            <div className="zc-card-header">
              <div className="zc-icon">🏧</div>
              <div>
                <h3>Withdraw</h3>
                <div className="zc-sub">Amount will be transferred to your bank account</div>
              </div>
              <button className="zc-close" onClick={() => setWithdrawOpen(false)} aria-label="Close">
                ×
              </button>
            </div>

            <div className="zc-card-body">
              <label className="zc-label">Amount</label>
              <input
                className="zc-input"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount in ₹"
                min="0"
              />

              <div className="zc-actions">
                <button className="btn btn-muted" onClick={() => setWithdrawOpen(false)}>
                  Cancel
                </button>
                <button className="btn btn-outline" onClick={confirmWithdraw}>
                  Withdraw
                </button>
              </div>

              {note && <div className="zc-note error">{note}</div>}
            </div>
          </div>
        </div>
      )}

      {/* Success Toast inside modal */}
      {showSuccess && (
        <div className="zc-modal">
          <div className="zc-success">
            <div className="check">✓</div>
            <div className="txt">
              {successData.type === "add"
                ? `Added ${formatRupee(successData.amount)} via ${successData.method}`
                : `Withdrawn ${formatRupee(successData.amount)} to bank`}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Funds;
