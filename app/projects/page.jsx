"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Github, Globe, X } from "lucide-react";
import Image from "next/image";
import NavMenu from "@/components/NavMenu";

const projects = [
  {
    projectType: "Web Development",
    projectName: "Portfolio Website",
    projectImage: "/demo-project1.jpg",
    techStack: ["javascript", "react", "nextjs"],
    techStackDetails: `Frontend:
• Next.js 13+ with App Router
• React for UI components
• Tailwind CSS for styling
• Framer Motion for animations
• Lucide Icons for icons

Backend:
• Next.js API Routes
• Server-side rendering
• Static site generation

Deployment:
• Vercel for hosting
• GitHub for version control`,
    liveDemo: "https://your-portfolio.com",
    sourceCode: "https://github.com/yourusername/portfolio",
    description: "A modern portfolio website built with Next.js and React",
    fullDescription: `A personal portfolio website showcasing my work and skills. Built with Next.js 13+ and React, featuring:
    • Modern, responsive design with smooth animations
    • Server-side rendering for optimal performance
    • Dark mode with emerald accent theme
    • Interactive project showcase
    • Contact form with email integration
    • SEO optimized with metadata
    • Optimized images and assets
    • Custom animations using Framer Motion`,
    features: [
      "Responsive Design",
      "Dark Mode",
      "Server-Side Rendering",
      "SEO Optimization",
      "Contact Form",
      "Project Showcase",
    ],
    challenges:
      "Implementing smooth animations while maintaining performance, and creating a unique design that stands out while remaining professional.",
    solution:
      "Used Framer Motion for optimized animations, implemented lazy loading for images, and created a custom design system with emerald accents.",
  },
  {
    projectType: "Mobile App",
    projectName: "Fitness Tracker",
    projectImage: "/demo-project2.jpg",
    techStack: ["react", "nodejs", "mongodb"],
    techStackDetails: `Frontend:
• React Native for cross-platform development
• Redux for state management
• React Navigation for routing
• Native Base for UI components

Backend:
• Node.js with Express
• MongoDB for database
• WebSocket for real-time updates
• JWT for authentication

Mobile Features:
• Push notifications
• Offline storage
• Camera integration
• Location services`,
    liveDemo: "https://fitness-tracker.com",
    sourceCode: "https://github.com/yourusername/fitness-tracker",
    description: "A mobile app for tracking fitness goals and progress",
    fullDescription: `A comprehensive fitness tracking application that helps users monitor their health and fitness journey. Features include:
    • Workout tracking and planning
    • Nutrition monitoring and meal planning
    • Progress visualization with charts
    • Social features for community support
    • Integration with health devices
    • Customizable fitness goals
    • Offline functionality
    • Push notifications for reminders`,
    features: [
      "Workout Tracking",
      "Nutrition Monitoring",
      "Progress Charts",
      "Social Features",
      "Health Device Integration",
      "Offline Support",
    ],
    challenges:
      "Managing real-time data synchronization, implementing complex workout algorithms, and ensuring smooth performance with offline capabilities.",
    solution:
      "Implemented a robust caching system, used WebSocket for real-time updates, and created a flexible workout algorithm system.",
  },
  {
    projectType: "Web Development",
    projectName: "E-Commerce Website",
    projectImage: "/demo-project4.jpg",
    techStack: ["javascript", "react", "nodejs", "mongodb"],
    techStackDetails: `Frontend:
• React with TypeScript
• Redux Toolkit for state management
• Material-UI for components
• Stripe for payments

Backend:
• Node.js with Express
• MongoDB with Mongoose
• JWT authentication
• WebSocket for real-time updates

Infrastructure:
• AWS for hosting
• Docker for containerization
• CI/CD with GitHub Actions
• Redis for caching`,
    liveDemo: "https://ecommerce-demo.com",
    sourceCode: "https://github.com/yourusername/ecommerce",
    description: "Full-stack e-commerce platform with modern features",
    fullDescription: `A complete e-commerce solution with advanced features and modern architecture. Key features include:
    • Product catalog with advanced filtering
    • Secure payment processing
    • User authentication and authorization
    • Shopping cart and wishlist
    • Order tracking and management
    • Admin dashboard
    • Real-time inventory management
    • Customer reviews and ratings
    • Responsive design for all devices`,
    features: [
      "Product Catalog",
      "Secure Payments",
      "User Authentication",
      "Shopping Cart",
      "Order Management",
      "Admin Dashboard",
    ],
    challenges:
      "Implementing secure payment processing, managing real-time inventory, and creating a scalable architecture for handling multiple concurrent users.",
    solution:
      "Used Stripe for secure payments, implemented WebSocket for real-time updates, and designed a microservices architecture for scalability.",
  },
  {
    projectType: "Mobile App",
    projectName: "Social Media App",
    projectImage: "/demo-project5.jpg",
    techStack: ["react-native", "firebase", "redux"],
    techStackDetails: `Frontend:
• React Native with TypeScript
• Redux for state management
• React Navigation
• Custom UI components

Backend:
• Firebase Authentication
• Cloud Firestore for database
• Firebase Storage for media
• Cloud Functions for backend logic

Features:
• Real-time messaging
• Push notifications
• Media compression
• Offline support
• Location services`,
    liveDemo: "https://social-app.com",
    sourceCode: "https://github.com/yourusername/social-app",
    description: "A social media application built with React Native",
    fullDescription: `A feature-rich social media platform built with React Native for cross-platform compatibility. Features include:
    • Real-time messaging and notifications
    • Photo and video sharing
    • Story features with filters
    • User profiles and friend system
    • Content feed with infinite scroll
    • Location-based features
    • Privacy settings
    • Push notifications
    • Offline mode support`,
    features: [
      "Real-time Messaging",
      "Media Sharing",
      "Story Features",
      "User Profiles",
      "Location Services",
      "Privacy Controls",
    ],
    challenges:
      "Managing real-time data synchronization, implementing efficient media handling, and ensuring smooth performance across different devices.",
    solution:
      "Used Firebase for real-time features, implemented efficient media compression, and created a robust caching system for offline support.",
  },
];

const categories = ["All", "Web Development", "Mobile App"];

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-black border border-emerald-500/20 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-emerald-400 transition-colors"
        >
          <X size={24} />
        </button>

        {/* Project Image */}
        <div className="relative w-full h-64">
          <Image
            src={project.projectImage}
            alt={project.projectName}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <span className="text-emerald-400">{project.projectType}</span>
            <div className="flex gap-2">
              {project.techStack.map((tech, index) => (
                <div
                  key={index}
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center"
                >
                  <Image
                    src={`/techStacks/${tech}.svg`}
                    alt={tech}
                    width={20}
                    height={20}
                  />
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-4">{project.projectName}</h2>

          {/* Description */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3 text-emerald-400">
              Description
            </h3>
            <p className="text-gray-300 whitespace-pre-line">
              {project.fullDescription}
            </p>
          </div>

          {/* Features */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3 text-emerald-400">
              Key Features
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Details */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3 text-emerald-400">
              Tech Stack
            </h3>
            <p className="text-gray-300 whitespace-pre-line">
              {project.techStackDetails}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-white text-black px-6 py-3 hover:bg-emerald-400 transition-colors"
            >
              <Globe size={20} />
              <span>Live Demo</span>
            </a>
            <a
              href={project.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-white text-black px-6 py-3 hover:bg-emerald-400 transition-colors"
            >
              <Github size={20} />
              <span>Source Code</span>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, onClick }) {
  return (
    <motion.div
      className="bg-white/5 backdrop-blur-sm shadow-sm shadow-emerald-400 overflow-hidden border border-emerald-500/20 hover:border-emerald-500/40 transition-colors cursor-pointer"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
    >
      {/* Project Image */}
      <div className="relative w-full h-auto aspect-[16/9]">
        <Image
          src={project.projectImage}
          alt={project.projectName}
          fill
          className="object-cover"
        />
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-emerald-400">
            {project.projectType}
          </span>
          <div className="flex gap-2">
            {project.techStack.map((tech, index) => (
              <div
                key={index}
                className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center"
              >
                <Image
                  src={`/techStacks/${tech}.svg`}
                  alt={tech}
                  width={16}
                  height={16}
                />
              </div>
            ))}
          </div>
        </div>

        <h3 className="text-xl font-bold mb-2">{project.projectName}</h3>
        <p className="text-gray-400 text-sm mb-6">{project.description}</p>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-white text-black px-4 py-2 hover:bg-emerald-400 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <Globe size={16} />
            <span>Live Demo</span>
          </a>
          <a
            href={project.sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-white text-black px-4 py-2 hover:bg-emerald-400 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={16} />
            <span>Source Code</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.projectType === selectedCategory;
    const matchesSearch =
      project.projectName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.projectType.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <NavMenu className="z-50" />
      {/* Header Section */}
      <motion.div
        className="max-w-7xl mx-auto mb-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-emerald-400 text-center">
          Projects{" "}
          <span className="text-white font-bold opacity-75">
            I've Worked On
          </span>
        </h1>
      </motion.div>

      {/* Search and Filter Section */}
      <motion.div
        className="max-w-7xl mx-auto mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-col items-center gap-4">
          {/* Category Filter */}
          <div className="flex gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 transition-colors ${
                  selectedCategory === category
                    ? "bg-emerald-500 text-black"
                    : "bg-white/10 hover:bg-white/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
          >
            <ProjectCard
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div
          className="text-center py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-2">No projects found</h3>
          <p className="text-gray-400">
            Try adjusting your search or filter criteria
          </p>
        </motion.div>
      )}

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default ProjectsPage;
