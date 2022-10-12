
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Statistic from '../Statistic/Statistic';
import Topic from '../Topic/Topic';
const Statistics = () => {
    const statistics=useLoaderData().data
   
    return (
        <div className=' grid  lg:grid-cols-4 md:grid-cols-2  md:gap-20 gap-6 md:px-20 p-10 my-20'>
            {
                statistics.map(statistic=><Statistic key={statistic.id} statistic={statistic}></Statistic>)
            }
        </div>
    );
};

export default Statistics;