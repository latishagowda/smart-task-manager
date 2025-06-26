// components/LogoutButton.tsx
'use client';

import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.refresh(); // force Next.js to update auth state
  };

  return (
    <button
      style={{
        backgroundColor: 'crimson',
        color: 'white',
        border: 'none',
        padding: '0.5rem 1rem',
        marginTop: '1rem',
        cursor: 'pointer',
      }}
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}
