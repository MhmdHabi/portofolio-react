import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaLaravel, FaGithub, FaProjectDiagram } from "react-icons/fa";
import { SiTailwindcss, SiDart } from "react-icons/si";

const projects = [
  {
    src: "/assets/siakad.png",
    title: "Project Siakad Kampus Merdeka",
    description: "Membuat aplikasi sistem informasi akademik (SIAKAD) dengan menggunakan framework laravel, dengan 3 aktor yaitu admin, mahasiswa, dan dosen.",
    category: "Web Development",
    link: "https://github.com/MhmdHabi/final-project-laravel",
    tech: ["Laravel", "Tailwind"],
  },
  {
    src: "/assets/sosmed.png",
    title: "Website Sosial Media",
    description: "Aplikasi ini merupakan aplikasi sosial media dimana user bisa upload postingan, like, memberikan komentar, bisa juga melakukan bookmark dan juga user bisa melakukan follow.",
    category: "Web Development",
    link: "https://github.com/MhmdHabi/mini-project",
    tech: ["Laravel", "Tailwind"],
  },
  {
    src: "/assets/wonderind.jpeg",
    title: "Aplikasi Mobile Wonderind",
    description: "Aplikasi ini merupakan aplikasi berbasis mobile yaitu aplikasi yang digunakan untuk mencari informasi semua wisata di indonesia dari pantai, gunung dan wisata lainnya.",
    category: "Flutter Development",
    link: "#",
    tech: ["Dart"],
  },
  {
    src: "/assets/kasir.png",
    title: "Website Point Of Sales",
    description:
      "Website Point of Sales (POS) ini menawarkan solusi efisien dan intuitif untuk pencatatan penjualan bisnis. Dirancang menggunakan Laravel 10 untuk kekuatan backend dan Bootstrap 5 untuk desain responsif, sistem ini memungkinkan pengguna untuk dengan mudah mencatat transaksi penjualan, mengelola produk, dan menghasilkan laporan penjualan yang komprehensif.",
    category: "Web Development",
    link: "https://github.com/MhmdHabi/Website-POS-shanum",
    tech: ["Laravel", "Tailwind"],
  },
  {
    src: "/assets/bakery.png",
    title: "Website Shanum Bakery",
    description:
      "Shanum Bakery adalah website informasi dan penjualan yang dirancang untuk memberikan pengalaman pengguna yang mulus dan menyenangkan. Dengan tema yang bersih dan modern, situs ini dirancang menggunakan Laravel 10 dan Tailwind CSS, memastikan performa yang cepat dan antarmuka yang responsif.",
    category: "Web Development",
    link: "https://github.com/MhmdHabi/website-shanum-bakery",
    tech: ["Laravel", "Tailwind"],
  },
];

const techIcons = {
  Laravel: <FaLaravel className="text-red-600" />,
  Tailwind: <SiTailwindcss className="text-blue-400" />,
  Dart: <SiDart className="text-blue-600" />,
};

const Projects = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const descriptionRefs = useRef([]);

  const handleReadMore = (index) => {
    setOpenIndex(index);
    descriptionRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleReadLess = () => {
    setOpenIndex(null);
  };

  return (
    <div className="px-5 md:px-8 py-16 bg-black text-white">
      <div className="container mx-auto px-6 md:mt-5">
        {/* Project Header with Icon */}
        <h2 className="text-3xl font-bold mb-8 text-center text-white font-roboto flex items-center justify-center space-x-2">
          <FaProjectDiagram className="text-blue-500 text-3xl" />
          <span>Projects</span>
        </h2>

        {/* Grid for Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(({ src, title, description, category, link, tech }, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-lg overflow-hidden shadow-lg flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative group">
                <img src={src} alt={title} className="w-full h-48 object-cover" />
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300 ease-out"
                >
                  <FaGithub className="text-white text-4xl" />
                </a>
              </div>
              <div className="flex flex-col flex-grow p-6">
                <h3 className="text-xl font-semibold mb-2 font-roboto">{title}</h3>
                <div className="flex flex-wrap items-center mb-2 space-x-2">
                  <div className="flex space-x-2">
                    {tech.map((t, i) => (
                      <span key={i} className="flex items-center space-x-1 text-sm font-roboto">
                        {techIcons[t]}
                        <span>{t}</span>
                      </span>
                    ))}
                  </div>
                </div>
                <p
                  ref={(el) => (descriptionRefs.current[index] = el)}
                  className={`text-gray-400 mb-4 transition-all duration-500 ease-in-out overflow-hidden ${openIndex === index ? "max-h-[500px]" : "max-h-24"}`}
                  style={{ display: "-webkit-box", WebkitLineClamp: openIndex === index ? "unset" : 3, WebkitBoxOrient: "vertical" }}
                >
                  {description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-roboto">{category}</span>
                  <span className="text-blue-400 hover:underline cursor-pointer font-roboto" onClick={() => (openIndex === index ? handleReadLess() : handleReadMore(index))}>
                    {openIndex === index ? "Read Less" : "Read More"}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
