import PropTypes from "prop-types";

const Category = ({ category }) => {
  const { logo, category_name, availability } = category;
  return (
    <div className="mt-5 md:mt-10 w-full">
      <div className="p-5 w-full space-y-7 bg-gray-100 rounded-lg">
        <div
          className="p-3 size-20 rounded-lg"
          style={{ backgroundColor: "#EFECFF" }}
        >
          <img className="object-cover w-full" src={logo} alt="" />
        </div>
        <div className="space-y-3">
          <h2 className="text-primary font-extrabold text-xl">
            {category_name}
          </h2>
          <p className="text-secondary text-base">{availability}</p>
        </div>
      </div>
    </div>
  );
};

Category.propTypes = {
  category: PropTypes.object.isRequired,
};
export default Category;
