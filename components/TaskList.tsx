'use client';

import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '@/context/Authcontext';
import TaskCard from './TaskCard';

// Define Task type
export interface Task {
  _id: string;
  title: string;
  description?: string;
  status: 'pending' | 'completed';
  email: string;
}

interface TaskListProps {
  refreshTrigger: number; // increment this when a new task is added
}

const TaskList: React.FC<TaskListProps> = ({ refreshTrigger }) => {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    if (!user?.email) return;

    const fetchTasks = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tasks?email=${user.email}`);
        if (!res.ok) throw new Error('Failed to fetch tasks');
        const data: Task[] = await res.json();
        setTasks(data);
      } catch (err) {
        console.error('Error fetching tasks:', err);
      }
    };

    fetchTasks();
  }, [user, refreshTrigger]);

  if (!user) return null;

  // Handlers for TaskCard actions
  const handleToggle = async (taskId: string) => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tasks/${taskId}/toggle`, {
        method: 'PATCH',
      });
      setTasks(prev =>
        prev.map(task =>
          task._id === taskId
            ? { ...task, status: task.status === 'completed' ? 'pending' : 'completed' }
            : task
        )
      );
    } catch (err) {
      console.error('Error toggling task status:', err);
    }
  };

  const handleDelete = async (taskId: string) => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tasks/${taskId}`, {
        method: 'DELETE',
      });
      setTasks(prev => prev.filter(task => task._id !== taskId));
    } catch (err) {
      console.error('Error deleting task:', err);
    }
  };

  return (
    <div>
      <h2>Your Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        <div className="task-list">
          {tasks.map(task => (
            <TaskCard
              key={task._id}
              task={task}
              onToggle={() => handleToggle(task._id)}
              onDelete={() => handleDelete(task._id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;
