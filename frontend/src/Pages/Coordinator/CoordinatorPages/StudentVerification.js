import React, { useState } from 'react';

const StudentVerification = () => {
    const [students, setStudents] = useState([
        {
            enrollmentNo: '2021BITE060',
            name: 'John Doe',
            courses: ['Algorithms', 'Big Data', 'Artificial Intelligence', 'Machine Learning', 'Computer Networks', 'OOPs in Java Programming', 'OOPs Lab', 'Machine Learning Lab', 'Big Data Lab', 'Computer Network Lab', 'Tour And Training'],
            verified: false,
        },
        {
            enrollmentNo: '2021BITE061',
            name: 'Jane Smith',
            courses: ['Algorithms', 'Big Data', 'Artificial Intelligence', 'Machine Learning', 'Computer Networks', 'OOPs in Java Programming', 'OOPs Lab', 'Machine Learning Lab', 'Big Data Lab', 'Computer Network Lab', 'Tour And Training'],
            verified: false,
        },
        {
            enrollmentNo: '2021BITE062',
            name: 'Alice Johnson',
            courses: ['Algorithms', 'Big Data', 'Artificial Intelligence', 'Machine Learning', 'Computer Networks', 'OOPs in Java Programming', 'OOPs Lab', 'Machine Learning Lab', 'Big Data Lab', 'Computer Network Lab', 'Tour And Training'],
            verified: false,
        },
        {
            enrollmentNo: '2021BITE063',
            name: 'Bob Brown',
            courses: ['Algorithms', 'Big Data', 'Artificial Intelligence', 'Machine Learning', 'Computer Networks', 'OOPs in Java Programming', 'OOPs Lab', 'Machine Learning Lab', 'Big Data Lab', 'Computer Network Lab', 'Tour And Training'],
            verified: false,
        },
        {
            enrollmentNo: '2021BITE064',
            name: 'Charlie Davis',
            courses: ['Algorithms', 'Big Data', 'Artificial Intelligence', 'Machine Learning', 'Computer Networks', 'OOPs in Java Programming', 'OOPs Lab', 'Machine Learning Lab', 'Big Data Lab', 'Computer Network Lab', 'Tour And Training'],
            verified: false,
        },
        {
            enrollmentNo: '2021BITE065',
            name: 'David Evans',
            courses: ['Algorithms', 'Big Data', 'Artificial Intelligence', 'Machine Learning', 'Computer Networks', 'OOPs in Java Programming', 'OOPs Lab', 'Machine Learning Lab', 'Big Data Lab', 'Computer Network Lab', 'Tour And Training'],
            verified: false,
        },
        {
            enrollmentNo: '2021BITE066',
            name: 'Ella Foster',
            courses: ['Algorithms', 'Big Data', 'Artificial Intelligence', 'Machine Learning', 'Computer Networks', 'OOPs in Java Programming', 'OOPs Lab', 'Machine Learning Lab', 'Big Data Lab', 'Computer Network Lab', 'Tour And Training'],
            verified: false,
        },
        {
            enrollmentNo: '2021BITE067',
            name: 'Frank Green',
            courses: ['Algorithms', 'Big Data', 'Artificial Intelligence', 'Machine Learning', 'Computer Networks', 'OOPs in Java Programming', 'OOPs Lab', 'Machine Learning Lab', 'Big Data Lab', 'Computer Network Lab', 'Tour And Training'],
            verified: false,
        },
        {
            enrollmentNo: '2021BITE068',
            name: 'Grace Harris',
            courses: ['Algorithms', 'Big Data', 'Artificial Intelligence', 'Machine Learning', 'Computer Networks', 'OOPs in Java Programming', 'OOPs Lab', 'Machine Learning Lab', 'Big Data Lab', 'Computer Network Lab', 'Tour And Training'],
            verified: false,
        },
        {
            enrollmentNo: '2021BITE069',
            name: 'Henry Ives',
            courses: ['Algorithms', 'Big Data', 'Artificial Intelligence', 'Machine Learning', 'Computer Networks', 'OOPs in Java Programming', 'OOPs Lab', 'Machine Learning Lab', 'Big Data Lab', 'Computer Network Lab', 'Tour And Training'],
            verified: false,
        },
        {
            enrollmentNo: '2021BITE070',
            name: 'Ivy Jones',
            courses: ['Algorithms', 'Big Data', 'Artificial Intelligence', 'Machine Learning', 'Computer Networks', 'OOPs in Java Programming', 'OOPs Lab', 'Machine Learning Lab', 'Big Data Lab', 'Computer Network Lab', 'Tour And Training'],
            verified: false,
        },
    ]);

    const [data, setData] = useState({
        semester: 'Autumn 2021',
        department: 'Information Technology',
        totalStudents: students.length,
        verifiedStudents: 0,
    });

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };


    const handleApprove = (enrollmentNo) => {
        setStudents((prevStudents) =>
            prevStudents.map((student) =>
                student.enrollmentNo === enrollmentNo
                    ? { ...student, verified: true }
                    : student
            )
        );
        setData((prevData) => ({
            ...prevData,
            verifiedStudents: prevData.verifiedStudents + 1,
        }));
    };

    return (
        <div>
            <div className='p-4 bg-white rounded-xl'>
                <h1 className='text-xl font-semibold'>Student Verification</h1>
                <div className='grid grid-cols-2 gap-4 mt-4'>
                    <div>
                        <label className='block text-sm font-medium text-gray-700 pl-3'>Semester</label>
                        <input
                            type='text'
                            value={data.semester}
                            className='mt-1 block w-full px-3 py-2 border text-sm rounded-full outline-none'
                            readOnly
                        />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-700 pl-3'>Department</label>
                        <input
                            type='text'
                            value={data.department}
                            className='mt-1 block w-full px-3 py-2 border text-sm rounded-full outline-none'
                            readOnly
                        />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-700 pl-3'>Total Students</label>
                        <input
                            type='text'
                            value={data.totalStudents}
                            className='mt-1 block w-full px-3 py-2 border text-sm rounded-full outline-none'
                            readOnly
                        />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-700 pl-3'>Verified Students</label>
                        <input
                            type='text'
                            value={data.verifiedStudents}
                            className='mt-1 block w-full px-3 py-2 border text-sm rounded-full outline-none'
                            readOnly
                        />
                    </div>
                </div>
                <div className='my-4 mt-8'>
                    <div className='text-center'>
                        <input
                            type="text"
                            className='text-center px-4 py-2 border border-gray-300 w-96 rounded bg-gray-100'
                            placeholder='Search by enrollment...'
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                    </div>
                </div>
                <div className='mt-4'>
                    <table className='w-full border-collapse border border-gray-300'>
                        <thead>
                            <tr>
                                <th className='border border-gray-300 p-2'>Enrollment NO.</th>
                                <th className='border border-gray-300 p-2'>Name</th>
                                <th className='border border-gray-300 p-2'>Courses</th>
                                <th className='border border-gray-300 p-2'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students
                                .filter(student => student.enrollmentNo.toLowerCase().includes(searchQuery.toLowerCase()))
                                .map((student) => (
                                    <tr key={student.enrollmentNo} className='text-center'>
                                        <td className='border border-gray-300 p-2'>{student.enrollmentNo}</td>
                                        <td className='border border-gray-300 p-2'>{student.name}</td>
                                        <td className='border border-gray-300 p-4'>
                                            <div className='flex flex-wrap gap-1 max-w-[600px]'>
                                                {student.courses.map((course, index) => (
                                                    <p key={index} className='text-sm text-indigo-600 bg-indigo-100 rounded-full px-2 py-1'>{course}</p>
                                                ))}
                                            </div>
                                        </td>
                                        <td className='border border-gray-300 p-2 text-center'>
                                            <button
                                                className={`w-[90px] px-3 py-2 border text-sm rounded-full ${student.verified ? 'bg-gray-400' : 'bg-green-800 text-white'}`}
                                                onClick={() => handleApprove(student.enrollmentNo)}
                                                disabled={student.verified}
                                            >
                                                {student.verified ? 'Approved' : 'Approve'}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>

                    </table>
                </div>
            </div>
            <div className='h-96'></div>
        </div>
    );
};

export default StudentVerification;
