import { fetchSignInMethodsForEmail } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import Staffs from './Staffs/Staffs';

const AboutUs = () => {

    const [users, setUser] = useState([]);


    useEffect(()=>{
        fetch('user.json')
         .then(res => res.json())
         .then(data => setUser(data))
    },[])

    

    return (
        <div>
            <div className="lg:w-1/2 sm:w-full lg:p-10">
                <h2 className='text-[64px] text-left font-bold'>The SnapSpace <br /> team behind the AI</h2>
            </div>
            <div className="staffs lg:grid grid-cols-3 gap-10 sm:block p-20">
                {
                    users.map(user => <Staffs key={user._id} data={user}></Staffs>)
                }
            </div>
        </div>
    );
};

export default AboutUs;