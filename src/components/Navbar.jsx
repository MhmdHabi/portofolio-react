import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "certificate", "skills", "projects", "education", "contact"];
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop;
          const sectionHeight = sectionElement.clientHeight;
          if (scrollPosition >= sectionTop - 50 && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-black bg-opacity-70 fixed w-full top-0 left-0 py-4 px-10 md:px-14 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Title with Link */}
        <ScrollLink to="home" smooth={true} duration={500} className="cursor-pointer" onClick={() => setActiveSection("home")}>
          <img src="/assets/logo.png" alt="Portfolio Title" className="w-20" />
        </ScrollLink>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex space-x-4">
          {["home", "about", "certificate", "skills", "projects", "education", "contact"].map((section) => (
            <ScrollLink
              key={section}
              to={section}
              smooth={true}
              duration={500}
              className={`font-roboto font-semibold cursor-pointer px-4 py-2 transition-colors duration-150 ${
                activeSection === section ? "bg-gradient-to-r from-red-800 via-red-500 to-red-400 text-white rounded-lg" : "text-white hover:text-gray-300"
              }`}
              onClick={() => setActiveSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </ScrollLink>
          ))}
        </div>

        {/* Button Download CV */}
        <a
          href="https://drive.google.com/file/d/1F6bz9EpnCRd-eaj-UYLVsaasBROZmuFk/view?usp=sharing"
          className="hidden lg:flex items-center px-4 py-2 bg-gradient-to-r from-black via-red-700 to-red-400 text-white rounded hover:opacity-90 transition"
        >
          <FaDownload className="mr-2" />
          Download CV
        </a>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black bg-opacity-80 z-40 transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`}>
        <div className="flex flex-col items-center pt-16">
          <button onClick={closeMenu} className="absolute top-4 right-4 text-white text-3xl">
            <FaTimes />
          </button>
          {["home", "about", "certificate", "skills", "projects", "education", "contact"].map((section) => (
            <ScrollLink
              key={section}
              to={section}
              smooth={true}
              duration={500}
              className={`text-2xl mb-4 px-4 py-2 transition-colors duration-150 ${activeSection === section ? "bg-white text-black rounded-lg" : "text-white hover:text-gray-700"}`}
              onClick={() => {
                setActiveSection(section);
                closeMenu();
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </ScrollLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
