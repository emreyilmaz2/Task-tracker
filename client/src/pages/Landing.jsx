import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.avif";
import "../styles/MainButton.css";
import "../styles/FeatureCard.css";

const features = [
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="#7B3AED" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="6" width="16" height="12" rx="3"/><path d="M8 6V4h8v2"/></svg>
    ),
    title: "Task management",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="#7B3AED" strokeWidth="2" viewBox="0 0 24 24"><rect x="6" y="10" width="12" height="8" rx="2"/><path d="M9 10V7a3 3 0 0 1 6 0v3"/></svg>
    ),
    title: "Project management",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="#7B3AED" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
    ),
    title: "Time tracking",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="#7B3AED" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9.5 12.5l2 2 3-3"/></svg>
    ),
    title: "Goals & strategy",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="#7B3AED" strokeWidth="2" viewBox="0 0 24 24"><circle cx="8.5" cy="10.5" r="3.5"/><circle cx="15.5" cy="10.5" r="3.5"/><path d="M4 19v-1a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4v1"/><path d="M12 19v-1a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4v1"/></svg>
    ),
    title: "Client projects",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="#7B3AED" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 4v16"/><path d="M16 4v16"/></svg>
    ),
    title: "Business operations",
  },
];

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      {/* NAVIGATION BAR */}
      <nav className="sticky top-0 z-30 flex items-center justify-between px-10 py-4 bg-white/90 shadow-xl backdrop-blur-md">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-12 w-auto max-w-[48px] object-contain drop-shadow-md" />
          <span className="text-4xl font-black text-gray-900 tracking-tight drop-shadow-sm">Stack Work Management</span>
        </div>
        <div>
          <button className="main-btn nav px-4 py-1.5 text-base" style={{minWidth: 'auto', minHeight: 'auto', fontWeight: 700}} onClick={() => navigate("/login")}>Get Started</button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <main className="flex flex-1 flex-col items-center justify-start px-6 pt-36 pb-8">
        <h1 className="text-[4.5rem] md:text-[5.5rem] font-black text-gray-900 mb-10 text-center leading-[1.08] tracking-tight" style={{letterSpacing: '-1px'}}>
          Work smarter with the #1 task <br />
          <span> management platform</span>
        </h1>
        <p className="text-4xl md:text-[2.7rem] text-gray-600 mb-14 text-center font-extrabold max-w-2xl" style={{fontWeight: 800}}>
          Plan, manage and track all your team's tasks in one flexible platform.
        </p>
        <button className="main-btn hero" style={{boxShadow: '0 8px 32px 0 rgba(123,58,237,0.13), 0 2px 8px 0 rgba(0,0,0,0.10)'}} onClick={() => navigate("/login")}>Get Started →</button>

        {/* Features */}
        <div className="mt-32 w-full">
          <div className="feature-card-grid">
            {features.map((f, i) => (
              <div key={i} className="feature-card">
                <span className="text-2xl flex items-center justify-center">{f.icon}</span>
                <span>{f.title}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
