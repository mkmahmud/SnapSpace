import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../Context/AuthContext/AuthContext';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  // Toast
  const success = (text) => toast.success(text);
  const errortoast = (text) => toast.error(text);
    // Context
    const { createUser } = useContext(UserAuth)


    // Navigate
    const navigate = useNavigate();

    const [activebtn, setActivebtn] = useState(false)

    const initialstate = {
        firstname: '',
        lastname: '',
        companyname: '',
        address: '',
        bestrole: '',
        snaptool: '',
        email: '',
        password: ''
    }


    const reducer = (state, action) => {
        switch (action.type) {
            case 'input':
                return {
                    ...state,
                    [action.payload.name]: action.payload.value
                }
            default: return state
        }

    }

    const [state, dispatch] = useReducer(reducer, initialstate);


    useEffect(() => {
        if (state.email && state.password && state.firstname && state.companyname && state.address) {
            setActivebtn(true)
        } else {
            setActivebtn(false)
        }
    }, [state])

    // handelRegister

    const handelRegister = (e) => {
        e.preventDefault();
        createUser(state.email, state.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                success('Registetion Successfull')
                setTimeout(function(){ navigate('/wellcome') },2000);
            })
            .catch((error) => {
                const errorMessage = error.message;
                if(errorMessage == 'Firebase: Error (auth/email-already-in-use).'){
                    errortoast('Email Already in Used')
                }
                // ..
            });
            
    }


    return (
        <div className='bg-[#1F2C56] text-white text-left px-40 py-20 '>
            <div className="login w-[400px]">
                <div className='py-5'>
                    <h2 className='text-[#C6D6FF] text-4xl py-2'>Welcome aboard</h2>
                    <p className='py-4'>Please enter your details using the fields below:</p>
                </div>
                <form>
                    <p className='text-[#C6D6FF] text-[14px]'>PERSONAL DETAILS</p>
                    <input type="text" placeholder="First Name" onChange={(e) => dispatch({ type: 'input', payload: { name: e.target.name, value: e.target.value } })} name='firstname' className="bg-[#4C5678] input input-bordered w-full my-2" /> <br />
                    <input type="text" placeholder="Last Name" onChange={(e) => dispatch({ type: 'input', payload: { name: e.target.name, value: e.target.value } })} name='lastname' className="bg-[#4C5678] input input-bordered w-full my-2" /> <br />
                    <input type="text" placeholder="Company Name" onChange={(e) => dispatch({ type: 'input', payload: { name: e.target.name, value: e.target.value } })} name='companyname' className="bg-[#4C5678] input input-bordered w-full my-2" /> <br />
                    <input type="text" placeholder="Type your company address or postcode" onChange={(e) => dispatch({ type: 'input', payload: { name: e.target.name, value: e.target.value } })} name='address' className="bg-[#4C5678] input input-bordered w-full my-2" /> <br />

                    <p className='text-[14px]'><u><Link>Enter address manually</Link></u></p>
                    <div className='py-5'>
                        <h2 className='text-[16px] py-2'>What best describes your role?</h2>
                        <select className="select w-full bg-[#4C5678] " name='bestrole' onChange={(e) => dispatch({ type: 'input', payload: { name: e.target.name, value: e.target.value } })}>
                            <option selected>Please Select</option>
                            <option>Homer</option>
                            <option>Marge</option>
                            <option>Bart</option>
                            <option>Lisa</option>
                            <option>Maggie</option>
                        </select>
                    </div>
                    <div className='py-5'>
                        <h2 className='text-[16px] py-2'>What would you use the SnapSpace tool for?</h2>
                        <select className="select w-full bg-[#4C5678] " name='snaptool' onChange={(e) => dispatch({ type: 'input', payload: { name: e.target.name, value: e.target.value } })}>
                            <option selected>Please Select</option>
                            <option>Homer</option>
                            <option>Marge</option>
                            <option>Bart</option>
                            <option>Lisa</option>
                            <option>Maggie</option>
                        </select>
                    </div>

                    <hr class="my-8 h-px bg-[#C6D6FF] border-0 dark:bg-gray-700" />

                    <div className='py-5'>
                        <p className='text-[#C6D6FF] text-[14px]'>Account DETAILS</p>
                        <input type="email" placeholder="Email" onChange={(e) => dispatch({ type: 'input', payload: { name: e.target.name, value: e.target.value } })} name='email' className="bg-[#4C5678] input input-bordered w-full my-2" /> <br />
                        <input type="password" placeholder="Password" onChange={(e) => dispatch({ type: 'input', payload: { name: e.target.name, value: e.target.value } })} name='password' className="bg-[#4C5678] input input-bordered w-full my-2" /> <br />

                    </div>


                    {
                        activebtn ? <button type='submit' onClick={handelRegister} className='bg-[#8DAEFF] text-[#1F2C56] px-10 text-xs py-3 rounded-full'>Register</button> : <button className='bg-[#79809A] text-[#1F2C56] px-10 text-xs py-3 rounded-full' disabled>Register</button>
                    }
                </form>

            </div>
        </div>
    );
};

export default SignUp;