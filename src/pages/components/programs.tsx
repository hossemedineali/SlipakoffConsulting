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
        <h1 className='text-3xl text-center py-2 font-semibold font-serif'>Specialty Programs</h1>
         <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        navigation={true}
       // loop={true}
        
        modules={[EffectFlip, Pagination, Navigation,]}
        className="mySwiper relative h-[620px] w-full max-w-md mx-auto"
   
    >
      <SwiperSlide   className='h-full block pb-16  w-12/12
               hover:cursor-pointer px-10 '>
                 <div className='bg-slate-700 py-5 px-1 rounded-xl  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-90  border border-gray-100shadow-xl text-white w-full h-full flex flex-col'>
                 <h2 className='text-center text-2xl'>Strategic Services</h2>
                 <p className='pt-5 text-md my-auto md:text-xl text-center'>
                 Slipakoff Consulting develops strategic business objectives that improve HR and labor relations, considering an organization's culture and management style. Our services help create measurable goals, improve employee relations, and establish a union-free environment. We offer Management Training and employee involvement programs for effective communication and a realistic plan of action.




                 </p>
                 </div>
                </SwiperSlide>
                <SwiperSlide   className='h-full block pb-16  w-12/12
               hover:cursor-pointer px-10 '>
                 <div className='bg-slate-700 py-5 px-1 rounded-xl  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-90  border border-gray-100shadow-xl text-white w-full h-full flex flex-col'>
                 <h2 className='text-center text-2xl'>Corporate Campaign Strategy</h2>
                 <p className='pt-5 text-md my-auto md:text-xl text-center'>
                 Slipakoff Consulting successfully helps companies prepare their leadership team to combat union corporate campaigns. Unions use various strategies, such as political action, community/public, and regulatory strategies, to apply pressure where the business is vulnerable. We help clients develop a comprehensive plan to counter potential damage from unions for recognition by a company without an NLRB secret ballot election.



                 </p>
                 </div>
                </SwiperSlide>


                <SwiperSlide   className='h-full block pb-16  w-12/12
               hover:cursor-pointer px-10 '>
                 <div className='bg-slate-700 py-5 px-1 rounded-xl  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-90  border border-gray-100shadow-xl text-white w-full h-full flex flex-col'>
                 <h2 className='text-center text-2xl'>Positive Employee Relations</h2>
                 <p className='pt-5 text-md my-auto md:text-xl text-center'>
                 Maintaining a positive, innovative, and union-free environment requires a management team with excellent interpersonal communication and problem-solving skills. Slipakoff Consulting's Positive Employee Relations Programs help build a positive work atmosphere by enabling your management team to handle day-to-day employee relations issues.
                 </p>
                 </div>
                </SwiperSlide>
            
            
                <SwiperSlide   className='h-full block pb-16  w-12/12
               hover:cursor-pointer px-10 '>
                 <div className='bg-slate-700 py-5 px-1 rounded-xl  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-90  border border-gray-100shadow-xl text-white w-full h-full flex flex-col'>
                 <h2 className='text-center text-2xl'>Employee Handbooks & Policies</h2>
                 <p className='pt-5 text-md my-auto md:text-xl text-center'>
                 Slipakoff Consulting can develop or review your employee handbook to improve employee relations, policy communication, productivity, and minimize employment practice risk. Our team ensures compliance with state and federal employment policies, work-related behavior guidance, rules, and benefit information. Additionally, we can provide a managerial procedure manual linked to the employee handbook to guide policy administration and management duties.
</p>
                 </div>
              
              
                </SwiperSlide>
              
                <SwiperSlide   className='h-full block pb-16  w-12/12
               hover:cursor-pointer px-10 '>
                 <div className='bg-slate-700 py-5 px-1 rounded-xl  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-90  border border-gray-100shadow-xl text-white w-full h-full flex flex-col'>
                 <h2 className='text-center text-2xl'>Mediation and Facilitation</h2>
                 <p className='pt-5 text-md my-auto md:text-xl text-center'>
                 Slipakoff Consulting offers a full range of mediation and facilitation services that can be tailored to any organization’s specific needs.   Our leadership has successfully mediated, both nationally and internationally, countless disputes for a wide variety of sectors and organizations.</p>
                 </div>
                </SwiperSlide>
              
              
                <SwiperSlide   className='h-full block pb-16  w-12/12
               hover:cursor-pointer px-10 '>
                 <div className='bg-slate-700 py-5 px-1 rounded-xl  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-90  border border-gray-100shadow-xl text-white w-full h-full flex flex-col'>
                 <h2 className='text-center text-2xl'>Management/Supervisory Training</h2>
                 <p className='pt-5 text-md my-auto md:text-xl text-center'>
                 Slipakoff Consulting's supervisory training covers important topics such as the National Labor Relations Act, union awareness, card signing mitigation, effective communication and advocacy strategies, and relevant case studies. The training also includes a question and answer session to ensure understanding of the material.
</p>
                 </div>
                </SwiperSlide>
              
                <SwiperSlide   className='h-full block pb-16  w-12/12
               hover:cursor-pointer px-10 '>
                 <div className='bg-slate-700 py-5 px-1 rounded-xl  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-90  border border-gray-100shadow-xl text-white w-full h-full flex flex-col'>
                 <h2 className='text-center text-2xl'>Health Benefits Program Management

</h2>
                 <p className='pt-5 text-md my-auto md:text-xl text-center'>
                 Offering a competitive and cost-effective benefits program is crucial for attracting and retaining talent. Slipakoff Consulting can assist in managing your benefits program, including financial modeling, vendor management, negotiating rates and performance guarantees, and developing strategies for network management, consumer-directed health plans, wellness, and pharmacy management. We help ensure your benefits program meets the needs of your diverse staff while being cost-effective.



</p>
                 </div>
                </SwiperSlide>
                
                
                <SwiperSlide   className='h-full block pb-16  w-12/12
               hover:cursor-pointer px-10 '>
                 <div className='bg-slate-700 py-5 px-1 rounded-xl  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-90  border border-gray-100shadow-xl text-white w-full h-full flex flex-col'>
                 <h2 className='text-center text-2xl'>Absence Management Programs



</h2>
                 <p className='pt-5 text-md my-auto md:text-xl text-center'>
                 Slipakoff Consulting provides customized solutions to help organizations achieve their HR and labor relations goals. We analyze the unique culture and management style of each organization to develop a strategic plan that enhances employee relations and promotes a union-free environment. Our services include Management Training and employee involvement programs that facilitate effective communication and implementation of a realistic plan of action to improve business outcomes.






</p>
                 </div>
                </SwiperSlide>

              
      
    </Swiper>
    </div>
  );
}

export default App; 