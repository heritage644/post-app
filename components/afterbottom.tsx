'use client'
import {motion} from "framer-motion"

export default function AfterBottom (){

    return(
        <>
        <section className="flex flex-col items-center text-center space-y-5 xl:flex-row xl:pl-20 w-full  xl:justify-between">
            <div className="flex items-center flex-col space-y-3 xl:items-start xl:space-y-7">
                <h1 className="text-white pt-5 xl:text-[30px] ">Free resume design templates</h1>
            
            <p className="text-grey w-100 xl:text-start " >By following these design tips, you can create a professional
                 and effective resume that will help you stand out to recruiters and hiring managers.</p>
                  <div>
                     <motion.button 
                       whileHover={{scale:1.01, background:"white", color:"black"}}
               whileTap={{scale:0.9}}
               transition={{type:"spring", stiffness:400, damping:17 }}
                     className="border-1 border-green rounded-xl p-2 text-black bg-green">Create an Account</motion.button>
                </div>
                 </div>
               
                 <div className="flex justify-center">
                    <img src="/resume.png" alt="" />
                 </div>


        </section>
        </>
    )
}