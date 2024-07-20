import React, { useEffect, useState } from 'react';
import { Images } from './../../Constants/Images'
import { NavLink } from 'react-router-dom';

const StudentProfile = () => {
    const [profile, setProfile] = useState({
        image: Images.profile,
        name: 'Suhaib Ahmad Salmani',
        enrollment: '2021BITE060',
        program: 'B-TECH',
        department: 'Information Technology',
        dateOfBirth: '18-12-2002',
        phoneNumber: '8492002286',
        email: 'enigma00800@gmail.com',
        currentSemester: '6th',
        cgpa: '7.44',
        gender:'Male',
    });

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                // const profileData = await getProfile();
                // setProfile(profileData);
            } catch (error) {
                console.error('Error fetching student profile:', error);
            }
        };

        fetchProfile();
    }, []);

    return (
        <div className="">
            {profile ? (
                <>
                    <div className='flex gap-6 items-center bg-white rounded-2xl p-6 shadow-sm'>
                        <img src={profile.image} alt="Student Image" className="w-32 h-32 rounded-full" />
                        <div>
                            <h2 className="text-2xl font-bold mb-2">{profile.name}</h2>
                            <p className="text-gray-500">Phone: {profile.phoneNumber}</p>
                            <p className="text-gray-500 ">Email: {profile.email}</p>


                        </div>
                    </div>
                    <div className='p-6 mt-4 bg-white rounded-2xl shadow-sm'>
                        <h2 className="text-lg font-bold mb-4">Enrolled Courses</h2>
                        <div className=''>
                            <p className="text-gray-500 mb-2">Enrollment: {profile.enrollment}</p>
                            <p className="text-gray-500 mb-2">Program: {profile.program}</p>
                            <p className="text-gray-500 mb-2">Department: {profile.department}</p>
                            <div className='h-2'></div>
                            <NavLink to="/dashboard/courses" className="rounded-full  text-indigo-800 p-2 hover:shadow-md px-4 text-sm bg-indigo-100 font-bold">View Courses</NavLink>
                        </div>
                    </div>
                    <div className='p-6 mt-4 bg-white rounded-2xl shadow-sm'>
                        <h2 className="text-lg font-bold mb-4">Personal Details</h2>
                        <div className='grid grid-cols-3'>
                            <p className="text-gray-500 mb-2">Date of Birth: {profile.dateOfBirth}</p>
                            <p className="text-gray-500 mb-2">Phone Number: {profile.phoneNumber}</p>
                            <p className="text-gray-500 mb-2">Email: {profile.email}</p>
                            <p className="text-gray-500 mb-2">Current Semester: {profile.currentSemester}</p>
                            <p className="text-gray-500 mb-2">Gender: {profile.gender}</p>
                            <p className="text-gray-500 mb-2">CGPA: {profile.cgpa}</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='p-6 mt-4 bg-white rounded-2xl shadow-sm'>
                            <h2 className="text-lg font-bold mb-4">Corrospondance Address</h2>
                            <div>
                                <p className="text-gray-500 mb-2">Street: 456 Main St</p>
                                <p className="text-gray-500 mb-2">City: Mumbai</p>
                                <p className="text-gray-500 mb-2">State: Maharashtra</p>
                                <p className="text-gray-500 mb-2">Country: India</p>
                                <p className="text-gray-500 mb-2">Postal Code: 400001</p>
                            </div>
                        </div>
                        <div className='p-6 mt-4 bg-white rounded-2xl shadow-sm'>
                            <h2 className="text-lg font-bold mb-4">Permanent Address</h2>
                            <div>
                                <p className="text-gray-500 mb-2">Street: 456 Main St</p>
                                <p className="text-gray-500 mb-2">City: Mumbai</p>
                                <p className="text-gray-500 mb-2">State: Maharashtra</p>
                                <p className="text-gray-500 mb-2">Country: India</p>
                                <p className="text-gray-500 mb-2">Postal Code: 400001</p>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <p>Loading profile...</p>
            )}
        </div>
    );
};

export default StudentProfile;