"use client";
import React from "react";
import FloppyDiskCarousel from "./FloppyDiskCarousel";

export default function ProjectsSection() {
  const projects = [
    {
      projectType: "Web Development",
      projectName: "Portfolio Website",
      techStack: ["html.svg", "css.svg", "javascript.svg"],
    },
    {
      projectType: "Mobile App",
      projectName: "Fitness Tracker",
      techStack: ["react.svg", "nodejs.svg", "mongodb.svg"],
    },
    {
      projectType: "Machine Learning",
      projectName: "Image Classifier",
      techStack: ["python.svg", "tensorflow.svg", "numpy.svg"],
    },
    {
      projectType: "App Development",
      projectName: "Chatbot",
      techStack: ["python.svg", "dialogflow.svg", "flask.svg"],
    },
    {
      projectType: "Web Development",
      projectName: "E-Commerce Website",
      techStack: ["html.svg", "css.svg", "javascript.svg", "shopify.svg"],
    },
    {
      projectType: "Mobile App",
      projectName: "Social Media App",
      techStack: ["react-native.svg", "firebase.svg", "redux.svg"],
    },
    {
      projectType: "Data Visualization",
      projectName: "Sales Dashboard",
      techStack: ["d3.svg", "chartjs.svg", "plotly.svg"],
    },
    {
      projectType: "Game Development",
      projectName: "2D Platformer Game",
      techStack: ["unity.svg", "csharp.svg", "blender.svg"],
    },
    {
      projectType: "Cloud Computing",
      projectName: "Cloud Storage System",
      techStack: ["aws.svg", "docker.svg", "kubernetes.svg"],
    },
    {
      projectType: "Cybersecurity",
      projectName: "Secure Login System",
      techStack: ["java.svg", "spring.svg", "oauth.svg"],
    },
    {
      projectType: "Blockchain",
      projectName: "Cryptocurrency Wallet",
      techStack: ["bitcoin.svg", "ethereum.svg", "solidity.svg"],
    },
    {
      projectType: "AR/VR",
      projectName: "Virtual Reality Tour",
      techStack: ["unity.svg", "oculus.svg", "csharp.svg"],
    },
    {
      projectType: "IoT",
      projectName: "Smart Home System",
      techStack: ["arduino.svg", "mqtt.svg", "raspberrypi.svg"],
    },
  ];

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
