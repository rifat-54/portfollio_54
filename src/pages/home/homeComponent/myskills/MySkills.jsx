import React from "react";
import { GrReactjs } from "react-icons/gr";
import { FaGithub, FaSquareJs } from "react-icons/fa6";
import { FaHtml5, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { BsFiletypeCss } from "react-icons/bs";
import { BiLogoTailwindCss } from "react-icons/bi";
import { motion } from "motion/react";
import { VscVscode } from "react-icons/vsc";
import { SiFirebase } from "react-icons/si";
import RevelUp from "../../../../components/animation/RevelUp";

import "./mySkillBorderGlow.css";
const MySkills = () => {
  const frontend = [
    {
      skill: "ReactJs",
      icon: <GrReactjs />,
      color: "#00FFFF",
      image:
        "https://img.icons8.com/?size=100&id=t4YbEbA834uH&format=png&color=000000",
    },
    {
      skill: "JavaScript",
      icon: <FaSquareJs />,
      color: "#FFFF00",
      image:
        "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
    },

    {
      skill: "HTML",
      icon: <FaHtml5 />,
      color: "#ffd900",
      image:
        "https://img.icons8.com/?size=100&id=v8RpPQUwv0N8&format=png&color=000000",
    },
    {
      skill: "CSS",
      icon: <BsFiletypeCss />,
      color: "#5eff00",
      image:
        "https://img.icons8.com/?size=100&id=21278&format=png&color=000000",
    },
    {
      skill: "TailwindCss",
      icon: <BiLogoTailwindCss />,
      color: "#00FFFF",
      image:
        "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000",
    },
  ];

  const backend = [
    {
      skill: "NodeJs",
      icon: <FaNodeJs />,
      color: "#00ff1e",
      image:
        "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000",
    },
    {
      skill: "MongoDB",
      icon: <SiMongodb />,
      color: "#00ff1e",
      image:
        "https://img.icons8.com/?size=100&id=tBBf3P8HL0vR&format=png&color=000000",
    },
    {
      skill: "ExpressJs",
      icon: <SiExpress />,
      color: "#00ff1e",
      image:
        "https://img.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png&color=000000",
    },
    {
      skill: "JavaScript",
      icon: <FaSquareJs />,
      color: "#FFFF00",
      image:
        "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
    },
  ];
  const tools = [
    {
      skill: "Github",
      icon: <FaGithub />,
      color: "#ffffff",
      image:
        "https://img.icons8.com/?size=100&id=63777&format=png&color=000000",
    },
    {
      skill: "VsCode",
      icon: <VscVscode />,
      color: "#22A7EA",
      image:
        "https://img.icons8.com/?size=100&id=0OQR1FYCuA9f&format=png&color=000000",
    },
    {
      skill: "Firebase",
      icon: <SiFirebase />,
      color: "#DD2C00",
      image:
        "https://img.icons8.com/?size=100&id=ROMfFZ1tMhpk&format=png&color=000000",
    },
    {
      skill: "Figma",
      image:
        "https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000",
    },
    {
      skill: "Postman",
      image:
        "https://img.icons8.com/?size=100&id=EPbEfEa7o8CB&format=png&color=000000",
    },
    {
      skill: "npm",
      image:
        "https://img.icons8.com/?size=100&id=24895&format=png&color=000000",
    },
  ];

  const others = [
    {
      skill: "Programming",
      icon: "C",
      color: "#ffffff",
      image:
        "https://img.icons8.com/?size=100&id=shQTXiDQiQVR&format=png&color=000000",
    },
    {
      skill: "C++",
      icon: "C++",
      color: "#ffffff",
      image:
        "https://img.icons8.com/?size=100&id=40669&format=png&color=000000",
    },
  ];

  return (
    <RevelUp>
      <div
        id="skills"
        className="px-1 overflow-hidden whitespace-nowrap md:px-8"
      >
        <h2 className="text-3xl font-bold text-center mb-20">MY SKILLS</h2>
        {/* skill image */}
        <div className="grid grid-cols-1 mb-16 md:grid-cols-2 lg:grid-cols-2 gap-16">
          {/* fronted */}
          <div className="custom-glow-section  hover:scale-105 hover:transition-transform duration-300">
            <h2 className="text-center mt-3 mb-6 font-semibold">Frontend</h2>
            <div className="flex mb-10 flex-wrap gap-5 text-white">
              {frontend?.map((item) => (
                <div
                  className="flex  justify-between opacity-90 items-center rounded-md bg-[#3F3F46] px-4 py-3 
                relative glow-border   gap-5 mx-auto  hover:shadow-2xl transition-shadow hover:scale-105 hover:transition-transform duration-300
                "
                >
                  <span className="text-4xl font-semibold">
                    <img className="w-10" src={item?.image} alt={item?.skill} />
                  </span>
                  <p className="text-xl">{item?.skill}</p>
                </div>
              ))}
            </div>
          </div>
          {/* backend */}
          <div className="custom-glow-section  hover:scale-105 hover:transition-transform duration-300">
            <h2 className="text-center mt-1 mb-6 font-semibold">Backend</h2>
            <div className="flex mb-10 flex-wrap gap-5 text-white">
              {backend?.map((item) => (
                <div
                  className="flex  justify-between opacity-90 items-center rounded-md bg-[#3F3F46] px-4 py-3 
              relative glow-border   gap-5 mx-auto  hover:shadow-2xl transition-shadow hover:scale-105 hover:transition-transform duration-300
              "
                >
                  <span className="text-4xl font-semibold">
                    <img className="w-10" src={item?.image} alt={item?.skill} />
                  </span>
                  <p className="text-xl">{item?.skill}</p>
                </div>
              ))}
            </div>
          </div>
          {/* tools */}
          <div className="custom-glow-section  hover:scale-105 hover:transition-transform duration-300">
            <h2 className="text-center mt-1 mb-6 font-semibold">Tools</h2>
            <div className="flex mb-6 flex-wrap gap-5 text-white">
              {tools?.map((item) => (
                <div
                  className="flex  justify-between opacity-90 items-center rounded-md bg-[#3F3F46] px-4 py-3 
              relative glow-border   gap-5 mx-auto  hover:shadow-2xl transition-shadow hover:scale-105 hover:transition-transform duration-300
              "
                >
                  <span className="text-4xl font-semibold">
                    <img className="w-10" src={item?.image} alt={item?.skill} />
                  </span>
                  <p className="text-xl">{item?.skill}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Others */}
          <div className="custom-glow-section  hover:scale-105 hover:transition-transform duration-300">
            <h2 className="text-center mt-1 mb-10 font-semibold">
              Others Skills
            </h2>
            <div className="flex mb-6 flex-wrap gap-5 text-white">
              {others?.map((item) => (
                <div
                  className="flex  justify-between opacity-90 items-center rounded-md bg-[#3F3F46] px-4 py-3 
             relative glow-border   gap-5 mx-auto  hover:shadow-2xl transition-shadow hover:scale-105 hover:transition-transform duration-300
             "
                >
                  <span className="text-4xl font-semibold">
                    <img className="w-10" src={item?.image} alt={item?.skill} />
                  </span>
                  <p className="text-xl">{item?.skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* <motion.div
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          x: {
            repeat: Infinity,
            duration: 15,
            repeatType: "loop",
            ease: "linear",
          },
        }}
        className="flex mt-36 gap-5 text-white"
      >
        {repeted?.map((item) => (
          <div className="flex justify-between opacity-90 items-center rounded-md bg-[#3F3F46] px-4 py-3">
            <span
              className="text-4xl font-semibold"
              style={{ color: item?.color }}
            >
              {item?.icon}
            </span>
            <p className="text-xl">{item?.skill}</p>
          </div>
        ))}
      </motion.div> */}
    </RevelUp>
  );
};

export default MySkills;
