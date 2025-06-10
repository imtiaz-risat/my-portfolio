"use client";
import React from "react";
import { Globe, Code } from "lucide-react";
import { motion } from "framer-motion";

const FloppyDiskCard = ({
  projectType,
  projectName,
  projectImage,
  techStack,
  currentIndex,
  index,
}) => {
  const techIcons = {
    javascript: "../public/techStacks/javascript.svg",
    react: "../public/techStacks/react.svg",
    // Add other tech stacks here
  };

  // Framer Motion Variants
  const svgVariants = {
    initial: {
      rotateY: 0,
    },
    hover: {
      rotateY: 360,
      transition: {
        duration: 0.75,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };
  return (
    <>
      <div className={`relative w-80 h-[22rem] md:w-96 md:h-96`}>
        {/* Custom shape background */}
        <svg
          className={`absolute top-0 left-0 w-full h-full ${
            currentIndex === index ? "drop-shadow-md shadow-emerald-400" : ""
          }`}
          viewBox="0 0 400 320"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0 H320 L400 80 V320 H0 Z"
            stroke={currentIndex === index ? "#10b981" : "#000000"}
            strokeWidth={"2.5"}
            fill={currentIndex === index ? "#000000" : "#ffffff"}
            className="transition-colors duration-300 ease-linear"
          />
        </svg>

        {/* Content */}
        <div
          className={`relative z-10 p-6 flex flex-col justify-center ${
            currentIndex === index ? "text-white" : "text-black opacity-55"
          } h-full`}
        >
          <div className="space-y-0.5">
            <p className="mr-14 text-sm uppercase tracking-wider opacity-90 line-clamp-1">
              {projectType}
            </p>

            <h2 className="mr-10 text-2xl font-semibold line-clamp-2">
              {projectName}
            </h2>

            <div className="bg-white border border-black w-full h-auto aspect-[16/9] pt-1">
              <img
                src={projectImage}
                alt="Project Image"
                className="w-full h-full object-cover"
              />
            </div>

            {/* <p className="text-sm opacity-90">{projectDescription}</p> */}

            {/* Tech Stack SVGs */}
            <div className="flex space-x-2 pt-1">
              {techStack.map((tech, index) => (
                <img
                  key={index}
                  src={"/techStacks/javascript.svg"}
                  // alt={tech}
                  className="w-6 h-6"
                />
              ))}
            </div>

            {/* Live Demo and Source Code Buttons */}
            <div className="flex space-x-1.5 pt-1">
              {/* Live Demo Button */}
              <motion.button
                className="bg-white text-black px-4 py-2 border-black border flex items-center justify-between w-full group hover:bg-gray-100 transition-colors"
                whileHover={currentIndex === index ? "hover" : ""}
                initial="initial"
                disabled={currentIndex === index ? false : true}
              >
                <span className="text-xs md:text-sm font-medium">
                  Live Demo
                </span>
                <motion.div variants={svgVariants} className="transform-gpu">
                  <Globe className="w-4 h-4" />
                </motion.div>
              </motion.button>
              {/* Source Code Button */}
              <motion.button
                className="bg-white text-black px-4 py-2 border-black border flex items-center justify-between w-full group hover:bg-gray-100 transition-colors"
                whileHover={currentIndex === index ? "hover" : ""}
                initial="initial"
                disabled={currentIndex === index ? false : true}
              >
                <span className="text-xs md:text-sm font-medium">
                  Source Code
                </span>
                <motion.div
                  variants={svgVariants}
                  className="transform-gpu" // Optional: helps with animation performance
                >
                  <Code className="w-4 h-4" />
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloppyDiskCard;
