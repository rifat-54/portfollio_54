import React from "react";

import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

import groupstudy from '../../../../assets/groupstudy.png'
const Projects = () => {
  return (
    <div id="projects" className="mb-24 mt-10 md:px-1">
      <h2 className="text-3xl font-bold text-center mt-2 mb-12">
        Rescent Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {/* bistro boss */}
        <div className="card bg-base-100  shadow-sm">
          <div className=" bg-[#3F3F46] opacity-90">
            <h2 className="text-2xl my-5 font-semibold text-center">
              Bistro Boss Restaurant
            </h2>
          </div>
          <figure className="relative">
            <img
              src="https://i.ibb.co.com/BWkn5nJ/Screenshot-19.png"
              alt="Shoes"
            />
            <div className="absolute">
              
              <Link to={'/bistroboss'} className="btn text-xl btn-primary">
                View More <FaArrowCircleRight />
              </Link>
             
            </div>
          </figure>
        </div>

        {/* learn nest */}
        <div className="card bg-base-100  shadow-sm">
          <div className=" bg-[#3F3F46] opacity-90">
            <h2 className="text-2xl my-5 font-semibold text-center">
              Learn Nest Academy
            </h2>
          </div>
          <figure className="relative">
            <img
              src="https://i.ibb.co.com/TB8nvQ5y/Screenshot-21.png"
              alt="Book"
            />
            <div className="absolute">
              
             
              <Link to={'/learn-nest'} className="btn text-xl btn-primary">
                View More <FaArrowCircleRight />
              </Link>
              
            </div>
          </figure>
        </div>

        {/* group study */}
        <div className="card bg-base-100  shadow-sm">
          <div className=" bg-[#3F3F46] opacity-90">
            <h2 className="text-2xl my-5 font-semibold text-center">
              Group Study Platform
            </h2>
          </div>
          <figure className="relative  h-full">
           

            <img
            className=" w-full h-full text-center object-fill"
            src={groupstudy}
            alt="Book"
            />
          
            <div className="absolute">
            
             
              <Link to={'/group-study'} className="btn text-xl btn-primary">
                View More <FaArrowCircleRight />
              </Link>
         
            </div>
          </figure>
        </div>


      </div>
    </div>
  );
};

export default Projects;
