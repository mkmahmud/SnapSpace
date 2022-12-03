import React from 'react';
import banarimage  from '../../../Assets/Illustration.png'
import PrimaryButton from '../../../Componentes/Button/PrimaryButton';

const Banar = () => {
    return (
        <div className=" lg:py-20 sm:py-0 overflow-hidden">
            
            <div className="xl:flex justify-between items-center md:block">
                <div className='text-left xl:px-20 sm:px-5 sm:py-10'>
                    <h1 className="text-5xl font-bold">We believe <br />
                        Artificial Intelligence <br /> 
                        will revolutionise <br />
                        how workplaces <br />
                        are designed</h1>
                    <p className="py-6">We have built an AI driven generative design platform that will create floorplans based on your specific requirements.</p>
                    <div>
                        <PrimaryButton path='/' content='Start Createing'></PrimaryButton>
                    </div>
                </div>
                <img src={banarimage} className="lg:w-full md:w-11/12 " alt='' />
            </div>
        </div>
    );
};

export default Banar;