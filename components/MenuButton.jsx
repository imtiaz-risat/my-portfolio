"use client";
import React, { useState } from "react";

export default function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className="flex flex-col justify-center items-end w-8 h-8 cursor-pointer"
      onClick={toggleMenu}
    >
      <div
        className={`h-1 w-9 bg-white transform transition-all duration-400 ${
          isOpen ? "w-5 rotate-45 translate-y-2" : ""
        }`}
      ></div>

      <div
        className={`h-1 w-4 mt-3 bg-white transform transition-all duration-400 ${
          isOpen ? "-rotate-45 -translate-y-2 w-9" : "w-4"
        }`}
      ></div>
    </div>
  );
}
