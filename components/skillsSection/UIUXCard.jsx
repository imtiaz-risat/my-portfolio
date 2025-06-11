"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaFigma } from "react-icons/fa";
import { FiFramer } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";
import { TbBrandVercel } from "react-icons/tb";
import { SiPostman } from "react-icons/si";
import { SiJira } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiClerk } from "react-icons/si";

const UIUXCard = () => {
  const UIUXTechnologies = [
    {
      icon: <FaFigma />,
      name: "Figma",
      hoverColor: "hover:text-orange-500", // Lighter orange for Figma
    },
    {
      icon: <FiFramer />,
      name: "Framer",
      hoverColor: "hover:text-blue-500", // Bright blue for Framer
    },
    {
      icon: <FaGitAlt />,
      name: "Git",
      hoverColor: "hover:text-red-500", // Bright red for Git
    },
    {
      icon: <LuGithub />,
      name: "Github",
      hoverColor: "hover:text-gray-600", // Medium gray for GitHub
    },
    {
      icon: <TbBrandVercel />,
      name: "Vercel",
      hoverColor: "hover:text-sky-500", // Sky blue for Vercel
    },
    {
      icon: <SiPostman />,
      name: "Postman",
      hoverColor: "hover:text-orange-400", // Light orange for Postman
    },
    {
      icon: <SiClerk />,
      name: "Clerk",
      hoverColor: "hover:text-indigo-500", // Bright indigo for Clerk
    },
    {
      icon: <SiJira />,
      name: "Jira",
      hoverColor: "hover:text-blue-400", // Light blue for Jira
    },
    {
      icon: <FiFramer />,
      name: "Clerk",
      hoverColor: "hover:text-indigo-500", // Bright indigo for Clerk
    },
  ];

  return (
    <div className="bg-white p-4 shadow-md shadow-emerald-400 flex-1 col-span-1 ">
      <h2 className="text-lg font-bold mb-2">UI/UX & Tools</h2>
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
