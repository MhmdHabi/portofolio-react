import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const skills = [
  { src: "/assets/html.png", alt: "HTML", name: "HTML" },
  { src: "/assets/tailwind.png", alt: "Tailwind CSS", name: "Tailwind CSS" },
  { src: "/assets/css.png", alt: "CSS", name: "CSS" },
  { src: "/assets/laravel.png", alt: "Laravel", name: "Laravel" },
  { src: "/assets/php.png", alt: "PHP", name: "PHP" },
  { src: "/assets/bootstrap.png", alt: "Bootstrap", name: "Bootstrap" },
  { src: "/assets/js.png", alt: "JavaScript", name: "JavaScript" },
  { src: "/assets/mysql.png", alt: "MySQL", name: "MySQL" },
  { src: "/assets/react.png", alt: "React Js", name: "React Js" },
  { src: "/assets/postman.png", alt: "Postman", name: "Postman" },
  { src: "/assets/github.png", alt: "Github", name: "Github" },
];

const Skills = () => {
  return (
    <div className="px-4 md:px-8 py-16 bg-gradient-to-r from-gray-700 via-black to-gray-900 text-white">
      <div className="container mx-auto px-6 md:mt-5">
        {/* Skills Header with Icon */}
        <h2 className="text-3xl font-bold mb-8 text-center text-white font-roboto flex items-center justify-center space-x-2">
          <FaStar className="text-yellow-400 text-3xl" />
          <span>Skills</span>
        </h2>

        {/* Grid  */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map(({ src, alt, name }, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-lg shadow-lg transition-transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img src={src} alt={alt} className="w-24 h-24 mb-4" />
              <span className="text-lg font-semibold font-roboto">{name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
