import React from 'react';
import PrimaryButton from '../../../Componentes/Button/PrimaryButton';

const CreateLayout = () => {
    return (
        <div className='bg-[#8DAEFF] py-40'>
            <h2 className='text-[#1F2C56] text-[60px] font-bold py-10'>Create your layout now</h2>
            <p>All you need is a floor plan to get started</p>
            <div>
                <PrimaryButton path='/' content='Start creating'></PrimaryButton>
            </div>
        </div>
    );
};

export default CreateLayout;