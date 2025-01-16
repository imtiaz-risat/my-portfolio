"use client";

import { motion, useMotionValue, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Grid block component with hover effect
function GridBlock() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timer;
    if (isHovered) {
      setIsVisible(true);
      timer = setTimeout(() => {
        setIsVisible(false);
      }, 4000);
    } else {
      setIsVisible(false);
    }
    return () => clearTimeout(timer);
  }, [isHovered]);

  return (
    <div
      className="border border-[rgba(255,255,255,0.05)] relative"
      style={{ width: "50px", height: "50px", flexShrink: 0 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            key="blue-overlay"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.7, 1],
              transition: { duration: 0.75, ease: "easeIn" },
            }}
            exit={{
              opacity: [1, 0.9, 0.7, 0.5, 0.3, 0.1, 0],
              transition: { duration: 1.75, ease: "easeOut" },
            }}
            className="absolute inset-0 bg-emerald-500"
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default function AnimatedHero() {
  const containerRef = useRef(null);
  const [gridSize, setGridSize] = useState({ rows: 0, cols: 0 });

  useEffect(() => {
    const updateGridSize = () => {
      if (containerRef.current) {
        const rows = Math.ceil(window.innerHeight / 50);
        const cols = Math.ceil(window.innerWidth / 50);
        setGridSize({ rows, cols });
      }
    };

    updateGridSize();
    window.addEventListener("resize", updateGridSize);
    return () => window.removeEventListener("resize", updateGridSize);
  }, []);

  // Generate grid blocks
  const renderGrid = () => {
    const grid = [];

    for (let i = 0; i < gridSize.rows; i++) {
      const row = [];
      for (let j = 0; j < gridSize.cols; j++) {
        row.push(<GridBlock key={`${i}-${j}`} />);
      }
      grid.push(
        <div key={i} className="flex">
          {row}
        </div>
      );
    }

    return grid;
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-black"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 flex flex-col">{renderGrid()}</div>
      </div>
    </div>
  );
}
