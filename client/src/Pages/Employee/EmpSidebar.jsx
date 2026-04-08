import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  CalendarCheck, 
  FileText, 
  CircleDollarSign, 
  Settings, 
  LogOut 
} from 'lucide-react'; // Using lucide-react for icons as seen in your UI

const EmpSidebar = () => {
  const menuItems = [
    { name: 'Dashboard', path: '/employee', icon: <LayoutDashboard size={20} /> },
    { name: 'Attendance', path: '/employee/emp-attendance', icon: <CalendarCheck size={20} /> },
    { name: 'Leave', path: '/employee/emp-leave', icon: <FileText size={20} /> },
    { name: 'Payslips', path: '/employee/emp-payslips', icon: <CircleDollarSign size={20} /> },
    { name: 'Settings', path: '/employee/emp-settings', icon: <Settings size={20} /> },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-[#0a0f1e] text-white flex flex-col border-r border-gray-800">
      {/* Brand Logo */}
      <div className="p-6">
        <h1 className="text-xl font-bold tracking-tight">Employee MS</h1>
        <p className="text-xs text-gray-400">Management System</p>
      </div>

      {/* User Profile Card */}
      <div className="mx-4 mb-8 p-4 bg-[#161d31] rounded-xl flex items-center gap-3">
        <div className="h-10 w-10 rounded-lg bg-blue-600 flex items-center justify-center font-bold">
          D
        </div>
        <div>
          <h2 className="text-sm font-semibold">David Musk</h2>
          <p className="text-[10px] text-gray-400 uppercase tracking-wider">Employee</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-1">
        <p className="text-[10px] font-bold text-gray-500 uppercase px-2 mb-4 tracking-widest">
          Navigation
        </p>
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.path === '/employee'}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-400 hover:bg-[#161d31] hover:text-white'
              }`
            }
          >
            {item.icon}
            <span className="text-sm font-medium">{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-gray-800">
        <button className="flex items-center gap-3 px-4 py-3 w-full text-gray-400 hover:text-red-400 transition-colors">
          <LogOut size={20} />
          <span className="text-sm font-medium">Log out</span>
        </button>
      </div>
    </div>
  );
};

export default EmpSidebar;