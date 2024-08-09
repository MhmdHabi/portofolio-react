// src/components/Education.js
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const TimelineItem = ({ title, date, description, isEducation }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <motion.div initial={{ opacity: 0, y: 50 }} animate={controls} transition={{ duration: 0.6 }} className={`relative mb-8 flex items-center ${isEducation ? "text-white" : "text-gray-300"}`}>
      <div className="flex-shrink-0 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">{isEducation ? <FaGraduationCap className="text-yellow-400" /> : <FaBriefcase className="text-blue-400" />}</div>
      <div className="ml-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{date}</p>
        <p className="mt-2">{description}</p>
      </div>
      <div className="absolute left-1.5 w-1 h-full bg-gray-700 top-1/2 transform -translate-y-1/2"></div>
    </motion.div>
  );
};

const Education = () => {
  const headerControls = useAnimation();
  const educationControls = useAnimation();
  const experienceControls = useAnimation();

  useEffect(() => {
    headerControls.start({ opacity: 1, y: 0 });
    educationControls.start({ opacity: 1, y: 0 });
    experienceControls.start({ opacity: 1, y: 0 });
  }, [headerControls, educationControls, experienceControls]);

  const educationData = [
    {
      title: "University of National Dynamics",
      date: "2021 - present",
      description: "Study various aspects of computer science, including algorithms, data structures, software engineering, web programming and computer networks.",
    },
    {
      title: "Sarolangun 2 High School",
      date: "2018 - 2021",
      description: "Complete general education with a focus on scientific material.",
    },
  ];

  const experienceData = [
    {
      title: "Study of independent web developer PT Amanah Karya Indonesia",
      date: "2024",
      description: "During this program, I learned the latest technologies and tools in web development, including HTML, CSS, JavaScript, and frameworks like Laravel.",
    },
  ];

  return (
    <div className="px-5 md:px-8 py-16 bg-black text-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div initial={{ opacity: 0, y: 50 }} animate={headerControls} transition={{ duration: 0.8 }} className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <FaGraduationCap className="text-yellow-400 text-4xl mr-4" />
            <h1 className="text-3xl font-bold">Education</h1>
          </div>
          <p className="text-gray-400">A timeline of my educational background and experience.</p>
        </motion.div>

        {/* Grid for Timeline Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {/* Left Column */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={headerControls} transition={{ duration: 0.8 }} className="hidden md:flex flex-col items-center justify-center text-center p-6 rounded-lg">
            <div className="flex items-center mb-6">
              <FaGraduationCap className="text-yellow-400 text-4xl mr-4" />
              <h2 className="text-2xl font-semibold">Education & Experience</h2>
              <FaBriefcase className="text-blue-400 text-4xl mr-4" />
            </div>
            <p className="text-gray-300">This section highlights my educational background and my experiences during college and school.</p>
          </motion.div>

          {/* Center Column - Education Timeline */}
          <div className="col-span-1">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={educationControls} transition={{ duration: 0.8 }} className="flex items-center mb-6">
              <FaGraduationCap className="text-yellow-400 text-3xl mr-4" />
              <h2 className="text-2xl font-semibold">Education</h2>
            </motion.div>
            {educationData.map((item, index) => (
              <TimelineItem key={index} {...item} isEducation={true} />
            ))}
          </div>

          {/* Right Column - Projects Timeline */}
          <div className="col-span-1">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={experienceControls} transition={{ duration: 0.8 }} className="flex items-center mb-6">
              <FaBriefcase className="text-blue-400 text-2xl mr-4" />
              <h2 className="text-2xl font-semibold">Experience</h2>
            </motion.div>
            {experienceData.map((item, index) => (
              <TimelineItem key={index} {...item} isEducation={false} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
