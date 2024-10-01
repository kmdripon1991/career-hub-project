import axios from "axios";
import SectionHeader from "../SectionHeader/SectionHeader";
import { useEffect, useState } from "react";
import Category from "../Category/Category";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("/public/data/categories.json");
        setCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, []);
  return (
    <div>
      <SectionHeader>
        <h1 className="text-5xl font-extrabold text-primary">
          Job Category List
        </h1>
        <p className="text-base text-secondary">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </SectionHeader>
      <div className="flex flex-col md:flex-row w-3/4 mx-auto gap-3">
        {categories.map((category) => (
          <Category key={category.id} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
