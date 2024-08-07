import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    src: "/assets/siakad.png",
    title: "Project Siakad Kampus Merdeka",
    description: "Membuat aplikasi sistem informasi akademik (SIAKAD) dengan menggunakan framework laravel, dengan 3 aktor yaitu admin, mahasiswa, dan dosen.",
    category: "Web Development",
    link: "#",
  },
  {
    src: "/assets/sosmed.png",
    title: "Project Sosial Media Kampus Merdeka",
    description: "Aplikasi ini merupakan aplikasi sosial media dimana user bisa upload postingan, like, memberikan komentar, bisa juga melakukan bookmark dan juga user bisa melakukan follow.",
    category: "Web Development",
    link: "#",
  },
  {
    src: "/assets/wonderind.jpeg",
    title: "Project Aplikasi Mobile Wonderind",
    description: "Aplikasi ini merupakan aplikasi berbasis mobile yaitu aplikasi yang digunakan untuk mencari informasi semua wisata di indonesia dari pantai, gunung dan wisata lainnya.",
    category: "Flutter Development",
    link: "#",
  },
  {
    src: "/assets/kasir.png",
    title: "Website Point Of Sales",
    description:
      "Website Point of Sales (POS) ini menawarkan solusi efisien dan intuitif untuk pencatatan penjualan bisnis. Dirancang menggunakan Laravel 10 untuk kekuatan backend dan Bootstrap 5 untuk desain responsif, sistem ini memungkinkan pengguna untuk dengan mudah mencatat transaksi penjualan, mengelola produk, dan menghasilkan laporan penjualan yang komprehensif. ",
    category: "Web Development",
    link: "#",
  },
  {
    src: "/assets/bakery.png",
    title: "Website Shanum Bakery",
    description:
      "Shanum Bakery adalah website informasi dan penjualan yang dirancang untuk memberikan pengalaman pengguna yang mulus dan menyenangkan. Dengan tema yang bersih dan modern, situs ini dirancang menggunakan Laravel 10 dan Tailwind CSS, memastikan performa yang cepat dan antarmuka yang responsif.",
    category: "Web Development",
    link: "#",
  },
];

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
      <div className="container mx-auto px-6">
        {/* Project Header */}
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Projects</h2>

        {/* Grid for Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(({ src, title, description, category, link }, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-lg overflow-hidden shadow-lg flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img src={src} alt={title} className="w-full h-48 object-cover" />
              <div className="flex flex-col flex-grow p-6">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p
                  ref={(el) => (descriptionRefs.current[index] = el)}
                  className={`text-gray-400 mb-4 transition-all duration-500 ease-in-out overflow-hidden ${openIndex === index ? "max-h-[500px]" : "max-h-24"}`}
                  style={{ display: "-webkit-box", WebkitLineClamp: openIndex === index ? "unset" : 3, WebkitBoxOrient: "vertical" }}
                >
                  {description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">{category}</span>
                  <button onClick={() => (openIndex === index ? handleReadLess() : handleReadMore(index))} className="text-blue-400 hover:underline">
                    {openIndex === index ? "Read Less" : "Read More"}
                  </button>
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
