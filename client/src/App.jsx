import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/dashboard';

export default function App() {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-[#1e3c72] to-[#2a5298] text-white flex flex-col justify-between items-center font-sans px-4 py-10">
      <div className="text-center mt-10">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Welcome to TaskTracker</h1>
        <p className="text-lg opacity-80 max-w-xl mx-auto">
          Build your tasks. Track your progress. Automate your backend.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <a
          href="/swagger"
          className="bg-white text-[#2a5298] font-semibold py-2 px-6 rounded-lg hover:scale-105 hover:shadow-lg transition"
        >
          Go to Swagger UI →
        </a>
        <Link
          to="/dashboard"
          className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-800 transition"
        >
          CI/CD Dashboard
        </Link>
      </div>

      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}