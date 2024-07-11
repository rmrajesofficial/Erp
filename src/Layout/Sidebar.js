// Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

import './../utils.css'
import { useAuth } from '../Context/AuthContext';
import { FaHome, FaUser, FaBook, FaMoneyBill, FaTools, FaClipboardCheck, FaIdCard, FaGraduationCap, FaUsers, FaMoneyCheckAlt, FaUserTie, FaFileAlt, FaSwatchbook } from 'react-icons/fa';

const Sidebar = () => {
    const { userRole = 'student', is_staff = false } = useAuth()
    let routes = [];
    if (userRole === 'student') {
        routes = [
            { name: 'Dashboard', to: '/dashboard', icon: <FaHome /> },
            { name: 'Profile', to: '/dashboard/profile', icon: <FaUser /> },
            { name: 'My Courses', to: '/dashboard/courses', icon: <FaSwatchbook  /> },
            { name: 'Course Selection', to: '/dashboard/course-selection', icon: <FaBook /> },
            { name: 'Fee Payment', to: '/dashboard/fee-payment', icon: <FaMoneyBill /> },
            { name: 'Services', to: '/dashboard/services', icon: <FaTools /> },
            { name: 'Exam Registration', to: '/dashboard/exam-registration', icon: <FaClipboardCheck /> },
            { name: 'Hall Admit Card', to: '/dashboard/hall-admit-card', icon: <FaIdCard /> },
            { name: 'Grade Card', to: '/dashboard/grade-card', icon: <FaGraduationCap /> },
        ];
    } else if (userRole === 'faculty') {
        routes = [
            { name: 'Home', to: '/dashboard', icon: <FaHome /> },
            { name: 'My Students', to: '/dashboard/my-students', icon: <FaUsers /> },
            { name: 'Scholarships', to: '/dashboard/scholarships', icon: <FaMoneyCheckAlt /> },
        ];

        if (is_staff) {
            routes.push(
                { name: 'Accounts', to: '/dashboard/accounts', icon: <FaUserTie /> },
            );
        }
    }
    else if (userRole === 'dean') {
        routes = [
            { name: 'Student Thesis', to: '/dashboard/my-students', icon: <FaFileAlt /> },
        ];
    }

    return (
        <div className="w-64 h-full p-4 text-sm border-r bg-white">
            {routes.map(route => (
                <div className='flex flex-col' key={route.to}>
                    <NavLink
                        end
                        to={route.to}
                        className="p-3 px-5 hover:bg-gray-200 rounded-full flex gap-2 items-center"
                    >
                        <div>
                            {route.icon}
                        </div>
                        <p>
                            {route.name}

                        </p>
                    </NavLink>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
