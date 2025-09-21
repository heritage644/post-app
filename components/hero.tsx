'use client'

import React from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import {motion} from "framer-motion"




export default function Hero (){
 React.useEffect(()=>{
    
    Aos.init({
      duration:800,
      once:true,
      offset:100,
    })
    
    },[])
    function clickerClick(e:React.FormEvent){
        e.preventDefault()
    }
    return(
        <>
        <section className="mt-20 flex flex-col items-center w-full justify-center space-y-10 ">
            <h1 className="text-[30px] font-boold  w-70 text-white text-center
            sm:text-[40px] sm:w-100 md:text-[45px] lg:sm:w-150 lg:text-[60px] xl:sm:w-190 xl:text-[80px]  
            "><strong className="text-green slong">Win your dream job </strong>with{" "}
             <strong className="shadow-sm shadow-grey px-1 rounded-lg pl-2 pr-2" >PostJob</strong></h1>

            <div className="text-grey">
                <p className="w-80 text-center">Submit better job app — 10x faster. AI cover letter generator, 
                    resume keyword checker, outreach message writer, and more. Powered by GPT</p>
            </div>
             <div className=" flex items-center justify-center w-full mt-0">
              <form action="" className="flex w-80 lg:w-110 items-center justify-center">
                <input className="bg-blacky p-3 rounded-xl border-1 border-grey text-grey
                
                focus:outline-none " type="text" placeholder="okjohn644@gmail.com" />
                <motion.button 
                  onClick={clickerClick}
              whileHover={{scale:1.1}}
               whileTap={{scale:0.9}}
               transition={{type:"spring", stiffness:400, damping:17 }}
                className="bg-green pr-5 pl-5 rounded-xl  " id="button">join</motion.button>
              </form>
            </div>
        </section>
        </>
    )
}