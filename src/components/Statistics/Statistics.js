
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Statistic from '../Statistic/Statistic';
import Topic from '../Topic/Topic';
const Statistics = () => {
    const statistics=useLoaderData().data
   
    return (
        <div className=' grid  md:grid-cols-4  md:gap-20  md:px-20 gap-2 px-4 my-20'>
            {
                statistics.map(statistic=><Statistic key={statistic.id} statistic={statistic}></Statistic>)
            }
        </div>
    );
};

export default Statistics;