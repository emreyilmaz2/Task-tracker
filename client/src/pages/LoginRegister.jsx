import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginRegisterModal.css";
import { registerUser, loginUser } from "../api";

export default function LoginRegister() {
  const [tab, setTab] = useState("login");
  const [registerError, setRegisterError] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState("");
  const [shakeForm, setShakeForm] = useState(false);
  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();
    setRegisterError("");
    setRegisterSuccess("");
    const form = e.target;
    const fullName = form.fullName.value;
    const email = form.email.value;
    const password = form.password.value;
    try {
      await registerUser({ fullName, email, password });
      setRegisterSuccess("Registration successful! You can now log in.");
      form.reset();
    } catch (err) {
      setRegisterError(err.message);
    }
  }

  async function handleLogin(e) {
    e.preventDefault();
    setLoginError("");
    setLoginSuccess("");
    setShakeForm(false);
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      await loginUser({ email, password });
      setLoginSuccess("Login successful! Redirecting...");
      setTimeout(() => navigate("/dashboard"), 1000);
    } catch (err) {
      setLoginError(err.message);
      setShakeForm(true);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-gray-100">
      <div className={"modal-card " + (shakeForm ? "shake" : "")} style={{boxShadow: '0 8px 40px 0 rgba(30,41,59,0.13)'}}>
        <div className="login-header" style={{width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '2.5rem'}}>
          <span className="login-logo-title" style={{fontSize: '2.2rem', fontWeight: 900, color: '#1e293b', letterSpacing: '-1px', fontFamily: 'Inter, Segoe UI, Arial, sans-serif'}}>Stack Work Management</span>
        </div>
        <div className="modal-tabs" style={{marginTop: '0.5rem'}}>
          <button className={tab === "login" ? "active" : ""} onClick={() => setTab("login")}>Login</button>
          <button className={tab === "register" ? "active" : ""} onClick={() => setTab("register")}>Register</button>
        </div>
        {tab === "login" ? (
          <form className="modal-form" onSubmit={handleLogin}>
            <h2 className="modal-title">Welcome Back</h2>
            <input className="modal-input" name="email" type="email" placeholder="Email" required />
            <input className="modal-input" name="password" type="password" placeholder="Password" required />
            <button className="modal-btn" type="submit">Login</button>
            {loginError && <div style={{color: "red", marginTop: 8}}>{loginError}</div>}
            {loginSuccess && <div style={{color: "green", marginTop: 8}}>{loginSuccess}</div>}
          </form>
        ) : (
          <form className="modal-form" onSubmit={handleRegister}>
            <h2 className="modal-title">Create Account</h2>
            <input className="modal-input" name="fullName" type="text" placeholder="Full Name" required />
            <input className="modal-input" name="email" type="email" placeholder="Email" required />
            <input className="modal-input" name="password" type="password" placeholder="Password" required />
            <button className="modal-btn" type="submit">Register</button>
            {registerError && <div style={{color: "red", marginTop: 8}}>{registerError}</div>}
            {registerSuccess && <div style={{color: "green", marginTop: 8}}>{registerSuccess}</div>}
          </form>
        )}
      </div>
    </div>
  );
} 