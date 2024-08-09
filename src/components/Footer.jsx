import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-red-700 to-red-400 text-white py-7">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Description */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <Link to="home" className="text-3xl font-bold mb-2 cursor-pointer">
              My Portofolio
            </Link>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col ">
            <h2 className="mb-3 font-semibold text-xl">Media Sosial</h2>
            <div className="flex space-x-4 mb-6 md:mb-0 justify-center">
              <a href="https://www.facebook.com/habicuranmor.curanmor" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition duration-300">
                <FaFacebookF size={20} />
              </a>
              <a href="https://www.instagram.com/mhmdhabi_" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition duration-300">
                <FaInstagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/muhammadhabi" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition duration-300">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div className="text-center md:text-right">
            <ul className="space-y-2">
              <li>
                <Link to="about" className="hover:text-gray-400 transition duration-300 cursor-pointer">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="certificate" className="hover:text-gray-400 transition duration-300 cursor-pointer">
                  Certificate
                </Link>
              </li>
              <li>
                <Link to="skills" className="hover:text-gray-400 transition duration-300 cursor-pointer">
                  Skills
                </Link>
              </li>
              <li>
                <Link to="projects" className="hover:text-gray-400 transition duration-300 cursor-pointer">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="education" className="hover:text-gray-400 transition duration-300 cursor-pointer">
                  Education
                </Link>
              </li>
              <li>
                <Link to="contact" className="hover:text-gray-400 transition duration-300 cursor-pointer">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} My Portofolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
