import React from 'react'

const ExamRegistration = () => {
    return (
        <div>
            <div className='p-4 bg-white rounded-lg'>
                <h1>Currently no examination session active. Please visit university website for more information.
                </h1>
            </div>
            <div className='grid grid-cols-3 gap-4 mt-2'>
                <div className='p-4 bg-white rounded-xl group'>
                    <h1 className='text-lg'>Registration History</h1>
                    <button className='mt-4 px-3 py-2 border text-sm group-hover:bg-indigo-800 rounded-full group-hover:text-white transition-all duration-200'>Click Here</button>
                </div>
            </div>
        </div>
    )
}

export default ExamRegistration