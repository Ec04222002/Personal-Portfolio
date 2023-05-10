import React from "react";
import { socialLinks } from "../constants";
const HeroSocial = () => {
  return (
    <div className="hero-socials md:flex">
      {socialLinks.map((social, _) => (
        <a key={social.id} href={social.link} target="_blank">
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default HeroSocial;
