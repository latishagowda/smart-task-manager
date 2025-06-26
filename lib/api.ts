const BASE_URL = "http://localhost:5000/api"; // Later replace with deployed backend URL

export const fetchTasks = async (userId: string) => {
  const res = await fetch(`${BASE_URL}/tasks/${userId}`);
  return res.json();
};

export const createTask = async (taskData: any) => {
  const res = await fetch(`${BASE_URL}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(taskData),
  });
  return res.json();
};

export const updateTask = async (taskId: string, updates: any) => {
  const res = await fetch(`${BASE_URL}/tasks/${taskId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  });
  return res.json();
};

export const deleteTask = async (taskId: string) => {
  const res = await fetch(`${BASE_URL}/tasks/${taskId}`, {
    method: "DELETE",
  });
  return res.json();
};
