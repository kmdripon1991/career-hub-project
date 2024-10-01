import axios from "axios";

const jobsLoader = async () => {
  try {
    const jobsData = await axios.get("/public/data/jobs.json");
    console.log(jobsData.data);
    return jobsData.data;
  } catch (error) {
    console.log(error);
  }
};

export { jobsLoader };
