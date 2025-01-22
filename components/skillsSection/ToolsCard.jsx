"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaFigma } from "react-icons/fa";
import { FiFramer } from "react-icons/fi";
import { FaGitAlt } from "react-icons/fa";
import { RiFirebaseFill } from "react-icons/ri";
import { SiPostman } from "react-icons/si";
import { SiClerk } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
import { TbApi } from "react-icons/tb";

const ToolsCard = () => {
  const Tools = [
    {
      icon: <FaGitAlt />,
      name: "Git",
      hoverColor: "hover:text-orange-500",
    },
    {
      icon: <RiFirebaseFill />,
      name: "Firebase",
      hoverColor: "hover:text-yellow-500",
    },
    {
      icon: <SiPostman />,
      name: "Postman",
      hoverColor: "hover:text-orange-500",
    },
    {
      icon: <SiClerk />,
      name: "Clerk",
      hoverColor: "hover:text-blue-500",
    },
    {
      icon: <SiSocketdotio />,
      name: "Socket.io",
      hoverColor: "hover:text-purple-500",
    },
    {
      icon: <TbApi />,
      name: "Rest API",
      hoverColor: "hover:text-lime-400",
    },
  ];
  return (
    <div className="bg-white p-4 shadow-md shadow-emerald-400 flex-1 col-span-1 md:col-span-2">
      <h2 className="text-lg font-bold mb-2">Tools</h2>
      <ul className="flex flex-wrap gap-2">
        {Tools.map((tool, index) => (
          <li key={index}>
            <motion.div
              className={`flex items-center gap-1 w-fit bg-black p-2 shadow-md text-white transition-all duration-300 ${tool.hoverColor}`}
              whileHover={{ scale: 1.05, rotate: -1 }}
              transition={{ duration: 0.1 }}
            >
              {tool.icon} {tool.name}
            </motion.div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToolsCard;
