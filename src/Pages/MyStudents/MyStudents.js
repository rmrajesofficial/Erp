import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const MyStudents = () => {
    const [courses, setCourses] = useState([
        {
            course_id: "IT601",
            course_name: "Database Management Systems",
            course_credits: 4,
            course_semester: 1,
        },
        {
            course_id: "IT602",
            course_name: "Computer Networks",
            course_credits: 4,
            course_semester: 1,
        },
        {
            course_id: "IT603",
            course_name: "Software Engineering",
            course_credits: 3,
            course_semester: 1,
        },
        {
            course_id: "IT604",
            course_name: "Web Technologies",
            course_credits: 3,
            course_semester: 1,
        },
        {
            course_id: "IT605",
            course_name: "Artificial Intelligence",
            course_credits: 3,
            course_semester: 1,
        },
    ])
    return (
        <div>
            <div className='flex flex-col gap-2'>
                {
                    courses.map(item => (
                        <div key={item.course_id} className='bg-white shadow-sm'>
                            <div className='p-4'>
                                <h2 className='text-lg font-semibold'>{item.course_id} | {item.course_name}</h2>
                                <div className='text-sm'>
                                    <p>Semester: {item.course_semester}</p>
                                    <p>Credits: {item.course_credits}</p>
                                </div>
                            </div>
                            <div className='flex gap-2 flex-wrap mt-10 p-4 bg-neutral-100'>
                                <NavLink to={`/dashboard/my-students/${item.course_id}`} target='_blank' className='text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-semibold hover:bg-blue-200'>
                                    View Students
                                </NavLink>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className='h-96'></div>

        </div>
    );
};

export default MyStudents;