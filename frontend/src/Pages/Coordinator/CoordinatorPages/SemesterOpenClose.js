import React, { useState } from 'react'

const SemesterOpenClose = () => {
    const [data, seData] = useState({
        is_open: true,
        semester: "Autumn 2024",
        branch: "Information Technology",
    })

    const handleSemesterStatus = () => {
        seData({
            ...data,
            is_open: !data.is_open,
        })
    }

    return (
        <div className='p-4 bg-white rounded-xl'>
            <p className=''>
                <span className={`${data.is_open ? "bg-lime-100" : "bg-gray-200"} ${data.is_open ? "text-lime-600" : "text-gray-700"} text-bold w-fit px-3 py-1 rounded-full`}>{data.is_open ? "Open" : "Closed"}</span>
                <span className='ml-2'>{data.semester} | {data.branch}</span>
            </p>
            <div className='mt-4'>
                <button onClick={handleSemesterStatus} className='px-3 py-2 border text-sm bg-indigo-200 text-indigo-800 hover:bg-indigo-800 hover:text-white rounded-full transition-all duration-200'>
                    {
                        data.is_open ? "Close Semester" : "Open Semester"
                    }
                </button>
            </div>

        </div>
    )
}

export default SemesterOpenClose