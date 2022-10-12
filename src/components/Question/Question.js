import React, { useState } from 'react';
import Option from '../Option/Option';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

const Question = ({ questions }) => {

    const { options, id, question, correctAnswer } = questions

    const[ans,setAns]=useState(false)
    
    return (
        <div className='shadow-md lg:mx-56 my-16 md:p-8 px-2 py-6 border-4 border-blue-400 rounded-2xl'>
            <div className='grid grid-cols-6 '>
                <div className='col-span-5 text-center'>
                <h1 className='text-blue-400  font-medium md:text-2xl text-lg mb-8'>{question}</h1>
                <p className={`text-blue-400  font-medium md:text-xl mb-8 ${ans===true ? "block":"hidden"}`} ><span className='text-blue-800'>Correct Answer : </span> {correctAnswer}</p>
                </div>
                <div className='md:ml-20 '>
                <FontAwesomeIcon onClick={()=> setAns(!ans) } icon={faEye} className=" text-sky-700"></FontAwesomeIcon>
                </div>
            </div>
            {
                options.map(option => <Option  option={option} correct={correctAnswer}></Option>)
            }
        </div>
    );
};

export default Question;