"use client";
import React from "react";
import FloppyDiskCarousel from "./FloppyDiskCarousel";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <div className="relative min-h-fit bg-black min-w-full flex flex-col items-center justify-center px-4 py-10 lg:py-16 z-0">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white text-center mb-4 sm:mb-8">
        Projects{" "}
        <span className="text-white font-bold opacity-75">I've Worked On</span>
      </h1>
      <div className="min-w-full flex flex-col items-center">
        <FloppyDiskCarousel cardsData={projects} />
      </div>
    </div>
  );
}
