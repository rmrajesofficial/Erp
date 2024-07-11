import React, { useState } from 'react';

const CourseSelection = () => {
    const [selectedCourses, setSelectedCourses] = useState([]);

    const handleCourseSelection = (event) => {
        const courseId = event.target.value;
        const isChecked = event.target.checked;

        if (isChecked) {
            setSelectedCourses((prevSelectedCourses) => [...prevSelectedCourses, courseId]);
        } else {
            setSelectedCourses((prevSelectedCourses) => prevSelectedCourses.filter((course) => course !== courseId));
        }
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
                    <ul>
                        <li>
                            <label>
                                <input type="checkbox" value="course1" onChange={handleCourseSelection} />
                                Course 1 - 3 credits
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" value="course2" onChange={handleCourseSelection} />
                                Course 2 - 4 credits
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" value="course3" onChange={handleCourseSelection} />
                                Course 3 - 3 credits
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" value="course4" onChange={handleCourseSelection} />
                                Course 4 - 4 credits
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" value="course5" onChange={handleCourseSelection} />
                                Course 5 - 3 credits
                            </label>
                        </li>
                    </ul>
                </div>

                <div className="mt-4">
                    <h2 className="text-lg">Additional Courses</h2>
                    <select className="mt-2 p-2 border border-gray-300 rounded-md">
                        <option value="">Select Course</option>
                        <option value="course1">Course 1</option>
                        <option value="course2">Course 2</option>
                        <option value="course3">Course 3</option>
                        <option value="course4">Course 4</option>
                        <option value="course5">Course 5</option>
                    </select>
                </div>

                <div className="mt-4">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Register</button>
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

