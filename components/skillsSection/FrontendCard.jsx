"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiCsswizardry, SiTailwindcss } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const FrontendCard = () => {
  const frontendTechnologies = [
    {
      icon: <FaReact />,
      name: "React",
      hoverColor: "hover:text-sky-400",
    },
    {
      icon: <RiNextjsFill />,
      name: "Next.js",
      hoverColor: "hover:text-white",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
      hoverColor: "hover:text-emerald-400",
    },
    {
      icon: <SiCsswizardry />,
      name: "CSS",
      hoverColor: "hover:text-purple-800",
    },
    {
      icon: <TbBrandFramerMotion />,
      name: "Framer Motion",
      hoverColor: "hover:text-pink-400",
    },
  ];

  return (
    <div className="bg-white p-4 shadow-md shadow-emerald-400 flex-1 col-span-1">
      <h2 className="text-lg font-bold mb-2">Frontend</h2>
      <ul className="flex flex-wrap gap-2">
        {frontendTechnologies.map((language, index) => (
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

export default FrontendCard;
