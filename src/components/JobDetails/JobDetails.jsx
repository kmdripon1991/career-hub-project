import { useLoaderData, useParams } from "react-router-dom";
import {
  getStoredJobApplication,
  saveJobApplication,
} from "../../utilities/localStorage";
import { toast } from "react-toastify";

const ViewDetails = () => {
  const JobsData = useLoaderData();
  const { id } = useParams();
  const job = JobsData.find((singleJob) => singleJob.id === parseInt(id));
  
  const {
    contact_information,
    educational_requirements,
    experiences,
    job_description,
    job_responsibility,
    job_title,
    salary,
  } = job;

  const handleAppliedJob = () => {
    const jobId = parseInt(id);
    const addedJobs = getStoredJobApplication();
    console.log(addedJobs);
    const isApplied = addedJobs.find((addedJobId) => addedJobId === jobId);
    if (isApplied) {
      toast("Job already Applied");
    } else {
      saveJobApplication(jobId);
      toast("Job Applied");
    }
  };
  return (
    <div className="grid grid-cols-12 m-20 gap-2">
      <div className="col-span-1 md:col-span-8 space-y-3">
        <div>
          <span className="font-bold text-primary">Job Description: </span>
          <span className="text-secondary">{job_description}</span>
        </div>
        <div>
          <span className="font-bold text-primary">Job Responsibility: </span>
          <span className="text-secondary">{job_responsibility}</span>
        </div>
        <div>
          <span className="font-bold text-primary">
            Educational Requirements:{" "}
          </span>{" "}
          <br />
          <span className="text-secondary">{educational_requirements}</span>
        </div>
        <div>
          <span className="font-bold text-primary">Experiences: </span> <br />
          <span className="text-secondary">{experiences}</span>
        </div>
      </div>
      <div className="col-span-1 md:col-span-4 space-y-5">
        <div className="bg-gray-200 p-5 rounded-md space-y-5">
          <div className="space-y-3">
            <h2 className="border-b-2 border-b-purple-300 py-2 font-extrabold text-primary">
              Job Details
            </h2>
            <div className="text-secondary">
              <h3>
                <span className="text-primary font-semibold">Salary:</span>{" "}
                {salary} (Per month)
              </h3>
              <h3>
                <span className="text-primary font-semibold">Job Title:</span>{" "}
                {job_title}
              </h3>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="border-b-2 border-b-purple-300 font-extrabold py-2 text-primary">
              Contact Information
            </h2>
            <div className="text-secondary">
              <h3>
                <span className="text-primary font-semibold">Phone:</span>{" "}
                {contact_information.phone}
              </h3>
              <h3>
                <span className="text-primary font-semibold">Email:</span>{" "}
                {contact_information.email}
              </h3>
              <h3>
                <span className="text-primary font-semibold">Address:</span>{" "}
                {contact_information.address}
              </h3>
            </div>
          </div>
        </div>
        <button className="btn-primary w-full" onClick={handleAppliedJob}>
          Apply job
        </button>
      </div>
    </div>
  );
};

export default ViewDetails;
