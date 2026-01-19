"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useDarkMode } from "@/hooks/useDarkMode";

// Hick's Law: Reduced navigation items - grouped by importance
// Primary navigation (most important)
const primaryNavLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

// Secondary navigation (less prominent)
const secondaryNavLinks = [
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    // Set initial state
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-white"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="h-8 w-auto relative"
            >
              <Image
                src="/Gemini_Generated_Image_los0s3los0s3los0.png"
                alt="SAJSOFTWARES Logo"
                width={120}
                height={32}
                className="h-full w-auto object-contain"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation - Hick's Law: Reduced choices, Visual Hierarchy applied */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Primary nav - more prominent (Visual Hierarchy) */}
            <div className="flex items-center space-x-5">
              {primaryNavLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-sm font-semibold text-black hover:text-gold-500 transition-colors group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-500 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>
            
            {/* Visual separator - Gestalt Continuity */}
            <div className="h-6 w-px bg-navy-200 dark:bg-navy-700" />
            
            {/* Secondary nav - less prominent */}
            <div className="flex items-center space-x-4">
              {secondaryNavLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-xs font-medium text-navy-600 dark:text-navy-400 hover:text-gold-500 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className="p-1.5 rounded-full bg-gray-100 text-black"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </motion.button>
            
            <Link
              href="/contact"
              className="px-4 py-2 bg-gold-500 text-black rounded-full text-xs font-semibold hover:bg-gold-400 transition-colors shadow-sm hover:shadow-md"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className="p-1.5 rounded-full bg-gray-100 text-black"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </motion.button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-black"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="container-custom py-4 space-y-3">
              {/* Primary nav */}
              <div className="space-y-2 pb-3 border-b border-navy-200">
                {primaryNavLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-sm font-semibold text-black hover:text-gold-500 transition-colors touch-target"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              {/* Secondary nav */}
              <div className="space-y-2">
                {secondaryNavLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-xs text-navy-600 dark:text-navy-400 hover:text-gold-500 transition-colors touch-target"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              {/* CTA - Fitt's Law: Larger touch target */}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-6 py-3 bg-gold-500 text-black rounded-full text-sm font-bold hover:bg-gold-400 transition-colors mt-4 touch-target"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

