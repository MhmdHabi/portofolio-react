// components/Contact.js
import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaFacebookF, FaTiktok, FaEnvelope } from "react-icons/fa";

const socialMediaLinks = [
  {
    icon: <FaInstagram className="text-pink-500 text-4xl" />,
    link: "https://www.instagram.com/mhmdhabi_",
    name: "Instagram",
    description: "Follow us on Instagram for the latest updates and stories.",
  },
  {
    icon: <FaLinkedin className="text-blue-700 text-4xl" />,
    link: "https://www.linkedin.com/in/muhammadhabi",
    name: "LinkedIn",
    description: "Connect with us on LinkedIn for professional updates and networking.",
  },
  {
    icon: <FaFacebookF className="text-blue-600 text-4xl" />,
    link: "https://www.facebook.com/habicuranmor.curanmor",
    name: "Facebook",
    description: "Like our Facebook page to stay updated with our latest news.",
  },
  {
    icon: <FaTiktok className="text-black text-4xl" />,
    link: "https://www.tiktok.com/@mhmdhabi_?_t=8oiuBoXIfYe&_r=1",
    name: "TikTok",
    description: "Follow us on TikTok for fun and engaging content.",
  },
];

const Contact = () => {
  return (
    <div className="px-5 md:px-8 py-16 bg-gradient-to-r from-gray-800 via-black to-gray-900 text-white">
      <div className="container mx-auto px-6 md:mt-5">
        {/* Contact Header with Icon */}
        <motion.h2
          className="text-4xl font-bold mb-12 text-center font-roboto text-white flex items-center justify-center space-x-2"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <FaEnvelope className="text-white text-3xl" />
          <span>Contact Us</span>
        </motion.h2>

        {/* Social Media Header */}
        <motion.h2 className="text-xl md:text-2xl font-bold mb-3 font-roboto text-white" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}>
          Find Me on Social Media :
        </motion.h2>

        {/* Social Media Cards */}
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}>
          {socialMediaLinks.map(({ icon, link, name, description }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{name}</h3>
              <p className="text-gray-300 mb-4">{description}</p>
              <button className="bg-gradient-to-r from-black via-red-700 to-red-400 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors">Go to {name}</button>
            </a>
          ))}
        </motion.div>

        {/* Contact Form */}

        {/* Social Media Header */}
        <motion.h2 className="text-xl md:text-2xl font-bold mb-3 font-roboto text-white" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}>
          Find Me on Message :
        </motion.h2>

        <motion.div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}>
          <form action="#" method="post" className="space-y-4">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="flex-1 mb-4">
                <label className="block text-gray-400 mb-1 text-sm" htmlFor="name">
                  Name
                </label>
                <input id="name" type="text" className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-red-500 text-sm" required />
              </div>
              <div className="flex-1 mb-4">
                <label className="block text-gray-400 mb-1 text-sm" htmlFor="email">
                  Email
                </label>
                <input id="email" type="email" className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-red-500 text-sm" required />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 mb-1 text-sm" htmlFor="phone">
                Phone Number
              </label>
              <input id="phone" type="tel" className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-red-500 text-sm" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 mb-1 text-sm" htmlFor="subject">
                Subject
              </label>
              <input id="subject" type="text" className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-red-500 text-sm" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-400 mb-1 text-sm" htmlFor="message">
                Message
              </label>
              <textarea id="message" rows="5" className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-red-500 text-sm" required></textarea>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-black via-red-700 to-red-400 text-white py-2 rounded hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 text-sm">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
