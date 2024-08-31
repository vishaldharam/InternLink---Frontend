import React from 'react'
import { BiRupee } from 'react-icons/bi'
import { BsPeople, BsPeopleFill } from 'react-icons/bs'
import { CiCalendar, CiLocationOn } from 'react-icons/ci'
import { FaIndianRupeeSign } from 'react-icons/fa6'
import { FiCalendar, FiClock, FiMapPin } from 'react-icons/fi'
import { IoTrendingUpSharp } from 'react-icons/io5'
import { TiMediaEject } from 'react-icons/ti'
import { Link } from 'react-router-dom'

const Card = ({data}) => {
    const {jobStream, jobRole,  jobStipend, jobCity,
         createdAt, jobExperienceNeed, jobCompany, jobQuestionSets, jobType} = data
         const paramData = encodeURIComponent(JSON.stringify(data._id))
  return (
    <div className='min-w-[313px] min-h-[300px] shadow-md border bg-white rounded-xl mb-10 cursor-pointer'>
    <div className='p-4 flex flex-col space-y-6 justify-between '>
        <div className="flex items-start">
            <div className='border py-1 px-1.5 flex space-x-1 rounded-md justify-start text-base'><IoTrendingUpSharp className='text-md text-sky-800'/> <span className='text-sm'> Actively hiring</span></div>
        </div>
        <div className='flex justify-start space-x-2 border-b py-2'>
             <div className='flex flex-col space-y-1'>
                <h4 className='text-primary text-xl font-semibold'>{jobRole + " " + jobType }</h4>
                <p className='text-[16px] font-bold text-primary/70'>{jobCompany}</p>
            </div>                   
        </div>
        <div>
            <ul className='md:flex-row flex flex-col  text-[16px] space-y-2 justify-between'>
                <li className='md:flex-col flex space-x-1  text-primary/60 font-bold'><div className='text-sm font-medium flex flex-col  md:flex-row space-x-1'><CiLocationOn className='md:text-sm md:hidden  mt-1 text-xl font-semibold'/> <span className='hidden md:flex'>Location:</span></div> <h6 className=''>{jobCity}</h6> </li>
                <li className='md:flex-col flex space-x-1  text-primary/60 font-bold'><div className='text-sm font-medium flex flex-col  md:flex-row space-x-1'><BsPeopleFill className='md:text-sm md:hidden  mt-1 text-xl font-semibold'/> <span className='hidden md:flex'>No of Openings:</span></div> <h6 className='mt-0.5'> 5</h6> </li>
                <li className='md:flex-col flex space-x-1  text-primary/60 font-bold'><div className='text-sm font-medium flex flex-col  md:flex-row space-x-1'><TiMediaEject className='md:text-sm md:hidden  mt-1 text-xl font-semibold'/> <span className='hidden md:flex'>Type:</span></div> <h6 className=''>Full-time</h6> </li>
                <li className='md:flex-col flex space-x-1  text-primary/60 font-bold'><div className='text-sm font-medium flex flex-col  md:flex-row justify-center space-x-1 '><BiRupee className='md:text-sm   hidden mt-1 text-xl font-semibold'/> <span className='hidden md:flex '>Stipend:</span></div> <h6 className=''>{"₹  " + jobStipend  } </h6> </li>
                <li className='md:flex-col flex space-x-1  text-primary/60 font-bold'><div className='text-sm font-medium flex flex-col  md:flex-row space-x-1'><CiCalendar className='md:text-sm  md:hidden mt-1 text-xl font-semibold'/> <span className='hidden md:flex'>Last Date:</span></div> <h6 className=''>{createdAt.substr(0,10)}</h6> </li>
               
            </ul>
        </div>
        <div className='flex  justify-between py-2 '>
            <div className='bg-slate-100 px-1.5 py-1 rounded-md text-primary/80 text-[14px]'><span>Internship</span></div>
           <a href={`/details?data=${paramData}`} target='_blank'> <div className='cursor-pointer text-white  bg-blue flex justify-start rounded-md font-semibold'><span className=' text-sm px-2.5 py-1.5 rounded-md'>View Details</span></div></a>
        </div>

    </div>
</div>
  )
}

export default Card