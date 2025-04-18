import React from 'react';
import SocialLink from '../../../components/SocialLink';
import { FaDownload } from "react-icons/fa6";
const About = () => {
    return (
        <div className='px-2 md:px-3 lg:px-5 py-20 md:flex items-center justify-between gap-10'>
            
            {/* photo */}
            <div>
                <img className='rounded-md' src="https://i.ibb.co.com/ZpT4t7Hx/Rifat.png" alt="" />
            </div>
            {/* text */}
            <div>
                <h2 className='text-2xl font-semibold mb-4'>Hello,I'm <span className='text-blue-400'>Rifat</span></h2>
                <h4 className='text-xl mb-3 text-green-500 font-semibold'>Full Stack Developer | Student | Tech Enthusiast</h4>
                <SocialLink></SocialLink>

                <button className='btn text-xl mt-8 bg-[#6DE1D2] text-white'>Download CV <FaDownload /></button>
            </div>
        </div>
    );
};

export default About;