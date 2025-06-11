"use client";
import { useState } from "react";
import { FaLinkedin, FaDiscord, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Logo from "./Logo";
import Toast from "./Toast";

const Footer = () => {
  const [showToast, setShowToast] = useState(false);

  const handleDiscordClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("ImtiazRisat#2413");
    setShowToast(true);
  };

  return (
    <>
      <footer className="w-full py-8 px-4 bg-black border-t border-emerald-400/40 shadow-sm shadow-emerald-400 text-white">
        <div className="max-w-7xl mx-auto">
          {/* Desktop Layout (single row) */}
          <div className="hidden md:flex justify-between items-center">
            <div className="flex items-center">
              <Link href="/">
                <Logo />
              </Link>
            </div>

            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Imtiaz Risat. All rights reserved.
            </div>

            <div className="flex gap-4">
              <Link
                href="https://www.linkedin.com/in/imtiazrisat/"
                target="_blank"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <FaLinkedin size={24} />
              </Link>
              {/* <Link
              href="https://discord.com/users/imtiazrisat"
              target="_blank"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              <FaDiscord size={24} />
            </Link> */}
              <button
                onClick={handleDiscordClick}
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <FaDiscord size={24} />
              </button>
              <Link
                href="https://instagram.com/imtiazrisat"
                target="_blank"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <FaInstagram size={24} />
              </Link>
            </div>
          </div>

          {/* Mobile Layout (two rows) */}
          <div className="md:hidden flex flex-col items-center gap-6">
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center">
                <Link href="/">
                  <Logo />
                </Link>
              </div>

              <div className="flex gap-4">
                <Link
                  href="https://www.linkedin.com/in/imtiazrisat/"
                  target="_blank"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  <FaLinkedin size={24} />
                </Link>
                <button
                  onClick={handleDiscordClick}
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  <FaDiscord size={24} />
                </button>
                <Link
                  href="https://instagram.com/imtiazrisat"
                  target="_blank"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  <FaInstagram size={24} />
                </Link>
              </div>
            </div>

            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Imtiaz Risat. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
      <Toast
        message="Discord username copied!"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </>
  );
};

export default Footer;
