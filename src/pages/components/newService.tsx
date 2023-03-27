import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper';
import { EffectCards, } from "swiper";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "swiper/css/effect-cards";



function App() {
    const services = ['Policies and Procedures', 'Customized Employee Handbook', 'Benefits Review', 'Positive Employee Relations', 'Arbitrations', 'NLRB Actions'];
    const colors=['red','blue','green','yellow','brown','grey']
  return (
    <div className=' h-full flex flex-col md:px-20 px-8 pt-10'>
        <h1>Our Services</h1>
         <Swiper
         loop={true}
         className='h-96 w-full max-w-xs mx-auto'
         effect={"cards"}
        grabCursor={true}
        pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Navigation,EffectCards,Autoplay]}
   
    >
        {services.map((item,index)=>{
            return       <SwiperSlide key={index}  className='h-40 rounded-xl shadow-xl w-40 border hover:cursor-pointer bg-slate-300'>{item}</SwiperSlide>

        })}
      
    </Swiper>
    </div>
  );
}

export default App;