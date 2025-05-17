import type { ReactNode } from 'react';
import Sidebar from './Sidebar.tsx';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-8">
        <main className="bg-white rounded-lg shadow p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
