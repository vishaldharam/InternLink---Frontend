import React from 'react'
import Banner from "../components/Banner";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Jobs from "./Jobs";
import Sidebar from "../sidebar/sidebar";
import MobileFilters from "../sidebar/MobileFilters";
import Navbar from "../components/Navbar";
import InternshipBanner from '../components/InternshipBanner';
import { FaXmark } from "react-icons/fa6";
import { BiRupee } from 'react-icons/bi'
import { CiCalendar, CiLocationOn } from 'react-icons/ci'
import { FaIndianRupeeSign } from 'react-icons/fa6'
import { FiCalendar, FiClock, FiMapPin } from 'react-icons/fi'
import { IoTrendingUpSharp } from 'react-icons/io5'
import { IoIosPeople } from 'react-icons/io';
import { GoPeople } from 'react-icons/go';
import { Link, Route, useLocation, useParams } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

const Details = ({ isSelected, handleSelected, toggleModal }) => {
   const [job, setJob] = useState({})
   const [isApplied, setIsApplied] = useState(false)
   const { isAuthenticated } = useAuthContext()

   const handleNotAuthenticated = () => {
      alert(`Use must be login to apply for the this ${job.isInternship ? 'Internship' : 'Job'} `)
   }


   const location = useLocation();
   let paramData 
   useEffect(() => {
      !isAuthenticated && handleNotAuthenticated()
      getJOB()
      getAppliedStatus()
   }, [])

   let job1  
   
   const getJOB = async() => {
   const queryParams = new URLSearchParams(location.search)
   const jobDataEncoded = queryParams.get('data')
   
   
   if(jobDataEncoded){
      job1 = JSON.parse(decodeURIComponent(jobDataEncoded))
     
      // console.log(job1)
     
     
      const response = await fetch('http://localhost:8000/job/getJob',{
         method:"POST",
         headers:{
           "Content-Type":"application/json",
           "Authorization": `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWVyIjoiNjZjMTZhYWM4M2QxOTQ4ZWU1OTdjM2QyIiwiaWF0IjoxNzI0NTE2MjU1fQ.mJ5xtVw0aMVGSEUHqsXsvGq-VWqeZkj8C_RlR5m314c'}`
         },
         body:JSON.stringify({
           jobID:job1
          })
         })
         const json = await response.json()
         // console.log(json)
         setJob(json.job)
   }
   
}
paramData = encodeURIComponent(JSON.stringify(job))

const getAppliedStatus = async() => {
     
      const response = await fetch('http://localhost:8000/questionSet/getAppliedStatus',{
         method:"POST",
         headers:{
           "Content-Type":"application/json",
           "Authorization": `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWVyIjoiNjZjMTZhYWM4M2QxOTQ4ZWU1OTdjM2QyIiwiaWF0IjoxNzI0NTE2MjU1fQ.mJ5xtVw0aMVGSEUHqsXsvGq-VWqeZkj8C_RlR5m314c'}`
         },
         body:JSON.stringify({
           jobID:job1
          })
         })
         const json = await response.json()
         // console.log(json.status)
         setIsApplied(json.status)
         
   }

   
  
   
   return (
      <>

         <div className='flex justify-center pt-12 text-3xl mt-20 text-primary/80 font-semibold px-5'><h2>{job.jobRole}</h2></div>

         <div className="bg-white flex justify-center gap-8 lg:px-24 md:px-12 px-4 py-6 max-w-screen-2xl">


            <div className=" flex flex-col medium:w-[80%]    col-span-4  md:p-6  rounded-sm">
               <div className='min-w-[313px] shadow-md border bg-white rounded-md mb-10 cursor-pointer'>
                  <div className='p-4 flex flex-col space-y-2 justify-between '>
                     <div className="flex items-start">
                        <div className='border py-1 px-1.5 flex space-x-1 rounded-md justify-start text-base'><IoTrendingUpSharp className='text-md text-sky-800' /> <span className='text-sm'> Actively hiring</span></div>
                     </div>
                     <div className='flex justify-start space-x-2 py-2'>
                        <div className='flex flex-col space-y-1'>
                           <h4 className='text-primary text-xl font-semibold'>{job.jobRole}</h4>
                           <p className='text-[16px] font-bold text-primary/70'>{job.jobCompany}</p>
                        </div>
                     </div>
                     <div>
                        <ul className='md:flex-row flex flex-col  text-[16px] space-y-2 justify-between'>
                           <li className='md:flex-col flex space-x-0  text-primary/60 font-medium'>
                              <div className='text-sm font-medium flex flex-col  md:flex-row space-x-1'>
                                    <CiLocationOn className='md:text-sm md:hidden  mt-1 text-xl font-medium' /> 
                                    <span className='hidden md:flex'>Location:</span>
                              </div> 
                              <h6 className=''>{job.jobCity}</h6> </li>
                           <li className='md:flex-col flex space-x-0  text-primary/60 font-medium'><div className='text-sm font-medium flex flex-col  md:flex-row justify-center space-x-1 '><BiRupee className='md:text-sm   hidden mt-1 text-xl font-semibold' /> <span className='hidden md:flex '>Stipend:</span></div> <h6 className='px-1'>{"₹" + "   " + job.jobStipend + "   " +"/month"}</h6> </li>
                           <li className='md:flex-col flex space-x-0  text-primary/60 font-medium'><div className='text-sm font-medium flex flex-col  md:flex-row space-x-1'><CiCalendar className='md:text-sm  md:hidden mt-1 text-xl font-semibold' /> <span className='hidden md:flex'>Last Date:</span></div> <h6 className='mt-0.5'> {job.lastDateToApply} 24</h6> </li>

                        </ul>
                     </div>
                     <div className='flex  justify-start space-x-2 py-2 md:pb-10 border-b'>
                        <GoPeople className='text-xl' /><span>{job.noOfApplied} Applicants</span>
                     </div>
                     <div className='flex flex-col justify-start space-y-2 py-2 '>
                        <h4 className='text-primary/80 text-md font-semibold'>About the Internships</h4>
                        <span className='text-base text-primary/70'>Are you a talented full-stack development intern looking to gain valuable experience in a fast-paced tech
                           company? Sobonix Solutions Private Limited. is seeking a motivated individual who is proficient in ReactJS,
                           JavaScript, CSS, HTML, Ruby on Rails, PostgreSQL, and Tailwind CSS to join our team. As an intern with us,
                           you will have the opportunity to work on exciting projects and make a real impact on our products.
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, eligendi! Quas ratione nulla quae quis
                           dignissimos voluptas ducimus cumque voluptatem incidunt veritatis, exercitationem, cupiditate mollitia
                           quam eveniet nisi voluptates blanditiis minima non sit dolor nesciunt optio placeat aspernatur facilis
                           . Adipisci ipsa veniam fugiat reiciendis ipsum eos incidunt ducimus, error tenetur sint inventore
                           eveniet libero dolorum? Veritatis rem quidem omnis voluptatum et, cupiditate in ex voluptates officia
                           blanditiis veniam fugiat consectetur quos ipsam eius! Quidem, laudantium quia ducimus esse dolorum
                           perferendis voluptatibus incidunt totam vero iure praesentium unde saepe quam eligendi rem at deleniti, dolore molestiae consequatur ratione vitae possimus recusandae.

                        </span>
                     </div>
                     <div className='flex flex-col  space-y-2  '>
                        <h4 className='text-primary/80 text-md font-semibold'>Skills(s) Required</h4>
                        <div className='flex space-x-5 flex-wrap '>
                           <span className='bg-slate-100 rounded-md px-2 text-[14px] py-1 mb-4'>Nodejs</span>
                           <span className='bg-slate-100 rounded-md px-2 text-[14px] py-1 mb-4'>JavaScript</span>
                           <span className='bg-slate-100 rounded-md px-2 text-[14px] py-1 mb-4'>React</span>
                           <span className='bg-slate-100 rounded-md px-2 text-[14px] py-1 mb-4'>Express</span>
                           <span className='bg-slate-100 rounded-md px-2 text-[14px] py-1 mb-4'>Mongoose</span>
                           <span className='bg-slate-100 rounded-md px-2 text-[14px] py-1 mb-4'>Elastic</span>
                        </div>
                        <div></div>
                     </div>
                     <div className='flex flex-col  space-y-2  '>
                        <h4 className='text-primary/80 text-md font-semibold'>Perks</h4>
                        <div className='flex space-x-5 flex-wrap '>
                          {job.jobPerks && job.jobPerks.map((perk,i)=> (
                          <span key={i} className='bg-slate-100 rounded-md px-2 text-[14px] py-1 mb-4'>{perk}</span>))}
                        </div>

                        <div></div>
                     </div>
                     <div className='flex  space-x-2 py-1 '>
                        <h4 className='text-primary/80 text-md font-semibold'>No of Openings:</h4>

                        <span className='text-md font-medium text-primary/70'>{job.noOfOpenings}</span>


                        <div></div>
                     </div>
                     <div className='flex flex-col justify-start space-y-2 py-2 '>
                        <h4 className='text-primary/80 text-md font-semibold'>About company</h4>
                        <span className='text-base text-primary/70'>Sobonix Solutions Private Limited. is a technology and
                           consulting firm specializing in innovative software solutions and IT services. We offer a range of services,
                           including custom software development, IT consulting, and digital transformation solutions. With a focus on
                           delivering high-quality, scalable solutions, Sobonix Solutions caters to various industries,
                           helping businesses optimise their technology infrastructure and drive growth. Our commitment to customer
                           satisfaction and cutting-edge technology positions them as a key player in the tech industry.
                        </span>
                     </div>
   
                     <div   className='flex justify-center py-5'>
                      {isAuthenticated ? isApplied ?  <button  className='bg-blue/80 opacity-70 px-2.5 py-1.5 text-white rounded-sm'>
                                            Already applied
                                          </button> : <a href={`/giveTest?data=${paramData}`} target='_blank'> <button  className='bg-blue disabled: px-2.5 py-1.5 text-white rounded-sm'>
                                             Apply now
                                          </button></a> :
                                          <button onClick={handleNotAuthenticated} className='bg-blue disabled: px-2.5 py-1.5 text-white rounded-sm'>
                                             Apply now
                                          </button>
                        }
                     </div>

                  </div>
               </div>
            </div>

         </div>

      </>
   )
}

export default Details