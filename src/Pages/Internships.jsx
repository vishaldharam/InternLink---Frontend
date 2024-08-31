

import React, { useEffect, useState, useMemo } from "react";
import Card from "../components/Card";
import Jobs from "./Jobs";
import Sidebar from "../sidebar/sidebar";
import InternshipBanner from '../components/InternshipBanner';
import { FaXmark } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Cities = ['chennai','pune','delhi','hyderabad','mumbai','banglore']
const Experiences = ["0","1","2","3","5"]
import { useSignUp } from "../hooks/useAuth";

const Internships = ({ isSelected, handleSelected }) => {
  const [query, setQuery] = useState("");
  const [searchPage, setSearchPage] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [latestInternships, setLatestInternships] = useState([])
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalFilteredData, setTotalFilteredData] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const itemsPerPage = 8;
  
  const { getData} = useSignUp() 

  useEffect(() => {
  getInternhsipsData()

  }, []);

  const getInternhsipsData = async() => {
    setLoading(true);

    const response = await fetch('http://localhost:8000/internship/getAllInternships')
    const json = await response.json()
    setJobs(json.AllInternships);
    setLoading(false);
  }

  
  const calculatePageRange = () => {
    var startIndex = (currentPage - 1) * itemsPerPage;
    var endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  };

  // Memoize the filtered jobs based on query and selected categories
  const filteredJobs = useMemo(() => {
    let filteredJobs = jobs || [];
    let searchArray = [];

    if (query) {
      searchArray = query.split(" ");
      filteredJobs = filteredJobs.filter(({ jobRole }) =>
        jobRole.toLowerCase().includes(query.toLowerCase())
      );
      if (filteredJobs.length === 0) {
        filteredJobs = jobs.filter(
          ({ jobCity, jobRole, jobType, description }) =>
            searchArray.some((searchString) =>
              [jobCity, jobRole, jobType, description].some((field) =>
                field.toLowerCase().includes(searchString.toLowerCase())
              )
            )
        );
      }
    }

    if (selectedCategories.length !== 0) {
      const forCities = selectedCategories.filter((category)=> Cities.includes(category.toLowerCase()))
      const forExperiences = selectedCategories.filter((category)=> Experiences.includes(category))
      if(forExperiences.length){
         filteredJobs = filteredJobs.filter((job)=> (
            forExperiences.some((exp)=>(
              (exp === '5' && parseInt(job.jobExperienceNeed) >= 5) ||
             (exp === '2' && parseInt(job.jobExperienceNeed) >= 2 && parseInt(job.jobExperienceNeed) < 5) ||
             (exp === '1' && parseInt(job.jobExperienceNeed) === 1) ||
             (exp === '0' && parseInt(job.jobExperienceNeed) < 1) ||
             (exp === '0' && job.jobExperienceNeed.toLowerCase() === 'fresher') 

            ))
      ))
      }
      if(forCities.length){
         filteredJobs = filteredJobs.filter((job)=> (
            forCities.some((exp)=>(
               job.jobCity.toLowerCase() === exp.toLowerCase()
             ))
      ))
      }

      
    

      // filteredJobs = filteredJobs.filter(
      //   ({ jobCity, experienceLevel, maxPrice, salaryType, jobType }) =>
      //     selectedCategories.some((category) =>
      //       [
      //         jobCity.toLowerCase(),
      //         experienceLevel.toLowerCase(),
      //         salaryType.toLowerCase(),
      //         jobType.toLowerCase(),
      //         parseInt(maxPrice),
      //       ].includes(category.toLowerCase())
      //     )
      // );
    }
    setTotalCount(filteredJobs.length)
    setTotalFilteredData(Math.ceil(filteredJobs.length / itemsPerPage));
    const { startIndex, endIndex } = calculatePageRange();
    return filteredJobs.slice(startIndex, endIndex);
  }, [jobs, query, selectedCategories, currentPage]);

  // Memoize the result of mapping filtered jobs to Card components
  const result = useMemo(() => {
    return filteredJobs.map((data, i) => <Card key={i} data={data} />);
  }, [filteredJobs]);

  const nextPageClicked = () => {
    if (currentPage < totalFilteredData) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPageClicked = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSelectCategory = (e) => {
    const value = e.target.value;
   setCurrentPage(1)
    if (e.target.checked) {
      if (value === "all") {
        setSelectedCategories([]);
      } else {
        setSelectedCategories([...selectedCategories, value]);
      }
    } else {
      setSelectedCategories(
        selectedCategories.filter((category) => category !== value)
      );
    }
  };

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
    e.target.value.length === 0 ? setSearchPage(false) : setSearchPage(true);
  };

  return (
    <>
      <div className="">
        {/* Mobile for Filter */}
        {isSelected ? (
          <div className="absolute bg-white w-screen h-full">
            <div className="p-10 flex flex-col space-y-3">
              <div
                className="fixed top-3 right-5 text-xl"
                onClick={handleSelected}
              >
                <FaXmark />
              </div>
              <div>Location</div>
              <div>Filter</div>
              <div>Filter</div>
              <div>Filter</div>
              <div>Filter</div>
            </div>
          </div>
        ) : (
          ""
        )}

        <InternshipBanner
          isSelected={isSelected}
          query={query}
          totalCount={totalCount}
          handleQueryChange={handleQueryChange}
          length={jobs.length}
        />
        <div className="bg-[#FAFAFA] medium:grid  grid-cols-4 gap-8 lg:px-24 md:px-12 px-4 py-6 max-w-screen-2xl">
          <div className="p-4  rounded medium:bg-white medium:border medium:shadow-sm ">
            <Sidebar
              handleOnClick={handleSelectCategory}
              handleSelected={handleSelected}
              handleSelectCategory={handleSelectCategory}
            />
          </div>

          <div className="medium:col-span-3 flex flex-col md:h-screen no-scrollbar  md:overflow-y-auto  col-span-4  p-4 rounded-sm">
            {loading ? (
              <p>Loading..</p>
            ) : result.length > 0 ? (
              <Jobs result={result} loading={loading} />
            ) : (
              <>
                <h3>{result.length} Jobs </h3>
                <h3>No Data found!</h3>
              </>
            )}
            {/* pagination here */}

            {result.length > 0 && (
              <div className="flex justify-center mt-4 space-x-8">
                <Link to={"/internships"}>
                  <button onClick={previousPageClicked}>Previous</button>
                </Link>
                <span>
                  Page {currentPage} of {totalFilteredData}
                </span>
                <Link to={"/internships"}>
                  <button
                    disabled={currentPage === totalFilteredData}
                    onClick={nextPageClicked}
                  >
                    Next
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Internships;
