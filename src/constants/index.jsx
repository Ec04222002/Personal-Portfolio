import { BsLinkedin, BsFillPhoneFill } from "react-icons/bs";
import { ImMail } from "react-icons/im";
import { FaGithub, FaReact } from "react-icons/fa";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineStar,
  AiOutlineProject,
} from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import {
  TbBrandFlutter,
  TbBrandFirebase,
  TbBrandPython,
  TbBrandJavascript,
} from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import tailwindConfig from "../../tailwind.config";
import project1 from "/src/assets/thumbnail-enos.webp";
import project2 from "/src/assets/thumbnail-portfolio.webp";
import project3 from "/src/assets/thumbnail-kudosite.webp";
import project4 from "/src/assets/thumbnail-bomberman.webp";
const iconSize = 27;
const contactIconSize = 33;

export const workEmail = "elvischen291work@gmail.com";
export const colors = tailwindConfig.theme.extend.colors;
export const sizes = tailwindConfig.theme.extend.size;

export const navLinks = [
  { id: "nav-item-1", title: "Home", link: "#home", icon: <AiOutlineHome /> },
  {
    id: "nav-item-2",
    title: "About",
    link: "#about",
    icon: <AiOutlineUser />,
  },
  {
    id: "nav-item-3",
    title: "Projects",
    link: "#projects",
    icon: <AiOutlineProject />,
  },
  {
    id: "nav-item-4",
    title: "Skills",
    link: "#skills",
    icon: <AiOutlineStar />,
  },
  {
    id: "nav-item-5",
    title: "Contact",
    link: "#contact",
    icon: <BiMessageSquareDetail />,
  },
];

export const linkedIn = {
  id: "social-media-1",
  icon: <BsLinkedin size={iconSize} />,
  link: "https://www.linkedin.com/in/elvis-chen22",
  name: "LinkedIn",
};
export const socialLinks = [
  linkedIn,
  {
    id: "social-media-2",
    icon: <ImMail size={iconSize} />,
    link: `mailto:${workEmail}?Subject=FromPersonalPortfolioHero`,
    name: "Email",
  },
  {
    id: "social-media-3",
    icon: <FaGithub size={iconSize} />,
    link: "https://github.com/Ec04222002?tab=repositories",
    name: "GitHub",
  },
];

export const countUps = [
  { id: "count-ups-1", end: 8, prefix: `Years of`, suffix: "Programming" },
  { id: "count-ups-2", end: 6, prefix: "Projects", suffix: `Completed` },
  {
    id: "count-ups-3",
    end: 12,
    prefix: "Technologies",
    suffix: `Experienced`,
  },
];

export const projects = [
  {
    id: "project-1",
    thumbnail: project3,
    links: [
      {
        tag: "Website Builder",
        link: "https://www.kudosites.com/?msg=w",
      },
    ],
    title: "Kudosites",
    subtitle: "Personal Portfolio Builder with Ai",
  },
  {
    id: "project-2",
    thumbnail: project1,
    links: [
      {
        tag: "Github",
        link: "https://play.google.com/store/apps/details?id=com.enosapp.enos",
      },
    ],
    title: "Enos (down right now 😔) ",
    subtitle: "Finance App",
  },
  {
    id: "project-3",
    thumbnail: project2,
    links: [
      {
        tag: "Figma Design",
        link: "https://www.figma.com/file/PpDFGCfxFEL39LF2arMMTJ/Untitled?type=design&node-id=2%3A2&t=wVCGebk55bpBKsB8-1",
      },
      {
        tag: "Github",
        link: "https://github.com/Ec04222002/Personal-Portfolio",
      },
    ],
    title: "Elvis's Website",
    subtitle: "Personal Portfolio Website",
  },
  {
    id: "project-4",
    thumbnail: project4,
    links: [],
    title: "Modern Bomber Man (in progress)",
    subtitle: "Multiplayer Web Game",
  },
];

export const skills = [
  {
    id: "skill-1",
    icon: <FaReact size={iconSize} />,
    title: "React JS",
    subtitle: "Extensive experience with 5+ personal projects",
  },
  {
    id: "skill-2",
    icon: <TbBrandPython size={iconSize} />,
    title: "Python",
    subtitle:
      "Extensive experience with 5+ personal projects usually with automation scripting",
  },
  {
    id: "skill-3",
    icon: <FaJava size={iconSize} />,
    title: "Java",
    subtitle:
      "Experience with 3+ personal projects usually integrated with SpringBoot",
  },
  {
    id: "skill-4",
    icon: <TbBrandJavascript size={iconSize} />,
    title: "JavaScript",
    subtitle:
      "Experience with 3+ personal projects usually integrated with React",
  },
  {
    id: "skill-5",
    icon: <TbBrandFlutter size={iconSize} />,
    title: "Flutter",
    subtitle: "Extensive experience with 2+ personal projects",
  },
  {
    id: "skill-6",
    icon: <TbBrandFirebase size={iconSize} />,
    title: "Firebase",
    subtitle:
      "Extensive experience with 4+ projects usually integrated with React or Flutter",
  },
];

export const contacts = [
  {
    id: "contact-1",
    icon: <BsFillPhoneFill size={contactIconSize} />,
    link: "tel:+17138583809",
    name: "Phone",
    contact: "+1 (713) 858-3809",
  },
  {
    id: "contact-2",
    icon: <ImMail size={contactIconSize} />,
    link: `mailto:${workEmail}?Subject=PersonalPortfolioContact`,
    name: "Email",
    contact: workEmail,
  },
  {
    id: "contact-3",
    icon: <BsLinkedin size={contactIconSize} />,
    link: "https://www.linkedin.com/in/elvis-chen22",
    name: "LinkedIn",
    contact: "www.linkedin.com/in/elvis-chen22",
  },
];
