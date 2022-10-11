import React from 'react';
import { Link } from 'react-router-dom';
import homeCover from "../../homeCover.png"
const Home = () => {
    return (
        <div>
            <h2 className='text-6xl font-semibold text-cyan-500 text-center my-8'>Welcome to our journey !!!</h2>
            
            <div className='flex p-12 justify-between'>
            <img src={homeCover} alt="" />
                <div className='px-24'>
                <h4 className='text-4xl font-semibold text-slate-800 my-8'>Get ready for your Career !</h4>
                <p className='text-gray-800 text-xl'>It's time to get ready for achieving your goal.We are providing you with some important life-leading and interview question.So,check it out now!</p>
                <div className='text-center mt-8'>
                <Link to="/topics" className='px-16 py-3  rounded-lg text-xl bg-slate-800 text-white'>Get Started</Link>
                </div>
                </div>
            </div>
            
        </div>
    );
};

export default Home;