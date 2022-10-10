import React from 'react';
import homeCover from "../../homeCover.png"
const Home = () => {
    return (
        <div>
            <h2 className='text-6xl font-semibold text-cyan-500 text-center my-8'>Welcome to our journey !!!</h2>
            
            <div className='flex p-12 justify-between'>
            <img src={homeCover} alt="" />
                <div className='px-24'>
                <h4 >Get ready for your Career!</h4>
                <p></p>
                </div>
            </div>
            
        </div>
    );
};

export default Home;