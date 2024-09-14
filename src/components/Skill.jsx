import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { skills } from "../constants";
import SkillCard from "./SkillCard";
const Skill = () => {
  return (
    <section data-section id="skills" className="py-20">
      <div className="flex flex-col items-center justify-center w-4/5 m-auto text-center  sm:w-full">
        <motion.h1
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl font-semibold text-active xs:text-5xl mb-7"
        >
          My Skills
        </motion.h1>

        <motion.p
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-4/5 text-md xs:text-lg md:w-full mb-7 text-text"
        >
          Here are some technologies with which I have experience:
        </motion.p>

        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-3 text-left  md:grid-cols-3 md:gap-10"
        >
          {skills.map((skill, _) => (
            <SkillCard
              key={skill.id}
              icon={skill.icon}
              title={skill.title}
              subtitle={skill.subtitle}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skill;
