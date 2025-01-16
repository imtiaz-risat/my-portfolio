import React, { useState } from "react";
import { motion } from "framer-motion";
import FloppyDiskCard from "./FloppyDiskCard";
import { ArrowLeft, ArrowRight } from "lucide-react";

const FloppyDiskCarousel = ({ cardsData }) => {
  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(cardsData.length / 2)
  );

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cardsData.length) % cardsData.length
    );
  };

  const calculatePosition = (index) => {
    const totalCards = cardsData.length;
    const half = Math.floor(totalCards / 2);
    const offset =
      ((index - currentIndex + half + totalCards) % totalCards) - half;
    const baseX = offset * 200;
    const baseY = offset % 2 === 0 ? -10 : 10;
    const scale = index === currentIndex ? 1 : 0.75;
    const rotate = index === currentIndex ? 0 : offset % 2 === 0 ? -2.5 : 2.5;
    // currenIndex Card zIndex = 10 and other cards zIndex = 0 and right-most and left-most Card zIndex = -10
    const zIndex = index === currentIndex ? 10 : offset >= half - 1 ? -10 : 0;
    return { x: baseX, y: baseY, scale, rotate, zIndex };
  };

  return (
    <div className="min-w-full relative flex flex-col justify-center items-center">
      <div className="flex justify-center items-center space-x-4 min-w-full h-[50vh] overflow-x-hidden">
        {cardsData.map((card, index) => {
          const { x, y, scale, rotate, zIndex } = calculatePosition(index);
          return (
            <motion.div
              key={index}
              className="carousel-card"
              animate={{ x, y, scale, rotate, zIndex }}
              transition={{ type: "spring", stiffness: 75, damping: 20 }}
              style={{
                position: "absolute",
                display: "block",
                zIndex,
              }}
            >
              <FloppyDiskCard
                key={index}
                projectType={card.projectType}
                projectName={card.projectName}
                projectDescription={card.projectDescription}
                projectImage={card.projectImage}
                techStack={card.techStack}
                currentIndex={currentIndex}
                index={index}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Arrow Buttons for Navigation */}
      <div className="relative flex justify-center mt-10 space-x-4">
        <button
          className="bg-white text-black w-12 h-12 flex justify-center items-center hover:bg-gray-200 transition-colors"
          onClick={handlePrevious}
        >
          <motion.span
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ArrowLeft />
          </motion.span>
        </button>
        <button
          className="bg-white text-black w-12 h-12 flex justify-center items-center hover:bg-gray-200 transition-colors"
          onClick={handleNext}
        >
          <motion.span
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ArrowRight />
          </motion.span>
        </button>
      </div>
    </div>
  );
};

export default FloppyDiskCarousel;
