import React from "react";
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./project.css";

// import required modules
import { Navigation } from "swiper/modules";
import Slider from "./Slider";
const Projects = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mt-2 mb-8">
        Popular Project
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <div className="card bg-base-100  shadow-sm">
          <figure>
            <img
              src="https://i.ibb.co.com/BWkn5nJ/Screenshot-19.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-black">
            <h2 className="text-2xl font-semibold text-center">Bistro Boss Restaurant</h2>
            
            <div className="card-actions justify-center">
              <button className="btn btn-primary">See More</button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Projects;
