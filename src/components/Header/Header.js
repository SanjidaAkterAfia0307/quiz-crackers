import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../logo.jpg"
const Header = () => {
    return (
        <div className='flex justify-between items-center px-20 m-10'>
            <div className='flex items-center'>
                <img className='w-20' src={logo} alt="" />
                <h3 className='text-5xl font-semibold text-sky-600'>Quiz Hacker !</h3>
            </div>
            <div>
            <Link className='ml-6 font-semibold text-xl text-slate-700' to="/">Home</Link>
            <Link className='ml-6 font-semibold text-xl text-slate-700' to="/topics">Get Started</Link>
            <Link className='ml-6 font-semibold text-xl text-slate-700' to="/statistics">Statistics</Link>
            <Link className='ml-6 font-semibold text-xl text-slate-700' to="/blog">Blog</Link>
        </div>
        </div>
    );
};

export default Header;