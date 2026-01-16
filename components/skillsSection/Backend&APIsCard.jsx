"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { TbBrandMeta } from "react-icons/tb";
import { LiaYoutube } from "react-icons/lia";
import { SiWebrtc } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";

const BackendAndAPIsCard = () => {
  const backendTechnologies = [
    {
      icon: <FaNodeJs />,
      name: "Node.js",
      hoverColor: "hover:text-lime-300",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
      hoverColor: "hover:text-white",
    },
    {
      icon: <TbApi />,
      name: "Fast API",
      hoverColor: "hover:text-orange-400",
    },
    {
      icon: <SiWebrtc />,
      name: "WebRTC",
      hoverColor: "hover:text-lime-300",
    },
    {
      icon: <SiSocketdotio />,
      name: "Socket.io",
      hoverColor: "hover:text-gray-300",
    },
    {
      icon: <TbBrandMeta />,
      name: "Meta Graph API",
      hoverColor: "hover:text-blue-400",
    },
    {
      icon: <LiaYoutube />,
      name: "Youtube Data API",
      hoverColor: "hover:text-red-600",
    },
  ];

  return (
    <div className="bg-white p-4 shadow-md shadow-emerald-400 flex-1 col-span-1">
      <h2 className="text-lg font-bold mb-2">Backend & APIs</h2>
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

export default BackendAndAPIsCard;
