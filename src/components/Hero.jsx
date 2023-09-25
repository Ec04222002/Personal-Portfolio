import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import FrontProfile from "/src/assets/front-profile.webp";

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
      <div className="flex flex-col items-center justify-center gap-8 font-light">
        <motion.div
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6 justify-items-center"
        >
          <div
            className={`border-2 border-active w-[135px] h-[135px] overflow-hidden rounded-full`}
          >
            <img src={FrontProfile} alt="Elvis Chen's front-profile" />
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
          Web {devText} <br /> is my Art
        </motion.h1>
        <motion.p
          className="sm:text-lg sm:w-4/5"
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
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1_HefP7wMfSOZyvWAKTDtwUz5Tq1RNR8N/view?usp=drive_link"
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
