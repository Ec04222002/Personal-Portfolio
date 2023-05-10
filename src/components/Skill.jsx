import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { skills } from "../constants";
import SkillCard from "./SkillCard";
const Skill = () => {
  return (
    <section data-section id="skills" className="py-20">
      <div className=" text-center flex flex-col m-auto justify-center items-center">
        <motion.h1
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-active font-semibold text-5xl mb-7"
        >
          My Skills
        </motion.h1>

        <motion.p
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-lg mb-7 text-dimText"
        >
          Here are some technologies with which I have experience:
        </motion.p>

        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-left grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-10"
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
