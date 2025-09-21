'use client'
import {  motion } from "framer-motion";
import { RevealLinks } from "./dropbox";
import React, { useState, useEffect } from "react";

// Text Slider Component
const TextSlider = ({
  words = ["faster", "Lithe", "Easier", "Better", "Fleet"],
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationState, setAnimationState] = useState("default");

  useEffect(() => {
    const cycle = () => {
      // Slide IN
      setAnimationState("entering");

      // After sliding in, stay visible
      setTimeout(() => {
        setAnimationState("visible");
      }, 800);

      // After 5s, slide OUT
      setTimeout(() => {
        setAnimationState("exiting");
      }, 1800);

      // After sliding out, switch word + reset
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setAnimationState("default"); // reset to off-screen right
        setTimeout(() => cycle(), 200); // start next cycle
      }, 3300);
    };

    const initial = setTimeout(() => cycle(), 200);

    return () => clearTimeout(initial);
  }, [words.length]);

  const getTransformClass = () => {
    switch (animationState) {
      case "entering":
        return "animate-slide-in";
      case "visible":
        return "translate-x-0";
      case "exiting":
        return "animate-slide-out";
      default:
        return "translate-x-full"; // off-screen right
    }
  };

  return (
    <>
      <style jsx>{`
        .animate-slide-in {
          animation: slideInFromRight 0.8s ease-out forwards;
        }
        .animate-slide-out {
          animation: slideOutToLeft 0.8s ease-in forwards;
        }
        @keyframes slideInFromRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0%);
          }
        }
        @keyframes slideOutToLeft {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>

      <span className="inline-block relative overflow-hidden w-32 h-14">
        <span
          key={currentIndex} // <-- forces React to treat each word as new
          className={`absolute pt-7 inset-0 flex items-center justify-center transition-transform duration-800 ease-out ${getTransformClass()}`}
        >
          {words[currentIndex]}
        </span>
      </span>
    </>
  );
};

// Your Updated Component
export default function MiddleSec() {
  return (
    <section className="flex justify-center">
      <section className="xl:hidden mb-30 bg-green w-fit space-y-5 flex flex-col sm:px-10 items-center justify-start py-3 mt-5 h-90 rounded-lg">
        <h1 className="font-bold w-40 text-center">
          Submit Better job applications
        </h1>
        <div>
          <span className="font-bold text-[35px]">
           <span  className="font-bold text-[50px]"> 10x</span>
            <TextSlider
              words={["Faster", "Lithe", "Easier", "Better", "Fleet"]}
            />
          </span>
        </div>
        <p className="w-85 text-center">
          AI cover letter generator, resume keyword checker, outreach message
          writer, and more. Powered by GPT
        </p>
        <div>
          <motion.img
           initial={{opacity:0, y:50, rotate:95,  scale:0.5}}
    whileInView={{opacity:1, y:0, scale:1, rotate:0}}
    transition={{duration:1, ease:"easeOut"}}
    viewport={{once:true}}
          src="/rocket.svg" alt="" width={50} />
        </div>
      </section>

<section className="hidden xl:flex flex-col items-center bg-green h-255 w-full mx-20 rounded-lg mb-20">
     <h1 className="font-bold w-90 text-center pt-10 text-[30px]">
          Submit Better job applications
        </h1>
<div>
    <RevealLinks/>
</div>
 <p className="w-85 text-center font-bold">
          AI cover letter generator, resume keyword checker, outreach message
          writer, and more. Powered by GPT
        </p>
        <div className="mt-5">



    <motion.img

    src="/banner.png" alt="" />



</div>

</section>



    </section>
  );
}