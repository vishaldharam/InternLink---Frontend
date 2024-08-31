import React from 'react'
import TrendingCards from './trendingCards'
import { IoTrendingUpSharp } from 'react-icons/io5'
import { BiCalendar, BiLocationPlus, BiRupee } from 'react-icons/bi'
import { CiCalendar, CiLocationOn } from 'react-icons/ci'
import { GiDuration } from 'react-icons/gi'
import { TbTimeDuration0 } from 'react-icons/tb'
import { PiGreaterThan, PiGreaterThanBold, PiGreaterThanLight } from 'react-icons/pi'
import { Link } from 'react-router-dom'

const PopularJobs = ({userInternship}) => {
    
    

    return (
        <div className='max-w-screen-2xl container mx-auto  md:px-12 lg:px-24 px-8 md:py-8 py-8 bg-gray-50 pt-4 pb-5'>
            <div className='flex justify-between md:pr-4'>
                <div>   <p className='text-2xl  medium:hidden font-bold text-black mb-2 '>
                Latest Jobs </p>
            <p className='medium:flex text-2xl hidden font-bold text-black  '>
            Latest Jobs on InternLink </p></div>
            <div><Link to={'/internships'}><span className='text-base text-blue cursor-pointer'>View All Jobs</span></Link></div>
            </div>
         
            <div className='flex space-x-4  medium:py-6 py-2 overflow-x-auto '>

                <button className={`py-1.5   rounded-2xl medium:hidden`}>FILTERS:</button>
                <button className={`py-1.5   rounded-2xl medium:flex hidden`}>POPULAR FILTERS:</button>
                <button className={`py-1.5 px-5 border rounded-2xl border-blue hover:bg-blue hover:text-white border-primary/70'`}>All</button>
                <button className={`py-1.5 px-5 border rounded-2xl hover:bg-blue hover:text-white border-primary/70'`}>Location</button>
                <button className={`py-1.5 px-5 border rounded-2xl hover:bg-blue hover:text-white border-primary/70'`}>Position</button>
                <button className={`py-1.5 px-5 border rounded-2xl hover:bg-blue hover:text-white border-primary/70'`}>stipend</button>
                <button className={`py-1.5 px-5 border rounded-2xl hover:bg-blue hover:text-white border-primary/70'`}>Experience</button>
                <button className={`py-1.5 px-5 border rounded-2xl hover:bg-blue hover:text-white border-primary/70'`}>WFH</button>
            </div>


            <div className='flex space-x-6  overflow-x-auto no-scrollbar py-4 w-screen-2x'>
            {
                    userInternship && userInternship.map((job, i) => (
                        <div className='min-w-[313px] medium:min-h-[318px] border bg-white rounded-xl cursor-pointer' key={i}>
                            <div className='p-4 flex flex-col medium:space-y-4 space-y-2  justify-between '>
                                <div className="flex items-start">
                                    <div className='border py-1 px-1.5 flex space-x-1 rounded-md justify-start text-base'><IoTrendingUpSharp className='text-md text-sky-800'/> <span className='text-sm'> Actively hiring</span></div>
                                </div>
                                <div className='flex justify-start space-x-2 border-b py-2'>
                                     <div className='flex flex-col space-y-1'>
                                        <h4 className='text-primary/80 font-bold text-[18px] '>{job.jobRole}</h4>
                                        <p className='text-[14px] text-primary/70'>{job.jobCompany}</p>
                                    </div>                   
                                </div>
                                <div>
                                    <ul className='flex flex-col space-y-3 py-1'>
                                        <li className='flex space-x-1'> <CiLocationOn className='text-[16px] my-1'/> <span className='text-[15px] text-primary/80'>{job.jobCity}</span></li>
                                        <li className='flex space-x-1'> <BiRupee className='text-[16px] my-1'/> <span className='text-[15px] text-primary/80'>{job.jobStipend}</span></li>
                                        <li className='flex space-x-1'> <CiCalendar className='text-[16px] my-1'/> <span className='text-[15px] text-primary/80'>6 Months</span></li>
                                       
                                    </ul>
                                </div>
                                <div className='flex  justify-between pt-4'>
                                    <div className='bg-slate-100 px-1.5 py-1 rounded-md text-primary/80 text-[13px]'><span>Jobs</span></div>
                                    <a href={`/details?data=${encodeURIComponent(JSON.stringify(job))}`} target='_blank'>
                                    <div className='cursor-pointer text-blue flex justify-start font-semibold'><span className=' text-sm'>View Details</span></div>
                                    </a>
                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>


    )
}

export default PopularJobs