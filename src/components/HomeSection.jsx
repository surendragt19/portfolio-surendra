import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HomeSection = () => {
  const container = useRef();
  const iconRefs = useRef([]);

  useGSAP(
    () => {
      gsap.from(".part2", {
        x: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
      });
      gsap.from(".part1", {
        x: -50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
      });
    },
    { scope: container }
  );

  useEffect(() => {
    iconRefs.current.forEach((icon, i) => {
      if (icon) {
        gsap.fromTo(
          icon,
          { y: 0, scale: 1 },
          {
            y: -10,
            scale: 1.2,
            duration: 0.3,
            paused: true,
            ease: "power1.inOut",
            onHover: true,
          }
        );

        icon.addEventListener("mouseenter", () => {
          gsap.to(icon, { y: -10, scale: 1.2, duration: 0.3 });
        });

        icon.addEventListener("mouseleave", () => {
          gsap.to(icon, { y: 0, scale: 1, duration: 0.3 });
        });
      }
    });
  }, []);

  return (
    <div
      ref={container}
      id="home"
      className="home-section lg:px-32 px-10 pt-10 w-full flex justify-center items-center flex-wrap"
    >
      <div className="part1 lg:w-1/2 w-full lg:py-28 py-14 space-y-10">
        <h4 className="font-[SplineSans] lg:text-xl">Hi there !</h4>
        <div className="space-y-5">
          <h1 className="font-[Roboto-regular] lg:text-3xl">
            I&apos;m Surendra Kumar Gupta, <br />a freelance{" "}
            <span className="text-cyenH lg:text-4xl text-xl font-bold">full stack developer</span>{" "}
            with a passion for creating engaging and user-friendly interfaces.
          </h1>
          <h1>
            <a
              href="#projects"
              className="text-white font-normal lg:text-lg border-2 lg:px-4 px-3 lg:py-4 py-3 border-cyenH rounded-lg hover:bg-cyenH hover:text-black transition ease-linear"
            >
              Discover my work →
            </a>
          </h1>
        </div>
        <div className="icons lg:text-3xl text-xl font-light flex gap-5 items-center">
          <a
            href="https://www.linkedin.com/in/surendra-kumar-gupta-064294232"
            ref={(el) => (iconRefs.current[0] = el)}
            target="_blank"
          >
            <i className="ri-linkedin-fill"></i>
          </a>
          <a
            href="https://github.com/surendragt19"
            ref={(el) => (iconRefs.current[3] = el)}
            target="_blank"
          >
            <i className="ri-github-line"></i>
          </a>
          <a
            href="https://www.instagram.com/its_surendra203"
            ref={(el) => (iconRefs.current[1] = el)}
            target="_blank"
          >
            <i className="ri-instagram-line"></i>
          </a>
          <a
            href="https://www.facebook.com/share/surendra-kamal"
            ref={(el) => (iconRefs.current[2] = el)}
            target="_blank"
          >
            <i className="ri-facebook-box-fill"></i>
          </a>
          
          <span className="h-[1px] bg-cyenH flex-grow"></span>
        </div>
      </div>
      <div className="part2 lg:w-1/2 w-full grid place-items-center">
        <img src="./assets/images/hero.svg" height={500} width={500} alt="" />
      </div>
    </div>
  );
};

export default HomeSection;
