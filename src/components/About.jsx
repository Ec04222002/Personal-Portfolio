import React, { useState } from "react";
import { motion } from "framer-motion";
import { linkedIn, countUps } from "../constants";
import { fadeIn } from "../variants";
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";
import SideProfile from "/src/assets/side-profile.png";

const About = () => {
  const [viewPortEntered, setViewPortEntered] = useState(false);
  return (
    <section data-section id="about" className="boxWidth">
      <div className="flex flex-col xl:flex-row justify-center items-center gap-8 px-10">
        <motion.div
          variants={fadeIn("right", 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <img
            src={SideProfile}
            alt="Elvis Chen's side-profile"
            className="m-auto w-5/6"
          />
        </motion.div>
        <div className="flexStart flex-col gap-7 w-4/5">
          <motion.h1
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-active font-semibold text-5xl"
          >
            A little about me
          </motion.h1>
          <motion.p
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-lg"
          >
            I am a software engineering student at Texas A&M and a Houston-based
            developer. I gained my first professional experience working for the
            University of Washington, where I designed a trans-piler website
            that converts biological language (Antimony) into XML. In my free
            time, I stay up-to-date with emerging technologies and enjoy playing
            pickup soccer with friends. I am eager to gain more real-world
            experience as a Front-end Developer and am currently seeking an
            internship or co-op opportunity to further enhance my skills.
          </motion.p>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex w-full md:w-4/5 justify-between"
          >
            {countUps.map((count, _) => (
              <div key={count.id}>
                <div className="text-[40px]">
                  <div className="text-darkActive">
                    <CountUp
                      start={0}
                      end={count.end}
                      duration={5}
                      delay={0.5}
                      suffix="+"
                    >
                      {({ countUpRef, start }) => (
                        <VisibilitySensor
                          onChange={(isVisible) => {
                            if (isVisible && !viewPortEntered) {
                              setViewPortEntered(true);
                              start();
                            }
                          }}
                          delayedCall
                        >
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </div>
                </div>
                <div className="tracking-[2px] text-md sm:text-lg">
                  {count.prefix}
                  <br />
                  {count.suffix}
                </div>
              </div>
            ))}
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex gap-16 w-full"
          >
            <a target="_blank" className="btn btn-wide" href={linkedIn.link}>
              See {linkedIn.name}
            </a>
            <a className="btn btn-primary btn-wide" href="#contact">
              Contact me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
