import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../logo.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { getOpen } from '../../utilities/fakedb';

const Header = () => {
    
    const [open,setOpen]=useState()
    useEffect(()=>{
        getOpen()
    },[])
    return (
        <div className='flex justify-between items-center md:px-20  md:py-12 rounded-b-md  bg-gradient-to-br from-cyan-500 to-blue-400'>
            <div className='flex items-center p-4'>
                <img className='md:w-20 w-8 rounded-full' src={logo} alt="" />
                <h3 className='md:text-6xl text-xl ml-4 font-semibold text-slate-100'>Quiz Hacker !</h3>
            </div>
            <div className={`${open ? "block absolute top-14  bg-gradient-to-br to-cyan-500 from-blue-400":"hidden "} md:block `}>
                <Link className={`ml-6 font-semibold text-xl text-slate-100 hover:underline underline-offset-2 sm:${open ? "block":"hidden"}`} to="/">Home</Link>
                <Link className={`ml-6 font-semibold text-xl text-slate-100 hover:underline underline-offset-2 sm:${open ? "block":"hidden"}`} to="/topics">Topics</Link>
                <Link className={`ml-6 font-semibold text-xl text-slate-100 hover:underline underline-offset-2 sm:${open ? "block":"hidden"}`} to="/statistics">Statistics</Link>
                <Link className={`ml-6 font-semibold text-xl text-slate-100 hover:underline underline-offset-2 sm:${open ? "block":"hidden"}`} to="/blog">Blog</Link>
            </div>
                <FontAwesomeIcon className='text-white w-16 flex md:hidden' onClick={()=>setOpen(!open)} icon={faBars}></FontAwesomeIcon>
        </div>

    );
};

export default Header;