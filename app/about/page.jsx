"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Download } from "lucide-react";
import Image from "next/image";
import NavMenu from "@/components/NavMenu";
import GridPattern from "@/components/GridPattern";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white z-0">
      <div className="absolute inset-0 opacity-25">
        <GridPattern />
      </div>

      <motion.div
        className="container mx-auto max-w-6xl relative z-10"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {/* Hero Section */}
        {/* <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-emerald-500/10" />
        <motion.div
          className="container mx-auto px-4 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-emerald-400 text-center mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            About Me
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-white/75 max-w-2xl mx-auto text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            A passionate developer crafting digital experiences with modern
            technologies
          </motion.p>
        </motion.div>
      </section> */}

        {/* Profile Section */}
        <section className="py-20 px-4 min-h-screen flex items-center justify-center">
          <motion.div
            className="container mx-auto max-w-6xl"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-12"
            >
              About Me
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Profile Image */}
              <motion.div
                variants={fadeInUp}
                className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden mx-auto"
              >
                <Image
                  src="/imtiaz-risat.webp"
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Profile Content */}
              <motion.div variants={fadeInUp} className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Hello, this is{" "}
                  <span className="text-emerald-400">Imtiaz Risat</span>
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  A <span className="text-emerald-400">software developer</span>{" "}
                  specialized in{" "}
                  <span className="text-emerald-400">
                    full-stack development
                  </span>{" "}
                  and <span className="text-emerald-400">AI/ML</span>. I am
                  passionate about building{" "}
                  <span className="text-emerald-400">product-focused</span> apps
                  with clean, functional interfaces.
                </p>

                <div className="flex flex-wrap gap-4">
                  {/* TO DO: Need to update the CV file */}
                  <motion.a
                    href="/Ahabab-Imtiaz-Risat-CV.pdf"
                    download="Ahabab-Imtiaz-Risat-CV.pdf"
                    className="flex items-center gap-2 bg-white text-black px-6 py-3 hover:bg-emerald-400 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Download size={20} />
                    <span>Download CV</span>
                  </motion.a>
                  <motion.a
                    href="mailto:ahababimtiaz@iut-dhaka.edu"
                    className="flex items-center gap-2 bg-white/10 px-6 py-3 hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail size={20} />
                    <span>Write a mail</span>
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Combined Journey Section */}
        <section className="py-32 px-4">
          <motion.div
            className="container mx-auto max-w-6xl"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-emerald-400 text-center mb-4 sm:mb-12"
            >
              My Journey{" "}
              <span className="text-white font-bold opacity-75">so far</span>
            </motion.h1>

            {/* Experience Section */}
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-8">
                <motion.div
                  variants={fadeInUp}
                  className="px-4 py-2 bg-white/10 text-sm font-semibold"
                >
                  EXPERIENCE
                </motion.div>
              </div>
              <div className="space-y-12">
                {[
                  {
                    icon: "/vivasoftltd-logo.jpg",
                    title: "Associate Software Engineer",
                    company: "Vivasoft Ltd",
                    date: "Oct 2025 - Jan 2026",
                    description:
                      "Worked on speech and AI systems including ASR, TTS, and real-time voice agents. Built and optimized FastAPI-based services for transcription and speech synthesis, conducted extensive R&D on multilingual TTS and ASR models, and prepared large-scale datasets for model training. Developed evaluation pipelines, automated GPU-based training workflows, and deployed services on cloud infrastructure. Also contributed to AI product development by building a Gemini Live–powered features in the app.",
                  },
                  {
                    icon: "/TAN-logo.webp",
                    title: "Jr Full-Stack Developer",
                    company: "The Attention Network",
                    date: "June 2025 - Sep 2025",
                    description:
                      "Collaborated in developing the event ticketing platform by building end-to-end features, integrating payment systems (SSLCommerz), managing user registrations and event workflows, and optimizing performance for secure, scalable ticket sales. Currently working on the community platform, enhancing user engagement and interaction features.",
                  },
                  {
                    icon: "/fiverr-logo.webp",
                    title: "Freelance Developer",
                    company: "Self-employed",
                    date: "Oct 2024 - Present",
                    description:
                      "Successfully completed 5+ projects as a Level 1 seller on Fiverr, delivering high-quality solutions to diverse clients.",
                  },
                ].map((exp, index) => (
                  <React.Fragment key={index}>
                    <motion.div
                      variants={fadeInUp}
                      className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-8 items-start"
                    >
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
                        <Image
                          src={exp.icon}
                          alt={exp.company}
                          fill
                          className="object-contain rounded-3xl"
                        />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-2xl font-bold">{exp.title}</h3>
                        <p className="text-emerald-400 text-lg mb-1">
                          {exp.company}
                        </p>
                        <p className="text-gray-400 text-sm mb-4">{exp.date}</p>
                        <p className="text-lg text-gray-300 leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </motion.div>
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <motion.div
                  variants={fadeInUp}
                  className="px-4 py-2 bg-white/10 text-sm font-semibold"
                >
                  EDUCATION
                </motion.div>
              </div>
              <div className="space-y-12">
                {[
                  {
                    icon: "/iut-logo-white.webp", // You'll need to add this icon
                    title:
                      "Bachelor of Computer Science in Software Engineering",
                    company: "Islamic University of Technology",
                    date: "Aug 2022 - Present",
                    description:
                      "Pursuing a comprehensive education in software engineering with a focus on modern development practices, algorithms, and software architecture. Actively participating in various technical projects and competitions.",
                  },
                ].map((edu, index) => (
                  <React.Fragment key={index}>
                    <motion.div
                      variants={fadeInUp}
                      className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-8 items-start"
                    >
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
                        <Image
                          src={edu.icon}
                          alt={edu.company}
                          fill
                          className="object-contain rounded-3xl"
                        />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-2xl font-bold">{edu.title}</h3>
                        <p className="text-emerald-400 text-lg mb-1">
                          {edu.company}
                        </p>
                        <p className="text-gray-400 text-sm mb-4">{edu.date}</p>
                        <p className="text-lg text-gray-300 leading-relaxed">
                          {edu.description}
                        </p>
                      </div>
                    </motion.div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </motion.div>
        </section>
      </motion.div>
    </div>
  );
}

export default AboutPage;
