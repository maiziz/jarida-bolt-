import { ReactNode } from 'react';

interface PageWrapperProps {
  children: ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {children}
    </main>
  );
}