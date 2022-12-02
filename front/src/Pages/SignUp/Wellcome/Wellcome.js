import React from 'react';
import { Link } from 'react-router-dom';
import wellcomeImage from '../../../Assets/Group 227.png'

const Wellcome = () => {
    return (
        <div className='bg-[#1F2C56] text-white flex items-center justify-center h-[80vh] '>
            <div className="wellcome ">
                <img src={wellcomeImage} className='block m-auto' alt="" />
                <h2 className='text-[40px] text-[#8DAEFF] font-bold'>You’re all registered</h2>
                <p className=' py-5'>Click ‘Start creating’ to begin your SnapSpace <br /> floorplan creation journey</p>
                
            </div>
        </div>
    );
};

export default Wellcome;