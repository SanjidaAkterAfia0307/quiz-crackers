import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { CorrectContext } from '../../layout/Main';

const Option = ({ option, correct }) => {
    // console.log(correctAnswer)
    // console.log(option)
    const Correct=useContext(CorrectContext)

    return (
        <div className='border-2 m-2 rounded-md p-4 border-blue-200 hover:shadow-md text-lg font-medium text-blue-500'>
            <p onClick={() => option === correct ?   toast(`Correct Answer` , {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
             : toast(`Wrong Answer`,{
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"})}>{option}</p>
        </div>
    );
};

export default Option;