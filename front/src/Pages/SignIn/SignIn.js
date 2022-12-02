import React, { useEffect, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {


    const [activebtn, setActivebtn] = useState(false)

    const initialState = {
        email: '',
        password: ''
    }

    const reducer = (state, action) => {


        switch (action.type) {
            case 'input':
                return {
                    ...state,
                    [action.payload.name]: action.payload.value,
                }
            default: return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        if (state.email && state.password) {
            setActivebtn(true)
        } else {
            setActivebtn(false)
        }
    }, [state])


    return (
        <div className='bg-[#1F2C56] text-white text-left px-40 py-20 h-[80vh]'>
            <div className="login w-[400px]">
                <h2 className='text-[#C6D6FF] text-4xl py-2'>Log In</h2>
                <p className='py-4'>Please enter your details to log in</p>
                <form>
                    <input type="email" placeholder="Email" onChange={(e) => dispatch({ type: 'input', payload: { name: e.target.name, value: e.target.value } })} name='email' className="bg-[#4C5678] input input-bordered w-full my-2" /> <br />
                    <input type="password" placeholder="Password" onChange={(e) => dispatch({ type: 'input', payload: { name: e.target.name, value: e.target.value } })} name='password' className="bg-[#4C5678] input input-bordered w-full my-2" /> <br />
                    <p className='text-sm py-4'>I don’t have an account. <Link to='/signup'>Sign up here</Link></p>

                    {
                        activebtn ? <button type='submit' className='bg-[#8DAEFF] text-[#1F2C56] px-10 text-xs py-3 rounded-full'>Next</button> : <button className='bg-[#79809A] text-[#1F2C56] px-10 text-xs py-3 rounded-full' disabled>Next</button>
                    }
                </form>

            </div>
        </div>
    );
};

export default SignIn;