//const API_URL = "http://localhost:5230/api";
const API_URL = `${import.meta.env.VITE_API_URL}/api`;
console.log("🔍 API_URL used in build:", API_URL);

export async function registerUser({ fullName, email, password }) {
  const response = await fetch(`${API_URL}/user/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ fullName, email, password }),
  });
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }
  return response.json();
}

export async function loginUser({ email, password }) {
  const response = await fetch("http://localhost:5230/api/user/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }
  return response.json();
}