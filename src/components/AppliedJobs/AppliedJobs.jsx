import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utilities/localStorage";
import SingleJob from "../SingleJob/SingleJob";
import FilterDropdown from "../FilterDropdown/FilterDropdown";

const AppliedJobs = () => {
  const [filter, setFilter] = useState("");
  const [appliedJobs, setAppliedJobs] = useState([]);
  const jobs = useLoaderData();
  useEffect(() => {
    const jobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobsApplied = jobs.filter((job) => jobIds.includes(job.id));
      setAppliedJobs(jobsApplied);
    }
  }, [jobs]);
  const filteredContent = appliedJobs.filter((item) =>
    filter === "all" || !filter ? true : item.remote_or_onsite === filter
  );

  return (
    <div className="mx-20">
      <div className="flex justify-end">
        <FilterDropdown setFilter={setFilter}></FilterDropdown>
      </div>
      {filteredContent.map((job) => (
        <SingleJob key={job.id} singleJob={job}></SingleJob>
      ))}
    </div>
  );
};

export default AppliedJobs;
