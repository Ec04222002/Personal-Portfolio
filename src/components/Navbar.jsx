import React, { useEffect, useRef, useState } from "react";
import { navLinks, colors } from "../constants";
import { motion } from "framer-motion";
const Navbar = () => {
  const [active, setActive] = useState("#home");
  const [navBg, setNavBg] = useState("transparent");

  const sections = useRef([]);

  let handleScroll = () => {
    const pageYOffset = window.pageYOffset;
    let newActiveSection = null;

    sections.current.forEach((section) => {
      const sectionOffsetTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const navHeight = 45;
      const extraMargin = 35;
      const lastSection = sections.current[sections.current.length - 1];
      if (
        pageYOffset >= sectionOffsetTop - (navHeight + extraMargin) &&
        pageYOffset <
          sectionOffsetTop + sectionHeight - (navHeight + extraMargin)
      ) {
        newActiveSection = "#" + section.id;
      }
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - extraMargin
      ) {
        newActiveSection = "#" + lastSection.id;
      }
    });
    if (window.pageYOffset) {
      setNavBg(colors.primary);
    } else {
      setNavBg("transparent");
    }
    setActive(newActiveSection);
  };

  useEffect(() => {
    sections.current = document.querySelectorAll("[data-section]");
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      key={navBg}
      initial={{ backgroundColor: "transparent" }}
      animate={{ backgroundColor: navBg }}
      transition={{ ease: "easeIn", duration: 0.5, type: "tween" }}
      className={`fixed w-full top-0 z-50 overflow-hidden py-6 hidden sm:flex justify-center`}
    >
      <ul className="list-none flex items-center gap-10">
        {navLinks.map((nav, _) => (
          <li key={nav.id} className={`font-semibold text-sm relative`}>
            <a href={nav.link}>{nav.title}</a>
            {active === nav.link && (
              <motion.div className="underline link" layoutId="underline" />
            )}
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
