import React, { useReducer, useState } from 'react';
import PrimaryButton from '../../Componentes/Button/PrimaryButton';
import Setp1 from './Setp1';
import Setp2 from './Setp2';

const Office_Questions = () => {

    const [show, setShow] = useState();

    const initialState = {
        desks: '',
        internalArea: '',
    };

    const reducer = (state, action) => {

    }

    const [state, dispatch] = useReducer(reducer, initialState);


    const ToggleData = () => {
        setShow(!show);
    };

    return (
        <div className='lg:flex bg-[#1F2C56] py-20'>
            <div className="left lg:w-1/5">
                <ul className="steps steps-vertical text-[#4C5678]">
                    <li className="step step-primary">Register</li>
                    <li className="step">Choose plan</li>
                    <li className="step">Purchase</li>
                    <li className="step">Receive Product</li>
                </ul>
            </div>
            <div className="right lg:w-4/5 text-white text-left" >
                <Setp1 dispatch={dispatch}></Setp1>
                <Setp2></Setp2>
            </div>
        </div>
    );
};

export default Office_Questions;