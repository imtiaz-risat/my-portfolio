"use client";
import React from "react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WelcomeDiv() {
  const [isVisible, setIsVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    // Get the current scroll position when component mounts
    setScrollPosition(window.scrollY);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="absolute inset-0 top-0 left-0 z-50 bg-emerald-500 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
          style={{ top: scrollPosition }}
          initial={{ y: "0%" }}
          animate={{ y: ["0%", "-100%"] }}
          transition={{
            duration: 0.25,
            delay: 1,
            spring: { stiffness: 100, damping: 10 },
          }}
          onAnimationComplete={() => setIsVisible(false)}
        >
          <motion.h1
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            Welcome
          </motion.h1>
          <motion.h1
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            to
          </motion.h1>
          <motion.h1
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            My
          </motion.h1>
          <motion.h1
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.3, delay: 0.7 }}
          >
            Portfolio
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
