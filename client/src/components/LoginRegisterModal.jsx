import React, { useState } from "react";
import "../styles/LoginRegisterModal.css";

export default function LoginRegisterModal({ open, onClose }) {
  const [tab, setTab] = useState("login");
  if (!open) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <button className="modal-close" onClick={onClose}>&times;</button>
        <div className="modal-tabs">
          <button className={tab === "login" ? "active" : ""} onClick={() => setTab("login")}>Login</button>
          <button className={tab === "register" ? "active" : ""} onClick={() => setTab("register")}>Register</button>
        </div>
        {tab === "login" ? (
          <form className="modal-form">
            <h2 className="modal-title">Welcome Back</h2>
            <input className="modal-input" type="email" placeholder="Email" required />
            <input className="modal-input" type="password" placeholder="Password" required />
            <button className="modal-btn" type="submit">Login</button>
          </form>
        ) : (
          <form className="modal-form">
            <h2 className="modal-title">Create Account</h2>
            <input className="modal-input" type="text" placeholder="Full Name" required />
            <input className="modal-input" type="email" placeholder="Email" required />
            <input className="modal-input" type="password" placeholder="Password" required />
            <button className="modal-btn" type="submit">Register</button>
          </form>
        )}
      </div>
    </div>
  );
} 