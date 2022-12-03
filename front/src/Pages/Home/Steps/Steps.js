import React from 'react';
import PrimaryButton from '../../../Componentes/Button/PrimaryButton';
import Frame from '../../../Assets/Frame.png'
import Frame1 from '../../../Assets/Frame1.png'
import Frame2 from '../../../Assets/Frame2.png'

const Steps = () => {
    return (
        <div className='step bg-[#8DAEFF]'>
            <h2 className='text-[#1F2C56] text-[60px] font-bold py-20'>All it takes is 3 easy steps</h2>
            <div className="steps flex justify-evenly py-15 sm:block">
                <div className="singelStep sm:py-10">
                    <img className='block m-auto' src={Frame} alt="" />
                    <h3 className='py-5 text-[30px] text-[#1F2C56] font-bold'>Upload your <br /> building floor plan</h3>
                </div>
                <div className="singelStep sm:py-10">
                    <img className='block m-auto' src={Frame1} alt="" />
                    <h3 className='py-5 text-[30px] text-[#1F2C56] font-bold'>Input your workspace <br /> requirements</h3>
                </div>
                <div className="singelStep sm:py-10">
                    <img className='block m-auto' src={Frame2} alt="" />
                    <h3 className='py-5 text-[30px] text-[#1F2C56] font-bold'>Receive a bespoke <br /> layout</h3>
                </div>
            </div>
            <div className='py-10'>
                <PrimaryButton path='/' content='Start creating'></PrimaryButton>
            </div>
        </div>
    );
};

export default Steps;