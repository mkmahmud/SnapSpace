import React from 'react';
import banarimage  from '../../../Assets/Illustration.png'

const Banar = () => {
    return (
        <div className=" py-20">
            
            <div className="xl:flex justify-between items-center md:block">
                <div className='text-left px-20'>
                    <h1 className="text-5xl font-bold">We believe <br />
                        Artificial Intelligence <br /> 
                        will revolutionise <br />
                        how workplaces <br />
                        are designed</h1>
                    <p className="py-6">We have built an AI driven generative design platform that will create floorplans based on your specific requirements.</p>
                    <button className='bg-green-300 py-2 px-5 bg-[#FCE72D] rounded-full font-bold'>Start Createing</button>
                </div>
                <img src={banarimage} className="" alt='' />
            </div>
        </div>
    );
};

export default Banar;