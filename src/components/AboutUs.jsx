import React from "react";
import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="px-6 relative  bg-black to-gray-900 text-white md:min-h-screen py-20 flex flex-col items-center md:justify-center">
      <div className="container mx-auto px-6">
        {/* Content Section */}
        <motion.section initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="flex flex-col md:flex-row items-center">
          {/* Photo */}
          <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8 flex justify-center">
            <img src="/assets/card.png" alt="About Us" className="w-4/5 h-auto rounded-lg shadow-lg" />
          </div>

          {/* Description */}
          <div className="md:w-1/2 md:pr-6 flex flex-col md:items-start items-center">
            <h2 className="text-3xl font-semibold mb-4 flex items-center space-x-2 font-roboto">
              <FaUser className="text-yellow-400 text-3xl" />
              <span>About Me</span>
            </h2>
            <p className="text-lg text-center md:text-justify font-roboto">
              Saya merupakan lulusan Sarjana (S1) Teknik Informatika dari Universitas Dinamika Bangsa Jambi yang memiliki ketertarikan dan minat besar di bidang web development, khususnya sebagai Fullstack Developer. Saya memiliki kemampuan
              dalam bahasa pemrograman PHP dan JavaScript, serta menguasai framework seperti Laravel untuk backend dan React JS untuk frontend. Selain memiliki keahlian teknis, saya juga terbiasa bekerja dalam tim dan menjunjung tinggi
              kolaborasi untuk mencapai tujuan bersama.
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutUs;
