import React, { useEffect } from "react";
import Typed from "typed.js";
import { FaLinkedin, FaFacebook, FaInstagram, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const Home = () => {
  useEffect(() => {
    const options = {
      strings: ["Frontend Developer", "Web Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
      showCursor: false,
    };

    // Initialize Typed.js
    const typed = new Typed("#text", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="px-5 md:px-10 overflow-hidden bg-black text-white min-h-screen flex items-center justify-center">
      {/* Background Video */}
      <video autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover z-0" playsInline preload="auto">
        <source src="/assets/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-center h-full pt-16">
        {/* Animated Description */}
        <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="flex-1 text-center md:text-left md:pr-4 mb-8 md:mb-0">
          <h3 className="text-2xl md:text-3xl font-bold mb-1">Hello I'm</h3>
          <h1 className="text-4xl md:text-5xl font-bold mb-1">Muhammad Habi</h1>
          <h4 className="text-xl md:text-3xl font-bold mb-4">
            And I'm <span id="text" className="text-red-700"></span>
          </h4>
          <p className="text-lg mb-8 md:text-justify font-roboto">
            Active student in Semester 6 of the Information Engineering Undergraduate Study Program at Dinamika Bangsa University in 2021. Has programming and web development skills using various languages and frameworks.
          </p>

          {/* Social Media Links */}
          <div className="flex flex-col  mt-4">
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="https://www.linkedin.com/in/muhammadhabi" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-3xl hover:text-blue-700 transition-colors" />
              </a>
              <a href="https://www.facebook.com/habicuranmor.curanmor" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-3xl hover:text-blue-600 transition-colors" />
              </a>
              <a href="https://www.instagram.com/mhmdhabi_" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-3xl hover:text-pink-600 transition-colors" />
              </a>
            </div>
            <div className="flex justify-center mt-4">
              <a
                href="https://drive.google.com/file/d/1F6bz9EpnCRd-eaj-UYLVsaasBROZmuFk/view?usp=sharing"
                className="flex items-center md:hidden px-4 py-2 bg-gradient-to-r from-red-600 via-red-500 to-red-700 text-white rounded hover:opacity-90 transition"
              >
                <FaDownload className="mr-2" />
                Download CV
              </a>
            </div>
          </div>
        </motion.div>

        {/* Animated Photo */}
        <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="flex-1 flex justify-center ml-5">
          <img src="/assets/profile.png" alt="Photo" className="w-full md:w-11/12 h-auto rounded-lg shadow-lg" />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
