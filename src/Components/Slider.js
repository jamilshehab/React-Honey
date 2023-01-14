import React,{useState} from 'react';
import 'swiper/swiper-bundle.css';
import {Swiper,SwiperSlide} from 'swiper/react';
import carouselimg from '../images/slider/1.png';
import carouselimg1 from '../images/slider/2.png';
import carouselimg2 from '../images/slider/3.png';
import carouselimg3 from '../images/slider/4.png';
import carouselimg4 from '../images/slider/5.png';
import carouselimg5 from '../images/slider/6.png';
import {EffectCoverflow,Pagination} from 'swiper';
export default function Slider() {
  return (
<div> 
<Swiper effect={"coverflow"}
  grabCursor={true}
  centeredSlides={true}
  slidesPerView={6}
  coverflowEffect={{
    rotate:50,
    stretch:0,
    depth:100,
    modifier:1,
    slideShadows:false,
  }}
  pagination={false}
  modules={[EffectCoverflow, Pagination]}
  className='mySwiper'
  >
  <SwiperSlide>
  <img src={carouselimg} className='img-fluid zoom-image-1' width={120} height={120}/>
  </SwiperSlide>
  <SwiperSlide>
  <img src={carouselimg1} className='img-fluid zoom-image-1'  width={120} height={120}/>
  </SwiperSlide>
  <SwiperSlide>
  <img src={carouselimg2} className='img-fluid zoom-image-1'  width={120} height={120}/>
  </SwiperSlide>
  <SwiperSlide>
  <img src={carouselimg3} className='img-fluid zoom-image-1 ' width={120} height={120}/>
  </SwiperSlide>
  <SwiperSlide>
  <img src={carouselimg4} className='img-fluid zoom-image-1' width={120} height={120}/>
  </SwiperSlide>
  <SwiperSlide>
  <img src={carouselimg5} className='img-fluid zoom-image-1'  width={120} height={120}/>
  </SwiperSlide>
    
  </Swiper>
</div>
    );
  }