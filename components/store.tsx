'use client'

import React, { JSX, useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"

export default function Hero(): JSX.Element {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
      offset: 100,
    })
  }, [])

  // Text to animate
  const text = "Win your dream job"

  // container variant (stagger)
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
       
      opacity: 1,
     
      transition: {
        staggerChildren: 0.12, // letter delay
      },
    },
  }

  // each letter's bounce
  const bounceVariant: Variants = {
    hidden: { y: -50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 420,
        damping: 16,
      },
    },
  }

  // typed as a MouseEvent because it's used on a button's onClick
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
  }

  return (
    <>
      <section className="mt-20 flex flex-col items-center w-full justify-center space-y-10 ">
        <h1
          className="text-[30px] font-bold w-70 text-white text-center
            sm:text-[40px] sm:w-100 md:text-[45px] lg:sm:w-150 lg:text-[60px] xl:sm:w-190 xl:text-[80px]"
        >
          {/* Animate when the text scrolls into view */}
          <motion.span
          
            className="font-bold text-green  flex slong
            " 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            {text.split("").map((char, i) => (
              <motion.span
                key={`${char}-${i}`}
                variants={bounceVariant}
                className="inline-block"
                aria-hidden={char === " " ? "true" : undefined}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.span>{" "}
          with{" "}
          <strong className="shadow-sm shadow-grey px-1 rounded-lg pl-2 pr-2">
            PostJob
          </strong>
        </h1>

        <div className="text-grey">
          <p className="w-80 text-center">
            Submit better job app — 10x faster. AI cover letter generator,
            resume keyword checker, outreach message writer, and more. Powered
            by GPT
          </p>
        </div>

        <div className="flex items-center justify-center w-full mt-0">
          <form className="flex w-80 lg:w-110 items-center justify-center">
            <input
              className="bg-blacky p-3 rounded-xl border-1 border-grey text-grey focus:outline-none"
              type="text"
              placeholder="okjohn644@gmail.com"
            />
            <motion.button
              onClick={handleClick}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="bg-green pr-5 pl-5 rounded-xl"
              id="button"
            >
              join
            </motion.button>
          </form>
        </div>
      </section>
    </>
  )
}