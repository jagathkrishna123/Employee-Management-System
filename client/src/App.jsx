import React from "react";
import AdminLayout from "./Pages/Admin/AdminLayout";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import Attendence from "./Pages/Admin/Attendence";
import Leave from "./Pages/Admin/Leave";
import Payslips from "./Pages/Admin/Payslips";
import Settings from "./Pages/Admin/Settings";
import Employees from "./Pages/Admin/Employees";
import EmployeeLayout from "./Pages/Employee/EmployeeLayout";
import EmpDashboard from "./Pages/Employee/EmpDashboard";
import EmpAttendence from "./Pages/Employee/EmpAttendence";
import EmpLeave from "./Pages/Employee/EmpLeave";
import EmpPayslips from "./Pages/Employee/EmpPayslips";
import EmpSettings from "./Pages/Employee/EmpSettings";
import Hero from "./components/Hero";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="admin-employee" element={<Employees />} />
          <Route path="leave" element={<Leave />} />
          <Route path="payslips" element={<Payslips />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="/employee" element={<EmployeeLayout />}>
          <Route index element={<EmpDashboard />} />
          <Route path="emp-attendance" element={<EmpAttendence />} />
          <Route path="emp-leave" element={<EmpLeave />} />
          <Route path="emp-payslips" element={<EmpPayslips />} />
          <Route path="emp-settings" element={<EmpSettings />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
