// client/src/pages/Dashboard.jsx
import { useEffect, useState } from 'react';

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5230/api/task')
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Veri çekme hatası:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Task Dashboard</h1>

      {loading ? (
        <p className="text-center text-gray-500">Loading tasks...</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {tasks.map((task) => (
            <div key={task.id} className="bg-white rounded shadow p-4 border">
              <h2 className="text-xl font-semibold">{task.description}</h2>
              <p className="text-gray-600">Assigned to: {task.assignedTo}</p>
              <p className="text-gray-500 text-sm">Due: {new Date(task.dueDate).toLocaleDateString()}</p>
              <p className={`mt-2 font-medium ${task.isDone ? 'text-green-600' : 'text-red-600'}`}>
                {task.isDone ? 'Completed' : 'Pending'}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
