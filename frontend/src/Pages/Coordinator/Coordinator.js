import React from 'react'
import { NavLink } from 'react-router-dom'

const Coordinator = () => {
  return (
    <div>
      <div>
        <div className='w-full p-4 bg-white rounded-xl bg-gradient-to-r from-violet-200 via-violet-6200 to-pink-200'></div>
        <div className='grid grid-cols-4 gap-4 mt-4'>
          <div className='p-4 bg-white rounded-xl group'>
            <h1 className='text-lg'>Student Verification</h1>
            <button onClick={()=>window.location.href="/dashboard/coordinator/student_verification"}  className='mt-4 px-3 py-2 border text-sm group-hover:bg-green-800 rounded-full group-hover:text-white transition-all duration-200'>Click Here</button>
          </div>
          <div className='p-4 bg-white rounded-xl group'>
            <h1 className='text-lg'>Subject Assignment</h1>
            <button onClick={()=>window.location.href="/dashboard/coordinator/subject_assignment"} className='mt-4 px-3 py-2 border text-sm group-hover:bg-blue-800 rounded-full group-hover:text-white transition-all duration-200'>Click Here</button>
          </div>
          <div className='p-4 bg-white rounded-xl group'>
            <h1 className='text-lg'>Semester Open/Close</h1>
            <button onClick={()=>window.location.href="/dashboard/coordinator/semester_status"} className='mt-4 px-3 py-2 border text-sm group-hover:bg-indigo-800 rounded-full group-hover:text-white transition-all duration-200'>Click Here</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Coordinator