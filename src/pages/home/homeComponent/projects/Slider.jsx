import React from 'react';
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Slider = ({img,url}) => {
    return (
        <div className='relative'>
            <img src={img} alt="" />
            <div className='absolute px-5 md:px-10 py-3 rounded-md bg-[#3F3F46] opacity-80 font-bold text-white hover:bg-green-500 top-[55%] md:top-[70%] left-[30%] md:left-[45%]'>
            <Link to={url}>
            <button className='flex items-center gap-3'>Visit Live Site <span className='text-2xl'><FaArrowCircleRight /></span></button>
            </Link>
            </div>
        </div>
    );
};

export default Slider;