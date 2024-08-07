import React from "react";
import { motion } from "framer-motion";

const certificates = [
  { src: "/assets/serti1.png", alt: "Certificate 1", title: "Dasar Pemrograman Javascript" },
  { src: "/assets/serti2.png", alt: "Certificate 2", title: "Front End Pemula" },
  { src: "/assets/serti3.jpg", alt: "Certificate 3", title: "Introduction HTML" },
  { src: "/assets/serti4.jpg", alt: "Certificate 4", title: "Introduction SQL" },
  { src: "/assets/serti5.png", alt: "Certificate 5", title: "Dasar Pemrograman Web" },
  { src: "/assets/serti6.png", alt: "Certificate 6", title: "Pemrograman Solid" },
  { src: "/assets/serti7.png", alt: "Certificate 7", title: "Sertifikate Mitra Kampus Merdeka" },
  { src: "/assets/serti8.png", alt: "Certificate 8", title: "Sertifikat Kampus Merdeka" },
];

const Certificate = () => {
  return (
    <div className="px-10 md:px-14 bg-black text-white min-h-screen py-16 flex flex-col items-center">
      <div className="container mx-auto">
        {/* Certificate Header */}
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Certificates</h2>

        {/* Grid for Certificate Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map(({ src, alt, title }, index) => (
            <motion.div
              key={index}
              className="relative  bg-gradient-to-r from-red-400 via-black to-red-700 p-4 rounded-lg shadow-lg overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img src={src} alt={alt} className="w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-white text-xl font-semibold">{title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificate;
