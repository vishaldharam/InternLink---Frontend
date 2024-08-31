import React from 'react'
import Button from './Button'
import Inputfield from '../components/Inputfield'

const Salary = ({handleOnClick,handleSelectCategory}) => {
  return (
    <div className='hidden medium:flex flex-col'>
        <h4 className='text-md text-primary/90 font-medium px-2 mb-2'>Desired montly minumum stiped</h4>
        {/* <div className='flex space-x-2'>
        <Button handleOnClick={handleOnClick} title={"Monthly"}/>
        <Button handleOnClick={handleOnClick} title={"Yearly"}/>
          </div> */}
       
        <div className='hidden medium:flex flex-col space-y-3 my-2 px-4'>
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
                value={30}
                title="Below 30k"
                name="test"
            />
            <Inputfield handleSelectCategory={handleSelectCategory} 
                value={15}
                title="₹ 60000"
                name="test"
            />
             <Inputfield handleSelectCategory={handleSelectCategory} 
                value={30}
                title="Above ₹100000"
                name="test"
            />
        </div>
             
    </div>
  )
}

export default Salary