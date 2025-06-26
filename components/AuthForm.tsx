'use client';

import React, { useState } from 'react';
import { auth, googleProvider } from '@/lib/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { useRouter } from 'next/navigation';
import './auth.css';

interface AuthFormProps {
  type: 'login' | 'signup';
}

export default function AuthForm({ type }: AuthFormProps) {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      if (type === 'login') {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      router.push('/tasks');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push('/tasks');
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setError('Enter your email to reset password.');
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      alert('Password reset email sent!');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>{type === 'login' ? 'Login' : 'Sign Up'}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="password-wrapper">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="toggle-password"
          >
            {showPassword ? 'Hide' : 'Show'}
          </span>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Processing...' : type === 'login' ? 'Login' : 'Sign Up'}
        </button>
      </form>

      {type === 'login' && (
        <>
          <button className="google-btn" onClick={handleGoogleLogin}>
            Sign in with Google
          </button>
          <p onClick={handleForgotPassword} className="forgot-password">
            Forgot Password?
          </p>
        </>
      )}

      {error && <p className="error">{error}</p>}
    </div>
  );
}
