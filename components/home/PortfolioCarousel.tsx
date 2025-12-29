"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    description: "Modern e-commerce solution with seamless checkout",
  },
  {
    id: 2,
    title: "Brand Identity Design",
    category: "Graphic Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
    description: "Complete rebranding for tech startup",
  },
  {
    id: 3,
    title: "Mobile Banking App",
    category: "Mobile Apps",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
    description: "Secure and intuitive banking experience",
  },
  {
    id: 4,
    title: "SaaS Dashboard",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    description: "Analytics dashboard with real-time data",
  },
];

export default function PortfolioCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="section-padding bg-gradient-to-br from-navy-50 to-white dark:from-navy-900 dark:to-navy-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">
            Featured <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-navy-600 dark:text-navy-300 max-w-2xl mx-auto">
            Showcasing our best work and client success stories
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${projects[currentIndex].image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/50 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                <span className="inline-block px-3 py-1 mb-3 bg-gold-500/20 border border-gold-500/30 rounded-full text-gold-400 text-sm font-medium">
                  {projects[currentIndex].category}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold font-serif mb-3">
                  {projects[currentIndex].title}
                </h3>
                <p className="text-lg text-navy-200 mb-6 max-w-2xl">
                  {projects[currentIndex].description}
                </p>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-gold-500 text-navy-900 rounded-full font-semibold hover:bg-gold-400 transition-colors"
                >
                  <span>View Project</span>
                  <ExternalLink size={20} />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 dark:bg-navy-800/90 backdrop-blur-md rounded-full shadow-lg hover:bg-white dark:hover:bg-navy-800 transition-colors z-10"
            aria-label="Previous project"
          >
            <ChevronLeft size={24} className="text-navy-900 dark:text-white" />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 dark:bg-navy-800/90 backdrop-blur-md rounded-full shadow-lg hover:bg-white dark:hover:bg-navy-800 transition-colors z-10"
            aria-label="Next project"
          >
            <ChevronRight size={24} className="text-navy-900 dark:text-white" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-gold-500 w-8"
                    : "bg-navy-300 dark:bg-navy-600"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

