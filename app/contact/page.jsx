"use client";
import React from "react";
import { RiLinkedinBoxLine, RiMailAiLine, RiPhoneLine } from "react-icons/ri";

function ContactPage() {
  const handleEmailClick = () => {
    window.location.href = "mailto:ahababimtiaz@iut-dhaka.edu";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+8801840141094";
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/imtiazrisat/", "_blank");
  };

  return (
    <div className="min-h-screen bg-black text-white p-8 flex flex-col items-center justify-between">
      {/* Main Content Area Container with border */}
      <div className="w-full max-w-7xl my-12 flex-grow flex flex-col items-center justify-center rounded-3xl border border-emerald-800 p-24 relative overflow-hidden">
        {/* Ripple Effect Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-black/20">
          <div className="absolute aspect-square inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent animate-ripple border border-emerald-500/20 rounded-full"></div>
          <div className="absolute aspect-square inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-400/10 via-transparent to-transparent animate-ripple-delayed border border-emerald-400/20 rounded-full"></div>
          <div className="absolute aspect-square inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-300/10 via-transparent to-transparent animate-ripple-delayed-2 border border-emerald-300/20 rounded-full"></div>
        </div>

        <p className="hidden lg:block text-lg uppercase trtext-xs md:acking-widest mb-4 relative z-10">
          GOT A PROJECT IN MIND?
        </p>
        <h2 className="text-5xl sm:text-6xl md:text-80 text-emerald-500 font-bold mb-12 relative z-10">
          LET'S CONNECT -
        </h2>
        <div className="flex flex-row gap-4 w-full justify-center relative z-10">
          <button
            onClick={handleEmailClick}
            className="border border-white flex-grow aspect-square rounded-full flex items-center justify-center text-xs md:text-sm sm:text-base lg:text-lg hover:bg-emerald-400 hover:border-emerald-400 hover:text-black transition-colors duration-200 min-w-[80px] max-w-[300px] group"
          >
            <span className="group-hover:hidden px-1">WRITE A MESSAGE</span>
            <span className="hidden group-hover:block text-2xl">
              <RiMailAiLine size={40} />
            </span>
          </button>
          <button
            onClick={handlePhoneClick}
            className="border border-white flex-grow rounded-full flex items-center justify-center text-xs md:text-sm sm:text-base lg:text-lg hover:bg-emerald-400 hover:border-emerald-400 hover:text-black transition-colors duration-200 min-w-[80px] max-w-[300px] group"
          >
            <span className="group-hover:hidden px-1">MAKE A CALL</span>
            <span className="hidden group-hover:block text-2xl">
              <RiPhoneLine size={40} />
            </span>
          </button>
          <button
            onClick={handleLinkedInClick}
            className="border border-white flex-grow aspect-square rounded-full flex items-center justify-center text-xs md:text-sm sm:text-base lg:text-lg hover:bg-emerald-400 hover:border-emerald-400 hover:text-black transition-colors duration-200 min-w-[80px] max-w-[300px] group"
          >
            <span className="group-hover:hidden px-1">GET IN TOUCH</span>
            <span className="hidden group-hover:block text-2xl">
              <RiLinkedinBoxLine size={40} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
