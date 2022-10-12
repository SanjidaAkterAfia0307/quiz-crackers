import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../logo.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { getOpen } from '../../utilities/fakedb';

const Header = () => {
    
    // const [open,setOpen]=useState()
    // useEffect(()=>{
    //     getOpen()
    // },[])
    // return (
    //     <div className='flex justify-between items-center md:px-20  md:py-12 rounded-b-md  bg-gradient-to-br from-cyan-500 to-blue-400'>
    //         <div className='flex items-center p-4'>
    //             <img className='md:w-20 w-8 rounded-full' src={logo} alt="" />
    //             <h3 className='lg:text-5xl text-xl ml-4 font-semibold text-slate-100'>Quiz Hacker !</h3>
    //         </div>
    //         <div className={`${open ? "block absolute top-14  bg-gradient-to-br to-cyan-500 from-blue-400":"hidden "} md:block `}>
    //             <Link className={`ml-6 font-semibold text-xl text-slate-100 hover:underline underline-offset-2 `} to="/">Home</Link>
    //             <Link className={`ml-6 font-semibold text-xl text-slate-100 hover:underline underline-offset-2 `} to="/topics">Topics</Link>
    //             <Link className={`ml-6 font-semibold text-xl text-slate-100 hover:underline underline-offset-2 `} to="/statistics">Statistics</Link>
    //             <Link className={`ml-6 font-semibold text-xl text-slate-100 hover:underline underline-offset-2 `} to="/blog">Blog</Link>
    //         </div>
    //             <FontAwesomeIcon className='text-white w-16 flex md:hidden' onClick={()=>setOpen(!open)} icon={faBars}></FontAwesomeIcon>
    //     </div>

    // );






return(
    <div className="navbar flex flex-col md:flex-row p-8  bg-base-100 bg-gradient-to-br from-cyan-500 to-blue-400">
  <div className="flex-1">
  <img className='md:w-20 w-8 rounded-full' src={logo} alt="" />
    <p className="btn btn-ghost normal-case md:text-3xl">Quiz hacker !</p>
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