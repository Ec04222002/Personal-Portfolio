import React from "react";
import { Navbar, Hero, About, Project, Skill, Contact } from "./components";
import HeroSocial from "./components/HeroSocial";
import FloatingNavbar from "./components/FloatingNavbar";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="w-full overflow-hidden bg-primary font-nunito text-brightText">
      <Toaster position="top-center" reverseOrder={false} />
      <div>
        <div className="boxWidth">
          <Navbar />
        </div>
      </div>

      <div className="flexCenter relative bg-[url('assets/hero-bg.webp')] bg-cover">
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

      <div className="flex-col flexCenter bg-secondary">
        <div className="mb-24 boxWidth sm:mb-10">
          <Contact />
        </div>
      </div>
      <FloatingNavbar />
    </div>
  );
}

export default App;
