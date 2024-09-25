import AboutSection from "./AboutSection";
import Contact from "./Contact";
import HomeSection from "./HomeSection";
import Projects from "./Projects";



const Body = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <HomeSection />
      <AboutSection />
      <Projects />
      <Contact />
    </div>
  );
};

export default Body;
