"use client";
import React from "react";
import FloppyDiskCarousel from "./FloppyDiskCarousel";

export default function ProjectsSection() {
  const projects = [
    {
      projectType: "Web Development",
      projectName: "Portfolio Website",
      projectDescription:
        "A personal portfolio website showcasing my projects and skills. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed perferendis a aliquam similique dicta quae est ut atque, commodi eius perspiciatis nam nihil vero facere quo assumenda dignissimos cum consequatur?",
    },
    {
      projectType: "Mobile App",
      projectName: "Fitness Tracker",
      projectDescription:
        "A mobile app to track fitness activities and goals. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed perferendis a aliquam similique dicta quae est ut atque, commodi eius perspiciatis nam nihil vero facere quo assumenda dignissimos cum consequatur?",
    },
    {
      projectType: "Machine Learning",
      projectName: "Image Classifier",
      projectDescription:
        "A machine learning model to classify images into categories. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed perferendis a aliquam similique dicta quae est ut atque, commodi eius perspiciatis nam nihil vero facere quo assumenda dignissimos cum consequatur?",
    },
    {
      projectType: "App Development",
      projectName: "Chatbot",
      projectDescription:
        "A chatbot for customer support. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed perferendis a aliquam similique dicta quae est ut atque, commodi eius perspiciatis nam nihil vero facere quo assumenda dignissimos cum consequatur?",
    },
    {
      projectType: "Web Development",
      projectName: "E-Commerce Website",
      projectDescription:
        "An e-commerce website for selling products. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed perferendis a aliquam similique dicta quae est ut atque, commodi eius perspiciatis nam nihil vero facere quo assumenda dignissimos cum consequatur?",
    },
    {
      projectType: "Mobile App",
      projectName: "Social Media App",
      projectDescription:
        "A social media app for connecting with friends. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed perferendis a aliquam similique dicta quae est ut atque, commodi eius perspiciatis nam nihil vero facere quo assumenda dignissimos cum consequatur?",
    },
    {
      projectType: "Data Visualization",
      projectName: "Sales Dashboard",
      projectDescription:
        "A dashboard for visualizing sales data using interactive charts. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed perferendis a aliquam similique dicta quae est ut atque, commodi eius perspiciatis nam nihil vero facere quo assumenda dignissimos cum consequatur?",
    },
    {
      projectType: "Game Development",
      projectName: "2D Platformer Game",
      projectDescription:
        "A 2D platformer game with engaging gameplay mechanics. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed perferendis a aliquam similique dicta quae est ut atque, commodi eius perspiciatis nam nihil vero facere quo assumenda dignissimos cum consequatur?",
    },
    {
      projectType: "Cloud Computing",
      projectName: "Cloud Storage System",
      projectDescription:
        "A scalable cloud storage system for managing files securely. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed perferendis a aliquam similique dicta quae est ut atque, commodi eius perspiciatis nam nihil vero facere quo assumenda dignissimos cum consequatur?",
    },
    {
      projectType: "Cybersecurity",
      projectName: "Secure Login System",
      projectDescription:
        "A secure login system with two-factor authentication. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed perferendis a aliquam similique dicta quae est ut atque, commodi eius perspiciatis nam nihil vero facere quo assumenda dignissimos cum consequatur?",
    },
    {
      projectType: "Blockchain",
      projectName: "Cryptocurrency Wallet",
      projectDescription:
        "A cryptocurrency wallet for storing and transferring digital currencies. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed perferendis a aliquam similique dicta quae est ut atque, commodi eius perspiciatis nam nihil vero facere quo assumenda dignissimos cum consequatur?",
    },
    {
      projectType: "AR/VR",
      projectName: "Virtual Reality Tour",
      projectDescription:
        "A virtual reality app for exploring tourist destinations. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed perferendis a aliquam similique dicta quae est ut atque, commodi eius perspiciatis nam nihil vero facere quo assumenda dignissimos cum consequatur?",
    },
    {
      projectType: "IoT",
      projectName: "Smart Home System",
      projectDescription:
        "An IoT-enabled smart home system for controlling appliances remotely. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed perferendis a aliquam similique dicta quae est ut atque, commodi eius perspiciatis nam nihil vero facere quo assumenda dignissimos cum consequatur?",
    },
    {
      projectType: "Artificial Intelligence",
      projectName: "Recommendation System",
      projectDescription:
        "An AI-based recommendation system for personalized content delivery. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed perferendis a aliquam similique dicta quae est ut atque, commodi eius perspiciatis nam nihil vero facere quo assumenda dignissimos cum consequatur?",
    },
  ];

  return (
    <div className="min-w-full flex flex-col items-center">
      <FloppyDiskCarousel cardsData={projects} />
    </div>
  );
}
