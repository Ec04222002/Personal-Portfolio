import React from "react";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
import { projects } from "../constants";
import { TaggedContentCard } from "react-ui-cards";
const Project = () => {
  return (
    <section data-section id="projects" className="py-20 mt-20 sm:mt-0">
      <div className="flex flex-col items-center justify-center m-auto text-center ">
        <motion.h1
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl font-semibold text-active xs:text-5xl mb-7"
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
          className="flex flex-col flex-wrap items-center justify-center w-full text-left md:flex-row"
        >
          {projects.map((project, _) => (
            <TaggedContentCard
              className="!transition-none !cursor-not-allowed !transform-none !pointer-events-none !hover:cursor-default"
              key={project.id}
              thumbnail={project.thumbnail}
              title={project.title}
              description={project.subtitle}
              href={projects[0].links[0].link}
              tags={project.links.map((link) => (
                <a target="_blank" href={link.link}>
                  {link.tag}
                </a>
              ))}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default Project;
