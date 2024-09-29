import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center mx-20 my-5">
      <h1 className="text-2xl tracking-wider font-extrabold text-primary">
        <Link to='/'>Career Hub</Link>
      </h1>
      <ul className="nav-items">
        <li>
          <NavLink
            to="/statistics"
            className={({ isActive }) =>
              isActive ? "text-purple-500" : "hover:text-purple-500"
            }
          >
            Statistics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/applied-jobs"
            className={({ isActive }) =>
              isActive ? "text-purple-500" : "hover:text-purple-500"
            }
          >
            Applied Jobs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              isActive ? "text-purple-500" : "hover:text-purple-500"
            }
          >
            Blog
          </NavLink>
        </li>
      </ul>
      <div>
        <button className="btn-primary">Start Applying</button>
      </div>
    </nav>
  );
};

export default Navbar;
