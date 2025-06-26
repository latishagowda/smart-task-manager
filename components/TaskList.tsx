'use client';

import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '@/context/Authcontext';

export default function TaskList({ refreshTrigger }: { refreshTrigger: number }) {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    const fetchTasks = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tasks?email=${user.email}`);
        const data = await res.json();
        setTasks(data);
      } catch (err) {
        console.error('Error fetching tasks:', err);
      }
    };

    fetchTasks();
  }, [user, refreshTrigger]);

  if (!user) return null;

  return (
    <div>
      <h2>Your Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        <ul>
          {tasks.map((task: any) => (
            <li key={task._id}>
              <strong>{task.title}</strong>: {task.description || 'No description'} ({task.status})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
