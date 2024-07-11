import React, { useEffect, useState } from 'react';
// import { getMycourses } from '../../api';

const MyCourses = () => {

    const defaultCourses = [
        {
            id: 1,
            code: 'HST101',
            title: 'Basic English And Communication Skills',
            category: 'COMPULSORY',
            credits: 3.00,
            term: '1 SEMESTER',
            cycle: 'JULY 2021'
        },
        {
            id: 2,
            code: 'MTH201',
            title: 'Calculus I',
            category: 'COMPULSORY',
            credits: 4.00,
            term: '1 SEMESTER',
            cycle: 'JULY 2021'
        },
        {
            id: 3,
            code: 'ENG101',
            title: 'Introduction to English Literature',
            category: 'COMPULSORY',
            credits: 3.00,
            term: '1 SEMESTER',
            cycle: 'JULY 2021'
        },
        {
            id: 4,
            code: 'CSE201',
            title: 'Data Structures and Algorithms',
            category: 'COMPULSORY',
            credits: 4.00,
            term: '1 SEMESTER',
            cycle: 'JULY 2021'
        },
        {
            id: 5,
            code: 'MTH301',
            title: 'Linear Algebra',
            category: 'COMPULSORY',
            credits: 3.00,
            term: '1 SEMESTER',
            cycle: 'JULY 2021'
        },
        {
            id: 6,
            code: 'PHY101',
            title: 'Physics I',
            category: 'COMPULSORY',
            credits: 4.00,
            term: '1 SEMESTER',
            cycle: 'JULY 2021'
        },
        {
            id: 7,
            code: 'CHE101',
            title: 'Chemistry I',
            category: 'COMPULSORY',
            credits: 4.00,
            term: '1 SEMESTER',
            cycle: 'JULY 2021'
        },
        {
            id: 8,
            code: 'BIO201',
            title: 'Genetics',
            category: 'COMPULSORY',
            credits: 3.00,
            term: '1 SEMESTER',
            cycle: 'JULY 2021'
        },
        {
            id: 9,
            code: 'CSE301',
            title: 'Database Management Systems',
            category: 'COMPULSORY',
            credits: 4.00,
            term: '1 SEMESTER',
            cycle: 'JULY 2021'
        },
        {
            id: 10,
            code: 'ENG201',
            title: 'English Composition',
            category: 'COMPULSORY',
            credits: 3.00,
            term: '1 SEMESTER',
            cycle: 'JULY 2021'
        },
        {
            id: 11,
            code: 'MTH101',
            title: 'Calculus II',
            category: 'COMPULSORY',
            credits: 4.00,
            term: '1 SEMESTER',
            cycle: 'JULY 2021'
        },
        {
            id: 12,
            code: 'PHY201',
            title: 'Physics III',
            category: 'COMPULSORY',
            credits: 4.00,
            term: '1 SEMESTER',
            cycle: 'JULY 2021'
        },
        {
            id: 13,
            code: 'CHE201',
            title: 'Chemistry II',
            category: 'COMPULSORY',
            credits: 4.00,
            term: '1 SEMESTER',
            cycle: 'JULY 2021'
        },
        {
            id: 14,
            code: 'BIO301',
            title: 'Microbiology',
            category: 'COMPULSORY',
            credits: 3.00,
            term: '1 SEMESTER',
            cycle: 'JULY 2021'
        },
        {
            id: 15,
            code: 'CSE101',
            title: 'Introduction to Programming',
            category: 'COMPULSORY',
            credits: 4.00,
            term: '1 SEMESTER',
            cycle: 'JULY 2021'
        },
        {
            id: 16,
            code: 'ENG301',
            title: 'Technical Writing',
            category: 'COMPULSORY',
            credits: 3.00,
            term: '1 SEMESTER',
            cycle: 'JULY 2021'
        },
        {
            id: 17,
            code: 'MTH401',
            title: 'Discrete Mathematics',
            category: 'COMPULSORY',
            credits: 3.00,
            term: '1 SEMESTER',
            cycle: 'JULY 2021'
        },
        {
            id: 18,
            code: 'PHY401',
            title: 'Quantum Mechanics',
            category: 'COMPULSORY',
            credits: 3.00,
            term: '1 SEMESTER',
            cycle: 'JULY 2021'
        },
        {
            id: 19,
            code: 'CHE401',
            title: 'Organic Chemistry',
            category: 'COMPULSORY',
            credits: 3.00,
            term: '1 SEMESTER',
            cycle: 'JULY 2021'
        },
        {
            id: 20,
            code: 'PHY301',
            title: 'Physics II',
            category: 'ELECTIVE',
            credits: 3.00,
            term: '2 SEMESTER',
            cycle: 'JANUARY 2022'
        },
        {
            id: 21,
            code: 'CSE401',
            title: 'Advanced Algorithms',
            category: 'ELECTIVE',
            credits: 3.00,
            term: '2 SEMESTER',
            cycle: 'JANUARY 2022'
        },
        {
            id: 22,
            code: 'ENG301',
            title: 'Technical Writing',
            category: 'ELECTIVE',
            credits: 3.00,
            term: '2 SEMESTER',
            cycle: 'JANUARY 2022'
        },
        {
            id: 23,
            code: 'BIO101',
            title: 'Introduction to Biology',
            category: 'ELECTIVE',
            credits: 3.00,
            term: '2 SEMESTER',
            cycle: 'JANUARY 2022'
        },
        {
            id: 20,
            code: 'PHY301',
            title: 'Physics II',
            category: 'ELECTIVE',
            credits: 3.00,
            term: '2 SEMESTER',
            cycle: 'JANUARY 2022'
        },
        // Add more courses here...
        {
            id: 21,
            code: 'CSE401',
            title: 'Advanced Algorithms',
            category: 'ELECTIVE',
            credits: 3.00,
            term: '2 SEMESTER',
            cycle: 'JANUARY 2022'
        },
        {
            id: 22,
            code: 'ENG301',
            title: 'Technical Writing',
            category: 'ELECTIVE',
            credits: 3.00,
            term: '2 SEMESTER',
            cycle: 'JANUARY 2022'
        },
        // Add more courses here...
        {
            id: 40,
            code: 'BIO101',
            title: 'Introduction to Biology',
            category: 'ELECTIVE',
            credits: 3.00,
            term: '2 SEMESTER',
            cycle: 'JANUARY 2022'
        }
    ];

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                setCourses(defaultCourses);
                // const coursesData = await getMycourses();
                // setCourses(coursesData);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchCourses();
    }, []);

    return (
        <div className="container mx-auto">
            <div className='p-6 bg-white rounded-lg'>

                <h1 className="text-xl font-bold mb-4">My Courses</h1>

                <table className="min-w-full border border-gray-200">
                    <thead>
                        <tr className='text-center'>
                            <th className="px-6 py-3 border border-gray-200">Code</th>
                            <th className="px-6 py-3 border border-gray-200 text-left">Title</th>
                            <th className="px-6 py-3 border border-gray-200">Category</th>
                            <th className="px-6 py-3 border border-gray-200">Credits</th>
                            <th className="px-6 py-3 border border-gray-200">Term</th>
                            <th className="px-6 py-3 border border-gray-200">Cycle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map((course) => (
                            <tr key={course.id} className='text-sm text-center'>
                                <td className="px-6 py-3 border border-gray-200">{course.code}</td>
                                <td className="px-6 py-3 border border-gray-200 text-left">{course.title}</td>
                                <td className="px-6 py-3 border border-gray-200">{course.category}</td>
                                <td className="px-6 py-3 border border-gray-200">{course.credits}</td>
                                <td className="px-6 py-3 border border-gray-200">{course.term}</td>
                                <td className="px-6 py-3 border border-gray-200">{course.cycle}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyCourses;