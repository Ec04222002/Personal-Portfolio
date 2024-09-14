import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import FrontProfile from "/src/assets/front-profile.webp";

const Hero = () => {
  return (
    <section data-section id="home" className="text-center">
      <div className="flex flex-col items-center justify-center gap-6 font-light">
        <motion.div
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6 justify-items-center"
        >
          <div
            className={`p-2 border-2 border-active w-[140px] h-[140px] flex items-end overflow-hidden rounded-full bg-primary`}
          >
            <img
              className="translate-y-2"
              src={FrontProfile}
              alt="Elvis Chen's front-profile"
            />
          </div>
          <span className="text-lg ">Hi, I'm Elvis</span>
        </motion.div>
        <motion.h1
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-6xl font-bold header-gradient sm:text-7xl"
        >
          Software Engineer
        </motion.h1>
        <motion.p
          className="sm:text-lg sm:w-4/5"
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          As a full-stack developer, I am passionate about bringing ideas to
          life through coding. I specialize in utilizing Python, Java, C++,
          React, Tailwind, Flutter, Postgres SQL and Cloud technologies.
        </motion.p>
        <motion.div
          className="flex items-center justify-center gap-5"
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1XWghaqs6sD4mxFvehbCGEy5UaieiGPsu/view?usp=drive_link"
            className="btn"
          >
            Resume
          </a>
          <a href="#contact" className="btn btn-primary">
            Contact me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
