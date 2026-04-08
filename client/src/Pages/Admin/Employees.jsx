import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { Search, Plus } from 'lucide-react';
import EmployeeCard from '../../components/EmployeeCard';
import EmployeeModal from '../../components/EmployeeModal';

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All Departments');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add');
  const [currentEmployee, setCurrentEmployee] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_URL = 'http://localhost:5000/employees';

  const fetchEmployees = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_URL);
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleAddEmployee = async (data) => {
    try {
      if (modalMode === 'add') {
        await axios.post(API_URL, { ...data, id: Date.now().toString() });
      } else {
        await axios.put(`${API_URL}/${data.id}`, data);
      }
      fetchEmployees();
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error saving employee:', error);
    }
  };

  const handleDeleteEmployee = async (id) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        fetchEmployees();
      } catch (error) {
        console.error('Error deleting employee:', error);
      }
    }
  };

  const departments = [
    "All Departments", "Engineering", "Human Resources", "Marketing", "Sales",
    "Finance", "Operations", "IT Support", "Customer Success",
    "Product Management", "Design"
  ];

  const filteredEmployees = useMemo(() => {
    return employees.filter(emp => {
      const fullName = `${emp.firstName} ${emp.lastName}`.toLowerCase();
      const matchesSearch = fullName.includes(searchTerm.toLowerCase());
      const matchesDept = selectedDepartment === 'All Departments' || emp.department === selectedDepartment;
      return matchesSearch && matchesDept;
    });
  }, [employees, searchTerm, selectedDepartment]);

  return (
    <div className="p-8 bg-gray-50/50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-8">
        <div className="animate-in fade-in slide-in-from-left duration-700">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tightest">Employees</h1>
          <p className="text-gray-500 mt-2 font-semibold text-lg">Manage your team members and their career details</p>
        </div>
        <button
          onClick={() => { setModalMode('add'); setCurrentEmployee(null); setIsModalOpen(true); }}
          className="flex items-center justify-center gap-3 px-8 py-4 bg-indigo-600 text-white font-extrabold rounded-2xl hover:bg-indigo-700 shadow-2xl shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all active:scale-95 cursor-pointer animate-in fade-in slide-in-from-right duration-700"
        >
          <Plus size={24} strokeWidth={3} />
          <span className="text-lg">Add Employee</span>
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-6 mb-12 animate-in fade-in slide-in-from-bottom duration-700 delay-100">
        <div className="relative flex-grow group">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-500 transition-colors" size={22} />
          <input
            type="text"
            placeholder="Search employees by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-14 pr-6 py-4.5 bg-white border border-gray-200 rounded-2xl focus:ring-8 focus:ring-indigo-500/5 focus:border-indigo-500 transition-all outline-none text-gray-700 font-bold shadow-sm placeholder:text-gray-400"
          />
        </div>
        <div className="relative md:w-80 group">
          <select
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="w-full px-6 py-4.5 bg-white border border-gray-200 rounded-2xl focus:ring-8 focus:ring-indigo-500/5 focus:border-indigo-500 transition-all outline-none text-gray-700 font-extrabold appearance-none cursor-pointer shadow-sm"
          >
            {departments.map(dept => <option key={dept} value={dept}>{dept}</option>)}
          </select>
          <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 group-hover:text-indigo-500 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path></svg>
          </div>
        </div>
      </div>

      {/* Grid */}
      {loading ? (
        <div className="flex flex-col items-center justify-center h-96 space-y-4">
          <div className="w-16 h-16 border-4 border-indigo-100 border-t-indigo-600 rounded-full animate-spin"></div>
          <p className="text-gray-500 font-bold animate-pulse text-xl">Loading your team...</p>
        </div>
      ) : filteredEmployees.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 animate-in fade-in zoom-in-95 duration-700 delay-200">
          {filteredEmployees.map(employee => (
            <EmployeeCard
              key={employee.id}
              employee={employee}
              onEdit={(emp) => { setModalMode('edit'); setCurrentEmployee(emp); setIsModalOpen(true); }}
              onDelete={handleDeleteEmployee}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-32 bg-white rounded-[2.5rem] border-4 border-dashed border-gray-100 shadow-inner animate-in fade-in zoom-in-95 duration-500">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-50 rounded-full mb-6">
            <Search size={40} className="text-gray-300" />
          </div>
          <h2 className="text-2xl font-black text-gray-900 mb-2">No matching employees</h2>
          <p className="text-gray-400 font-bold text-lg max-w-sm mx-auto">We couldn't find any team members matching your current filters.</p>
          <button
            onClick={() => { setSearchTerm(''); setSelectedDepartment('All Departments'); }}
            className="mt-8 text-indigo-600 font-black hover:text-indigo-700 transition-colors underline decoration-2 underline-offset-8"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* Modal */}
      <EmployeeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddEmployee}
        employee={currentEmployee}
        mode={modalMode}
      />
    </div>
  );
};

export default Employees;