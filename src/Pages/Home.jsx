import Banner from "../components/Banner";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Jobs from "./Jobs";
import Sidebar from "../sidebar/sidebar";
import MobileFilters from "../sidebar/MobileFilters";
import Navbar from "../components/Navbar";
import { FaXmark } from "react-icons/fa6";
import Trending from "../components/Trending";
import PopularInternships from "../components/PopularInternships";
import PopularJobs from "../components/PopularJobs";

 function Home({isSelected, handleSelected}) {
   const [query, setQuery] = useState("")
   const [searchPage, setSearchPage] = useState(false)
   const [userJobs, setUserJobs] = useState([])
   const [userInternship, setuserInternship] = useState([])
   const [loading,setLoading] = useState(false)

   useEffect(() => {
      getInternhsipsData()
      }, []);
    
   const getInternhsipsData = async() => {
      setLoading(true);
      const response = await fetch('http://localhost:8000/internship/getLatestInternships')
      const json = await response.json()
      setuserInternship(json.LatestInternships);
      setLoading(false);
   }
     
  

   const handleQueryChange = (e) => {
       setQuery(e.target.value)
       e.target.value.length === 0 ? setSearchPage(false) : setSearchPage(true)
   }
    return (
       <>
       {/* Mobile for Filter */}
      {isSelected ? <div className='  absolute bg-white w-screen h-full' >
         <div className="p-10 flex flex-col space-y-3">
          <div className="fixed top-3 right-5 text-xl" onClick={handleSelected}><FaXmark/></div>
         <div>Location</div>
          <div>Filter</div>
          <div>Filter</div>
          <div>Filter</div>
          <div>Filter</div>
         </div>
        </div> : ""}
     
       <Banner />
       <Trending />

       <PopularInternships userInternship={userInternship}/>
       <PopularJobs userInternship={userInternship} />
        
       </>
    )
}

export default Home;