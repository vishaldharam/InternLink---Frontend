import React, { useContext, useEffect, useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import {  useLocation, useNavigate } from 'react-router-dom'
import TestPagetest from './testPage'
import InitializeTest from './InitializeTest'

const TestPage = ({setIsTest}) => {
 
  let job = {}
 
    const { user, isAuthenticated, userType } = useAuthContext()
    const location = useLocation();
    const navigate = useNavigate()
    

    //State definations for Test with Question set .
    let jobIDD = ""
    const [QuestionSet, setQuestionsSet] = useState([])
    const [setID, setSetID] = useState()
    const [jobID, setJobID] = useState()
    const [min, setMin] = useState(0)
    const [seconds, setSeconds] = useState(20)
    const [currentJob, setCurrentJob] = useState()
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [isCompleted, setIsCompleted] = useState(false)
    const [isStarted, setIsStarted] = useState(false)
    const [answer, setAnswer] = useState(Array(22).fill(""))
    const [markedQuestion, setMarkedQuestion] = useState(Array(22).fill(false))
    const [visited, setVisited] = useState(Array(22).fill(false))
    const [attempted, setAttempted] = useState(Array(22).fill(false))
    const [loading, setLoading] = useState(false)
    const [currentApplied,setCurrentApplied] = useState({})
    const [test, setTest] = useState({})
    // console.log("Answer Array", answer)
    // console.log("Attempted Array", attempted)
    // console.log("marked  Array", markedQuestion)
    useEffect(() => {
      setIsTest(true)
      decodeJobDetailsFromURI()
      CheckAuthenticatedUser()
    }, [])
   
    
    let timer = null
    useEffect(()=> {
      if(min === 0 && seconds === 0){
        handleEndTest()
        setIsStarted(false)
        setIsCompleted(true)
        clearTimeout(timer)
        return
      }
      timer = setTimeout(()=> {
                   
                    if(seconds === 0){
                      if(min > 0){
                        setMin(min - 1)
                        setSeconds(59)
                      
                      }
                    }
                    else{
                      setSeconds(seconds - 1)
                    }
                    
                },1000)

     return()=> {
          clearTimeout(timer)
     } 
    },[min,seconds])

    // console.log("min: ",min, "  ","sec: ",seconds)

   
    // console.log("visited",visited)
    // console.log(QuestionSet)
    const calculateScore = () => {
      let score = 0
      QuestionSet?.map((item,i) => {
        if(item.answer === answer[i]) score++
      })

      return score
    }
    const handleEndTest = async() => {
      if(timer){
        clearTimeout(timer)
       
      }
      const score = calculateScore()
      const response = await fetch('http://localhost:8000/test/updateTest',{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          "Authorization": `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWVyIjoiNjZjMTZhYWM4M2QxOTQ4ZWU1OTdjM2QyIiwiaWF0IjoxNzI0NTE2MjU1fQ.mJ5xtVw0aMVGSEUHqsXsvGq-VWqeZkj8C_RlR5m314c'}`
        },
        body:JSON.stringify({
          testAnswerSet:answer,
          testScore:toString(score),
          testStatus:"Completed",
          testID:test._id
        })
    })

    setIsCompleted(true)
    // setIsStarted(false)

    }
    
    const CheckAuthenticatedUser = () => {
     
    }
    
    const decodeJobDetailsFromURI = () => {
      const queryParams = new URLSearchParams(location.search)
      const jobDataEncoded = queryParams.get('data')
      if(jobDataEncoded){
         job = JSON.parse(decodeURIComponent(jobDataEncoded))
         jobIDD = job._id
        //  console.log(job)
         setCurrentJob(job)
         setLoading(true)
       
         handleAppyJob()
        


      }
      else{
        const paramData = encodeURIComponent(JSON.stringify(job._id))
        navigate(`/details?data=${paramData}`);
      }
    }

    const handleAppyJob = async() => {
                setLoading(true)
              if(job.jobQuestionSets){
                let ssetID
                if(job.jobQuestionSets.length && job.jobQuestionSets.length === 1){
                    ssetID = job.jobQuestionSets[0]
                }
                else {
                    const random = Math.ceil(Math.random() * job.jobQuestionSets.length)
                    ssetID = job.jobQuestionSets[random-1] 
                }
                setSetID(ssetID)


              //Fectching the Random Question set from the selected sets.
              const response = await fetch('http://localhost:8000/questionSet/getQuestionSet',{
                  method:"POST",
                  headers:{
                    "Content-Type":"application/json",
                    "Authorization": `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWVyIjoiNjZjMTZhYWM4M2QxOTQ4ZWU1OTdjM2QyIiwiaWF0IjoxNzI0NTE2MjU1fQ.mJ5xtVw0aMVGSEUHqsXsvGq-VWqeZkj8C_RlR5m314c'}`
                  },
                  body:JSON.stringify({
                    setID:ssetID,
                    jobID:jobIDD
                  })
              })
              
              const json = await response.json()
             
              setCurrentApplied(json.applyForJob)
              setQuestionsSet(json.createdQuestionSet.setQuestions)
              setLoading(false)
              
       
    }

    }

    const handleStartTest = async() => {
        setLoading(true)
        const response = await fetch('http://localhost:8000/test/addTest',{
          method:"POST",
          headers:{
             "Content-Type":"application/json",
             "Authorization": `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWVyIjoiNjZjMTZhYWM4M2QxOTQ4ZWU1OTdjM2QyIiwiaWF0IjoxNzI0NTE2MjU1fQ.mJ5xtVw0aMVGSEUHqsXsvGq-VWqeZkj8C_RlR5m314c'}`
          },
          body:JSON.stringify({
             AppliedID:currentApplied._id,
             testForJobID:currentJob._id,
             testQuestionSet:setID
          })
       })

       const json = await response.json()
       setTest(json.createdTest)
        setLoading(false)
        setIsStarted(true)
    }
    // console.log(test)

    const handleNextQuesiton = () => {
        if(answer[currentQuestion] === ""){
          let newVisited = [...visited]
          newVisited[currentQuestion] = true
          setVisited(newVisited)
        }
        if(currentQuestion < QuestionSet.length-1){
          setCurrentQuestion(currentQuestion + 1)
        }
    }

    const handlePreviousQuestion = () => {
      if(currentQuestion > 0){
        setCurrentQuestion(currentQuestion - 1)
      }
  }

  const handleSelectAnswer = (selectedAnswer) => {
    let newAttempted = [...attempted]
    newAttempted[currentQuestion] = true
    setAttempted(newAttempted)
    let answered = [...answer]
    answered[currentQuestion] = selectedAnswer
    setAnswer(answered)
  }

  const handleMarkAndReview = () => {
    let newMarker = [...markedQuestion]
    newMarker[currentQuestion] = true
    setMarkedQuestion(newMarker)
  }

  const handleClick = (i) => {
    setCurrentQuestion(i)
    if(markedQuestion[i]){
      let newMarker = [...markedQuestion]
      newMarker[i] = false
      setMarkedQuestion(newMarker)
    }
  }
  const handleClearResponse = () => {
    
    let newAttempted = [...attempted]
    newAttempted[currentQuestion] = false
    setAttempted(newAttempted)
    let answered = [...answer]
    answered[currentQuestion] = ""
    setAnswer(answered)
  }



  return (
    <>
      { !loading ? 
      <>
        {
          !isStarted && currentJob && !isCompleted  ? <div><InitializeTest title={currentJob ? currentJob.jobRole : 'SDE'} handleStartTest={handleStartTest} company={currentJob ? currentJob.jobCompany : 'InternLink'}/></div> : 
           <div>
            <TestPagetest QuestionSet={QuestionSet} handleNextQuesiton={handleNextQuesiton}
          handlePreviousQuestion={handlePreviousQuestion} handleEndTest={handleEndTest} min={min} 
          seconds={seconds} handleClearResponse={handleClearResponse} visited={visited} handleClick={handleClick}
           markedQuestion={markedQuestion} handleMarkAndReview={handleMarkAndReview} answer={answer} 
           attempted={attempted} handleSelectAnswer={handleSelectAnswer}  title={currentJob ? currentJob.jobRole : 'SDE'}
            currentQuestion={currentQuestion} handleStartTest={handleStartTest} 
            isCompleted={isCompleted} jobID={currentJob} company={currentJob ? currentJob.jobCompany : 'InternLink'}/>
            
      
           </div>
        }
         
      </> : <div>loading</div>
      }
       
    </>
  )
}

export default TestPage