import { Link, NavLink } from "react-router";
import "./Navbar.css";
import { use } from "react";
import { AuthContext } from "../../../Context/AuthContext";

const Navbar = () => {
  // const { createUser } = use(AuthContext);
  // console.log(createUser);
  const { user, signOutUser } = use(AuthContext);
  // console.log(user);

  const handelSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("sign out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      {!user && (
        <>
          {" "}
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        </>
      )}
      {user && (
        <>
          <li>
            <NavLink to="/orders">Order</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-gray-700 shadow-sm">
      <div className="">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
            <h3 className="font-bold">All</h3>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-green-100 text-black duration-700 rounded-box z-1 mt-3  p-2 shadow"
          >
            {links}
          </ul>
        </div>
      </div>
      <div className="flex justify-start overflow-hidden w-full ml-10">
        <ul className="space-x-5 flex flex-row overflow-x-auto md:overflow-hidden items-center flex-nowrap">
          <li className="shrink-0">
            <Link
              className="hover:underline bg-white text-black  rounded-xl p-1"
              to="/"
            >
              Rufus
            </Link>
          </li>
          <li className="shrink-0">
            <Link className="hover:underline " to="/">
              Today's deals
            </Link>
          </li>
          <li className="shrink-0">
            <Link className="hover:underline " to="/">
              Prime Video
            </Link>
          </li>
          <li className="shrink-0">
            <Link className="hover:underline " to="/">
              Buy Again
            </Link>
          </li>
          <li className="shrink-0">
            {" "}
            <Link className="hover:underline " to="/">
              Customer Service
            </Link>
          </li>
          <li className="shrink-0">
            <Link className="hover:underline " to="/">
              Registry
            </Link>
          </li>
          <li className="shrink-0">
            <Link className="hover:underline " to="/">
              Gift Cards
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            {user.email}
            <a onClick={handelSignOut} className="btn">
              Log Out
            </a>
          </>
        ) : (
          <Link className="btn" to="/login">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
