import React from 'react';
import { Link } from 'react-router-dom';

const PrimaryButton = ({path, content, bg}) => {
    return (
        <Link to={path} className='font-bold'><button className={`py-2 px-5 bg-[${bg?.bg || '#FCE72D'}] text-black my-5 rounded-full`}>{content}</button></Link>
    );
};

export default PrimaryButton;