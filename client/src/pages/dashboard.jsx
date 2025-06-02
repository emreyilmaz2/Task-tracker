// client/src/pages/Dashboard.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

export default function Dashboard() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Örnek görev 1" },
    { id: 2, text: "Örnek görev 2" },
  ]);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  function addTask(e) {
    e.preventDefault();
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input }]);
    setInput("");
  }

  function removeTask(id) {
    setTasks(tasks.filter(t => t.id !== id));
  }

  const handleLogout = () => {
    // Gerçek bir uygulamada burada kullanıcı token/session temizlenir
    // localStorage.removeItem('userToken');
    navigate("/login");
  };

  return (
    <div className="dashboard-bg">
      <div className="w-full max-w-3xl flex justify-end px-4">
         <button
          onClick={handleLogout}
          className="dashboard-logout-btn mt-4 mb-4"
        >
          Logout
        </button>
      </div>
      <div className="dashboard-card">
        <h1 className="dashboard-title">Welcome to your Dashboard</h1>
        <p className="dashboard-desc">Manage your tasks efficiently and boost your productivity!</p>
        <form onSubmit={addTask} className="dashboard-form">
          <input
            className="dashboard-input"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Yeni görev ekle..."
            maxLength={60}
          />
          <button className="dashboard-btn" type="submit">
            Ekle
          </button>
        </form>
        <ul className="dashboard-list">
          {tasks.length === 0 && (
            <li className="text-center text-gray-400 italic">Henüz görev yok. Hemen bir tane ekleyin!</li>
          )}
          {tasks.map(task => (
            <li key={task.id} className="dashboard-task">
              <span className="dashboard-task-text">{task.text}</span>
              <button onClick={() => removeTask(task.id)} className="dashboard-task-remove">Sil</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
