import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-[#1F2C56] h-80'>
            <footer className="footer px-10 py-20  border-t text-base-content ">
                <div className="items-center grid-flow-col">
                    <h1 className='text-[80px] text-[#FFFFFF] font-bold'>SnapSpace</h1>
                </div>
                <div className="md:place-self-center md:justify-self-end sm:py-10">
                    <div className="grid grid-flow-col gap-4">
                        <Link className='text-white'><u>Get In touch</u></Link>
                        <Link to='/about' className='text-white'><u>About </u> Us</Link>
                        <Link className='text-white'><u>Terms</u></Link>
                        <Link className='text-white'><u>Privacy</u></Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;