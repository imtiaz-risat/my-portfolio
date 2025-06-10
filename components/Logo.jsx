import { motion } from "framer-motion";

export default function Logo() {
  return (
    <div className="relative group">
      <motion.svg
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 360 360"
        className="h-12 w-12 relative z-10 transition-all duration-500 ease-in-out group-hover:scale-105"
      >
        <defs>
          <style>{`
            .cls-1 {
              fill: #f3f3f3;
              transition: all 0.5s ease;
            }
            .group:hover .cls-1 {
              fill: #34D399;
            }
          `}</style>
        </defs>
        <path
          className="cls-1"
          d="m189.87,21.75h148.12v167.26h-58.67c14.01,5.21,27.01,11.48,37.46,22.26,13.94,14.36,21.56,31.4,21.66,51.5.13,24.79.03,49.59.03,74.97h-148.61V21.75Z"
        />
        <path
          className="cls-1"
          d="m170.58,170.87v166.1c-.59.46-.98,1.04-1.37,1.04-29.13-.34-58.52,1.55-87.33-1.71-31.93-3.6-57.51-31.53-59.38-63.54-1.97-33.67-.44-67.55-.44-101.89h148.53Z"
        />
        <path className="cls-1" d="m170.55,22.16v129.02H22.23V22.16h148.32Z" />
      </motion.svg>

      {/* Holographic overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-gradient-to-br from-transparent via-transparent to-white-500/30 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out group-hover:translate-y-[100%] rotate-[-45deg]" />
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
        <div className="absolute inset-0 blur-md bg-cyan-500/50" />
      </div>
    </div>
  );
}
