"use client";
import React from "react";
import { useState, useEffect } from "react";
import AnimatedGridPattern from "./AnimatedGridPattern";
import { Heart } from "lucide-react";

const HeroSection = () => {
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  useEffect(() => {
    // Load heart state from localStorage on component mount
    const savedHeartState = localStorage.getItem("heartFilled");
    if (savedHeartState !== null) {
      setIsHeartFilled(JSON.parse(savedHeartState));
    }
  }, []);

  const toggleHeart = () => {
    const newState = !isHeartFilled;
    setIsHeartFilled(newState);
    localStorage.setItem("heartFilled", JSON.stringify(newState));

    // Add animation class
    const heartElement = document.querySelector(".heart-icon");
    heartElement.classList.add("heart-beat");

    // Remove animation class after animation completes
    setTimeout(() => {
      heartElement.classList.remove("heart-beat");
    }, 300);
  };
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 z-0">
      <div className="absolute inset-0 -z-10">
        <AnimatedGridPattern />
      </div>
      <div className="px-2 sm:px-4 lg:px-8 flex flex-col justify-center items-center">
        <h1 className="text-5xl lg:text-6xl font-semibold text-white mb-2 sm:mb-0">
          Hi, <span className="text-emerald-400 font-semibold">I'm Risat</span>
        </h1>
        <div className="flex flex-col sm:flex-row text-center sm:text-left justify-center">
          <div className="relative inline-block">
            <span className="animate-float absolute sm:top-1 left-[35%]  transform -translate-x-1/2 text-xs sm:text-sm lg:text-lg text-white opacity-70">
              I can
            </span>
            <span className="text-7xl sm:text-7xl lg:text-8xl font-black text-white">
              Code.
            </span>
          </div>
          <div className="relative inline-block">
            <span className="animate-float absolute sm:top-1 left-[67%] transform -translate-x-1/2 text-xs sm:text-sm lg:text-lg text-white opacity-70">
              I love
            </span>
            <span className="text-7xl sm:text-7xl lg:text-8xl font-black text-white">
              Coffee.
            </span>
          </div>
          <div className="relative inline-block">
            <span className="animate-float absolute sm:top-1 left-[30%] transform -translate-x-1/2 text-xs sm:text-sm lg:text-lg text-white opacity-70">
              I also
            </span>
            <span className="text-7xl sm:text-7xl lg:text-8xl font-black text-white">
              Design.
            </span>
          </div>
        </div>
        <p className="text-sm sm:text-lg text-white mt-4 text-center">
          I'm a{" "}
          <span className="font-semibold text-emerald-400">
            Frontend Developer
          </span>{" "}
          and <span className="font-semibold text-emerald-400">Designer</span>.
        </p>
        <p className="text-sm sm:text-lg text-white text-center px-8">
          I specialize in frontend development, UI/UX design and visual design.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <button
          className="mt-8 flex items-center gap-1 border border-white text-white px-4 py-2 hover:bg-emerald-400 hover:border-emerald-400 hover:scale-105 transition-all"
          onClick={() => (window.location.href = "/contact")}
        >
          Contact Me
        </button>
        <button
          onClick={toggleHeart}
          className="mt-8 p-2 text-white hover:text-emerald-400 transition-colors duration-300"
        >
          <Heart
            className={`h-8 w-8 transition-transform duration-300 heart-icon heart-beat ${
              isHeartFilled ? "scale-100" : "group-hover:scale-110"
            }`}
            fill={isHeartFilled ? "#34d399" : "none"}
            stroke="#34d399"
          />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
