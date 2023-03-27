import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay ,} from 'swiper';
import { EffectCards, EffectFlip,} from "swiper";
import {motion} from 'framer-motion'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "swiper/css/effect-cards";
import "swiper/css/effect-flip";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

/*
className='h-96 w-full max-w-xs mx-auto'
loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }} */
function App() {
    const services = ['Policies and Procedures', 'Customized Employee Handbook', 'Benefits Review', 'Positive Employee Relations', 'Arbitrations', 'NLRB Actions'];
    const colors=['red','blue','green','yellow','brown','grey']
  return (
    <div className=' h-full flex flex-col md:px-20 px-8 gap-10 pt-10'>
        <h1 className='text-3xl text-center py-2 font-semibold font-serif'>Our Services</h1>
         <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        navigation={true}
       // loop={true}
        
        modules={[EffectFlip, Pagination, Navigation,]}
        className="mySwiper relative h-96 w-full max-w-md mx-auto"
   
    >
        {services.map((item,index)=>{
            return       <SwiperSlide key={index}  className='h-full block  w-10/12
            bg-stone-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-100

             shadow-xl   hover:cursor-pointer '>
                <motion.span initial={{x:10,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:2,delay:1}}>
                {item}

                </motion.span>
                </SwiperSlide>

        })}
      
    </Swiper>
    </div>
  );
}

export default App; 