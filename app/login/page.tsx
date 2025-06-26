'use client';

import React, { useContext } from 'react';
import AuthForm from '@/components/AuthForm';
import { useRouter } from 'next/navigation';
import { AuthContext } from '../../context/Authcontext';
import LogoutButton from '@/components/LogoutButton';

export default function LoginPage() {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  if (loading) return <p>Loading...</p>;

  if (user) {
    return (
      <main style={{ padding: '2rem' }}>
        <p>You are already logged in as <strong>{user.email}</strong>.</p>
        <p>To log in with a different account, please log out first.</p>
        <LogoutButton />
      </main>
    );
  }

  return (
    <main style={{ padding: '2rem' }}>
      <AuthForm type="login" />
      <p style={{ marginTop: '1rem' ,textAlign: 'center' }}>
        Don't have an account?{' '}
        <a href="/signup" style={{ color: 'blue', textDecoration: 'underline' }}>
          Sign up here
        </a>
      </p>
    </main>
  );
}
