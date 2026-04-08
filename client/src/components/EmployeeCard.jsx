import React from 'react';
import { Pencil, Trash2 } from 'lucide-react';

const EmployeeCard = ({ employee, onEdit, onDelete }) => {
    const { firstName, lastName, department, position } = employee;
    const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 relative flex flex-col items-center group hover:shadow-md transition-all duration-300">
            {/* Department Tag */}
            <div className="absolute top-6 left-6">
                <span className="px-4 py-1 bg-gray-50 text-gray-500 text-xs font-semibold rounded-lg border border-gray-100 uppercase tracking-wide">
                    {department}
                </span>
            </div>

            {/* Initials Circle */}
            <div className="w-28 h-28 rounded-full bg-blue-50/50 flex items-center justify-center mb-8 mt-6 ring-8 ring-blue-50/20">
                <span className="text-3xl font-medium text-blue-600/80 tracking-widest">
                    {initials}
                </span>
            </div>

            {/* Info */}
            <div className="text-center w-full">
                <h3 className="text-xl font-bold text-gray-800 tracking-tight leading-tight">
                    {firstName} {lastName}
                </h3>
                <p className="text-sm font-medium text-gray-400 mt-1 uppercase tracking-wider">
                    {position}
                </p>
            </div>

            {/* Actions */}
            <div className="absolute bottom-6 right-6 flex gap-3">
                <button
                    onClick={(e) => { e.stopPropagation(); onEdit(employee); }}
                    className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200"
                    title="Edit Employee"
                >
                    <Pencil size={18} strokeWidth={2.5} />
                </button>
                <button
                    onClick={(e) => { e.stopPropagation(); onDelete(employee.id); }}
                    className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200"
                    title="Delete Employee"
                >
                    <Trash2 size={18} strokeWidth={2.5} />
                </button>
            </div>
        </div>
    );
};

export default EmployeeCard;
