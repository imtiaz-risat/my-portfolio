import React from "react";
import GridPattern from "./GridPattern";
import AnimatedGridPattern from "./AnimatedGridPattern";
import MenuButton from "./MenuButton";
import NavMenu from "./NavMenu";

export default function LandingPage() {
  return (
    <div className="bg-black">
      {/* Nav Menu Button */}
      {/* <div className="fixed top-4 right-4 z-50">
        <MenuButton />
      </div> */}

      <NavMenu className="z-50" />

      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 z-0">
        <div className="absolute inset-0 -z-10">
          {/* <GridPattern /> */}
          <AnimatedGridPattern />
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-white">
          Hi, <span className="text-emerald-400 font-semibold">I'm Risat</span>
        </h1>
        <div className="flex justify-center space-x-2 sm:space-x-4 mt-2">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white">
            Code
          </h1>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white px-2 sm:px-4">
            Coffee
          </h1>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white">
            Design
          </h1>
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
      {/* Projects Section */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 z-0">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-white">
          Projects
        </h1>
      </div>
    </div>
  );
}
