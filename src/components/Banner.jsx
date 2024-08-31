import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
const Banner = ({handleQueryChange, query}) => {
   
  return (
    <div className='max-w-screen-2xl container  mt-20 mx-auto md:px-12 lg:px-24 px-6 md:py-10 pt-14 pb-5'>
        <h1 className='text-5xl font-bold text-primary mb-3 '>
            Find your <span className='text-blue  inline-flex flex-col'>dream career</span> today
        </h1>
        <p className='text-lg text-black/70 md:mb-8 mb-6'>
            Thousands of internships and jobs in the various sectors are waiting for you.
        </p>
        <form>
            <div className=' '>
                <div className="flex md:rounded-s-md rounded shadow-sm ring-1  ring-gray-400  
                    focus-within:ring-blue md:w-1/2 w-full ">
                    <input type="text" name='title' id='title' placeholder='What position are you looking for ?' className='
                    block flex-1 border-0  bg-transparent py-2.5 pl-8  text-gray-900 placeholder:text-gray-400 focus:right-0 
                    sm:text-sm sm:leading-6' 
                    value={query}
                    onChange={handleQueryChange}/>
                    <FiSearch className="absolute mt-3 ml-2 text-gray-400"/>
                </div>
            </div>
        </form>

       
    </div>
  )
}

export default Banner