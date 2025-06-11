import React from "react";
import { RiLinkedinBoxLine, RiMailAiLine, RiPhoneLine } from "react-icons/ri";

function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8 flex flex-col items-center justify-between">
      {/* Main Content Area Container with border */}
      <div className="w-full max-w-7xl my-12 flex-grow flex flex-col items-center justify-center rounded-3xl border border-emerald-800 p-24 relative">
        <p className="hidden lg:block text-lg uppercase tracking-widest mb-4">
          GOT A PROJECT IN MIND?
        </p>
        <h2 className="text-7xl font-bold mb-12 relative">
          LET'S CONNECT -
          {/* Cursor element - assuming a simple text character or small div for now */}
          {/* <span className="absolute -right-6 top-1/2 -translate-y-1/2 text-4xl">
            -
          </span> */}
        </h2>
        <div className="flex flex-row gap-4 w-full justify-center">
          <button className="border border-white flex-grow aspect-square rounded-full flex items-center justify-center text-sm sm:text-base lg:text-lg hover:bg-emerald-400 hover:border-emerald-400 hover:text-black transition-colors duration-200 min-w-[100px] max-w-[300px] group">
            <span className="group-hover:hidden">WRITE A MESSAGE</span>
            <span className="hidden group-hover:block text-2xl">
              <RiMailAiLine size={40} />
            </span>
          </button>
          <button className="border border-white flex-grow rounded-full flex items-center justify-center text-sm sm:text-base lg:text-lg hover:bg-emerald-400 hover:border-emerald-400 hover:text-black transition-colors duration-200 min-w-[100px] max-w-[300px] group">
            <span className="group-hover:hidden">MAKE A CALL</span>
            <span className="hidden group-hover:block text-2xl">
              <RiPhoneLine size={40} />
            </span>
          </button>
          <button className="border border-white flex-grow aspect-square rounded-full flex items-center justify-center text-sm sm:text-base lg:text-lg hover:bg-emerald-400 hover:border-emerald-400 hover:text-black transition-colors duration-200 min-w-[100px] max-w-[300px] group">
            <span className="group-hover:hidden">GET IN TOUCH</span>
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
