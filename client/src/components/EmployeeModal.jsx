import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const EmployeeModal = ({ isOpen, onClose, onSubmit, employee, mode }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        joinDate: '',
        bio: '',
        department: '',
        position: '',
        basicSalary: '',
        allowances: '',
        deductions: '',
        workEmail: '',
        systemRole: 'Employee',
        temporaryPassword: ''
    });

    useEffect(() => {
        if (employee && mode === 'edit') {
            setFormData(employee);
        } else {
            setFormData({
                firstName: '',
                lastName: '',
                phoneNumber: '',
                joinDate: '',
                bio: '',
                department: '',
                position: '',
                basicSalary: '',
                allowances: '',
                deductions: '',
                workEmail: '',
                systemRole: 'Employee',
                temporaryPassword: ''
            });
        }
    }, [employee, mode, isOpen]);

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    const departments = [
        "Engineering", "Human Resources", "Marketing", "Sales",
        "Finance", "Operations", "IT Support", "Customer Success",
        "Product Management", "Design"
    ];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm overflow-y-auto">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl relative max-h-[95vh] overflow-y-auto my-auto ring-1 ring-black/5">
                {/* Header */}
                <div className="sticky top-0 bg-white px-8 py-6 border-b border-gray-100 flex items-center justify-between z-10 rounded-t-2xl">
                    <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
                        {mode === 'edit' ? 'Edit Employee' : 'Add New Employee'}
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-2.5 hover:bg-gray-50 rounded-xl transition-all text-gray-400 hover:text-gray-600 border border-transparent hover:border-gray-200"
                    >
                        <X size={22} strokeWidth={2.5} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-10 space-y-12">
                    {/* Personal Information */}
                    <section>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center">
                                <div className="w-1.5 h-4 bg-indigo-600 rounded-full"></div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 tracking-tight">Personal Information</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2.5 ml-1">First Name</label>
                                <input
                                    type="text" name="firstName" value={formData.firstName} onChange={handleChange} required
                                    placeholder="e.g. John"
                                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all outline-none text-gray-700 placeholder:text-gray-400 font-medium"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2.5 ml-1">Last Name</label>
                                <input
                                    type="text" name="lastName" value={formData.lastName} onChange={handleChange} required
                                    placeholder="e.g. Doe"
                                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all outline-none text-gray-700 placeholder:text-gray-400 font-medium"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2.5 ml-1">Phone Number</label>
                                <input
                                    type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required
                                    placeholder="e.g. +1 (555) 000-0000"
                                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all outline-none text-gray-700 placeholder:text-gray-400 font-medium"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2.5 ml-1">Join Date</label>
                                <input
                                    type="date" name="joinDate" value={formData.joinDate} onChange={handleChange} required
                                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all outline-none text-gray-700 font-medium"
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-bold text-gray-700 mb-2.5 ml-1">Bio (Optional)</label>
                                <textarea
                                    name="bio" value={formData.bio} onChange={handleChange} rows="4"
                                    placeholder="Write a brief description about the employee..."
                                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all outline-none text-gray-700 placeholder:text-gray-400 font-medium resize-none"
                                ></textarea>
                            </div>
                        </div>
                    </section>

                    {/* Employment Details */}
                    <section>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center">
                                <div className="w-1.5 h-4 bg-emerald-600 rounded-full"></div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 tracking-tight">Employment Details</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2.5 ml-1">Department</label>
                                <select
                                    name="department" value={formData.department} onChange={handleChange} required
                                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all outline-none text-gray-700 appearance-none cursor-pointer font-medium"
                                >
                                    <option value="">Select Department</option>
                                    {departments.map(dept => <option key={dept} value={dept}>{dept}</option>)}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2.5 ml-1">Position</label>
                                <input
                                    type="text" name="position" value={formData.position} onChange={handleChange} required
                                    placeholder="e.g. Software Developer"
                                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all outline-none text-gray-700 placeholder:text-gray-400 font-medium"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2.5 ml-1">Basic Salary</label>
                                <input
                                    type="number" name="basicSalary" value={formData.basicSalary} onChange={handleChange} required
                                    placeholder="0.00"
                                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all outline-none text-gray-700 placeholder:text-gray-400 font-medium"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2.5 ml-1">Allowances</label>
                                <input
                                    type="number" name="allowances" value={formData.allowances} onChange={handleChange}
                                    placeholder="0.00"
                                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all outline-none text-gray-700 placeholder:text-gray-400 font-medium"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2.5 ml-1">Deductions</label>
                                <input
                                    type="number" name="deductions" value={formData.deductions} onChange={handleChange}
                                    placeholder="0.00"
                                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all outline-none text-gray-700 placeholder:text-gray-400 font-medium"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Account Setup */}
                    <section>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                                <div className="w-1.5 h-4 bg-blue-600 rounded-full"></div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 tracking-tight">Account Setup</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2.5 ml-1">Work Email</label>
                                <input
                                    type="email" name="workEmail" value={formData.workEmail} onChange={handleChange} required
                                    placeholder="user@company.com"
                                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all outline-none text-gray-700 placeholder:text-gray-400 font-medium"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2.5 ml-1">System Role</label>
                                <select
                                    name="systemRole" value={formData.systemRole} onChange={handleChange} required
                                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all outline-none text-gray-700 appearance-none cursor-pointer font-medium"
                                >
                                    <option value="Employee">Employee</option>
                                    <option value="Admin">Admin</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2.5 ml-1">Temporary Password</label>
                                <input
                                    type="password" name="temporaryPassword" value={formData.temporaryPassword} onChange={handleChange} required
                                    placeholder="••••••••"
                                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all outline-none text-gray-700 placeholder:text-gray-400 font-medium"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Footer Actions */}
                    <div className="pt-10 border-t border-gray-100 flex justify-end gap-5">
                        <button
                            type="button" onClick={onClose}
                            className="px-8 py-4 bg-gray-100 text-gray-600 font-bold rounded-2xl hover:bg-gray-200 transition-all cursor-pointer active:scale-95"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-12 py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all cursor-pointer active:scale-95 mb-4"
                        >
                            {mode === 'edit' ? 'Save Changes' : 'Create Employee'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EmployeeModal;
