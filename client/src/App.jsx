import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import LoginRegister from "./pages/LoginRegister";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<LoginRegister />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;