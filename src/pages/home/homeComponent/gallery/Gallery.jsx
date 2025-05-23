import React, { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./gallery.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { motion } from "motion/react";
import RevelSideRight from "../../../../components/animation/RevelSideRight";

const Gallery = () => {
  const [img, setImg] = useState([]);
  useEffect(() => {
    fetch("./galleryImg.json")
      .then((res) => res.json())
      .then((data) => setImg(data));
  }, []);
  // console.log(img);

  // img.map(item=>console.log(item))

 

  return (
   <RevelSideRight>
     <div className="overflow-hidden whitespace-nowrap">
      <h2 className="text-3xl text-center mt-12 mb-14">Design Diaries</h2>
      <>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {img.map((item, idx) => (
            <SwiperSlide key={idx}>
              <img className="rounded-md max-h-[320px]  pl-5 relative glow-border  flex items-center gap-5 mx-auto opacity-90  bg-[#3F3F46] px-4 py-3 hover:shadow-2xl transition-shadow hover:scale-105 hover:transition-transform duration-300" src={item.image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
   </RevelSideRight>
  );
};

export default Gallery;
