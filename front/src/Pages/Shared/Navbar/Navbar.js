import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../../Componentes/Button/PrimaryButton';

const Navbar = () => {
    // Handel mobile Nav
    const [mobileNav, setMobileNav] = useState(false);

    const menus = <>
        <li><Link className='font-bold'>Get in touch</Link></li>
        <li><Link className='font-bold'><button className='bg-green-300 py-2 px-5 bg-[#FCE72D] rounded-full'>Start Createing</button></Link></li>
        <li><Link to='/login' className='font-bold'><button className='bg-green-300 py-2 px-5 bg-[#FFFFFF] rounded-full'>Log In</button></Link></li>

    </>

    const handelMobileNav = () => {
        setMobileNav(!mobileNav)
    }

    return (
        <div className="navbar lg:px-20 ">
            <div className="navbar-start justify-between w-full">

                <Link className=" normal-case text-xl sm:text-2xl text-[#1F2C56] font-bold text-4xl">SnapSpace</Link>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden" onClick={handelMobileNav}>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </label>
                    <div className={`dropdown-menu bg-yellow-400 fixed w-full h-screen top-0 left-0 ${!mobileNav ? 'hidden' : ''}`} >
                        <div className="navmobilehead flex justify-between p-5  items-center">
                            <Link className=" normal-case text-xl text-[#1F2C56] font-bold text-4xl">SnapSpace</Link>

                            <button onClick={handelMobileNav}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div>
                            <ul className='text-left mt-[10vh] ml-5'>

                                <li><Link className='text-[24px] font-bold'>Get in touch</Link></li>
                                <li><Link className='text-[24px] font-bold'>About us</Link></li>
                                <li><Link className='text-[24px] font-bold'>Terms</Link></li>
                                <li><Link className='text-[24px] font-bold'>Privecy</Link></li>
                            </ul>

                        </div>
                        <div>
                            <ul className='flex justify-center items-end'>
                                <li><Link to='/login' className='font-bold'><button className='py-2 mx-2 px-5 bg-[#FFFFFF] text-[#1F2C56] rounded-full'>Log In</button></Link></li>
                                <li><Link className='font-bold'><button className='bg-[#1F2C56] py-2 mx-2 px-5 text-[white] rounded-full'>Start Createing</button></Link></li>

                            </ul>
                        </div>

                    </div>

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