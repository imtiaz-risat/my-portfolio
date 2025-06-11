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
  onShowToast = () => {},
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

  const handleButtonClick = (type, e) => {
    e.stopPropagation();
    if (currentIndex === index) {
      onShowToast(`${type} link will be available soon!`);
    }
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
            {/* <div className="flex space-x-2 pt-1">
              {techStack.map((tech, index) => (
                <img
                  key={index}
                  src={"/techStacks/javascript.svg"}
                  // alt={tech}
                  className="w-6 h-6"
                />
              ))}
            </div> */}

            {/* Tech Stack List */}
            <div key={index} className="pt-1 line-clamp-1">
              <p className="text-sm text-emerald-500 opacity-90">
                {techStack.map((tech, i) => (
                  <span key={i}>
                    {i > 0 && " "}• {tech}
                  </span>
                ))}
              </p>
            </div>

            {/* Live Demo and Source Code Buttons */}
            <div className="flex space-x-1.5 pt-1">
              {/* Live Demo Button */}
              <motion.button
                className="bg-white text-black px-4 py-2 border-black border flex items-center justify-between w-full group hover:bg-gray-100 transition-colors"
                whileHover={currentIndex === index ? "hover" : ""}
                initial="initial"
                disabled={currentIndex === index ? false : true}
                onClick={(e) => handleButtonClick("Live Demo", e)}
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
                onClick={(e) => handleButtonClick("Source Code", e)}
              >
                <span className="text-xs md:text-sm font-medium">
                  Source Code
                </span>
                <motion.div variants={svgVariants} className="transform-gpu">
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
