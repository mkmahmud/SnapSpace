import React from 'react';
import contentImage from '../../../Assets/Group 264.png'

const Content = () => {
    return (
        <div className=' bg-[#1F2C56] py-20 text-white'>
            <div className="content-head w-1/2 text-left px-20" >
                <p className='text-xl'>
                    <span><b>SnapSpace</b> is an auto-generative design platform.</span> <br />  <br />

                    It creates bespoke floorplans based on your specific <br />
                    workplace requirements by utilising its deep <br /> learning from its extensive data set of the best <br />
                    quality floorplans.</p>
            </div>
            <div className="content-body flex justify-between py-40 items-center">
                <div className="left w-1/2 px-20">
                    <img src={contentImage} className='block m-auto' alt="" />
                </div>
                <div className="Right w-1/2">
                    <div className="block border-b-2 text-left py-8 my-10 border-[#8DAEFF]">
                        <h2 className='text-[36px]'>Bespoke layouts</h2>
                        <p className='text-[20px] w-1/2'>Produces layouts that match your precise requirements</p>
                    </div>
                    <div className="block border-b-2 text-left py-8 my-10 border-[#8DAEFF]">
                        <h2 className='text-[36px]'>Space efficiency</h2>
                        <p className='text-[20px] w-1/2'>Through smart analysis, SnapSpace can produce the most efficient layout ensuring maximum value from the space

                        </p>
                    </div>
                    <div className="block border-b-2 text-left py-8 my-10 border-[#8DAEFF]">
                        <h2 className='text-[36px]'>Fast turnaround</h2>
                        <p className='text-[20px] w-1/2'>Quickly does the heavy lifting of fitting everything into the space giving you more time to focus on the key decision.

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;