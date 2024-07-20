import React, { useState } from 'react';

const StudentTable = () => {
    const [students, setStudents] = useState([
        {
            student_name: 'John Doe',
            student_enrollment: '2021BITE060',
            mid_sem: 85,
            end_sem: 90,
            internal: 88,
            total: 263,
            pass: true,
            grade: 'A',
        },
        {
            student_name: 'Jane Doe',
            student_enrollment: '2021BITE061',
            mid_sem: 78,
            end_sem: 82,
            internal: 80,
            total: 240,
            pass: true,
            grade: 'B',
        },
        {
            student_name: 'Alice Doe',
            student_enrollment: '2021BITE062',
            mid_sem: 92,
            end_sem: 95,
            internal: 93,
            total: 280,
            pass: true,
            grade: 'A+',
        },
        {
            student_name: 'Bob Doe',
            student_enrollment: '2021BITE063',
            mid_sem: 70,
            end_sem: 75,
            internal: 72,
            total: 217,
            pass: true,
            grade: 'C',
        },
        {
            student_name: 'Eve Doe',
            student_enrollment: '2021BITE064',
            mid_sem: 65,
            end_sem: 68,
            internal: 70,
            total: 203,
            pass: true,
            grade: 'D',
        },
        {
            student_name: 'Grace Doe',
            student_enrollment: '2021BITE065',
            mid_sem: 80,
            end_sem: 85,
            internal: 82,
            total: 247,
            pass: true,
            grade: 'B+',
        },
        {
            student_name: 'Henry Doe',
            student_enrollment: '2021BITE066',
            mid_sem: 75,
            end_sem: 78,
            internal: 76,
            total: 229,
            pass: true,
            grade: 'C+',
        },
        {
            student_name: 'Olivia Doe',
            student_enrollment: '2021BITE067',
            mid_sem: 88,
            end_sem: 92,
            internal: 90,
            total: 270,
            pass: true,
            grade: 'A',
        },
        {
            student_name: 'Liam Doe',
            student_enrollment: '2021BITE068',
            mid_sem: 68,
            end_sem: 72,
            internal: 70,
            total: 210,
            pass: true,
            grade: 'D',
        },
        {
            student_name: 'Sophia Doe',
            student_enrollment: '2021BITE069',
            mid_sem: 95,
            end_sem: 98,
            internal: 96,
            total: 289,
            pass: true,
            grade: 'A+',
        },
        {
            student_name: 'Noah Doe',
            student_enrollment: '2021BITE070',
            mid_sem: 82,
            end_sem: 88,
            internal: 85,
            total: 255,
            pass: true,
            grade: 'B',
        },
        {
            student_name: 'Ava Doe',
            student_enrollment: '2021BITE071',
            mid_sem: 78,
            end_sem: 82,
            internal: 80,
            total: 240,
            pass: true,
            grade: 'B',
        },
        {
            student_name: 'William Doe',
            student_enrollment: '2021BITE072',
            mid_sem: 92,
            end_sem: 95,
            internal: 93,
            total: 280,
            pass: true,
            grade: 'A+',
        },
        {
            student_name: 'Isabella Doe',
            student_enrollment: '2021BITE073',
            mid_sem: 70,
            end_sem: 75,
            internal: 72,
            total: 217,
            pass: true,
            grade: 'C',
        },
        {
            student_name: 'James Doe',
            student_enrollment: '2021BITE074',
            mid_sem: 65,
            end_sem: 68,
            internal: 70,
            total: 203,
            pass: true,
            grade: 'D',
        },
        {
            student_name: 'James Doe',
            student_enrollment: '2021BITE074',
            mid_sem: 65,
            end_sem: 68,
            internal: 70,
            total: 203,
            pass: true,
            grade: 'D',
        },
        {
            student_name: 'James Doe',
            student_enrollment: '2021BITE074',
            mid_sem: 65,
            end_sem: 68,
            internal: 70,
            total: 203,
            pass: true,
            grade: 'D',
        },
        {
            student_name: 'James Doe',
            student_enrollment: '2021BITE074',
            mid_sem: 65,
            end_sem: 68,
            internal: 70,
            total: 203,
            pass: true,
            grade: 'D',
        },
        {
            student_name: 'James Doe',
            student_enrollment: '2021BITE074',
            mid_sem: 65,
            end_sem: 68,
            internal: 70,
            total: 203,
            pass: true,
            grade: 'D',
        },
        {
            student_name: 'James Doe',
            student_enrollment: '2021BITE074',
            mid_sem: 65,
            end_sem: 68,
            internal: 70,
            total: 203,
            pass: true,
            grade: 'D',
        },
        {
            student_name: 'James Doe',
            student_enrollment: '2021BITE074',
            mid_sem: 65,
            end_sem: 68,
            internal: 70,
            total: 203,
            pass: true,
            grade: 'D',
        },
        {
            student_name: 'James Doe',
            student_enrollment: '2021BITE074',
            mid_sem: 65,
            end_sem: 68,
            internal: 70,
            total: 203,
            pass: true,
            grade: 'D',
        },
        {
            student_name: 'James Doe',
            student_enrollment: '2021BITE074',
            mid_sem: 65,
            end_sem: 68,
            internal: 70,
            total: 203,
            pass: true,
            grade: 'D',
        },
        {
            student_name: 'James Doe',
            student_enrollment: '2021BITE074',
            mid_sem: 65,
            end_sem: 68,
            internal: 70,
            total: 203,
            pass: true,
            grade: 'D',
        },
        {
            student_name: 'James Doe',
            student_enrollment: '2021BITE074',
            mid_sem: 65,
            end_sem: 68,
            internal: 70,
            total: 203,
            pass: true,
            grade: 'D',
        },
    ]);

    const handleEdit = (index) => {
        // Implement edit functionality
        console.log('Edit student at index:', index);
    };

    const handleDelete = (index) => {
        // Implement delete functionality
        console.log('Delete student at index:', index);
    };

    return (
        <div>
            <div className="container mx-auto bg-white py-4 rounded-2xl">
                <h2 className='mb-4 text-xl font-semibold bg-white text-center pt-4'>Students Enrolled in IT016 | DBMS</h2>
                <table className="min-w-full border-collapse block md:table p-4">
                    <thead className="block md:table-header-group sticky -top-4 bg-white shadow-md">
                        <tr className="border border-gray-200 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative ">
                            <th className="bg-white p-2 pl-4 text-black font-bold md:border md:border-neutral-200 text-left block md:table-cell">Name</th>
                            <th className="bg-white p-2 text-black font-bold md:border md:border-neutral-200 text-left block md:table-cell">Enrollment</th>
                            <th className="bg-white p-2 text-black font-bold md:border md:border-neutral-200 text-left block md:table-cell">Mid Sem</th>
                            <th className="bg-white p-2 text-black font-bold md:border md:border-neutral-200 text-left block md:table-cell">End Sem</th>
                            <th className="bg-white p-2 text-black font-bold md:border md:border-neutral-200 text-left block md:table-cell">Internal</th>
                            <th className="bg-white p-2 text-black font-bold md:border md:border-neutral-200 text-left block md:table-cell">Total</th>
                            <th className="bg-white p-2 text-black font-bold md:border md:border-neutral-200 text-left block md:table-cell">Pass/Fail</th>
                            <th className="bg-white p-2 text-black font-bold md:border md:border-neutral-200 text-left block md:table-cell">Grade</th>
                            <th className="bg-white p-2 pr-4 text-black font-bold md:border md:border-neutral-200 text-left block md:table-cell"></th>
                        </tr>
                    </thead>
                    <tbody className="block md:table-row-group">
                        {students.map((student, index) => (
                            <tr key={index} className="bg-white border border-gray-200 md:border-none block md:table-row">
                                <td className="p-2 pl-4 md:border md:border-gray-200 text-left block md:table-cell">{student.student_name}</td>
                                <td className="p-2 md:border md:border-gray-200 text-left block md:table-cell">{student.student_enrollment}</td>
                                <td className="p-2 md:border md:border-gray-200 text-left block md:table-cell">{student.mid_sem}</td>
                                <td className="p-2 md:border md:border-gray-200 text-left block md:table-cell">{student.end_sem}</td>
                                <td className="p-2 md:border md:border-gray-200 text-left block md:table-cell">{student.internal}</td>
                                <td className="p-2 md:border md:border-gray-200 text-left block md:table-cell">{student.total}</td>
                                <td className="p-2 md:border md:border-gray-200 text-left block md:table-cell">{student.pass ? 'Pass' : 'Fail'}</td>
                                <td className="p-2 md:border md:border-gray-200 text-left block md:table-cell">{student.grade}</td>
                                <td className="p-2 pr-4 md:border md:border-gray-200 text-right block md:table-cell">
                                    <button onClick={() => handleEdit(index)} className="bg-blue-100 text-sm rounded-full hover:bg-blue-200 text-blue-600 font-semibold py-1 px-3">Update Marks</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className='mt-20 text-center'>
                    <button className="bg-black rounded-full hover:bg-black/80 text-white font-semibold py-3 px-8">Process Marks</button>
                </div>

                <div className='h-20'></div>
            </div>
            <div className='h-96'></div>
        </div>
    );
};

export default StudentTable;
