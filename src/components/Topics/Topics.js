import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topics=useLoaderData().data

    return (
        <div className=' grid  lg:grid-cols-4 md:grid-cols-2  md:gap-20 gap-6 md:px-20 p-10 my-20'>
            {
                topics.map(topic=><Topic key={topic.id} topic={topic}></Topic>)
            }
        </div>
    );
};

export default Topics;