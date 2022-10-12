import React from 'react';
import { Link } from 'react-router-dom';
import homeCover from "../../homeCover.png"
const Home = () => {
    return (
        <div>
            <h2 className='md:text-6xl text-2xl font-semibold text-cyan-500 text-center md:my-8 mt-36'>Welcome to our journey !!!</h2>
            
            <div className='md:flex block p-12 justify-between'>
            <img className='sm:w-full md:w-72 lg:w-full' src={homeCover} alt="" />
                <div className='md:px-24'>
                <h4 className='md:text-4xl text-xl font-semibold text-slate-800 my-8'>Get ready for your Career !</h4>
                <p className='text-gray-800 text-xl'>It's time to get ready for achieving your goal.We are providing you with some important life-leading and interview question.So,check it out now!</p>
                <div className='text-center mt-8'>
                <Link to="/topics" className='md:px-16 py-3 px-4  rounded-lg md:text-xl bg-slate-800 text-white'>Get Started</Link>
                </div>
                </div>
            </div>
            
        </div>
    );
};

export default Home;