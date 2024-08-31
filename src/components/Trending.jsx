import React from 'react'
import { FaIndianRupeeSign } from 'react-icons/fa6'
import { FiCalendar, FiClock, FiMapPin } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import TrendingCards from './trendingCards'

const Trending = () => {
  return (
   <div className='max-w-screen-2xl container mx-auto  md:px-12 lg:px-24 px-8 md:pt-4 pt-4 pb-5 '>
    <p className='text-2xl font-bold text-black/90 '>
    Trending Courses</p>
    <TrendingCards/>
    
   </div>
  )
}

export default Trending