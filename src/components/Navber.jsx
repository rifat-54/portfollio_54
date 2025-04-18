import React from "react";
import { FaDownload } from "react-icons/fa6";
import { Link } from "react-scroll";

const Navber = () => {
  const links = (
    <div className="flex space-x-3 text-2xl">
      <a className="cursor-pointer hover:text-red-500" href="/">
        <li>Home</li>
      </a>
      <Link
        to={"about"}
        smooth={true}
        duration={500}
        className="cursor-pointer hover:text-red-500"
      >
        {" "}
        <li>About</li>{" "}
      </Link>

      <Link
        to={"projects"}
        smooth={true}
        duration={500}
        className="cursor-pointer hover:text-red-500"
      >
        {" "}
        <li>Projects</li>{" "}
      </Link>

    <Link
        to={"skills"}
        smooth={true}
        duration={500}
        className="cursor-pointer hover:text-red-500"
      >
        {" "}
        <li>Skills</li>{" "}
      </Link>

      <Link
        to={"contact"}
        smooth={true}
        duration={500}
        className="cursor-pointer hover:text-red-500"
      >
        {" "}
        <li>Contact</li>{" "}
      </Link>

      
      
   
   
    </div>
  );
  return (
    <div className="bg-[#4B5D67] text-white ">
      <div className="navbar  shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
        <button className='btn  bg-[#6DE1D2] text-white'>Download CV <FaDownload /></button>

        </div>
      </div>
    </div>
  );
};

export default Navber;
