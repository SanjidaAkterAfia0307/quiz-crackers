import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { CorrectContext, WrongContext } from '../../layout/Main';
import Question from '../Question/Question';

const Quiz = () => {
    const TopicName=useLoaderData().data.name
    // console.log(TopicName)
    const allQuestoins=useLoaderData().data.questions
    // console.log(allQuestoins)
   
    const [Correct,setCorrect]=useContext(CorrectContext)
    const [Wrong,setWrong]=useContext(WrongContext)
    let message;
    if(Correct===4){
        message=<p>Well done !</p>
    }
    return (
        <div className='md:grid md:grid-cols-5  gap-6 p-12 flex flex-col-reverse'>
            <div className='col-span-4'>
            <div className='text-center'>
            <h2 className='text-blue-600 font-medium text-4xl mb-8'>Quiz of  {TopicName}</h2>
            </div>
            {
                
                allQuestoins.map(questions=><Question key={questions.id} questions={questions}></Question>)
            }
            </div>
            <div className='  rounded-2xl mb-8 lg:h-96 h-56 lg:w-full w-48 bg-gradient-to-t from-cyan-500 to-blue-500 lg:p-12 p-6'>
                <div className=' text-center'>
                <h2 className='lg:text-4xl font-semibold text-white'>View Chart</h2>
                </div>
                <div className='mt-8  text-center lg:text-xl text-white font-medium'>
                <p>Correct Answer : {Correct} </p>
                <p>Wrong Answer : {Wrong} </p>
                {
                    message
                }
                </div>
            </div>

        </div>
    );
};

export default Quiz;