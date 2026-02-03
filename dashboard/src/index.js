import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import { BalanceProvider } from "./components/BalanceContext";
import { UserProvider } from "./components/UserContext";
// login UI removed - index restored to original state

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <BalanceProvider>
          <Routes>
            <Route path="/*" element={<Home />} />
          </Routes>
        </BalanceProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
