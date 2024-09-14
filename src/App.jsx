import { Navbar, Hero, About, Project, Skill, Contact } from "./components";
import HeroSocial from "./components/HeroSocial";
import FloatingNavbar from "./components/FloatingNavbar";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="w-full overflow-hidden bg-primary font-nunito text-text">
      <Toaster position="top-center" reverseOrder={false} />
      <div>
        <div className="boxWidth">
          <Navbar />
        </div>
      </div>

      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
        }}
        className="flexCenter bg-[length:25%_100%]  lg:bg-[length:12%_100%]"
      >
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
        <div className=" boxWidth">
          <Contact />
        </div>
      </div>
      <FloatingNavbar />
    </div>
  );
}

export default App;
