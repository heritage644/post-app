'use client'
import {motion} from "framer-motion"

import NeuButton from "./button"


export default function Bottom (){

    return(
        <>
      <section className="w-full bg-green flex flex-col mt-7 pb-5 items-center md:items-start ">
          <div className=" md:items-start w-full md:flex  ">
          <div className="md:flex space-y-3 md:flex-col md:w-full md:items-start pl-5 lg:space-y-5 md:pl-30 md:space-y-5 ">
              <h1 className="font-bold text-[28px] w-70 lg:w-90 xl:text-[40px]">Free AI cover letter generator powered by GPT</h1>
            <p className="w-70 lg:w-100 xl:text-[30px] xl:w-150">A free AI cover letter generator powered by GPT is a tool that uses artificial intelligence and natural language
                 processing to help job seekers create customized and effective cover letters.</p>
                  <div className="flex ">
                    < NeuButton/>

                 </div>
          </div>
                 <div className="w-full max-w-full flex justify-end xl:pr-50"><img src="/firstpic.png" alt=".forstpic" />
                 </div>
                
                 
        </div>
          <section className="w-full bg-green flex flex-col mt-5 pb-5 items-center md:items-end ">
             <div  className=" pl-5 w-full md:flex  md:pl-30  ">
                  <div className="md:flex md:justify-start w-full ">
                    <img src="/secondpic.png" alt="" />
                    </div>
<div className="md:flex md:flex-col md:w-full md:items-end md:pl-5 pl-5 lg:space-y-5 lg:pr-10 xl:pr-20 md:space-y-5 space-y-3">
    
             <h1 className=" font-bold text-[28px] w-70 md:pr-15 lg:w-100 xl:w-150 xl:text-[40px] ">Optimize the keywords in your resume</h1>
            <p className="w-70 md:pr-15  lg:w-100 xl:text-[30px] xl:w-150" >By optimizing keywords in your resume, you can increase your chances of ... getting noticed by recruiters 
                and landing interviews for the jobs you want today.</p>
                 <div className="flex md:w-70 lg:w-100 xl:justify-start xl:w-150">
            <SecondButton/>

        </div>
</div>
           
               
        </div>
          </section>
       
        </section>
        </>
    )
}

const SecondButton = () => {
  return (
    <div className=" flex items-center justify-center">
      <motion.button 
      whileHover={{translateX:"3px",translateY:"3px" }}
       whileTap={{scale:0.9}}
               transition={{type:"spring", stiffness:400, damping:17 }}
      className="px-6 py-2 font-medium bg-white text-black w-fit 
       shadow-[3px_3px_0px_black] hover:shadow-none  ">
        Optimize your resume
      </motion.button>
    </div>
  );
};

