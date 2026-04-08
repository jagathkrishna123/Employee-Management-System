import React from 'react';
import { Outlet } from 'react-router-dom';
import EmpSidebar from './EmpSidebar';

const EmployeeLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar - Fixed width */}
      <EmpSidebar />

      {/* Main Content Area */}
      <main className="flex-1 ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          {/* This renders the child routes (EmpDashboard, EmpLeave, etc.) */}
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default EmployeeLayout;