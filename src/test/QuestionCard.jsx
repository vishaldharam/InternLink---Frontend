import React from 'react'

const QuestionCard = ({currentQuestion,handleClearResponse, handleMarkAndReview, answer, attempted, QuestionSet, handleNextQuesiton, handlePreviousQuestion, handleSelectAnswer}) => {
    // console.log(QuestionSet)
  return (
      <div className='container lg:px-6 p-3 tab:p-4 w-full flex-col flex justify-between h-full space-y-4 border '>
          <div>
          <div className='  flex justify-start  py-4  border-b '>
                <span className='font-semibold text-primary/80'>
                    Question no: {currentQuestion + 1}
                </span>
            </div>
            <div className=' flex text-primary/90 justify-start  py-4   '>
                <span className='font-semibold text-[18px]'>
                    {QuestionSet[currentQuestion]?.Question}
                </span>
            </div>
            <div className=' flex justify-start   pb-10 '>
               <ul className='flex flex-col space-y-6'>
                {
                    QuestionSet[currentQuestion]?.options?.map((option,i) => 
                    (<li className='flex space-x-2 justify-start' key={i}>
                    <input
                        type="radio"
                        name="test"
                        id={`option-${i}`}
                        onChange={()=>handleSelectAnswer(option)}
                        value={option}
                        checked={answer[currentQuestion] === option}

                        className="form-checkbox h-5 w-5 text-blue-600 rounded-md"
                    />
                    <span className="text-primary text-[15px] flex items-center">{option}</span>
                </li>))}
               </ul>
            </div>
          </div>
            {/* For above tab:mediaQuery */}
            <div className='hidden grid-cols-4 tab:grid gap-6 py-5 border-t'>
                
                    <button disabled={currentQuestion === 0} onClick={handlePreviousQuestion} className='bg-slate-700 disabled:bg-slate-500 px-2 py-1.5 text-white font-semibold rounded-sm'>Previous</button>
                    <button onClick={handleClearResponse} className='bg-slate-700 px-2 py-1.5 text-white font-semibold rounded-sm'>Clear Response</button>
                    <button onClick={handleMarkAndReview} className='bg-slate-700 px-2 py-1.5 text-white font-semibold rounded-sm'>Mark for Review & Next</button>
                    <button disabled={currentQuestion === QuestionSet?.length - 1} onClick={handleNextQuesiton} className='bg-slate-700 disabled:bg-slate-500 px-2 py-1.5 text-white font-semibold rounded-sm'>Next & Save</button>
                
            </div>
            {/* For below tab:mediaQuery */}
            <div className='tab:hidden grid-cols-2 grid gap-4 py-4 border-t'>
                
                <button disabled={currentQuestion === 0} onClick={handlePreviousQuestion} className='bg-slate-700 disabled:bg-slate-500 px-2 py-1.5 text-white font-semibold rounded-sm'>Previous</button>
                <button onClick={handleClearResponse} className='bg-slate-700 px-2 py-1.5 text-white font-semibold rounded-sm'>Clear</button>
                <button onClick={handleMarkAndReview} className='bg-slate-700 px-2 py-1.5 text-white font-semibold rounded-sm'>Mark for Review</button>
                <button disabled={currentQuestion === QuestionSet?.length - 1} onClick={handleNextQuesiton} className='bg-slate-700 disabled:bg-slate-500 px-2 py-1.5 text-white font-semibold rounded-sm'>Next & Save</button>
            
        </div>



    </div>
  )
}

export default QuestionCard