import React from 'react'
import { Link } from 'react-router-dom'
import error from "../../error.jpg"
const ErrorPage = () => {
  return (
    <section className='flex items-center h-screen p-16  text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
     
        <div className='max-w-md text-center'>
          <div>
            <img src={error} alt="" />
          </div>
          <h2 className='mb-8 font-bold text-5xl text-gray-500'>
            <span className='sr-only'>Error</span>404
          </h2>
          <p className='text-2xl font-semibold md:text-3xl mb-8'>
            Sorry, couldn't find this page.
          </p>
          <Link to='/' className='px-8 py-3 text-white font-semibold rounded-md bg-sky-600 text-gray-900'>Back to homepage</Link>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage