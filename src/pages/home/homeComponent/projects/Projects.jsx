import React, { useEffect, useState } from "react";

import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./project.css";
import RevelUp from "../../../../components/animation/RevelUp";

const Projects = () => {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    fetch("./projectData.json")
      .then((res) => res.json())
      .then((data) => setProjectData(data));
  }, []);

  console.log(projectData);

  return (
    <RevelUp>
      <div id="projects" className="mb-24 mt-10 md:px-1">
        <h2 className="text-3xl font-bold text-center mt-2 mb-20">
          Rescent Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
          {/* bistro boss */}
          {projectData.map((project) => (
            <div key={project?.id} className="card bg-base-100  shadow-sm">
              <div className=" bg-[#3F3F46] opacity-90">
                <h2 className="text-2xl my-5 font-semibold text-center">
                  {project?.name}
                </h2>
              </div>
              <figure className="relative">
                <div className="group relative h-64 w-full overflow-hidden ">
                  <img
                    src={project?.image}
                    alt="Project"
                    className="absolute  top-0 left-0 w-full min-h-[150%] object-cover transition-all duration-[3000ms] ease-in-out group-hover:translate-y-[-80%]"
                  />
                </div>

                <div className="absolute -bottom-5 flex justify-between gap-20 items-center rounded-md py-5 px-5">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project?.details?.liveLink}
                  >
                    <button className="relative custom-glow-section hover:shadow-2xl   hover:transition-transform font-semibold   py-0 text-white tracking-wide rounded-md bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 shadow-md transition-all duration-300 hover:scale-105">
                      <span className="relative text-xs z-10 flex items-center justify-center gap-3">
                        Live Link
                      </span>
                    </button>
                  </a>

                  <Link to={`/project-details/${project?.id}`}>
                    <button
                      className="btn flex opacity-90 items-center  bg-[#111111] px-5 py-3
                relative custom-glow-border rounded-full   gap-3 mx-auto  hover:shadow-2xl transition-shadow hover:scale-105 hover:transition-transform duration-300 text-xs   text-white"
                    >
                      View Details
                      <FaArrowCircleRight />
                    </button>
                  </Link>
                </div>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </RevelUp>
  );
};

export default Projects;
