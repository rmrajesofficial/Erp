import React from 'react'

const Services = () => {
    return (
        <div>
            <div className='grid grid-cols-4 gap-4'>
                <div className='p-4 bg-white rounded-xl group'>
                    <h1 className='text-lg'>Student Feedback</h1>
                    <button className='mt-4 px-3 py-2 border text-sm group-hover:bg-green-800 rounded-full group-hover:text-white transition-all duration-200'>Click Here</button>
                </div>
                <div className='p-4 bg-white rounded-xl group'>
                    <h1 className='text-lg'>Hostel</h1>
                    <button className='mt-4 px-3 py-2 border text-sm group-hover:bg-blue-800 rounded-full group-hover:text-white transition-all duration-200'>Click Here</button>
                </div>
                <div className='p-4 bg-white rounded-xl group'>
                    <h1 className='text-lg'>ABC Account</h1>
                    <button className='mt-4 px-3 py-2 border text-sm group-hover:bg-indigo-800 rounded-full group-hover:text-white transition-all duration-200'>Click Here</button>
                </div>
                <div className='p-4 bg-white rounded-xl group'>
                    <h1 className='text-lg'>Certificate Management</h1>
                    <button className='mt-4 px-3 py-2 border text-sm group-hover:bg-purple-800 rounded-full group-hover:text-white transition-all duration-200'>Click Here</button>
                </div>
                <div className='p-4 bg-white rounded-xl group'>
                    <h1 className='text-lg'>Syllabus</h1>
                    <button className='mt-4 px-3 py-2 border text-sm group-hover:bg-red-800 rounded-full group-hover:text-white transition-all duration-200'>Click Here</button>
                </div>
            </div>
        </div>
    )
}

export default Services