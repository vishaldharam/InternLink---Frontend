import React from 'react'
import { IoTimerOutline } from 'react-icons/io5'
import QuestionCard from './QuestionCard';
import { useNavigate } from 'react-router-dom';

const TestPagetest = ({title,handleEndTest,jobID, isCompleted, markedQuestion,visited, min, seconds, handleClick, handleClearResponse,  company,handleMarkAndReview, currentQuestion,answer, attempted, QuestionSet, handleNextQuesiton, handlePreviousQuestion, handleSelectAnswer}) => {
    // const arr = Array.from({ length: 22 }, (_, i) => i + 1);
    const navigate = useNavigate()
    // console.log(jobID)
    const handleRedirect = () => {
        const paramData = encodeURIComponent(JSON.stringify(jobID._id))
        navigate(`/details?data=${paramData}`);
    }
  return (
    <div className={`max-w-screen-2xl container  mx-auto  md:px-5 mt-[0px] lg:px-10 px-4 md:py-5  pb-5`}>
        <div className={`flex flex-col ${isCompleted && 'opacity-40'} border`}>
            <div className='bg-blue/10 flex justify-between p-2  rounded-sm'>
                <div className='flex justify-center items-center space-x-4'>
                <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="14.5" cy="15.375" r="14.5" fill="#9ACEFF" />
                    <circle cx="22.5" cy="20.625" r="14.5" fill="#0890FF" />
                </svg>
                

                <div className='flex flex-col '>
                        <h4 className='hidden tab:flex text-sm font-semibold text-primary/80'>InternLink Assesment Platform</h4>
                        <h4 className='font-bold'>Assessment Test Portal</h4>
                </div>
                </div>
                <div className='tab:px-10 px-2 py-2'>
                    <button onClick={handleEndTest} className='border-red-600 border text-red-700 tab:text-[18px] text-sm font-bold px-2.5 py-1.5 rounded-sm'>End Test</button>
                </div>
            </div>
            <div className=' justify-between p-2 w-full hidden tab:flex '>
                <div className='flex justify-end  p-2 w-[63%]'>
                    <span className='text-md tab:flex hidden font-bold text-primary/80'>Online Test for {title} in {company}</span>
                </div>
                <div className='flex space-x-3 p-2'><div className='text-2xl'><IoTimerOutline/></div><span className='font-semibold'>{min < 10 ? '0'+ min : min} : {seconds < 10 ? '0' + seconds : seconds}</span></div>
            </div>
            <div className='flex space-x-3 p-2 tab:hidden justify-end'><div className='text-xl'><IoTimerOutline/></div><span className='font-bold text-md'>{min < 10 ? '0'+ min : min} : {seconds < 10 ? '0' + seconds : seconds}</span></div>
            <div className=' testMap:hidden flex space-x-5  ml-1 py-1 px-2  no-scrollbar overflow-y-hidden'>
                                <div className='flex justify-start bg-slate-100 px-2  py-1.5 rounded-md ml-1'>
                                    <span className='font-semibold'>Code:</span>
                                </div>
                                
                                    <div className='flex justify-start space-x-2 whitespace-nowrap'><span className='bg-green-500 px-4 py-2 rounded-[4px] text-white'>A</span>
                                    </div>
                                    <div className='flex justify-start space-x-2 whitespace-nowrap'><span className='border border-primary/80 px-2.5 py-1.5 rounded-[4px] text-black'>W</span>
                                    </div>
                                
                               
                                    <div className='flex justify-start space-x-1 whitespace-nowrap'><span className='bg-yellow-500 px-4 py-2 rounded-[4px] text-white'>Y</span>
                                    </div>
                                    <div className='flex justify-start space-x-1 whitespace-nowrap'><span className='bg-red-500 px-4 py-2 rounded-[4px] text-white'>A</span>
                                    </div>
                                
                        </div>
            {/* For Desktop or mid */}
            <div className='testMap:flex testMap:flex-row flex flex-col-reverse   justify-between testMap:px-2  '>
                <div className='testMap:w-[74%] w-full testMap:p-2  '>
                    {/* Question card will be rendered */}
                    <QuestionCard handleMarkAndReview={handleMarkAndReview} QuestionSet={QuestionSet} handleNextQuesiton={handleNextQuesiton}
          handlePreviousQuestion={handlePreviousQuestion} handleClearResponse={handleClearResponse}  answer={answer} attempted={attempted}  currentQuestion={currentQuestion} handleSelectAnswer={handleSelectAnswer}/>
                </div>
                <div className='testMap:w-[25%] testMap:border p-1 w-full overflow-y-hidden no-scrollbar mt-1 mr-1 testMap:flex space-x-2 testMap:flex-col flex mb-2  '>
                <div className='font-semibold hidden testMap:flex bg-slate-100 rounded-md p-2 m-2'>
                    <span>Questions Pallete :</span>
                </div>
                <div className='font-semibold bg-slate-100 rounded-md testMap:hidden flex items-center px-2 '>
                    <span className=''>Questions:</span>
                </div>
                <div className='testMap:grid-cols-5 testMap:grid gap-3 flex testMap:p-8'>

                {
                    QuestionSet.map((item, i)=> (
                        <div onClick={()=>handleClick(i)} className={`px-[15px] py-1.5 rounded-[4px] 
                        ${ markedQuestion[i] ? 'bg-yellow-500 text-white' :
                            (attempted[i] && answer[i] !== "") ? 'bg-green-500 text-white' : (!attempted[i] && answer[i] === "" && !markedQuestion[i]) && !visited[i] ? ' bg-white border text-black' 
                            : 'bg-red-500 text-white'
                         } ${currentQuestion === i ? ' border-2 border-black/70':''}
                         text-bold text-xl cursor-pointer `} key={i}>
                    {i + 1}
                </div>
                    ))
                }
                </div>

                                            
                
            </div>

            {/* <div className='flex testMap:hidden p-2 overflow-y-hidden no-scrollbar  w-full space-x-4'>
                <div className='flex justify-center font-semibold text-primary/90 items-center px-2 bg-slate-100 rounded-sm'><span className=''>Questions:</span></div>
                {
                    QuestionSet.map((item,i)=> (
                        <div key={i} className={`px-[18px] py-1.5  rounded-[4px]  
                            text-bold text-xl cursor-pointer text-white`}>{i}</div>

                    ))
                }                  
                 
            </div> */}
            </div>
            
        </div>
        
        {isCompleted && (
                        <div
                        id="successModal"
                        tabIndex="-1"
                        aria-hidden="true"
                        
                        className={`flex overflow-y-auto  py-10 items-center overflow-x-hidden fixed top-40 medium:top-0 right-0 left-0 z-50 justify-center w-full h-full`}
                        >
                        <div className="relative p-4 w-full py-10 max-w-md h-full md:h-auto">
                            <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                            <button
                                type="button"
                                className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                 // Close the modal
                            >
                               
                            </button>
                            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5">
                                <svg
                                aria-hidden="true"
                                className="w-8 h-8 text-green-500 dark:text-green-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                ></path>
                                </svg>
                                <span className="sr-only">Success</span>
                            </div>
                            <p className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                                <span className='text-sm'>Successfully Applied for</span> <br /> {title}.
                            </p>
                            <button
                                type="button"
                                onClick={handleRedirect}
                                className="py-2 my-2 bg-white  px-4  font-medium text-center text-black text-[15px] rounded-lg bg-primary-600 hover:bg-white-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-900"
                                // Close the modal
                            >
                                Continue
                            </button>
                            </div>
                        </div>
                        </div>
                    )}
    </div>
  )
}

export default TestPagetest