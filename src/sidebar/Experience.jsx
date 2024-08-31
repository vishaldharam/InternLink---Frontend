import React, { useState } from 'react'
import Inputfield from '../components/Inputfield'

const Experience = ({handleSelectCategory, handleSelected}) => {
    return (
        <div>
            <h4 className='text-md text-primary hidden medium:flex font-medium mb-2  px-4'>
                Experience
            </h4>
            <div className='hidden medium:flex flex-col space-y-3 mb-6 px-4'>
                <Inputfield handleSelectCategory={handleSelectCategory} 
                    value="0"
                    title="Fresher"
                    name="test"
                />
                  <Inputfield handleSelectCategory={handleSelectCategory} 
                    value="1"
                    title="1 Year"
                    name="test"
                />
                  <Inputfield handleSelectCategory={handleSelectCategory} 
                    value="2"
                    title="2 Years"
                    name="test"
                />
                  <Inputfield handleSelectCategory={handleSelectCategory} 
                    value="5"
                    title="> 5 Years"
                    name="test"
                />
            </div>
           
            
        </div>
      )
}

export default Experience