"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaFigma } from "react-icons/fa";
import { FiFramer } from "react-icons/fi";

const UIUXCard = () => {
  const UIUXTechnologies = [
    {
      icon: <FaFigma />,
      name: "Figma",
      hoverColor: "hover:text-orange-500",
    },
    {
      icon: <FiFramer />,
      name: "Framer",
      hoverColor: "hover:text-sky-400",
    },
  ];

  return (
    <div className="bg-white p-4 shadow-md shadow-emerald-400 flex-1 col-span-1 ">
      <h2 className="text-lg font-bold mb-2">UI/UX</h2>
      <ul className="flex flex-wrap gap-2">
        {UIUXTechnologies.map((language, index) => (
          <li key={index}>
            <motion.div
              className={`flex items-center gap-1 w-fit bg-black p-2 shadow-md text-white transition-all duration-300 ${language.hoverColor}`}
              whileHover={{ scale: 1.05, rotate: -1 }}
              transition={{ duration: 0.1 }}
            >
              {language.icon} {language.name}
            </motion.div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UIUXCard;
