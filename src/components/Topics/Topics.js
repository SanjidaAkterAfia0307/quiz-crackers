import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topics=useLoaderData().data
    console.log(topics)
    return (
        <div className=' grid grid-cols-4 gap-20 px-20 my-20'>
            {
                topics.map(topic=><Topic key={topic.id} topic={topic}></Topic>)
            }
        </div>
    );
};

export default Topics;