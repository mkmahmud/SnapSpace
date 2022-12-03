import React from 'react';

const Staffs = ({data}) => {

    const {name, title, des, image} = data;

    return (
        <div className='text-left sm:my-10'>
            <img src={image} className='w-80 h-80 rounded-full' alt="" />
            <h2 className='text-[24px] py-2 font-bold'>{name}</h2>
            <h2 className='text-[20px] py-2'>{title}</h2>
            <p className='w-3/4'>{des}</p>
        </div>
    );
};

export default Staffs;