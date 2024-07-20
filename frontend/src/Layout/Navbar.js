import React from 'react';
import { Images } from '../Constants/Images';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center h-12 w-full bg-white px-6 border-b'>
            <div className='flex gap-3 items-center'>
                <div>
                    <img src={Images.logo} alt="logo" className='size-8' />
                </div>
                <p className='bg-gradient-to-tr from-indigo-500 to-purple-500 text-transparent bg-clip-text'>National Institute Of Technology, Srinagar</p>
            </div>
            <div className="">

            </div>
            <div className="">
            </div>
        </div>
    );
};

export default Navbar;