import React, { useState } from 'react';
import SelectField from '../../../Components/SelectField';

const options = [
    {
        label: "Computer Science",
        options: [
            { value: 'cs1', label: 'Dr. Alice Johnson' },
            { value: 'cs2', label: 'Dr. Bob Smith' },
            { value: 'cs3', label: 'Dr. Carol White' },
            { value: 'cs4', label: 'Dr. David Brown' },
            { value: 'cs5', label: 'Dr. Emma Green' },
            { value: 'cs6', label: 'Dr. Frank Black' },
            { value: 'cs7', label: 'Dr. Grace Blue' },
            { value: 'cs8', label: 'Dr. Henry Yellow' },
            { value: 'cs9', label: 'Dr. Ivy Pink' },
            { value: 'cs10', label: 'Dr. Jack Orange' },
        ],
    },
    {
        label: "Electrical Engineering",
        options: [
            { value: 'ee1', label: 'Dr. Aaron Grey' },
            { value: 'ee2', label: 'Dr. Bella Purple' },
            { value: 'ee3', label: 'Dr. Calvin Red' },
            { value: 'ee4', label: 'Dr. Daisy Violet' },
            { value: 'ee5', label: 'Dr. Edward Cyan' },
            { value: 'ee6', label: 'Dr. Fiona Magenta' },
            { value: 'ee7', label: 'Dr. George Maroon' },
            { value: 'ee8', label: 'Dr. Hannah Teal' },
            { value: 'ee9', label: 'Dr. Ian Navy' },
            { value: 'ee10', label: 'Dr. Julia Lime' },
        ],
    },
    {
        label: "Mechanical Engineering",
        options: [
            { value: 'me1', label: 'Dr. Karl Olive' },
            { value: 'me2', label: 'Dr. Laura Tan' },
            { value: 'me3', label: 'Dr. Michael Aqua' },
            { value: 'me4', label: 'Dr. Nancy Coral' },
            { value: 'me5', label: 'Dr. Oscar Salmon' },
            { value: 'me6', label: 'Dr. Paula Indigo' },
            { value: 'me7', label: 'Dr. Quentin Gold' },
            { value: 'me8', label: 'Dr. Rachel Silver' },
            { value: 'me9', label: 'Dr. Samuel Bronze' },
            { value: 'me10', label: 'Dr. Tina Copper' },
        ],
    },
];

const SubjectAssignment = () => {
    const [courses, setCourses] = useState([
        {
            course_name: "Data Structures",
            course_code: "IT201",
            faculty: "Dr. John Doe",
        },
        {
            course_name: "Algorithms",
            course_code: "IT202",
            faculty: "Dr. Jane Doe",
        },
        {
            course_name: "Operating Systems",
            course_code: "IT203",
            faculty: "Dr. John Doe",
        },
        {
            course_name: "Computer Networks",
            course_code: "IT204",
            faculty: "Dr. Jane Doe",
        },
    ]);

    const [selectedFaculties, setSelectedFaculties] = useState({});

    const handleSelectChange = (index, option) => {
        setSelectedFaculties({
            ...selectedFaculties,
            [index]: option,
        });
    };

    const saveFacultyChange = (index) => {
        const updatedCourses = [...courses];
        updatedCourses[index].faculty = selectedFaculties[index].label;
        setCourses(updatedCourses);
        setSelectedFaculties({
            ...selectedFaculties,
            [index]: null,
        });
    };

    return (
        <div>
            <div className='p-4 bg-white rounded-xl'>
                <h2 className='font-semibold text-xl'>Autumn 2024</h2>
                <div className='mt-4'>
                    {courses.map((course, index) => (
                        <div key={index} className='p-4 bg-gray-100 rounded-xl mt-2 flex'>
                            <div className='flex-1'>
                                <h3 className='font-semibold text-lg'>
                                    {course.course_code} | {course.course_name}
                                </h3>
                                <label>Faculty: </label>
                                <span className='mt-2'>{course.faculty}</span>
                                <div className='flex gap-2 items-baseline'>
                                    <div className='mt-2 w-96'>
                                        <SelectField
                                            placeholder='Change Faculty...'
                                            options={options}
                                            onSelectChange={(option) => handleSelectChange(index, option)}
                                        />
                                    </div>
                                    {selectedFaculties[index] && selectedFaculties[index].label !== course.faculty && (
                                        <button
                                            className='bg-white py-2 px-4 h-fit rounded border border-gray-500 text-sm hover:bg-gray-200'
                                            onClick={() => saveFacultyChange(index)}
                                        >
                                            Save
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SubjectAssignment;
