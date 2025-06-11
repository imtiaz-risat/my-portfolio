import React from "react";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { FaDartLang } from "react-icons/fa6";
import LanguageCard from "./LanguageCard";
import FrontendCard from "./FrontendCard";
import BackendCard from "./BackendCard";
import UIUXCard from "./UIUXCard";
// import ToolsCard from "./ToolsCard";

export default function SkillsSection() {
  return (
    <div className="relative min-h-fit bg-black flex flex-col items-center justify-center py-20 px-4 sm:px-6 sm:py-24 lg:px-8 lg:py-32 z-0">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
        Skill Sets <span className="text-white opacity-75">I Bring</span>
      </h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Box 1 */}
        <LanguageCard />
        {/* Box 2 */}
        <FrontendCard />
        {/* Box 3 */}
        <BackendCard />
        {/* Box 4 */}
        <UIUXCard />
        {/* Box 5 */}
        {/* <ToolsCard /> */}
      </div>
    </div>
  );
}
