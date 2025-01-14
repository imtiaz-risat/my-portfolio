import React from "react";
import AnimatedGridPattern from "./AnimatedGridPattern";
import NavMenu from "./NavMenu";
import ProjectsSection from "./ProjectsSection";
import HeroSection from "./HeroSection";

export default function LandingPage() {
  return (
    <div className="bg-black">
      <NavMenu className="z-50" />

      {/* Hero Section */}
      <HeroSection />

      {/* Projects Section */}
      <div className="relative min-h-screen min-w-full my-20 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 z-0">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 md:mb-14">
          Projects <span className="text-white opacity-75">I've Worked On</span>
        </h1>
        <ProjectsSection />
      </div>

      {/* Tech Expertise Section */}
      <div className="relative min-h-screen bg-emerald-500 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 z-0">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6">
          Tech Expertise
        </h1>
      </div>
    </div>
  );
}
