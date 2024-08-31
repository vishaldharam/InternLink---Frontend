import React from 'react'

const TrendingCards = () => {
  return (
    <section className='max-w-screen-2xl flex overflow-x-auto no-scrollbar space-x-5 medium:space-x-6  mt-8  '>
    <div className='border-[2px] min-w-80 min-h-40 tab:min-w-[400px] max-w-80 max-h-[210px]  border-white tab:max-w-[400px]  tab:max-h-[262.15px] tab:min-h-[208px]   cursor-pointer padding-0 rounded-2xl bg-slate-200'>
        <a><img src='public\images\banners\banner1.png'/></a>
    </div>
    <div className='border-[2px] min-w-80 min-h-40 tab:min-w-[400px] max-w-80 max-h-[210px]  border-white tab:max-w-[400px]  tab:max-h-[262.15px] tab:min-h-[208px]   cursor-pointer padding-0 rounded-2xl bg-slate-200'>
        <a><img src='public\images\banners\fuelthefuture_phase2-student.png.webp'/></a>
    </div>
    <div className='border-[2px] min-w-80 min-h-40 tab:min-w-[400px] max-w-80 max-h-[210px]  border-white tab:max-w-[400px]  tab:max-h-[262.15px] tab:min-h-[208px]   cursor-pointer padding-0 rounded-2xl bg-slate-200'>
        <a><img src='public\images\banners\int_opps-student.png.webp'/></a>
    </div>
</section>
  )
}

export default TrendingCards