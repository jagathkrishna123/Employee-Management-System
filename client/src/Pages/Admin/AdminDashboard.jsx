import React from "react";
import { Users, Building2, CalendarDays, FileText } from "lucide-react";

const AdminDashboard = () => {
  // ✅ Dummy data
  const totalEmployees = 5;
  const departments = 10;
  const todayAttendance = 0;
  const pendingLeaves = 0;

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      
      {/* Header */}
      <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
      <p className="text-gray-500 mt-1">
        Welcome back, Admin — here's your overview
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">Total Employees</p>
            <h2 className="text-2xl font-semibold mt-2">{totalEmployees}</h2>
          </div>
          <div className="bg-gray-100 p-3 rounded-lg">
            <Users className="w-5 h-5 text-gray-600" />
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">Departments</p>
            <h2 className="text-2xl font-semibold mt-2">{departments}</h2>
          </div>
          <div className="bg-gray-100 p-3 rounded-lg">
            <Building2 className="w-5 h-5 text-gray-600" />
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">Today's Attendance</p>
            <h2 className="text-2xl font-semibold mt-2">{todayAttendance}</h2>
          </div>
          <div className="bg-gray-100 p-3 rounded-lg">
            <CalendarDays className="w-5 h-5 text-gray-600" />
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">Pending Leaves</p>
            <h2 className="text-2xl font-semibold mt-2">{pendingLeaves}</h2>
          </div>
          <div className="bg-gray-100 p-3 rounded-lg">
            <FileText className="w-5 h-5 text-gray-600" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;