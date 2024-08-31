import { Navigate, Outlet } from "react-router-dom"
import './App.css'
import {  useState } from "react"
import Home from "./Pages/Home.jsx"
import Internships from "./Pages/Internships.jsx"
import Job from "./Pages/Job.jsx"
import Courses from "./Pages/Courses.jsx"
import Notfound from "./Pages/Notfound.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./Pages/Login.jsx"
import Details from "./Pages/Details.jsx"
import Layout from "./Layout.jsx"
import TestPage from "./test/index.jsx"
import { useAuthContext } from "./hooks/useAuthContext.jsx"
import { useSelector } from "react-redux"

function App() {
  const [isSelected,setIsSelected] = useState(false)
  const [isTest, setIsTest] = useState(false)
  const handleSelected = () => {
    setIsSelected(!isSelected)
   }
   const { isAuthenticated, UserData } = useSelector((state)=> state.auth.user)

   const routes = isAuthenticated
   ? [
    {
      path: "/",
      element: <Layout isTest={isTest} />,   // Layout component with Navbar and Outlet
      children:[
      { path:"/", element: <Home isSelected={isSelected} handleSelected={handleSelected}/> },
      { path:"/internships", element: <Internships isSelected={isSelected} handleSelected={handleSelected}/> },
      { path:"/jobs", element: <Job handleSelected={handleSelected}/> },
      { path:"/courses", element: <Courses handleSelected={handleSelected}/> },
      { path:"/details", element: <Details isSelected={isSelected} handleSelected={handleSelected}/> },
      { path:"/giveTest", element: <TestPage setIsTest={setIsTest} isSelected={isSelected} handleSelected={handleSelected}/> },
      { path:"*", element: <Notfound/> }
      ]
    }
      ]
   : [
    {
      path: "/",
      element: <Layout />,   // Layout component with Navbar and Outlet
      children:[
       { path:"/", element: <Home isSelected={isSelected} handleSelected={handleSelected}/> },
       { path: "/login", element: <Login /> },
       { path: "*", element: <Navigate to="/" replace /> },
       { path:"/internships", element: <Internships isSelected={isSelected} handleSelected={handleSelected}/> },
      { path:"/jobs", element: <Job handleSelected={handleSelected}/> },
      { path:"/courses", element: <Courses handleSelected={handleSelected}/> },      
     ]
    }
   ]
  
   const router = createBrowserRouter(routes)
  return (
    <>
      <RouterProvider router={router}>
        <Outlet />  {/* This will render the matched route component */}
      </RouterProvider>
        
    </>
  )
}

export default App
