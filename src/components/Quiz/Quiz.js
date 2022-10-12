import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const TopicName=useLoaderData().data.name
    console.log(TopicName)
    const allQuestoins=useLoaderData().data.questions
    // console.log(allQuestoins)
    return (
        <div className='md:grid grid-cols-5 p-12'>
            <div className='col-span-4'>
            <div className='text-center'>
            <h2 className='text-blue-600 font-medium text-4xl mb-8'>Quiz of  {TopicName}</h2>
            </div>
            {
                
                allQuestoins.map(questions=><Question key={questions.id} questions={questions}></Question>)
            }
            </div>
            {/* <div className='  rounded-2xl h-96 bg-gradient-to-t from-cyan-500 to-blue-500 p-12'>
                <div className=' text-center'>
                <h2 className='text-2xl font-semibold text-white'>View Chart</h2>
                </div>
                <p>Correct Answer : </p>
            </div> */}

        </div>
    );
};

export default Quiz;