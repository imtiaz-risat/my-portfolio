"use client";
import React from "react";
import { motion } from "framer-motion";
import { SiMongodb } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { TbBrandFirebase, TbBrandOauth } from "react-icons/tb";
import { RiSupabaseLine } from "react-icons/ri";
import { SiAppwrite } from "react-icons/si";
import { SiClerk } from "react-icons/si";

const DatabaseAndBaaSCard = () => {
  const backendTechnologies = [
    {
      icon: <SiMongodb />,
      name: "MongoDB",
      hoverColor: "hover:text-green-400",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
      hoverColor: "hover:text-blue-400",
    },
    {
      icon: <TbBrandFirebase />,
      name: "Firebase",
      hoverColor: "hover:text-orange-400",
    },
    {
      icon: <RiSupabaseLine />,
      name: "Supabase",
      hoverColor: "hover:text-teal-500",
    },
    {
      icon: <SiAppwrite />,
      name: "App Write",
      hoverColor: "hover:text-orange-500",
    },
    {
      icon: <TbBrandOauth />,
      name: "OAuth",
      hoverColor: "hover:text-gray-300",
    },
    {
      icon: <SiClerk />,
      name: "Clerk",
      hoverColor: "hover:text-indigo-500", // Bright indigo for Clerk
    },
  ];

  return (
    <div className="bg-white p-4 shadow-md shadow-emerald-400 flex-1 col-span-1">
      <h2 className="text-lg font-bold mb-2">Databases & BaaS</h2>
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

export default DatabaseAndBaaSCard;
