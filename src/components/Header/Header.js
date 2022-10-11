import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../logo.jpg"
const Header = () => {
    return (
        <div className='flex justify-between items-center px-20  py-12 rounded-b-md  bg-gradient-to-br from-cyan-500 to-blue-400'>
            <div className='flex items-center'>
                <img className='w-20 rounded-full' src={logo} alt="" />
                <h3 className='text-6xl ml-4 font-semibold text-slate-100'>Quiz Hacker !</h3>
            </div>
            <div>
            <Link className='ml-6 font-semibold text-xl text-slate-100 hover:underline underline-offset-2' to="/">Home</Link>
            <Link className='ml-6 font-semibold text-xl text-slate-100 hover:underline underline-offset-2' to="/topics">Topics</Link>
            <Link className='ml-6 font-semibold text-xl text-slate-100 hover:underline underline-offset-2' to="/statistics">Statistics</Link>
            <Link className='ml-6 font-semibold text-xl text-slate-100 hover:underline underline-offset-2' to="/blog">Blog</Link>
        </div>
        </div>
    );
};

export default Header;