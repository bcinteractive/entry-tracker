import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function AppShell({ children }: Props) {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans p-4">
      {children}
    </div>
  );
}
