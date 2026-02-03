import React, { createContext, useContext, useEffect, useState } from 'react';

const BalanceContext = createContext({
  balance: 0,
  addFunds: (amt) => {},
  withdrawFunds: (amt) => {},
  setBalance: (amt) => {},
});

export const BalanceProvider = ({ children }) => {
  const [balance, setBalanceState] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem('zc_balance');
    if (stored) {
      const n = Number(stored);
      if (!Number.isNaN(n)) setBalanceState(n);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('zc_balance', String(balance));
  }, [balance]);

  const addFunds = (amt) => {
    const n = Number(amt) || 0;
    if (n <= 0) return;
    setBalanceState((prev) => {
      const next = prev + n;
      return next;
    });
  };

  const withdrawFunds = (amt) => {
    const n = Number(amt) || 0;
    if (n <= 0) return false;
    let success = false;
    setBalanceState((prev) => {
      const next = prev - n;
      if (next < 0) {
        success = false;
        return prev;
      }
      success = true;
      return next;
    });
    return success;
  };

  const setBalance = (amt) => {
    setBalanceState(Number(amt) || 0);
  };

  return (
    <BalanceContext.Provider value={{ balance, addFunds, withdrawFunds, setBalance }}>
      {children}
    </BalanceContext.Provider>
  );
};

export const useBalance = () => useContext(BalanceContext);

export default BalanceContext;
