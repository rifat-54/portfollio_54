import React from "react";
import SocialLink from "../../../components/SocialLink";
import { FaDownload } from "react-icons/fa6";
import portfolliophoto from "../../../assets/Rifat.png";
import { motion } from "motion/react";
import TypeWriter from "./../../../utilities/TypeWriter";
import RevelSideLeft from "../../../components/animation/RevelSideLeft";
import RevelSideRight from "../../../components/animation/RevelSideRight";

// const { scrollYProgress } = useScroll()

const About = () => {
  return (
    <div className="px-2 md:px-3 lg:px-5 py-20 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* photo */}
      <RevelSideLeft>
        <div>
          <img className="rounded-md bg-black" src={portfolliophoto} alt="" />
        </div>
      </RevelSideLeft>
      {/* text */}
      <RevelSideRight>
        <div>
          <h2 className="text-3xl font-semibold mb-4">
            <TypeWriter text="Hello,I'm Rifat"></TypeWriter>{" "}
          </h2>

          <h4
            //   initial={{ opacity: 0, scale: 0.5 }}
            //   animate={{ opacity: 1, scale: 1 }}
            //   transition={{ duration: 0.25, delay: 1 }}
            className="transition duration-500 ease-linear transform hover:-translate-y-1 hover:scale-105 text-2xl mb-3 text-blue-500 font-semibold"
          >
            Full Stack Developer | Student | Tech Enthusiast
          </h4>

          <SocialLink></SocialLink>

          <div className="flex  gap-4 flex-wrap items-center justify-between mt-14">
            <button
              className="btn flex opacity-90 items-center rounded-md bg-[#111111] px-5 py-7
                relative glow-border   gap-5 mx-auto  hover:shadow-2xl transition-shadow hover:scale-105 hover:transition-transform duration-300 text-xl   text-white"
            >
              Download Resume <FaDownload />
            </button>
            <button
              className="btn flex opacity-90 items-center rounded-md bg-[#0f0f10] px-5 py-7
                relative glow-border   gap-5 mx-auto  hover:shadow-2xl transition-shadow hover:scale-105 hover:transition-transform duration-300 text-xl   text-white"
            >
              Download CV <FaDownload />
            </button>
          </div>
        </div>
      </RevelSideRight>
    </div>
  );
};

export default About;
