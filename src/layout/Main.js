import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';




export const CorrectContext = createContext(0)
export const WrongContext = createContext(0)

const Main = () => {
    const [Correct,setCorrect]=useState(0)
    const [Wrong,setWrong]=useState(0)


    const correctHandle=()=>{
       let newCorrect=Correct+1;
       setCorrect(newCorrect)
    }
    return (
        <CorrectContext.Provider value={correctHandle}>
            <div>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </CorrectContext.Provider>
    );
};

export default Main;