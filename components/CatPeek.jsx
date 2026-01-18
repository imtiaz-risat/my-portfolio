"use client";

import Lottie from "lottie-react";
import animationData from "@/public/lottie/cat-peek.json";
import { cn } from "@/lib/utils";

export default function CatPeek({ className, onClick }) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "fixed -bottom-2.5 right-0 w-32 z-20 transition-transform hover:scale-105",
        onClick ? "cursor-pointer pointer-events-auto" : "pointer-events-none",
        className,
      )}
    >
      <Lottie animationData={animationData} loop autoplay />
    </div>
  );
}
