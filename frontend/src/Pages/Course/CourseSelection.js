import React, { useState } from 'react';
import Modal from '../../Components/Modal';

const CourseSelection = () => {
    const [open, setOpen] = useState(false);
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [semesterCourses, setSemesterCourses] = useState(
        [
            {
                course_id: "IT601",
                course_name: "Database Management Systems",
                course_credits: 4,
                is_mandatory: true
            },
            {
                course_id: "IT602",
                course_name: "Computer Networks",
                course_credits: 4,
                is_mandatory: true
            },
            {
                course_id: "IT603",
                course_name: "Software Engineering",
                course_credits: 3,
                is_mandatory: true
            },
            {
                course_id: "IT604",
                course_name: "Web Technologies",
                course_credits: 3,
                is_mandatory: false
            },
            {
                course_id: "IT605",
                course_name: "Artificial Intelligence",
                course_credits: 3,
                is_mandatory: false
            }
        ]
    );


    const handleCourseSelection = (event) => {
        const course_id = event.target.value;
        const isChecked = event.target.checked;

        if (isChecked) {
            const selectedCourse = semesterCourses.find(course => course.course_id === course_id);
            setSelectedCourses([...selectedCourses, selectedCourse]);
        } else {
            setSelectedCourses(selectedCourses.filter(course => course.course_id !== course_id));
        }
    };

    const countCredits = () => {
        return selectedCourses.reduce((total, course) => total + course.course_credits, 0);
    };

    return (
        <div>
            <div className="p-4 bg-white rounded-xl">
                <h1 className="text-xl font-bold">Course Selection</h1>
                <div>
                    <h2 className="mt-1">Semester: Fall 2021</h2>
                    <h2 className="">Academic Year: 2021-2022</h2>
                </div>
            </div>

            <div className="p-4 bg-white rounded-xl mt-2">
                <div>
                    <h2 className="text-lg font-bold mb-2">Course List</h2>
                    <ul className='flex flex-col gap-4'>
                        {
                            semesterCourses.map((item, index) => (
                                <li>
                                    <label className='flex gap-4'>
                                        <input type="checkbox" value={item.course_id} onChange={handleCourseSelection} />
                                        <div className='flex gap-10'>
                                            <p>{item.course_id}</p>
                                            <p>{item.course_name} - ({item.course_credits} Credits)</p>
                                        </div>
                                    </label>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="mt-4">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={() => setOpen(true)}>Register</button>
                    <Modal open={open} onClose={() => setOpen(false)}>
                        <div className='min-w-96 p-2 w-[600px]'>
                            <h1 className='font-bold text-xl'>Confirm Courses</h1>
                            <ul className='flex flex-col gap-2 mt-4 max-h-[500px] overflow-y-auto'>
                                {
                                    selectedCourses.map((item, index) => (
                                        <li>
                                            <label className='flex gap-4'>
                                                <div className='flex gap-10'>
                                                    <p>{item.course_id}</p>
                                                    <p>{item.course_name} - ({item.course_credits} Credits)</p>
                                                </div>
                                            </label>
                                        </li>
                                    ))
                                }
                            </ul>
                            <div className='my-4'>
                                <p>
                                    <span>Total Credits:</span>
                                    <span className='ml-2'>{countCredits()}</span>
                                </p>
                            </div>
                            <div className='flex justify-end gap-2 mt-8'>
                                <button className='bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300' onClick={() => setOpen(false)}>Cancel</button>
                                <button className='bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600'>Confirm</button>
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>


            <div className='grid grid-cols-3 gap-2 mt-10'>
                <div className='p-4 bg-white rounded-xl group'>
                    <h1 className='text-lg'>General Instructions</h1>
                    <button className='mt-4 px-3 py-2 border text-sm group-hover:bg-blue-800 rounded-full group-hover:text-white transition-all duration-200'>Click Here</button>
                </div>
                <div className='p-4 bg-white rounded-xl group'>
                    <h1 className='text-lg'>Course Selection History</h1>
                    <button className='mt-4 px-3 py-2 border text-sm group-hover:bg-blue-800 rounded-full group-hover:text-white transition-all duration-200'>Click Here</button>
                </div>
                <div className='p-4 bg-white rounded-xl group'>
                    <h1 className='text-lg'>FAQs</h1>
                    <button className='mt-4 px-3 py-2 border text-sm group-hover:bg-blue-800 rounded-full group-hover:text-white transition-all duration-200'>Click Here</button>
                </div>

            </div>

            <div className='h-96'></div>
            <div className='h-48'></div>
        </div>
    );
};

export default CourseSelection;

