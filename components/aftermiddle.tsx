'use client'
import {motion} from "framer-motion"
import React from "react"
import Grids from "./grids"
export default function AfterMiddle (){

    return(
        <>
        <section className="text-grey flex flex-col items-center  text-center ">    
            <div className="flex flex-col space-y-5 items-center">
                <h1 className="text-white text-[25px] w-69 xl:w-full">
                    Spend less time looking for work
                </h1>
                <p className="w-60">We will  help you through the hardest part of your job search.</p>
             <div className="hidden xl:block">
                  <Example/>
             </div>
             <motion.button 
              whileHover={{scale:1.1}}
               whileTap={{scale:0.9}}
               transition={{type:"spring", stiffness:400, damping:17 }}
             className="xl:hidden border-1 border-green rounded-lg p-2 bg-green text-black">
                Create an account

             </motion.button>
             <Grids/>

            </div>
            


        </section>
        
        </>
    )
}


const Example = () => {
  return (
    <div className=" p-4">
      <DrawOutlineButton>Create an account</DrawOutlineButton>
    </div>
  );
};
interface types{
children:string

}
const DrawOutlineButton = ({ children, ...rest }:types) => {
  return (
    <button
      {...rest}
      className="group relative px-4 py-2 font-medium text-grey transition-colors duration-[400ms] hover:text-grey"
    >
      <span>{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-green transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-green transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-green  transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-green transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

