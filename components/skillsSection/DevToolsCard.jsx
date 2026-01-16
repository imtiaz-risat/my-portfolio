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
import { SiGooglecloud } from "react-icons/si";
import { FiCodesandbox } from "react-icons/fi";
import { SiDocker } from "react-icons/si";

const DevToolsCard = () => {
  const devToolsTechnologies = [
    {
      icon: <FaGitAlt />,
      name: "Git",
      hoverColor: "hover:text-red-500", // Bright red for Git
    },
    {
      icon: <LuGithub />,
      name: "Github",
      hoverColor: "hover:text-gray-400", // Medium gray for GitHub
    },
    {
      icon: <SiDocker />,
      name: "Docker",
      hoverColor: "hover:text-blue-600", // Medium gray for GitHub
    },
    {
      icon: <SiGooglecloud />,
      name: "GCP",
      hoverColor: "hover:text-blue-400", // Bright blue for GCP
    },
    {
      icon: <SiPostman />,
      name: "Postman",
      hoverColor: "hover:text-orange-400", // Light orange for Postman
    },
    {
      icon: <FaFigma />,
      name: "Figma",
      hoverColor: "hover:text-purple-500", // Lighter orange for Figma
    },
    {
      icon: <FiFramer />,
      name: "Framer",
      hoverColor: "hover:text-blue-500", // Bright blue for Framer
    },
    {
      icon: <FiCodesandbox />,
      name: "RunPod",
      hoverColor: "hover:text-violet-400", // Bright violet for RunPod
    },
    {
      icon: <TbBrandVercel />,
      name: "Vercel",
      hoverColor: "hover:text-gray-300", // Sky gray for Vercel
    },
    {
      icon: <SiJira />,
      name: "Jira",
      hoverColor: "hover:text-blue-400", // Light blue for Jira
    },
  ];

  return (
    <div className="bg-white p-4 shadow-md shadow-emerald-400 flex-1 col-span-1 ">
      <h2 className="text-lg font-bold mb-2">Cloud & Developer Tools</h2>
      <ul className="flex flex-wrap gap-2">
        {devToolsTechnologies.map((language, index) => (
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

export default DevToolsCard;
