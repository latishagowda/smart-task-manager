'use client';

import React, { useContext, useEffect } from 'react';
import AuthForm from '@/components/AuthForm';
import { useRouter } from 'next/navigation';
import { AuthContext } from '../../context/Authcontext';
import LogoutButton from '@/components/LogoutButton';

export default function SignupPage() {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  if (loading) return <p>Loading...</p>;

  if (user) {
    return (
      <main style={{ padding: '2rem' }}>
        <p>You are already logged in as <strong>{user.email}</strong>.</p>
        <p>To create a new account, please log out first.</p>
        <LogoutButton />
      </main>
    );
  }

  return (
    <main style={{ padding: '2rem' }}>
      <AuthForm type="signup" />
    </main>
  );
}
