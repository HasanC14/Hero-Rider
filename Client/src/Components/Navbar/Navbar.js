import React, { useContext, useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../Context/AuthProvider";

const Navbar = () => {
  const { User, LogOut } = useContext(AuthContext);
  const [info, setInfo] = useState();
  fetch(`http://localhost:5000/user/${User?.email}`)
    .then((res) => res.json())
    .then((data) => {
      setInfo(data);
    });
  const HandleLogout = () => {
    LogOut()
      .then(() => {
        swal({
          title: "Logout Successful",
          button: "OK",
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
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
      {User && info?.role === "Admin" ? (
        <li>
          <Link to={"/Dashboard"}>Dashboard</Link>
        </li>
      ) : (
        ""
      )}
      {User ? (
        <>
          <li>
            <Link to={"/Profile"}>Profile</Link>
          </li>
          <div className="grid grid-cols-2 items-center">
            {User?.photoURL ? (
              <img src={User?.photoURL} className="w-10 rounded-full" alt="" />
            ) : (
              <FaUserCircle className="text-4xl"></FaUserCircle>
            )}
          </div>
          <li>
            <button onClick={HandleLogout}>
              LogOut<FaSignOutAlt></FaSignOutAlt>
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to={"/Login"}>Login</Link>
          </li>
          <li>
            <Link to={"/RiderReg"}>Join as Rider</Link>
          </li>
          <li>
            <Link to={"/LearnerReg"}>Join as Learner</Link>
          </li>
        </>
      )}
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
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-semibold ">
          {MenuItems}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
