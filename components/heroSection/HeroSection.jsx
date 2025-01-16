import React from "react";
import AnimatedGridPattern from "./AnimatedGridPattern";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 z-0">
      <div className="absolute inset-0 -z-10">
        <AnimatedGridPattern />
      </div>

      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-white">
        Hi, <span className="text-emerald-400 font-semibold">I'm Risat</span>
      </h1>
      <div className="flex justify-center  mt-2">
        <div className="relative inline-block">
          <span className="absolute sm:top-1 left-[45%] sm:left-[40%] transform -translate-x-1/2 text-xs sm:text-sm lg:text-lg text-white opacity-70">
            I can
          </span>
          <span className="text-5xl sm:text-7xl lg:text-8xl font-black text-white">
            Code.
          </span>
        </div>
        <div className="relative inline-block">
          <span className="absolute sm:top-1 left-[77%] sm:left-[80%] transform -translate-x-1/2 text-xs sm:text-sm lg:text-lg text-white opacity-70">
            I drink
          </span>
          <span className="text-5xl sm:text-7xl lg:text-8xl font-black text-white">
            Coffee.
          </span>
        </div>
        <div className="relative inline-block">
          <span className="absolute sm:top-1 left-[40%] transform -translate-x-1/2 text-xs sm:text-sm lg:text-lg text-white opacity-70">
            I also
          </span>
          <span className="text-5xl sm:text-7xl lg:text-8xl font-black text-white">
            Design.
          </span>
        </div>
      </div>
      <p className="text-lg text-white mt-4 text-center">
        I'm a{" "}
        <span className="font-semibold text-emerald-400">
          Frontend Designer
        </span>{" "}
        and <span className="font-semibold text-emerald-400">Developer</span>.
      </p>
      <p className="text-lg text-white text-center px-8">
        I specialize in frontend development, UI/UX design and visual design.
      </p>
    </div>
  );
};

export default HeroSection;
