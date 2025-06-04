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
    <div className="bg-gradient-to-r from-gray-800 via-black to-gray-900 text-white py-16 px-5 md:px-10">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.h2 className="text-4xl font-bold mb-12 flex items-center justify-center space-x-3 font-roboto" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
          <FaEnvelope className="text-white text-3xl" />
          <span>Contact Us</span>
        </motion.h2>

        {/* Main layout: form left, social right */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <motion.div className="flex-1 bg-gray-800 p-8 rounded-lg shadow-lg" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}>
            <h3 className="text-2xl font-semibold mb-6 font-roboto">Send Me a Message</h3>
            <form action="#" method="post" className="space-y-5">
              <div className="flex flex-col md:flex-row md:space-x-6">
                <div className="flex-1">
                  <label htmlFor="name" className="block mb-2 text-gray-400 text-sm">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input id="name" type="text" required className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-red-500 text-sm" />
                </div>
                <div className="flex-1 mt-5 md:mt-0">
                  <label htmlFor="email" className="block mb-2 text-gray-400 text-sm">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input id="email" type="email" required className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-red-500 text-sm" />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2 text-gray-400 text-sm">
                  Phone Number
                </label>
                <input id="phone" type="tel" className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-red-500 text-sm" />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 text-gray-400 text-sm">
                  Subject
                </label>
                <input id="subject" type="text" className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-red-500 text-sm" />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-gray-400 text-sm">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea id="message" rows="5" required className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"></textarea>
              </div>

              <button type="submit" className="w-full bg-gradient-to-r from-black via-red-700 to-red-400 py-3 rounded-lg text-white hover:bg-red-600 transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-red-500">
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Social Media */}
          <motion.div className="flex-1" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}>
            <h3 className="text-2xl font-semibold mb-6 font-roboto">Find Me on Social Media</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {socialMediaLinks.map(({ icon, link, name, description }, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-xl"
                >
                  {/* Background red button behind icon on hover */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-black via-red-700 to-red-400 opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none"></div>

                  <div className="mb-4 relative z-10">{icon}</div>
                  <h4 className="text-2xl font-semibold mb-2 relative z-10">{name}</h4>
                  <p className="text-gray-300 mb-4 relative z-10">{description}</p>

                  {/* The red gradient button */}
                  <button
                    onClick={(e) => e.preventDefault()} // Prevent button click bubbling to link
                    className="relative z-10 bg-gradient-to-r from-black via-red-700 to-red-400 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors text-sm cursor-pointer"
                  >
                    Go to {name}
                  </button>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
