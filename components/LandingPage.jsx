import React from "react";
import AnimatedGridPattern from "./heroSection/AnimatedGridPattern";
import NavMenu from "./NavMenu";
import ProjectsSection from "./projectSection/ProjectsSection";
import HeroSection from "./heroSection/HeroSection";
import { motion } from "framer-motion";
import WelcomeDiv from "./welcomeDiv/WelcomeDiv";
import SkillsSection from "./skillsSection/skillsSection";
import AchievementSection from "./achievementSection/achievementSection";

export default function LandingPage() {
  return (
    <div className="bg-black">
      <WelcomeDiv />
      <NavMenu className="z-50" />

      <HeroSection />
      <ProjectsSection />

      {/* Tech Expertise Section */}
      {/* <div className="relative min-h-screen bg-emerald-500 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 z-0">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6">
          Tech Expertise
        </h1>
      </div> */}

      <SkillsSection />
      <AchievementSection />
    </div>
  );
}
