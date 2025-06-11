"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Github, Globe, X } from "lucide-react";
import Image from "next/image";
import NavMenu from "@/components/NavMenu";
import { projects, categories } from "@/data/projects";
import Toast from "@/components/Toast";

function ProjectModal({ project, onClose, onShowToast }) {
  const handleButtonClick = (type) => {
    onShowToast(`${type} link will be available soon!`);
  };

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
            <button
              onClick={() => handleButtonClick("Live Demo")}
              className="flex-1 flex items-center justify-center gap-2 bg-white text-black px-6 py-3 hover:bg-emerald-400 transition-colors"
            >
              <Globe size={20} />
              <span>Live Demo</span>
            </button>
            <button
              onClick={() => handleButtonClick("Source Code")}
              className="flex-1 flex items-center justify-center gap-2 bg-white text-black px-6 py-3 hover:bg-emerald-400 transition-colors"
            >
              <Github size={20} />
              <span>Source Code</span>
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, onClick, onShowToast }) {
  const handleButtonClick = (type, e) => {
    e.stopPropagation();
    onShowToast(`${type} link will be available soon!`);
  };

  return (
    <motion.div
      className="bg-white/5 h-full backdrop-blur-sm shadow-sm shadow-emerald-400 overflow-hidden border border-emerald-500/20 hover:border-emerald-500/40 transition-colors cursor-pointer"
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
        </div>

        <h3 className="text-xl font-bold mb-2">{project.projectName}</h3>
        <p className="text-gray-400 text-sm mb-6 line-clamp-2">
          {project.description}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={(e) => handleButtonClick("Live Demo", e)}
            className="flex-1 flex items-center justify-center gap-2 bg-white text-black px-4 py-2 hover:bg-emerald-400 transition-colors"
          >
            <Globe size={16} />
            <span>Live Demo</span>
          </button>
          <button
            onClick={(e) => handleButtonClick("Source Code", e)}
            className="flex-1 flex items-center justify-center gap-2 bg-white text-black px-4 py-2 hover:bg-emerald-400 transition-colors"
          >
            <Github size={16} />
            <span>Source Code</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleShowToast = (message) => {
    setToastMessage(message);
    setShowToast(true);
  };

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.projectType === selectedCategory;
    const matchesSearch =
      project.projectName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.projectType.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <div className="min-h-screen bg-black text-white py-20 px-4">
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
                onShowToast={handleShowToast}
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
              onShowToast={handleShowToast}
            />
          )}
        </AnimatePresence>
      </div>
      <Toast
        message={toastMessage}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </>
  );
}

export default ProjectsPage;
