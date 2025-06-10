"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { MdEvent, MdLocationOn } from "react-icons/md";

export default function AchievementSection() {
  const achievements = [
    {
      title: "PLEASE Hack",
      award: "National Winner",
      event: "Please Project by UNOPS",
      location: "Colombo, Sri Lanka",
      date: "April, 2025",
      image: "/league-leader.svg",
    },
    {
      title: "National Hackathon",
      award: "Champion",
      event: "HackNSU Season 5",
      location: "North South University",
      date: "March, 2025",
      image: "/trophy.svg",
    },
    {
      title: "AI & API Hackathon",
      award: "Champion",
      event: "KUET CSE BitFest 2025",
      location: "KUET",
      date: "January, 2025",
      image: "/trophy.svg",
    },
    {
      title: "Project Shocase",
      award: "1st Runner Up",
      event: "KUET CSE BitFest 2025",
      location: "KUET",
      date: "January, 2025",
      image: "/medal.svg",
    },
    {
      title: "Data Hackathon",
      award: "Champion",
      event: "4th DIU Data Science Summit 2024",
      location: "Daffodil Intl. University",
      date: "December, 2024",
      image: "/trophy.svg",
    },
    {
      title: "Dhaka Divisional Hackathon",
      award: "Champion",
      event: "Technocrats V.2",
      location: "IUBAT",
      date: "December, 2024",
      image: "/trophy.svg",
    },
    {
      title: "National Hackathon",
      award: "1st Runner Up",
      event: "EWU Robofest 2024",
      location: "East West University",
      date: "November, 2024",
      image: "/medal.svg",
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const displayedAchievements = showAll
    ? achievements
    : achievements.slice(0, 4);

  return (
    <div className="relative min-h-fit xl:min-h-screen bg-white flex flex-col items-center justify-center py-20 px-4 sm:px-6 sm:py-24 lg:px-8 lg:py-32 z-0">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center text-black mb-6">
        Achievements <span className="text-black opacity-75">So Far</span>
      </h1>
      <div className="w-full flex flex-row flex-wrap gap-4 justify-center px-4 sm:px-6 lg:px-20">
        {displayedAchievements.map((achievement, index) => (
          <div
            key={index}
            className="bg-black w-80 p-4 shadow-md shadow-emerald-400 flex flex-col justify-between"
          >
            <div className="flex flex-row justify-between mb-2">
              <div>
                <h2 className="text-white text-lg font-bold">
                  {achievement.title}
                </h2>
                <p className="text-yellow-300 text-lg">{achievement.award}</p>
                <p className="text-gray-300 text-base">{achievement.event}</p>
              </div>
              <img src={achievement.image} alt="Trophy" className="w-16 h-16" />
            </div>
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-1">
                <MdLocationOn className="text-gray-400" />
                <p className="text-gray-400 text-xs">{achievement.location}</p>
              </div>
              <div className="flex flex-row items-center gap-1">
                <MdEvent className="text-gray-400" />
                <p className="text-gray-400 text-xs">{achievement.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {!showAll && achievements.length > 4 ? (
        <button
          onClick={() => setShowAll(true)}
          className="mt-8 px-6 py-2 bg-black text-white hover:bg-gray-900 transition-colors shadow-sm shadow-emerald-400 duration-300"
        >
          See More
        </button>
      ) : (
        <button
          onClick={() => setShowAll(false)}
          className="mt-8 px-6 py-2 bg-black text-white hover:bg-gray-900 transition-colors shadow-sm shadow-emerald-400 duration-300"
        >
          See Less
        </button>
      )}
    </div>
  );
}
