import React from "react";
import { Navbar, Hero, About, Project, Skill, Contact } from "./components";
import HeroSocial from "./components/HeroSocial";
import FloatingNavbar from "./components/FloatingNavbar";
import { Toaster } from "react-hot-toast";
//TODO: Deploy
function App() {
  return (
    <div className="bg-primary w-full font-nunito overflow-hidden text-brightText">
      <Toaster position="top-center" reverseOrder={false} />
      <div>
        <div className="boxWidth">
          <Navbar />
        </div>
      </div>

      <div className="flexCenter relative bg-[url('./src/assets/hero-bg.png')] bg-cover">
        <div className="boxWidth">
          <Hero />
        </div>
        <HeroSocial />
      </div>

      <div className="flexCenter">
        <div>
          <About />
          <Project />
          <Skill />
        </div>
      </div>

      <div className="flexCenter flex-col bg-secondary">
        <div className="boxWidth mb-24 sm:mb-10">
          <Contact />
        </div>
      </div>
      <FloatingNavbar />
    </div>
  );
}

export default App;
