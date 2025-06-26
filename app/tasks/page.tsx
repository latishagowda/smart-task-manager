'use client';

import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/context/Authcontext';
import LogoutButton from '@/components/LogoutButton';
import TaskForm from './TaskForm';
import TaskList from './TaskList';


export default function TasksPage() {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading) return <p>Loading...</p>;
  if (!user) return null;

  const handleTaskCreated = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Smart Task Manager</h1>
      <p>Welcome, <strong>{user.email}</strong></p>
      
      <TaskForm onTaskCreated={handleTaskCreated} />
      <TaskList refreshTrigger={refreshTrigger} />
      <div style={{ marginTop: '2rem' }}>
        <LogoutButton />
      </div>
    </main>
  );
}
