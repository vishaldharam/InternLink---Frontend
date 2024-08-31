import React, { useState } from 'react'
import Inputfield from '../components/Inputfield'

const Location = ({handleSelectCategory, handleSelected}) => {
   
  
  return (
    <div>
        <h4 className='text-md text-primary hidden medium:flex font-medium mb-2  px-4'>
            Location
        </h4>
        <div className='hidden medium:flex flex-col space-y-3 mb-6 px-4'>
        <label className="flex items-center space-x-2 cursor-pointer">
        <input
          type="checkbox"
          name="test"
          id='test'
          value="all"
          onChange={handleSelectCategory}
          className="form-checkbox h-4 w-4 text-blue-600 rounded-md"
        />
  <span className="text-primary/80 text-[15px]">{"All"}</span>
</label>
            <Inputfield handleSelectCategory={handleSelectCategory} 
                value="Banglore"
                title="Banglore"
                name="test"
            />
              <Inputfield handleSelectCategory={handleSelectCategory} 
                value="Pune"
                title="Pune"
                name="test"
            />
              <Inputfield handleSelectCategory={handleSelectCategory} 
                value="Mumbai"
                title="Mumbai"
                name="test"
            />
              <Inputfield handleSelectCategory={handleSelectCategory} 
                value="Hyderabad"
                title="Hyderabad"
                name="test"
            />
             <Inputfield handleSelectCategory={handleSelectCategory} 
                value="Gurgaon"
                title="Gurgaon"
                name="test"
            />
        </div>
        {/* Mobile location filter */}
        <div className='flex space-x-2 no-scrollbar   overflow-x-auto medium:hidden'>
          <button onClick={handleSelected} className={`py-1.5 px-5 border rounded-2xl hover:bg-blue hover:text-white border-primary/70'`}>All</button>
          <button className={`py-1.5 px-5 border rounded-2xl hover:bg-blue hover:text-white border-primary/70'`}>Location</button>
          <button className={`py-1.5 px-5 border rounded-2xl hover:bg-blue hover:text-white border-primary/70'`}>Position</button>
          <button className={`py-1.5 px-5 border rounded-2xl hover:bg-blue hover:text-white border-primary/70'`}>stipend</button>
          <button className={`py-1.5 px-5 border rounded-2xl hover:bg-blue hover:text-white border-primary/70'`}>Experience</button>
          <button className={`py-1.5 px-5 border rounded-2xl hover:bg-blue hover:text-white border-primary/70'`}>WFH</button>
        </div>

        
    </div>
  )
}

export default Location