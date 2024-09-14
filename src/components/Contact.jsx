import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { contacts } from "../constants";
import ContactForm from "./ContactForm";
const Contact = () => {
  return (
    <section data-section id="contact">
      <div className="flex flex-col items-center justify-between xl:flex-row">
        <motion.div
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full px-10 sm:w-4/5 md:w-3/4"
        >
          <h2 className="m-auto uppercase">Choose Me</h2>
          <h1 className="text-5xl font-semibold leading-tight text-active mb-7">
            Let's Talk <h1 className="hidden sm:block">About a Project</h1>
          </h1>
          <p className="text-lg mb-7">
            I would love to contribute to any side or company projects. I
            specialize in web and mobile development, and whether it's enhancing
            existing projects or starting new ones, I am well-equipped to
            deliver exceptional results. Feel free to connect with me to discuss
            collaborations or any inquiries you may have.
          </p>

          <div className="flex flex-wrap justify-between gap-10 lg:justify-start">
            {contacts.map((contact, _) => (
              <div key={contact.id} className="flex items-center gap-4">
                <a target="_blank" href={contact.link}>
                  {contact.icon}
                </a>

                <div>
                  <h2>{contact.name}</h2>
                  <p className="font-thin ">{contact.contact}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="px-10 mt-20 xl:mt-0 sm:w-4/5 md:w-3/4"
        >
          <h1 className="text-5xl font-semibold mb-7">Contact me</h1>
          <p className="font-thin mb-7">
            Please feel free to contact me regarding any job opportunities,
            projects, or questions about my portfolio. I will respond promptly
            within 24 hours.
          </p>
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
