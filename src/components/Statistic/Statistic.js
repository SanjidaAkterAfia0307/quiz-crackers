import React from 'react';
import { Link } from 'react-router-dom';

const Statistic = ({statistic}) => {
    const {logo,name,total,id}=statistic
    return (
        <div className='shadow-lg bg-gradient-to-b from-cyan-700 to-blue-800 rounded-2xl p-4 w-96 text-white'>
            <img className='w-full h-56' src={logo} alt="" />
            <div>
            <h4 className='py-2 text-2xl font-bold'>{name}</h4>
            <p className=''>Total Questions : {total}</p>
            
            </div>
        </div>
    );
};

export default Statistic;