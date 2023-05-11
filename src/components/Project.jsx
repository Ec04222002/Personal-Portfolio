import React from "react";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
import { projects } from "../constants";
import { TaggedContentCard } from "react-ui-cards";
const Project = () => {
  return (
    <section data-section id="projects" className="py-20 mt-20 sm:mt-0">
      <div className=" text-center flex flex-col m-auto justify-center items-center">
        <motion.h1
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-active font-semibold text-4xl xs:text-5xl mb-7"
        >
          My Projects
        </motion.h1>
        <motion.p
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-md xs:text-lg mb-7"
        >
          Some cool side-projects. More coming soon.
        </motion.p>

        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-left flex flex-col md:flex-row justify-center items-center flex-wrap w-full"
        >
          {projects.map((project, _) => (
            <TaggedContentCard
              className="hover:scale-90 scale-90 sm:scale-100 sm:hover:scale-100"
              key={project.id}
              thumbnail={project.thumbnail}
              title={project.title}
              description={project.subtitle}
              tags={project.links.map((link) => (
                <div>
                  <a target="_blank" href={link.link}>
                    {link.tag}
                  </a>
                </div>
              ))}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default Project;
