import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { FaRegFilePdf } from "react-icons/fa";

const Header = () => {
  const header = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // GSAP animation for the header text
  useGSAP(
    () => {
      gsap.from(".logo span", {
        y: 50,
        duration: 0.7,
        opacity: 0,
        delay: 0.5,
        stagger: 0.3,
      });
    },
    { scope: header }
  );

  // GSAP animation for the mobile menu
  useGSAP(
    () => {
      if (isMenuOpen) {
        gsap.to(menuRef.current, { x: 0, duration: 0.5, ease: "power3.inOut" });
      } else {
        gsap.to(menuRef.current, { x: "-100%", duration: 0.5, ease: "power3.inOut" });
      }
    },
    [isMenuOpen]
  );

  return (
    <div
      ref={header}
      className="fixed z-30 w-full lg:px-32 px-4 py-5 flex justify-between items-center bg-zinc-900/70 backdrop-blur-sm"
    >
      <h1 className="logo flex-1 relative lg:text-3xl text-xl overflow-hidden font-bold font-[Roboto-Bold] ">
        <span className="inline-block">&lt;</span>
        <span className="text-[#15F5BA] inline-block">/</span>
        <span className="inline-block">Surendra</span>
        <span className="text-[#15F5BA] inline-block">.</span>
        <span className="inline-block">&gt;</span>
      </h1>
      <div className="nav-cont hidden lg:block">
        <nav className="flex flex-1 cursor-pointer justify-center items-center gap-5 font-[SplineSans] font-medium">
          <h1><a href="#home">Home</a></h1>
          <h1><a href="#about">About</a></h1>
          <h1><a href="#projects">Projects</a></h1>
          <h1><a href="#contact">Contacts</a></h1>
          <h1 className="px-4 py-2 border-2 border-cyenH rounded-lg hover:bg-cyenH hover:text-zinc-800 transition ease-linear flex items-center gap-2 justify-start">
            <a href="https://drive.google.com/file/d/1Fh67P6nUvfvvJ-3hLdXiJlX0WuHN4uVY/view?usp=sharing" className="flex items-center gap-2" target="_blank">
              <FaRegFilePdf />
              Resume
            </a>
          </h1>
        </nav>
      </div>
      <i 
        className="ri-menu-fill text-2xl lg:hidden cursor-pointer" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      ></i>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="fixed top-0 left-0 h-screen w-2/3 bg-zinc-900 p-8 z-40 transform -translate-x-full lg:hidden"
      >
        <i 
          className="ri-close-fill text-2xl cursor-pointer" 
          onClick={() => setIsMenuOpen(false)}
        ></i>
        <nav className="flex flex-col mt-8 gap-5 font-[SplineSans] font-medium">
          <h1><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></h1>
          <h1><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></h1>
          <h1><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></h1>
          <h1><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contacts</a></h1>
          <h1 className="px-4 py-2 border-2 border-cyenH rounded-lg hover:bg-cyenH hover:text-zinc-800 transition ease-linear flex items-center gap-2 justify-start">
            <a href="https://drive.google.com/file/d/1Fh67P6nUvfvvJ-3hLdXiJlX0WuHN4uVY/view?usp=sharing" className="flex items-center gap-2" target="_blank">
              <FaRegFilePdf />
              Resume
            </a>
          </h1>
        </nav>
      </div>
    </div>
  );
};

export default Header;
