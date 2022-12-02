import React from 'react';
import { Link } from 'react-router-dom';

const PrimaryButton = ({path, content}) => {
    return (
        <Link to={path} className='font-bold'><button className='bg-green-300 py-2 px-5 bg-[#FCE72D] text-black my-5 rounded-full'>{content}</button></Link>
    );
};

export default PrimaryButton;