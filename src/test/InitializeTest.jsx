import React from 'react'

const InitializeTest = ({ title, company, handleStartTest }) => {
  return (
    <div className='max-w-screen-2xl container mx-auto  md:px-12 mt-[15px] lg:px-24 px-4 md:py-10 pt-10 pb-5'>
        <div className='flex flex-col justify-center space-y-6'>
        <div className='flex justify-center px-2 w-full'>
                <span className='md:text-2xl text-xl font-bold text-primary/80'>Online Test for {title} in {company}</span>
            </div>
            <div className='flex flex-col pt-2 border rounded-md md:px-4 p-4 px-4 space-y-1'>
            <div className='flex justify-start w-full'>
                <span className='text-[18px] font-semibold text-primary/95'>Instructions for Online Test</span>
            </div>
            <div className='flex justify-start w-full'>
                <span className='text-[16px] font-semibold text-red-600'>Please read the Instructions carefully before starting the Test</span>
            </div>
            <div className='flex-col flex items-start medium:px-4 space-y-4'>
                <ol className='text-sm space-y-1 '>
                    <li>
                        <span className='text-primary/90'>1. Click on the <span className='text-primary font-semibold'>Start Test</span> button at the bottom of screen.</span>
                    </li>
                    <li>
                        <span className='text-primary/90'>2. The countdown clock has been set to the top-right corner of your screen.</span>
                    </li>
                    <li>
                        <span className='text-primary/90'>3. Candidate can change their response of attemped answer any time during
                        examination slot.</span>
                    </li>
                    <li>
                        <span className='text-primary/90'>4. Click on the next to save the answer and moving to the next question.</span>
                    </li>
                    <li>
                        <span className='text-primary/90'>5. Select the Mark for review option to review the question later in reamining time slot.</span>
                    </li>
                    <li>
                        <span className='text-primary/90'>6. Follows the color coded instructions given below.</span>
                        <div className='px-3 pt-3'>
                            <ul className='space-y-2'>
                                <li className='flex flex-wrap space-x-2'>
                                    <span className='bg-red-600 rounded-full px-3 py-1 text-white'>R</span> <span className='p-1 text-[13px]'>Not Answered/Not Attempted.</span>
                                </li>
                                <li className='flex flex-wrap space-x-2'>
                                    <span className='bg-green-500 rounded-full px-3 py-1 text-white'>G</span> <span className='p-1 text-[13px]'>Answered and Attempted.</span>
                                </li>
                                <li className='flex flex-wrap space-x-2'>
                                    <span className='bg-yellow-500 rounded-full px-3 py-1 text-white'>Y</span> <span className='p-1 text-[13px]'>Not Answered and Mark for Review.</span>
                                </li>
                                <li className='flex flex-wrap space-x-2'>
                                    <span className='bg-violet-500 rounded-full px-3 py-1 text-white'>V</span> <span className='p-1 text-[13px]'>Answered and Mark for Review.</span>
                                </li>
                                <li className='flex flex-wrap space-x-2'>
                                    <span className='border rounded-full px-3 py-1 text-black'>W</span><span className='p-1 text-[13px]'>Not visited.</span>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className='pt-2'>
                        <span className='text-primary/90'>7. Don't click final submit on the left corner of the screen unless you have completed the test.</span>
                    </li>
                    <li>
                        <span className='text-primary/90'>8. Incase you submit the test then you will not be permitted to continue the test.</span>
                    </li>
            
                </ol>

                <div className='flex justify-start space-x-2'>
               
                        <input type='checkbox' ></input> <span className='text-sm text-primary'>I have read and understood the instructions given above</span>
                    
                </div>

                <div className='flex justify-center w-full'>
                    <button onClick={handleStartTest} className='bg-blue cursor-pointer text-white font-semibold px-2 py-2 rounded-md'>Start Assesment</button>
                </div>

                

            </div>
            </div>
        </div>
    </div>
  )
}

export default InitializeTest