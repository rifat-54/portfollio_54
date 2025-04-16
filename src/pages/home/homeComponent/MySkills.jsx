import React from 'react';
import { GrReactjs } from "react-icons/gr";
import { FaGithub, FaSquareJs } from "react-icons/fa6";
import { FaHtml5, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { BsFiletypeCss } from "react-icons/bs";
import { BiLogoTailwindCss } from "react-icons/bi";

const MySkills = () => {
    return (
        <div className='px-1 md:px-8'>
            <h2 className='text-3xl font-bold text-center my-12'>MY SKILLS</h2>
            {/* skill image */}
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-white'>
                <div className='flex justify-between opacity-90 items-center rounded-md bg-[#3F3F46] px-4 py-3'>
                <span className='text-[#00FFFF] text-4xl font-semibold'><GrReactjs /></span>
                <p className='text-xl'>ReactJs</p>
                </div>

                <div className='flex justify-between opacity-90 items-center rounded-md bg-[#3F3F46] px-4 py-3'>
                <span className='text-[#FFFF00] text-4xl font-semibold'><FaSquareJs /></span>
                <p className='text-xl'>JavaScript</p>
                </div>

                <div className='flex justify-between opacity-90 items-center rounded-md bg-[#3F3F46] px-4 py-3'>
                <span className='text-[#00ff1e] text-4xl font-semibold'><FaNodeJs /></span>
                <p className='text-xl'>NodeJs</p>
                </div>

                <div className='flex justify-between opacity-90 items-center rounded-md bg-[#3F3F46] px-4 py-3'>
                <span className='text-[#00ff1e] text-4xl font-semibold'><SiMongodb /></span>
                <p className='text-xl'>MongoDB</p>
                </div>

                <div className='flex justify-between opacity-90 items-center rounded-md bg-[#3F3F46] px-4 py-3'>
                <span className='text-[#00ff1e] text-4xl font-semibold'><SiExpress /></span>
                <p className='text-xl'>ExpressJs</p>
                </div>

                <div className='flex justify-between opacity-90 items-center rounded-md bg-[#3F3F46] px-4 py-3'>
                <span className='text-[#ffd900] text-4xl font-semibold'><FaHtml5 /></span>
                <p className='text-xl'>HTML</p>
                </div>

                <div className='flex justify-between opacity-90 items-center rounded-md bg-[#3F3F46] px-4 py-3'>
                <span className='text-[#5eff00] text-4xl font-semibold'><BsFiletypeCss/></span>
                <p className='text-xl'>CSS</p>
                </div>

                <div className='flex justify-between opacity-90 items-center rounded-md bg-[#3F3F46] px-4 py-3'>
                <span className='text-[#00FFFF] text-4xl font-semibold'><BiLogoTailwindCss/></span>
                <p className='text-xl'>TailwindCss</p>
                </div>

                <div className='flex justify-between opacity-90 items-center rounded-md bg-[#3F3F46] px-4 py-3'>
                <span className='text-[#ffffff] text-4xl font-semibold'><FaGithub /></span>
                <p className='text-xl'>Github</p>
                </div>

                <div className='flex justify-between opacity-90 items-center rounded-md bg-[#3F3F46] px-4 py-3'>
                <span className='text-[#ffffff] text-4xl font-semibold'>C</span>
                <p className='text-xl'>Programming</p>
                </div>

                <div className='flex justify-between opacity-90 items-center rounded-md bg-[#3F3F46] px-4 py-3'>
                <span className='text-[#ffffff] text-4xl font-semibold'>C++</span>
                <p className='text-xl'>C++</p>
                </div>




            </div>
        </div>
    );
};

export default MySkills;