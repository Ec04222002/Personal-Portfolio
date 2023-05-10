import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { contacts } from "../constants";
import ContactForm from "./ContactForm";
const Contact = () => {
  return (
    <section data-section id="contact">
      <div className="flex flex-col xl:flex-row justify-between items-center">
        <motion.div
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 xl:mt-0 px-12 w-full sm:w-4/5 md:w-3/4"
        >
          <h2 className="uppercase m-auto">Choose Me</h2>
          <h1 className="text-active font-semibold text-5xl mb-7 leading-tight">
            Let's Talk About a Project
          </h1>
          <p className="text-lg mb-7">
            I would love to contribute to any side or company projects. I have a
            specialization in web and mobile development, focusing on React,
            Tailwind, Next.js, Flutter, and Firebase. Whether it's enhancing
            existing projects or starting new ones, I am well-equipped to
            deliver exceptional results. Feel free to connect with me to discuss
            potential collaborations or any inquiries you may have.
          </p>

          <div className="flex flex-wrap gap-10 justify-between lg:justify-start">
            {contacts.map((contact, _) => (
              <div key={contact.id} className="flex items-center gap-4">
                {contact.name === "Phone" ? (
                  <a
                    onClick={() => window.open(`tel:${contact.raw}`)}
                    target="blank"
                  >
                    {contact.icon}
                  </a>
                ) : (
                  <a target="blank" href={contact.link}>
                    {contact.icon}
                  </a>
                )}
                <div>
                  <h2>{contact.name}</h2>
                  <p className=" font-thin">{contact.contact}</p>
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
          className="mt-20 xl:mt-0 px-12 sm:w-4/5 md:w-3/4"
        >
          <h1 className="font-semibold text-5xl mb-7">Contact me</h1>
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
