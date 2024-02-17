import { Box } from "@mui/material";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import './styles.css'; // Import the CSS file with the styles
import image1 from './images/BuckinghamUBadger.jpeg';
import image2 from './images/goldygopher.jpeg';

function MatchFrame() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '450px' }}>
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper: any) => console.log(swiper)}
        >
          <SwiperSlide style={{width: '100%', height: '350px' }}>
            <img src={image1} alt="Slide 1" style={{ width: '200px', height: '300px' }}/>
            <p>Bucky is the mascot for UW-Madison. His research interests are quantum computing and time complexity.</p>
          </SwiperSlide>
          <SwiperSlide style={{ height: '350px' }}>
            <img src={image2} alt="Slide 2" style={{ width: '200px', height: '300px' }} />
            <p>Goldy is the mascot for the University of Minnesota. His research interests are CPU design and high performance computing.</p>
          </SwiperSlide>
        </Swiper>
    </div>
  );
}

export default MatchFrame;
