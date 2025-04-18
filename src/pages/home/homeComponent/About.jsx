import React from 'react';
import SocialLink from '../../../components/SocialLink';
import { FaDownload } from "react-icons/fa6";
import portfolliophoto from '../../../assets/Rifat.png'
const About = () => {
    return (
        <div className='px-2 md:px-3 lg:px-5 py-20 flex flex-col md:flex-row items-center justify-between gap-10'>
            
            {/* photo */}
            <div>
                <img className='rounded-md bg-black' src={portfolliophoto} alt="" />
            </div>
            {/* text */}
            <div>
                <h2 className='text-3xl font-semibold mb-4'>Hello,I'm <span className='text-blue-400 text-4xl'><span className='text-5xl font-normal'>R</span>ifat</span></h2>
                <h4 className='transition duration-500 ease-linear transform hover:-translate-y-1 hover:scale-105 text-2xl mb-3 text-green-500 font-semibold'>Full Stack Developer | Student | Tech Enthusiast</h4>
                <SocialLink></SocialLink>

                <button className='btn text-xl mt-8 bg-[#6DE1D2] text-white'>Download CV <FaDownload /></button>
            </div>
        </div>
    );
};

export default About;