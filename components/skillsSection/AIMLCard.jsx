"use client";
import React from "react";
import { motion } from "framer-motion";
import { SiMongodb } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { TbBrandFirebase } from "react-icons/tb";
import { RiSupabaseLine } from "react-icons/ri";
import { SiAppwrite } from "react-icons/si";

const AIMLCard = () => {
  const backendTechnologies = [
    {
      icon: <SiMongodb />,
      name: "Google GenAI",
      hoverColor: "hover:text-emerald-200",
    },
    {
      icon: <SiPostgresql />,
      name: "Text-to-Speech",
      hoverColor: "hover:text-blue-400",
    },
    {
      icon: <TbBrandFirebase />,
      name: "Speech-to-Text",
      hoverColor: "hover:text-green-400",
    },

    {
      icon: <SiAppwrite />,
      name: "PipeCat",
      hoverColor: "hover:text-gray-300",
    },
    {
      icon: <RiSupabaseLine />,
      name: "Kaggle",
      hoverColor: "hover:text-blue-500",
    },
    {
      icon: <RiSupabaseLine />,
      name: "Hugging Face",
      hoverColor: "hover:text-orange-500",
    },
  ];

  return (
    <div className="bg-white p-4 shadow-md shadow-emerald-400 flex-1 col-span-1">
      <h2 className="text-lg font-bold mb-2">AI/ML Engineering</h2>
      <ul className="flex flex-wrap gap-2">
        {backendTechnologies.map((language, index) => (
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

export default AIMLCard;
