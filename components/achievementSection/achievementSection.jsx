import React from "react";
import { motion } from "framer-motion";

export default function AchievementSection() {
  return (
    <div className="relative min-h-screen bg-white flex flex-col items-center justify-center py-6 px-4 sm:px-6 sm:py-12 lg:px-8 lg:py-16 z-0">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black mb-6">
        Achievements <span className="text-black opacity-75">So Far</span>
      </h1>
      <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 lg:px-20">
        {/* Box 1 */}
        <div className="bg-black p-4 shadow-md shadow-emerald-400 flex flex-col justify-between flex-1 col-span-1">
          <div className="flex flex-row justify-between mb-2">
            <div>
              <h2 className="text-white text-lg font-bold">Projects</h2>
              <p className="text-gray-300">10+ Completed Projects</p>
            </div>
            <img
              src="/trophy.svg"
              alt="Trophy"
              className=" w-12 h-12 sm:w-16 sm:h-16"
            />
          </div>
        </div>
        {/* Box 2 */}
        <div className="bg-black p-4 shadow-md shadow-emerald-400 flex-[1_0_50%] col-span-1">
          <img src="/medal.svg" alt="Medal" className="w-12 h-12 mb-2" />
          <h2 className="text-white text-lg font-bold mb-2">Skills</h2>
          <p className="text-gray-300">10+ Skills</p>
        </div>
        {/* Box 3 */}
        <div className="bg-black p-4 shadow-md shadow-emerald-400 flex-[1_0_50%] col-span-1">
          <h2 className="text-white text-lg font-bold mb-2">Experience</h2>
          <p className="text-gray-300">2+ Years</p>
        </div>
        {/* Box 4 */}
        <div className="bg-black p-4 shadow-md shadow-emerald-400 flex-[1_0_50%] col-span-1">
          <h2 className="text-white text-lg font-bold mb-2">Certificates</h2>
          <p className="text-gray-300">2+ Certificates</p>
        </div>
      </div>
    </div>
  );
}
