import React from "react";
import { FaDownload } from "react-icons/fa6";
import { Link } from "react-scroll";
import logo from "../assets/Screenshot_44.png";
const Navber = () => {
  const links = (
    <div className="md:flex text-[18px]  md:space-x-8 md:text-2xl">
      <a className="cursor-pointer hover:text-blue-500" href="/">
        <li>Home</li>
      </a>
      <Link
        to={"about"}
        smooth={true}
        duration={500}
        className="cursor-pointer hover:text-blue-500"
      >
        {" "}
        <li>About</li>{" "}
      </Link>

      <Link
        to={"projects"}
        smooth={true}
        duration={500}
        className="cursor-pointer hover:text-blue-500"
      >
        {" "}
        <li>Projects</li>{" "}
      </Link>

      <Link
        to={"skills"}
        smooth={true}
        duration={500}
        className="cursor-pointer hover:text-blue-500"
      >
        {" "}
        <li>Skills</li>{" "}
      </Link>

      <Link
        to={"contact"}
        smooth={true}
        duration={500}
        className="cursor-pointer hover:text-blue-500"
      >
        {" "}
        <li>Contact</li>{" "}
      </Link>
    </div>
  );
  return (
    <div className="bg-[#000000] text-white ">
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
              className="menu menu-sm dropdown-content bg-black rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a href="/" className=" text-xl">
            <div className="hidden lg:block">
              <img className="w-[87px] rounded-md" src={logo} alt="" />
            </div>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1H69tNQDLIU6Yq5YGmTgJ1yfXktMbXaoz/view?usp=sharing"
          >
            <button className="relative custom-glow-section hover:shadow-2xl   hover:transition-transform font-semibold   py-2 text-white tracking-wide rounded-md bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 shadow-md transition-all duration-300 hover:scale-105">
              <span className="relative z-10 flex items-center gap-3">
                Hire Me
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navber;
