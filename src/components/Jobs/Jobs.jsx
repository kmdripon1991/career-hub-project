import { useEffect, useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import axios from "axios";
import SingleJob from "../SingleJob/SingleJob";
// import { jobsLoader } from "../../utilities/loadJobsData";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobsData = await axios.get("/public/data/jobs.json");
        setJobs(jobsData.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchJobs();
  }, []);

 
  return (
    <div>
      <SectionHeader>
        <h1 className="text-primary font-extrabold text-5xl">Featured Jobs</h1>
        <p className="text-base text-secondary">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </SectionHeader>
      <div className="grid grid-cols-1 md:grid-cols-2 w-3/4 mx-auto gap-2">
        {jobs.map((singleJob) => (
          <SingleJob key={singleJob.id} singleJob={singleJob}></SingleJob>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
