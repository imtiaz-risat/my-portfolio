"use client";
import React from "react";

const FloppyDiskCard = ({ projectType, projectName, projectDescription }) => {
  return (
    <>
      <div className="relative w-80 h-80 md:w-96 md:h-96">
        {/* Custom shape background */}
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 400 320"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0 H320 L400 80 V320 H0 Z"
            stroke="#000000"
            strokeWidth={2}
            fill="#10b981"
          />
        </svg>

        {/* Content */}
        <div className="relative z-10 p-4 text-white h-full">
          <div className="space-y-0.5">
            <p className="mr-14 text-sm uppercase tracking-wider opacity-90">
              {projectType}
            </p>

            <h2 className="mr-10 text-3xl font-semibold mb-2">{projectName}</h2>

            <p className="text-sm opacity-90">{projectDescription}</p>

            {/* Live Demo and Source Code Buttons */}
            <div className="flex space-x-1.5 pt-1">
              {/* Live Demo Button */}
              <button className="bg-white text-black px-4 py-2 rounded-sm flex items-center justify-between w-full group hover:bg-gray-100 transition-colors">
                <span className="text-sm font-medium">Live Demo</span>
              </button>
              {/* Source Code Button */}
              <button className="bg-white text-black px-4 py-2 rounded-sm flex items-center justify-between w-full group hover:bg-gray-100 transition-colors">
                <span className="text-sm font-medium">Source Code</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloppyDiskCard;
