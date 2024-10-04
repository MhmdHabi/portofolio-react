import React from "react";
import { motion } from "framer-motion";
import { FaEye, FaCertificate } from "react-icons/fa";
import SparklesText from "./ui/sparkles-text";

const certificates = [
  { src: "/assets/serti1.png", alt: "Certificate 1", link: "https://www.dicoding.com/certificates/MEPJY8EO4P3V" },
  { src: "/assets/serti2.png", alt: "Certificate 2", link: "https://www.dicoding.com/certificates/JMZVD203OZN9" },
  { src: "/assets/serti3.jpg", alt: "Certificate 3", link: "https://www.linkedin.com/in/muhammadhabi/details/certifications/" },
  { src: "/assets/serti4.jpg", alt: "Certificate 4", link: "https://www.linkedin.com/in/muhammadhabi/details/certifications/" },
  { src: "/assets/serti5.png", alt: "Certificate 5", link: "https://www.dicoding.com/certificates/53XE4MDOVZRN" },
  { src: "/assets/serti6.png", alt: "Certificate 6", link: "https://www.dicoding.com/certificates/07Z6WKV72ZQR" },
  { src: "/assets/serti7.png", alt: "Certificate 7", link: "https://drive.google.com/file/d/14sQWjmeJtadUkoK0fvNvrWHZxmgId5Zg/view?usp=drive_link" },
  { src: "/assets/serti8.png", alt: "Certificate 8", link: "https://drive.google.com/file/d/1peaptQTKcEuo-jQ1r7UTMMlbOvCcE0br/view?usp=sharing" },
];

const Certificate = () => {
  return (
    <div className="px-10 md:px-14 bg-black text-white min-h-screen py-16 flex flex-col items-center">
      <div className="container mx-auto md:mt-5">
        {/* Certificate Header with Icon */}
        <h2 className="text-3xl font-bold mb-8 text-center text-white font-roboto flex items-center justify-center space-x-2">
          <FaCertificate className="text-yellow-400 text-3xl" />
          <SparklesText text="Certificates" />
        </h2>

        {/* Grid for Certificate Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map(({ src, alt, link }, index) => (
            <motion.div
              key={index}
              className="relative bg-gradient-to-r from-gray-800 via-black to-gray-900 p-4 rounded-lg shadow-lg overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={src} alt={alt} className="w-full h-auto rounded-lg transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-6">
                  <FaEye className="text-white text-3xl transition-transform duration-300 transform translate-y-6 group-hover:translate-y-0" />
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificate;
