import { useIsLoading, useMenu } from "@/store/store";
import {AnimatePresence} from 'framer-motion'
import { useEffect, useState } from "react";
import Header from "./header";
import Menu from "./menu";

type props={
    children:JSX.Element
}
const Layout:React.FC<props> = ({children}) => {

    const {isLoading,setIsLoading}=useIsLoading()

    useEffect(() => {
        const timer = setTimeout(() => {
          setIsLoading(false)
        }, 3500);
        return () => clearTimeout(timer);
      }, []);
      
    
    const {menuIsOpen}=useMenu()
    return ( 
    <div className={`${menuIsOpen?'max-h-screen overflow-hidden':'min-h-screen'}`}>
              <AnimatePresence>


            {menuIsOpen&&<Menu/>}
              </AnimatePresence>
            <Header/>
           {!isLoading&& <div className="min-h-[calc(100vh-112px)] ">
                    {children}
            </div>}


    </div> );
}
 
export default Layout;