import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Jobs from "../Jobs/Jobs";

const Home = () => {
  return (
    <div className="space-y-10">
      <Banner></Banner>
      <Categories></Categories>
      <Jobs></Jobs>
    </div>
  );
};

export default Home;
