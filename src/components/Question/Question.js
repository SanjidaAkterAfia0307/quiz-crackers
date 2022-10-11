import React, { useState } from 'react';
import Option from '../Option/Option';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

const Question = ({ questions }) => {
    console.log(questions)
    const { options, id, question, correctAnswer } = questions
    // console.log(correctAnswer)
    const[ans,setAns]=useState(false)
    
    return (
        <div className='shadow-md mx-56 my-16 p-8 border-4 border-blue-400 rounded-2xl'>
            <div className='grid grid-cols-6 '>
                <div className='col-span-5 text-center'>
                <h1 className='text-blue-400  font-medium text-2xl mb-8'>{question}</h1>
                <p className={`text-blue-400  font-medium text-xl mb-8 ${ans===true ? "block":"hidden"}`} ><span className='text-blue-800'>Correct Answer : </span> {correctAnswer}</p>
                </div>
                <FontAwesomeIcon onClick={()=> setAns(!ans) } icon={faEye} className="ml-24 text-sky-700"></FontAwesomeIcon>
            </div>
            {
                options.map(option => <Option option={option} correct={correctAnswer}></Option>)
            }
        </div>
    );
};

export default Question;