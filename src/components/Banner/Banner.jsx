const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5">
      <div className="p-20 space-y-5">
        <h1 className="font-extrabold text-primary text-7xl ">
          One Step Closer To Your{" "}
          <span className="text-purple-500">Dream Job</span>
        </h1>
        <p className="text-secondary text-lg">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="btn-primary">Get Started</button>
      </div>
      <div className=" w-full">
        <img className="object-cover" src="/src/assets/images/user.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
