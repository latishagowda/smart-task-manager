'use client';

import React, { useState, useContext } from 'react';
import { AuthContext } from '@/context/Authcontext';

export default function TaskForm({ onTaskCreated }: { onTaskCreated: () => void }) {
  const { user } = useContext(AuthContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  if (!user || !user.email) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tasks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          description,
          userEmail: user.email,
          dueDate,
        }),
      });

      const data = await res.json();
      console.log('API response:', data);

      if (!res.ok) throw new Error(data.error || 'Failed to add task');

      // Clear inputs
      setTitle('');
      setDescription('');
      setDueDate('');
      onTaskCreated(); // refresh task list
    } catch (err) {
      console.error('Error adding task:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
        required
        className="w-full px-2 py-1 border rounded"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="w-full px-2 py-1 border rounded"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="w-full px-2 py-1 border rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
      >
        Add Task
      </button>
    </form>
  );
}
