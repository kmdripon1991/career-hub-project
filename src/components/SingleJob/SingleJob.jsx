import PropTypes from "prop-types";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const SingleJob = ({ singleJob }) => {
  const myLocation = useLocation();
  // console.log(myLocation);
  const {
    id,
    logo,
    job_title,
    company_name,
    job_type,
    location,
    salary,
    remote_or_onsite,
  } = singleJob;
  //   console.log(singleJob);
  return (
    <div
      className={`  ${
        myLocation.pathname === "/applied-jobs" ? "py-5" : "mt-5 md:mt-10"
      }`}
    >
      <div
        className={`border-2 rounded p-5 space-y-5 ${
          myLocation.pathname === "/applied-jobs" &&
          "flex flex-row items-center gap-10"
        }`}
      >
        <div
          className={` ${
            myLocation.pathname === "/applied-jobs"
              ? "w-48 h-48 p-10 bg-gray-100 rounded-md flex justify-center items-center"
              : "h-10"
          }`}
        >
          <img className="object-contain" src={logo} alt="" />
        </div>
        <div className="flex-grow space-y-5">
          <div className="space-y-5">
            <h2 className="text-primary font-extrabold text-2xl">
              {job_title}
            </h2>
            <h3 className="text-secondary font-semibold text-xl">
              {company_name}
            </h3>
          </div>
          <div className="space-x-3">
            <button className="btn-outline">{remote_or_onsite}</button>
            <button className="btn-outline">{job_type}</button>
          </div>
          <div className="flex flex-wrap items-center gap-5 text-xl font-semibold">
            <h4 className="flex items-center gap-3">
              <span>
                <IoLocationOutline />
              </span>
              {location}
            </h4>
            <h4 className="flex items-center gap-3">
              <span>
                <AiOutlineDollarCircle />
              </span>
              {salary}
            </h4>
          </div>
        </div>
        <div>
          <Link to={`/job/${id}`}>
            <button className="btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

SingleJob.propTypes = {
  singleJob: PropTypes.object.isRequired,
};
export default SingleJob;
