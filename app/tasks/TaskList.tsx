'use client';

import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '@/context/Authcontext';

interface Task {
  _id: string;
  title: string;
  description?: string;
  completed: boolean;
  dueDate?: string; 
  createdAt?: string;
}

export default function TaskList({ refreshTrigger }: { refreshTrigger: number }) {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    if (!user?.email) return;

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tasks?email=${user.email}`);
      const data = await res.json();
      setTasks(data);
    } catch (err) {
      console.error('Error fetching tasks:', err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [user, refreshTrigger]);

  const toggleStatus = async (taskId: string, completed: boolean) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tasks/${taskId}/status`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed }),
      });

      const updated = await res.json();
      setTasks((prev) =>
        prev.map((task) =>
          task._id === taskId ? { ...task, completed: updated.completed } : task
        )
      );
    } catch (err) {
      console.error('Error updating task status:', err);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tasks/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setTasks((prev) => prev.filter((task) => task._id !== id));
      }
    } catch (err) {
      console.error('Failed to delete task:', err);
    }
  };

  return (
    <div>
      {tasks.map((task) => (
        <div
  key={task._id}
  style={{
    marginBottom: '0.75rem',
    padding: '0.75rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '0.5rem'
  }}
>
  <div style={{ flex: 1, minWidth: '200px' }}>
    <label>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={(e) => toggleStatus(task._id, e.target.checked)}
        style={{ marginRight: '0.5rem' }}
      />
      <strong>{task.title}</strong> - {task.description || 'No description'}
    </label>

    {/* Due Date */}
    {task.dueDate && (
      <div style={{ fontSize: '0.85rem', color: '#666', marginTop: '0.25rem' }}>
        📅 Due: {new Date(task.dueDate).toLocaleDateString()}
      </div>
    )}

    {/* Created Date */}
    {task.createdAt && (
      <div style={{ fontSize: '0.75rem', color: '#999', marginTop: '0.25rem' }}>
        🗓️ Created: {new Date(task.createdAt).toLocaleString()}
      </div>
    )}
  </div>

  {/* Delete Button */}
  <button
    onClick={() => handleDelete(task._id)}
    style={{
      background: '#e74c3c',
      color: 'white',
      border: 'none',
      padding: '0.4rem 0.75rem',
      borderRadius: '4px',
      cursor: 'pointer',
      alignSelf: 'start'
    }}
  >
    🗑️ Delete
  </button>
</div>

      ))}
    </div>
  );
}
