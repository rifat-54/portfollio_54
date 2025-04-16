import React from 'react';
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './project.css'


// import required modules
import { Navigation } from 'swiper/modules';
import Slider from './Slider';
const Projects = () => {
    return (
        <div>
          <h2 className='text-3xl font-bold text-center mt-2 mb-8'>Popular Project</h2>
              <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
       {/* project 1 */}
        <SwiperSlide>
          <Slider
          img={'https://i.ibb.co.com/BWkn5nJ/Screenshot-19.png'}
          url={'https://bistro-boss-restaurant-42687.web.app/'}
          ></Slider>
            
        </SwiperSlide>
        {/* project 2 */}
        <SwiperSlide>
          <Slider
          img={'https://i.ibb.co.com/TB8nvQ5y/Screenshot-21.png'}
          url={'https://a-12-learnnest.web.app/'}
          ></Slider>
            
        </SwiperSlide>
        
      </Swiper>
    </>
        </div>
    );
};

export default Projects;