import React from 'react'
import { CiFilter } from 'react-icons/ci'
import Location from './Location'
import Salary from './Salary'
import EmploymentType from '../components/EmploymentType'
import Experience from './Experience'

    const Sidebar = ({handleOnClick, handleSelectCategory, handleSelected}) => {
    return (
        <div className='space-y-2  '>
        <div className='mb-2 flex space-x-1'>
            <CiFilter className='my-1 text-lg'/>
             <h3 className='text-lg text-primary/70 font-semibold mb-2'>Filters</h3>
        </div>
        <Experience  handleSelected={handleSelected} handleSelectCategory={handleSelectCategory}/>
        <Location handleSelected={handleSelected} handleSelectCategory={handleSelectCategory}/>
        <Salary handleOnClick={handleOnClick} handleSelectCategory={handleSelectCategory} />
        <EmploymentType handleOnClick={handleOnClick} handleSelectCategory={handleSelectCategory} />
        </div>
    )
    }

    export default Sidebar