import { linkedIn, countUps } from "../constants";
import { fadeIn } from "../variants";
import SideProfile from "/src/assets/side-profile.webp";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
const Counter = ({ start, end, duration }) => {
  const count = useMotionValue(start);
  const rounded = useTransform(count, Math.round);
  const [counterRef, inView] = useInView();
  useEffect(() => {
    let animation;
    if (inView) {
      animation = animate(count, end, { duration });
    }
    return animation?.stop;
  }, [inView]);

  return (
    <motion.h1 ref={counterRef} viewport={{ once: true }}>
      {rounded}
    </motion.h1>
  );
};

const About = () => {
  return (
    <section data-section id="about" className="boxWidth">
      <div className="flex flex-col items-center justify-center gap-8 xl:flex-row">
        <motion.div
          className="relative w-full h-full "
          variants={fadeIn("right", 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 315 199"
          >
            <defs>
              <clipPath id="trapezoid-clip">
                <path d="M 75.84375 28.777344 C 83.566406 11.441406 100.734375 0.28125 119.671875 0.28125 L 192.664062 0.28125 C 211.398438 0.28125 228.417969 11.207031 236.257812 28.261719 L 283.367188 130.738281 C 298.027344 162.621094 274.792969 199 239.777344 199 L 74.011719 199 C 39.238281 199 16.003906 163.085938 30.183594 131.253906 Z M 75.84375 28.777344" />
              </clipPath>
            </defs>
            <path
              d="M 75.84375 28.777344 C 83.566406 11.441406 100.734375 0.28125 119.671875 0.28125 L 192.664062 0.28125 C 211.398438 0.28125 228.417969 11.207031 236.257812 28.261719 L 283.367188 130.738281 C 298.027344 162.621094 274.792969 199 239.777344 199 L 74.011719 199 C 39.238281 199 16.003906 163.085938 30.183594 131.253906 Z M 75.84375 28.777344"
              fill="var(--secondary)" // Replace this with your desired color
            />
            <image
              href={SideProfile}
              x="0"
              y="0"
              width="315"
              height="199"
              clipPath="url(#trapezoid-clip)"
            />
          </svg>
        </motion.div>
        <div className="flex-col w-3/4 flexStart gap-7 xs:w-4/5">
          <motion.h1
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-4xl font-semibold text-active xs:text-5xl"
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
            👋 Howdy, I am a senior computer science student at Texas A&M
            College Station graduating December 2025. I gained my first
            professional experience working for the University of Washington,
            and since then have worked at a music startup and then a fortune 200
            company at USAA Bank. In my free time, I stay up-to-date with
            emerging technologies by building personal coding projects and enjoy
            playing pickup soccer with friends. I am eager to gain more
            real-world experience as a software engineering in full-stack or
            frontend development and am currently seeking an internship
            opportunity.
          </motion.p>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex justify-between w-full md:w-4/5"
          >
            {countUps.map((count, _) => (
              <div key={count.id}>
                <div className="text-[35px] xs:text-[40px] text-active">
                  <div className="flex">
                    <Counter start={0} end={count.end} duration={4} />+
                  </div>
                </div>
                <div className="tracking-[2px] text-sm xs:text-md sm:text-lg">
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
            className="flex w-full gap-16"
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
