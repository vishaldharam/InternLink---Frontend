import React, { useState, useEffect } from 'react'
import { isEmail } from '../utils/helper';
import { useSignUp } from '../hooks/useAuth';
import { VscClose } from 'react-icons/vsc';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../store/Features/authSlice';


const Login = ({ toggleModal, setToggle }) => {
    const [selected, setSelected] = useState("Student")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const { signup, serverError, isLoading } = useSignUp()
    const { user, APILoading, APIError} = useSelector((state)=> state.auth)
    
    useEffect(() => {
      setError(APIError)
    }, [APIError])
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!email.length || !password.length >= 8 || !isEmail(email)) {
            setError("Invalid email or password")
        }
        else {
            const result = await signup(email, password, selected)
            if (result) {
                setToggle(false)
            }
            else {
                setError("Invalid email or password")

            }
             dispatch(loginUser({ email, password, userType:selected}))
             
        }
    }
   
    const handleSelected = () => {
        setError("")
        setEmail("")
        setPassword("")
        selected === 'Student' ? setSelected("Employee") : setSelected("Student")
    }

    return (
        <div>
            ( <div className="absolute modal-container  inset-0 flex justify-center items-center  bg-black bg-opacity-60 z-50" id="exampleModal" aria-hidden="true">
                <div className={`modal-content flex flex-col bg-white border-black w-[400px] ${selected === "Student" ? 'h-[530px]' : 'h-[430px]'}  rounded-md mx-4 relative`}>
                    <div className='p-3 space-y-2'>
                        <div className="close-modal flex justify-end top-4 right-2 text-xl items-center  "   ><VscClose onClick={toggleModal} className='text-primary/70 mr-2 cursor-pointer' /></div>
                        <div className="p-2 flex justify-evenly ">
                            <div onClick={handleSelected} className={`font-semibold cursor-pointer flex justify-center  w-1/2 ${selected === 'Student' ? 'text-blue border-b-2 border-b-blue ' : 'text-primary/90'}`}>
                                <span className='p-2'>Student</span>

                            </div>
                            <div onClick={handleSelected} className={`font-semibold cursor-pointer flex justify-center  w-1/2 ${selected === 'Employee' ? 'text-blue border-b-2 border-b-blue  ' : 'text-primary/90'}`}>
                                <span className='p-2'>Employee T&C</span>

                            </div>

                        </div>
                        <div className='px-3  flex flex-col'>
                            {
                                selected === "Student" && <div>
                                    <div className='flex  justify-center space-x-3 mt-2  rounded-md border border-slate-300 p-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                                            <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                        </svg><h4 className='text-md font-semibold text-primary/80'>Login with Google</h4>
                                    </div>
                                    <div className="flex items-center py-4 justify-center">
                                        <div className="border-t border-gray-200 flex-grow"></div>
                                        <span className="mx-4 text-gray-400 text-sm">OR</span>
                                        <div className="border-t border-gray-200 flex-grow"></div>
                                    </div>
                                </div>
                            }
                            <form className='flex flex-col space-y-4'  >
                                <div className='flex flex-col space-y-1'>
                                    <label htmlFor="Email" className='text-primary/90'>Email</label>
                                    <input type="email" placeholder={`${selected === "Student" ? 'john@example.com' : 'john@company.com'}`}
                                        value={email} onChange={(e) => setEmail(e.target.value)} required={true} className='border border-slate-300 py-2 px-4 rounded-md ' />
                                </div>
                                <div className='flex flex-col space-y-1'>
                                    <label htmlFor="password" className='text-primary/90'>Password</label>
                                    <input type="password" placeholder='Must be atleast 8 characters' value={password}
                                        onChange={(e) => setPassword(e.target.value)} required className='border py-2 px-4 border-slate-300 rounded-md ' />
                                </div>
                                <button className='hidden' type='submit' onClick={handleSubmit}></button>
                            </form>
                            <div className='py-2 flex justify-between'><h4 className='text-sm text-red-600'>{error?.length ? error : ""}</h4><h4 className='text-sm text-blue'>Forgot Password?</h4></div>
                        </div>
                        <div className='px-2 space-y-2'>
                            <div onClick={handleSubmit} className={`py-2 flex cursor-pointer bg-blue rounded-md text-white font-semibold justify-center items-center ${isLoading ? 'pointer-events-none opacity-50' : ''
                                }`}>
                                <h4>Login</h4>
                            </div>
                            <div className='px-2 py-1 medium:text-sm text-[13px]  flex justify-center'>
                                <h4>New to InterLink? Register <span className='text-blue'>(Student / Company)</span></h4>
                            </div>
                        </div>

                    </div>
                </div>
            </div>)
        </div>
    )
}

export default Login