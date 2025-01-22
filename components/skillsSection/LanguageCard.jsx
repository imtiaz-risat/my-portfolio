"use client";
import React from "react";
import { motion } from "framer-motion";
import { SiJavascript, SiTypescript } from "react-icons/si";
import { FaPython, FaJava } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { FaDartLang } from "react-icons/fa6";

const LanguageCard = () => {
  const languages = [
    {
      icon: <SiJavascript />,
      name: "JavaScript",
      hoverColor: "hover:text-yellow-400",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
      hoverColor: "hover:text-blue-400",
    },
    { icon: <FaPython />, name: "Python", hoverColor: "hover:text-yellow-400" },
    { icon: <FaJava />, name: "Java", hoverColor: "hover:text-red-500" },
    { icon: <SiCplusplus />, name: "C++", hoverColor: "hover:text-blue-400" },
    {
      icon: <FaDartLang />,
      name: "Dart",
      hoverColor: "hover:text-emerald-400",
    },
  ];

  return (
    <div className="bg-white p-4 shadow-md shadow-emerald-400 flex-1 col-span-1 cursor-crosshair">
      <h2 className="text-lg font-bold mb-2">Languages</h2>
      <ul className="flex flex-wrap gap-2">
        {languages.map((language, index) => (
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

export default LanguageCard;
