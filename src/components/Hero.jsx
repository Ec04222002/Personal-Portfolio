import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import FrontProfile from "/src/assets/front-profile.png";
const Hero = () => {
  const [devText, setDevText] = useState("");
  useEffect(() => {
    function handleResize() {
      const minThreshold = 640;
      window.innerWidth < minThreshold
        ? setDevText("Dev.")
        : setDevText("Development");
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section data-section id="home" className="text-center">
      <div className="flex flex-col gap-8 font-light justify-center">
        <motion.div
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-6 justify-items-center items-center"
        >
          <div
            className={`bg-primary border-2 border-active w-[135px] h-[135px] overflow-hidden rounded-full bg-cover`}
          >
            <img src={FrontProfile} alt="Elvis Chen's front-profile" />
          </div>
          <h3 className=" text-lg">Hi, I'm Elvis</h3>
        </motion.div>

        <div className="flex flex-col gap-8">
          <motion.h1
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="header-gradient font-bold text-7xl"
          >
            Web {devText} <br /> is my Art
          </motion.h1>
          <motion.p
            className="sm:text-lg sm:w-4/5 m-auto"
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            As a full-stack developer, I am passionate about bringing ideas to
            life through coding. I specialize in utilizing React, Tailwind,
            GraphQL, Framer Motion, Flutter, and Firebase technologies.
          </motion.p>
          <motion.div
            className="flex items-center justify-center gap-5"
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <a download href="/src/assets/elvis-resume.pdf" className="btn">
              Resume
            </a>
            <a href="#contact" className="btn btn-primary">
              Contact me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
