import React from 'react';

const Setp1 = ({dispatch}) => {
    return (
        <div className="firstSection">
            <div className=' py-5 '>
                <h2 className='text-[24px] py-2'>How many desks do you need?</h2>
                <input type="text" placeholder="Type" onChange={(e) => dispatch({ type: 'input', payload: { name: e.target.name, value: e.target.value } })} name='desks' className="lg:max-w-sm bg-[#4C5678] input input-bordered w-full my-2 " /> <br />
            </div>
            <div className=' py-5 '>
                <input type="checkbox" className="toggle toggle-lg" checked />
                <h2 className='text-[24px] py-2'>What is the net internal area of the office?</h2>
                <input type="text" placeholder="Type net internal area" onChange={(e) => dispatch({ type: 'input', payload: { name: e.target.name, value: e.target.value } })} name='internalArea' className="lg:max-w-sm bg-[#4C5678] input input-bordered w-full my-2 " /> <br />
            </div>
        </div>
    );
};

export default Setp1;