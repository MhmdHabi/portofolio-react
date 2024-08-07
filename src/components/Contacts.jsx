// components/Contact.js
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="px-5 md:px-8 py-16 bg-gradient-to-r from-gray-800 via-black to-gray-900 text-white">
      <div className="container mx-auto px-6">
        {/* Contact Header */}
        <motion.h2 className="text-4xl font-bold mb-8 text-center text-white" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
          Contact Us
        </motion.h2>

        <div className="flex justify-center">
          {/* Contact Form */}
          <motion.div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}>
            <form action="#" method="post" className="space-y-4">
              <div className="flex flex-col md:flex-row md:space-x-4">
                <div className="flex-1 mb-4">
                  <label className="block text-gray-400 mb-2" htmlFor="name">
                    Name
                  </label>
                  <input id="name" type="text" className="w-full p-4 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-red-500" required />
                </div>
                <div className="flex-1 mb-4">
                  <label className="block text-gray-400 mb-2" htmlFor="email">
                    Email
                  </label>
                  <input id="email" type="email" className="w-full p-4 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-red-500" required />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-400 mb-2" htmlFor="phone">
                  Phone Number
                </label>
                <input id="phone" type="tel" className="w-full p-4 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-red-500" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-400 mb-2" htmlFor="subject">
                  Subject
                </label>
                <input id="subject" type="text" className="w-full p-4 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-red-500" />
              </div>
              <div className="mb-6">
                <label className="block text-gray-400 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea id="message" rows="5" className="w-full p-4 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-red-500" required></textarea>
              </div>
              <button type="submit" className="w-full bg-red-500 text-white py-3 rounded hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
