import React from "react";
import { navLinks } from "../constants";
import { motion } from "framer-motion";
const FloatingNavbar = () => {
  return (
    <motion.nav className="floating-nav sm:hidden">
      {navLinks.map((nav, _) => (
        <a title={nav.name} key={nav.id} href={nav.link}>
          {nav.icon}
        </a>
      ))}
    </motion.nav>
  );
};

export default FloatingNavbar;
