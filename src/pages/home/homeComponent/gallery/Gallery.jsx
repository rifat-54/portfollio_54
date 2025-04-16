import React, { useEffect, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './gallery.css'


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Gallery = () => {
    const[img,setImg]=useState([])
    useEffect(()=>{
        fetch('./galleryImg.json')
        .then(res=>res.json())
        .then(data=>setImg(data))
    },[])
    // console.log(img);

// img.map(item=>console.log(item))


    return (
        <div>
            <h2 className='text-3xl text-center my-14'>Projects Gallery</h2>
            <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
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
    
        {
            img.map((item,idx)=><SwiperSlide key={idx}>
                <img className='rounded-md  pl-5' src={item.image} />
              </SwiperSlide>)
        }
     
        
        
        
        
        
      </Swiper>
    </>
  

        </div>
    );
};

export default Gallery;