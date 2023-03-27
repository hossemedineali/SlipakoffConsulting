import { useMenu, useScroll } from "@/store/store";
import {motion,AnimatePresence} from 'framer-motion'
import { useEffect, useState } from "react";

const Menu = () => {

  const [showMenuItems,setShowMenuItems]=useState(true)
  const {setTarget}=useScroll()
    const {toggleMenu}=useMenu()
    const variants = {
      visible: { opacity: 1,
              transition:{
                delay:0.6
              }
      },
      hidden: { opacity: 0, 
        delay:0
      },
      exit:{
        opacity:0,
        delay:0
      }
    }

    useEffect(()=>{
      setTarget('')
    },[])

    const scrollTo=(target:string)=>{
      setShowMenuItems(false)

      toggleMenu()
      setTimeout(() => {
        setTarget(target)
      }, 800);
    }

    const handelCloseMenu=()=>{
      setShowMenuItems(false)
      setTimeout(() => {
        toggleMenu()
      }, 200);
    }
    


    const menu=['Home','services','Speciality Programs','Contact Us']
    return (<div className="z-50 absolute flex max-h-screen  top-0 left-0 right-0 bottom-0 ">
   
      <motion.div initial={{height:0}} animate={{height:'100%'}} exit={{height:0}} transition={{duration:0.5}} className="bg-[#2a2a2a] h-screen w-full m-auto flex flex-col text-white">

      <motion.svg variants={variants} initial='hidden' animate='visible' exit='hidden' onClick={handelCloseMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-14 h-14 ml-auto">
   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
 </motion.svg> 


 <div className=" flex flex-col gap-3  w-fit m-auto  ">
<AnimatePresence>
      {menu.map((item,index)=>{
        return  <motion.div initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.5,delay:index*0.1+0.5}} exit={{opacity:0,y:-10,transition:{delay:0}}} onClick={()=>{scrollTo((index+1).toString())}} key={index} className='leading-tight group hover:cursor-pointer flex flex-col items-center  justify-center'>
                
                {showMenuItems&&<motion.p exit={{y:-10,opacity:0}} transition={{duration:0.1}}>.0{index+1}</motion.p>}
                {showMenuItems&&<motion.p className="text-2xl group-hover:text-[#e1382d]">{item}</motion.p>}
                {showMenuItems&&<motion.span className="h-0.5 mt-1 bg-white w-10 group-hover:w-full transition-all duration-150 ease-linear"></motion.span>}
        </motion.div>
      })}
      </AnimatePresence>
 </div>
      </motion.div>
    </div>  );
}
 
export default Menu;