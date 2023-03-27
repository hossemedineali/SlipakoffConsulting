import Image from "next/image";
import { useEffect, useState } from "react";
import team from "../../../public/team.png"
import hero1 from "../../../public/hero1.png"
import hero2 from "../../../public/hero2.png"
import {motion,useScroll,useTransform} from 'framer-motion'
const Hero = () => {
const  {scrollYProgress}=useScroll()

const xImage=useTransform(scrollYProgress,[0,1],['0%','80%'])

    return ( 
    <div  className="w-full overflow-hidden text-center h-full flex flex-col lg:flex-row md:p-10  p-3  gap-1 bg-slate-300 ">
            <motion.div  className="gap-2  w-full flex flex-col items-center justify-center  h-1/2 lg:w-1/2 md:h-full ">
            <motion.h2     initial={{y:'100%',opacity:0}} animate={{y:0,opacity:1}} transition={{ease:'linear',delay :0,duration:0.5     }}      className="mb-4 text-lg md:text-2xl lg:text-4xl font-bold">Cut Costs and Reduce Risk with our HR Consulting Services</motion.h2>
            <motion.p      initial={{y:'100%',opacity:0}} animate={{y:0,opacity:1}} transition={{ease:'linear',delay :0,duration:0.5   }}      className="text-center text-lg font-light">Expertise in Employee Relations, Policies, and Procedures.</motion.p>
            <motion.p      initial={{y:'100%',opacity:0}} animate={{y:0,opacity:1}} transition={{ease:'linear',delay :0,duration:0.5   }}      className="text-center text-lg font-light">Customized Solutions to Streamline Your HR Processes and Improve Productivity.</motion.p>
            <motion.button initial={{scale:0}} animate={{scale:1}} transition={{ease:'linear',delay :0.3,duration:0.5   }}      className="mt-4 hover:border-blue-500 border-slate-300 border hover:scale-110 transition-all duration-150 ease-linear hover:text-blue-500 hover:bg-white bg-blue-500 text-white text-lg font-semibold py-1 px-3 rounded-lg">Schedule a consultation</motion.button>
            </motion.div>
            <motion.div initial={{scale:0}} animate={{scale:1}} transition={{duration:1 ,ease:'easeInOut'}} style={{y:xImage}} className="w-full h-1/2 lg:w-1/2 lg:h-full  relative">
                <Image src={hero1.src} fill alt='team' className=""/>
            </motion.div>
            
          {/*   <div style={{backgroundImage:`url(${team.src})`,backgroundSize:'contain',backgroundRepeat:'no-repeat',backgroundPosition:'center'}} className="w-full h-1/2 md:w-1/2 md:h-full border"></div> */}
    </div>  );  
}
 
export default Hero;

