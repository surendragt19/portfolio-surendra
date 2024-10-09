import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

const AboutSection = () => {
  const textH1 = useRef(null);
  const headingText = "About me";

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".text span", {
      y: 80,
      duration: 1,
      opacity: 0,
      delay: 0.5,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".text",
        scroller: "body",
        start: "top 90%", 
        end: "bottom 40%", 
        scrub: 3,
      },
    });
  });

  const skills = [
    "JavaScript",
    "C/C++",
    "Node.Js",
    "Express.Js",
    "Core PHP",
    "ReactJS/Redux Toolkit",
    "NextJS",
    "MongoDB",
    "MySQL",
    "Socet.io",
    "Bootstrap",
    "Tailwindcss",
    "EJS",
    "CSS",
    "HTML",
    "Github",
  ];

  return (
    <div
      id="about"
      className="about-section lg:px-32 px-6 lg:py-10 w-full lg:h-screen flex flex-col items-start justify-center"
      style={{ flexShrink: 0 }} // Prevent shrinking of the section
    >
      <h1
        ref={textH1}
        className="text lg:text-9xl text-5xl text-cyenH font-bold font-[SplineSans] uppercase tracking-wide leading-none"
      >
        {headingText.split("").map((letter, index) => (
          <span className="inline-block" key={index}>
            {letter}
          </span>
        ))}
      </h1>
      <div className="w-full flex items-start justify-center mt-10 gap-10 flex-col lg:flex-row">
        <div className="lg:w-1/2 w-full flex-1">
          <p className="leading-7 tracking-wide font-[SplineSans]">
            Hello! I&apos;am Surendra Kumar Gupta and I am pursuing my Btech from{" "}
            <span className="text-cyenH">
            Noida Institute of Engineering and Technology, Greater Noida.
            </span>
            , I completed my diploma from{" "}
            <span className="text-cyenH">Hewett polytechnic, Lucknow.</span>, I have
            developed a strong foundation in web development technologies.{" "}
            <br />
            As a web developer, I am always eager to learn and adapt to new
            technologies, continuously enhancing my skill set to build better
            and more efficient web solutions. Feel free to explore my projects
            and get in touch if you&apos;d like to collaborate or learn more
            about my work. I am dedicated to creating innovative solutions that elevate digital experiences to new heights.
          </p>
        </div>
        <div className="lg:w-1/2 w-full flex-1 space-y-4">
          <h1 className="lg:text-5xl text-3xl uppercase font-bold font-[SplineSans] text-cyenH">
            What I Know{" "}
          </h1>
          <p className="font-[SplineSans]">
            Here are a few technologies I have been working with recently:
          </p>
          <ul className="grid grid-cols-2 lg:gap-x-5 gap-y-2">
            {skills.map((elm, index) => (
              <li
                key={index}
                className="lg:text-xl text-sm font-[SplineSans] text-gray-300 hover:text-cyenH transition ease-linear cursor-default"
              >
                <span className="text-cyenH">‣</span> {elm}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
