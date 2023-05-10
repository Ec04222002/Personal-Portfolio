import { BsLinkedin, BsFillPhoneFill } from "react-icons/bs";
import { ImMail } from "react-icons/im";
import { FaGithub, FaReact, FaPhoneSquareAlt } from "react-icons/fa";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineStar,
  AiOutlineProject,
} from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import { SiGraphql } from "react-icons/si";
import {
  TbBrandTailwind,
  TbBrandFramerMotion,
  TbBrandFlutter,
  TbBrandFirebase,
} from "react-icons/tb";
import tailwindConfig from "../../tailwind.config";

const iconSize = 27;
const contactIconSize = 33;

export const workEmail = "elvischen291work@gmail.com";
export const colors = tailwindConfig.theme.extend.colors;
export const sizes = tailwindConfig.theme.extend.size;

export const navLinks = [
  { id: "nav-item-1", title: "Home", link: "#home", icon: <AiOutlineHome /> },
  {
    id: "nav-item-2",
    title: "About Me",
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
    title: "Contact Me",
    link: "#contact",
    icon: <BiMessageSquareDetail />,
  },
];

export const linkedIn = {
  id: "social-media-1",
  icon: <BsLinkedin size={iconSize} />,
  link: "https://www.linkedin.com/in/elvis-chen-617b6624b/",
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
    thumbnail: "/src/assets/thumbnail-enos.png",
    links: [
      {
        tag: "Google Play",
        link: "https://play.google.com/store/apps/details?id=com.enosapp.enos",
      },
      {
        tag: "Github",
        link: "https://github.com/Ec04222002/enos_app",
      },
    ],
    title: "Enos",
    subtitle: "Finance App",
  },
  {
    id: "project-2",
    thumbnail: "/src/assets/thumbnail-portfolio.png",
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
    id: "project-3",
    thumbnail: "",
    links: [
      // {
      //   tag: "",
      //   link: "",
      // },
    ],
    title: "Kudosite (coming soon)",
    subtitle: "Personal Portfolio Builder with Ai",
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
    icon: <TbBrandTailwind size={iconSize} />,
    title: "Tailwind CSS",
    subtitle:
      "Extensive experience with 5+ personal projects usually integrated with React",
  },
  {
    id: "skill-3",
    icon: <SiGraphql size={iconSize} />,
    title: "Graph QL",
    subtitle:
      "Experience with 3+ personal projects usually integrated with React",
  },
  {
    id: "skill-4",
    icon: <TbBrandFramerMotion size={iconSize} />,
    title: "Framer Motion",
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
    link: "",
    name: "Phone",
    raw: "7138583809",
    contact: "+1 (713) 858-3809",
  },
  {
    id: "contact-2",
    icon: <ImMail size={contactIconSize} />,
    link: `mailto:${workEmail}?Subject=FromPersonalPortfolioContact`,
    name: "Email",
    contact: workEmail,
  },
  {
    id: "contact-3",
    icon: <BsLinkedin size={contactIconSize} />,
    link: "https://www.linkedin.com/in/elvis-chen-617b6624b/",
    name: "LinkedIn",
    contact: "www.linkedin.com/in/elvis-chen22",
  },
];
