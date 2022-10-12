import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { CorrectContext, WrongContext } from '../../layout/Main';

const Option = ({ option, correct }) => {
    // console.log(correctAnswer)
    // console.log(option)
    const [Correct,setCorrect]=useContext(CorrectContext)
    const [Wrong,setWrong]=useContext(WrongContext)


    const handleCorrect=()=>{
        console.log(option)
        if(option === correct ){
            setCorrect(Correct+1)
            toast(`Correct Answer` , {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        }else{
            setWrong(Wrong+1)
            toast(`Wrong Answer`,{
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"})

        }
    }

    return (
        <div className='border-2 m-2 rounded-md p-4 border-blue-200 hover:shadow-md text-lg font-medium text-blue-500'>
            <p onClick={handleCorrect }>{option}</p>
        </div>
    );
};

export default Option;