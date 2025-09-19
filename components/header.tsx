"use client";
import Link from "next/link"

import React from "react";
import { useState, useEffect } from "react";
import {
  FiArrowRight,
  FiBarChart2,
  FiChevronDown,
  FiHome,
  FiPieChart,
} from "react-icons/fi";

import {  motion } from "framer-motion";



export default function Header() {
    const[isOpen, setIsOpen] =React.useState(false)

  function clicker(){

setIsOpen(prev=>!prev)
  }
    React.useEffect(()=>{
if(isOpen) {
  document.body.classList.add('no-scroll')
}else{
  document.body.classList.remove('no-scroll')
}
return()=>{
  document.body.classList.remove('no-scroll')
}
  },[isOpen])
  return (
    <header className=" flex justify-between w-full bg-[#161815]
     text-neutral-200 px-4 items-center py-10 sticky  top-0 shadow-sm z-[100] shadow-black">




        <section className="flex w-30  gap-2 ml-3 xl:ml-10 ">
            <div className="">
                <img src="/logoone.png" alt="" />
            </div>
            PostJob
            </section>
            <nav className="hidden sm:pl-10 sm:flex text-[12px] xl:gap-6 items-center  xl:justify-center xl:pl-30  md:text-[15px] font-light text-gray-400 ">
              <Link href="/" className="flex items-center"> Cover Letter <FiChevronDown/>  </Link>  
                <Link href="/" className="flex items-center">Template Generator <FiChevronDown/>  </Link>
                 <Link href="/" className="flex items-center">Prices <FiChevronDown/> </Link>
                 
                 




            </nav>
      
<div className="sm:hidden pr-10  " >
           
          <button className="shadow-md  flex flex-col justify-center items-center w-8 h-8 space-y-1 relative p-2  z-[9999] sm:hidden" onClick={clicker} >
  <span className={`block w-6 h-0.5 bg-white  z-100 transition-transform ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} ></span>
  <span className={`block w-6 h-0.5 bg-white  transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
  <span className={`block w-6 h-0.5 bg-white  transition-transform ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
</button>
        </div>


         {isOpen && (
            
  <div className="fixed inset-0 bg-transparent backdrop-blur-xl z-[1000] flex items-center justify-center ">
    <nav className="text-center  z-[100]   ">
      <div
      className="space-y-12  z-[100] " >
        <Link 
         href="/" 
          className="block text-[20px]   font-light  text-white hover:text-gray-500 transition-colors duration-300 tracking-wide"
          onClick={() => setIsOpen(false)}
          data-aos="flip-left" data-aos-duration="1200"
        >
          Product
        </Link>
        <Link 
         href="/" 
          className="block text-[20px]  font-light   text-white  tracking-wide"
          onClick={() => setIsOpen(false)}
          data-aos="flip-left" data-aos-duration="1200"
        >
          Pricing
        </Link>
         <Link 
         href="/" 
          className="block text-[20px]  font-light   text-white  tracking-wide"
          onClick={() => setIsOpen(false)}
          data-aos="flip-left" data-aos-duration="1200"
        >
         Blog
        </Link>
        <Link 
         href="/" 
          className="block text-[20px]  font-light   text-white  tracking-wide"
          onClick={() => setIsOpen(false)}
          data-aos="flip-left" data-aos-duration="1200"
        >
          Charity
        </Link>
          <motion.button 
         
            whileHover={{scale:1.1}}
               whileTap={{scale:0.9}}
               transition={{type:"spring", stiffness:400, damping:17 }}
       
          className="block text-[20px] bg-green-500 rounded-full px-5 py-1  font-bold  
          
           text-white  tracking-wide"
          onClick={() => setIsOpen(false)}
          data-aos="flip-left" data-aos-duration="1200"
        >
         Sign in
        </motion.button>





      </div>
    </nav>
  </div>
)}


<div className="hidden sm:flex gap-3">
   <motion.button
    whileHover={{scale:1.01, background:"white", color:"black"}}
               whileTap={{scale:0.9}}
               transition={{type:"spring", stiffness:400, damping:17 }}
   className="border-1 border-green px-4 rounded-xl
    text-[12px] text-white
   lg:px-6 lg:py-2
   ">Sign in</motion.button>
    <motion.button 
     whileHover={{scale:1.01, background:"white", color:"black"}}
               whileTap={{scale:0.9}}
               transition={{type:"spring", stiffness:400, damping:17 }}
    className="  transition:duration-700 
    bg-green-500 px-4 rounded-xl text-black text-[12px]
    lg:px-6 lg:py-2
    ">Get started</motion.button>
</div>
    </header>
  );
}
{/*head end*/}
