'use client'
import {motion} from "framer-motion"
const NeuButton = () => {
  return (
     <motion.button 
      whileHover={{translateX:"3px",translateY:"3px" }}
       whileTap={{scale:0.9}}
               transition={{type:"spring", stiffness:400, damping:17 }}
      className="px-6 py-2 font-medium bg-white text-black w-fit 
       shadow-[3px_3px_0px_black] hover:shadow-none  ">
        Try for free now
     
    </motion.button>
  );
};

export default NeuButton;


