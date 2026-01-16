import React from "react";
import LanguageCard from "./LanguageCard";
import FrontendCard from "./FrontendCard";
import BackendAndAPIsCard from "./Backend&APIsCard";
import DatabaseAndBaaSCard from "./Database&BaaSCard";
import AIMLCard from "./AIMLCard";
import DevToolsCard from "./DevToolsCard";

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
        <BackendAndAPIsCard />
        {/* Box 4 */}
        <DatabaseAndBaaSCard />
        {/* Box 5 */}
        <AIMLCard />
        {/* Box 6 */}
        <DevToolsCard />
      </div>
    </div>
  );
}
