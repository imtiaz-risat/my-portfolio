"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import MenuButton from "./MenuButton";
import { ArrowRight } from "lucide-react";

const menuItems = [
  { title: "Home", href: "/" },
  { title: "About Me", href: "/about-me" },
  { title: "Projects", href: "/projects" },
];

const socialLinks = [
  { icon: "twitter", href: "#" },
  { icon: "instagram", href: "#" },
  { icon: "linkedin", href: "#" },
  { icon: "youtube", href: "#" },
];

export default function CornerNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const arrowVariants = {
    initial: {
      scale: 1,
      rotate: 0,
    },
    hover: {
      scale: 1.4,
      rotate: -45,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      {/* Nav Menu Button */}
      <div
        className="fixed top-4 right-4 z-50"
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
          console.log(isMenuOpen);
        }}
      >
        <MenuButton />
      </div>

      {/* Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 3rem) 3rem)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 3rem) 3rem)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 3rem) 3rem)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-emerald-500"
          >
            {/* Logo */}
            {/* <div className="absolute left-8 top-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link href="/">
                  <div className="h-12 w-12 rounded-lg bg-white/10" />
                </Link>
              </motion.div>
            </div> */}

            {/* Navigation Links */}
            <nav className="absolute left-8 top-32 space-y-6">
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="text-6xl md:text-8xl font-black text-white/70 transition-colors hover:text-white"
                  >
                    {item.title}.
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Social Links */}
            <div className="absolute bottom-32 left-8 space-y-4">
              {socialLinks.map((link, i) => (
                <motion.div
                  key={link.icon}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="block text-white/70 transition-colors hover:text-white"
                  >
                    <div className="h-6 w-6" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Contact Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-12 right-12"
            >
              <motion.a
                href="/contact"
                className="bg-white border border-black text-black flex flex-row items-center gap-2 px-6 py-4 text-xl md:text-4xl font-bold hover:bg-gray-200 transition-colors"
                initial="initial"
                whileHover="hover"
              >
                <motion.span className="inline-block">Contact Me</motion.span>
                <motion.div variants={arrowVariants} className="h-6 w-6">
                  <ArrowRight />
                </motion.div>
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
