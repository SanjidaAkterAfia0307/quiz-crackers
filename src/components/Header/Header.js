import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../logo.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Header = () => {


    return (
        <div className="navbar flex flex-col md:flex-row p-8  bg-base-100 bg-gradient-to-br from-cyan-500 to-blue-400">
            <div className="flex-1">
                <img className='md:w-20 w-8 rounded-full' src={logo} alt="" />
                <p className="btn btn-ghost normal-case text-2xl font-semibold text-white md:text-3xl">Quiz Hacker !</p>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link className={`md:ml-6 p-2 font-semibold md:text-xl text-slate-100 hover:underline underline-offset-2 `} to="/">Home</Link></li>
                    <li><Link className={`md:ml-6 p-2 font-semibold md:text-xl text-slate-100 hover:underline underline-offset-2 `} to="/topics">Topics</Link></li>
                    <li><Link className={`md:ml-6 p-2 font-semibold md:text-xl text-slate-100 hover:underline underline-offset-2 `} to="/statistics">Statistics</Link></li>
                    <li><Link className={`md:ml-6 p-2 font-semibold md:text-xl text-slate-100 hover:underline underline-offset-2 `} to="/blog">Blog</Link></li>
                </ul>
            </div>
        </div>
    )




};

export default Header;