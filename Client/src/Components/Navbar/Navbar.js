import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const MenuItems = (
    <React.Fragment>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/Blog"}>Blog</Link>
      </li>
      <li>
        <Link to={"/About"}>About</Link>
      </li>
    </React.Fragment>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {MenuItems}
          </ul>
        </div>
        <Link
          to={"/"}
          className="btn btn-ghost normal-case text-3xl font-mono "
        >
          Hero Rider
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{MenuItems}</ul>
      </div>
      <div className="navbar-end">
        <Link
          to={"/Login"}
          className="btn-primary px-8 py-3 font-semibold rounded  dark:text-primary-content mr-5"
        >
          Login
        </Link>
        <Link
          to={"/Register"}
          className="btn-primary px-8 py-3 font-semibold rounded  dark:text-primary-content"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
