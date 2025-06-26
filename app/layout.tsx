// app/layout.tsx
import '../styles/globals.css'; // ✅ styles must be outside /app
import { ReactNode } from 'react';
import { AuthProvider } from '../context/Authcontext'; // ✅ relative path

export const metadata = {
  title: 'Smart Task Manager',
  description: 'Organize tasks smartly',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
