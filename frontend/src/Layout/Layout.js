import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const Layout = () => {
    return (
        <div className='bg-slate-200 w-full h-screen'>
            <Navbar />
            <div className='flex h-[calc(100%-48px)]'>
                <Sidebar />
                <div className="flex-1 p-4 overflow-y-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout