import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IoMdArrowDropdown } from "react-icons/io";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

import { useAuthContext } from '../hooks/useAuthContext';
import Login from './Login';
import { useSelector } from 'react-redux';



const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [toggle, setToggle] = useState(false)

    const { user, APILoading, APIError} = useSelector((state)=> state.auth)

    const userData = user ? user.UserData : null
    const handleMenuToggler = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    // console.log(toggle)
    const toggleModal = () => {
        setToggle(!toggle)
    }
    const navItems = [
        { path: "/internships", title: "Internships" },
        { path: "/jobs", title: "Jobs" },
        { path: "/courses", title: "Courses" },
    ]
    return (
        <>
            <header className='max-w-screen-2xl fixed top-0 z-50  bg-white container mx-auto xl:pl-24  xl:pr-20 px-6 shadow-sm'>
                {/* Nav for the large screen */}
                <nav className='flex justify-between items-center py-6'>
                    <a href="/" className='flex item-center gap-3 text-2xl'><svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="14.5" cy="15.375" r="14.5" fill="#9ACEFF" />
                        <circle cx="22.5" cy="20.625" r="14.5" fill="#0890FF" />
                    </svg><span className='font-semibold text-primary/95 pt-1 '>InternLink</span></a>

                    <ul className='hidden medium:flex gap-12 text-base text-primary font-medium '>
                        {
                            navItems.map(({ path, title }) => (
                                <li key={path} className='text-base text-primary flex items-center'>
                                    <NavLink
                                        to={path}
                                        className={({ isActive, isPending }) => {
                                            return isActive ? "active" : isPending ? "pending" : "";
                                        }}
                                    > <div className='flex'><span>{title}</span> <IoMdArrowDropdown className='text-2xl' /></div>
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>

                    {/* //Login and SignUp for candidate and Employee */}
                    {!userData && <div className="text-base text-primary font-medium space-x-5 hidden tab:block">
                        <Link onClick={toggleModal} className='py-2 px-5 border rounded border-blue'>Log in</Link>
                        <Link to='/register' className='py-[7px] px-5 border rounded bg-blue text-white'>Candidate Sign-up</Link>
                        <Link to='/hire-talent' className='py-[7px] px-5 border rounded bg-blue text-white'>Employee Sign-up</Link>
                    </div>}

                    {/* Mobile menu */}
                    <div className='medium:hidden block tab:pr-2'>
                        <button onClick={handleMenuToggler}>
                            {
                                isMenuOpen ? <FaXmark className='w-5 h-5 text-primary' /> : <FaBarsStaggered className='w-5 h-5 text-primary' />
                            }
                        </button>
                    </div>
                </nav>
                {/* Nav for Mobile and tab */}
                <div className={` ${isMenuOpen ? "px-4 border py-5  border-white bg-blue rounded-sm medium:hidden  " : "hidden"}`}>
                    <ul className='space-y-2' >
                        {!userData && <li>
                            <Link className='text-lg text-white font-semibold cursor-pointer hover:underline  tab:hidden '
                                onClick={() => { toggleModal(); handleMenuToggler(); }}>Log in</Link>
                        </li>}
                        {!userData && <li>
                            <Link to='/register' className='text-lg text-white font-semibold cursor-pointer hover:underline  tab:hidden'>Candidate Sign-up</Link>
                        </li>}
                        {!userData && <li>
                            <Link to='/hire-talent' className='text-lg text-white font-semibold cursor-pointer hover:underline  tab:hidden'>Employee Sign-up</Link>
                        </li>}
                        {
                            navItems.map(({ path, title }) => (
                                <li key={path} className='text-lg text-white  font-semibold cursor-pointer hover:underline flex items-center' >
                                    <NavLink
                                        onClick={handleMenuToggler}
                                        to={path}
                                        className={({ isActive, isPending }) => {
                                            return isActive ? "active" : isPending ? "pending" : "";
                                        }}
                                    >{title}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>


            </header>
            {
                toggle ? <Login setToggle={setToggle} toggleModal={toggleModal} /> : ""
            }
        </>
    )
}

export default Navbar