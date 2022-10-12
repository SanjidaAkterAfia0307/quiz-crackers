import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Topic = ({topic}) => {
    console.log(topic)
    const {logo,name,total,id}=topic
    return (
        <div className='shadow-lg bg-gradient-to-b from-cyan-700 to-blue-800 rounded-2xl p-4 lg:w-96 text-white'>
            <img className='w-full h-56' src={logo} alt="" />
            <div>
            <h4 className='py-2 text-2xl font-bold'>{name}</h4>
            <p className=''>Total Questions : {total}</p>
            <div className='my-8  text-center'>
                <Link to={`/topic/${id}`} className='text-white bg-opacity-80 bg-slate-800 font-bold rounded-xl  py-2 px-10 lg:px-24'>Start Quiz  <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Link>
            </div>
            </div>
        </div>
    );
};

export default Topic;