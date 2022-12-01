import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const menus = <>
        <li><Link>Get in touch</Link></li>
        <li><Link><button className='bg-green-300 py-2 px-5 bg-[#FCE72D] rounded-full'>Start Createing</button></Link></li>
        <li><Link><button className='bg-green-300 py-2 px-5 bg-[#FFFFFF] rounded-full'>Log In</button></Link></li>

    </>

    return (
        <div className="navbar lg:px-20 ">
            <div className="navbar-start justify-between sm:w-full">

                <Link className=" normal-case text-xl text-[#1F2C56] font-bold text-4xl">SnapSpace</Link>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>

                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  bg-[#2ACE6F] text-center right-0">
                       {
                        menus
                       }
                    </ul>
                </div>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {
                        menus
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;