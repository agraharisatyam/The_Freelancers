"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy-50 via-white to-navy-50 dark:from-navy-950 dark:via-navy-900 dark:to-navy-950">
      {/* Background decoration - Rule of Thirds placement */}
      <div className="absolute inset-0 opacity-5">
        {/* Positioned at rule of thirds intersections */}
        <div className="absolute top-[33%] left-[33%] w-72 h-72 bg-gold-500 rounded-full blur-3xl" />
        <div className="absolute bottom-[33%] right-[33%] w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 pt-20 md:pt-24 pb-12 md:pb-16">
        <div className="container-content text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-5 md:mb-6"
          >
            <span className="inline-flex items-center space-x-2 px-3 py-1.5 bg-gold-500/10 border border-gold-500/20 rounded-full text-gold-600 dark:text-gold-400 text-xs font-medium">
              <span>✨</span>
              <span>Premium Freelancing Services</span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-5 md:mb-6 text-navy-900 dark:text-white leading-tight"
          >
            Transform Your{" "}
            <span className="gradient-text">Vision into Reality</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg text-navy-600 dark:text-navy-300 mb-7 md:mb-8 max-w-2xl mx-auto"
          >
            Expert freelancing services that deliver stunning results. From web development to
            graphic design, we bring your ideas to life with premium quality and unmatched
            craftsmanship.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4"
          >
            <Link
              href="/contact"
              className="btn-primary group inline-flex items-center justify-center space-x-2 bg-gold-500 text-navy-900 hover:bg-gold-400 transition-all hover:scale-105 shadow-md hover:shadow-lg"
            >
              <span>Get Started</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
            <Link
              href="/portfolio"
              className="btn-secondary inline-flex items-center justify-center space-x-2 text-navy-600 dark:text-navy-300 hover:text-gold-500 dark:hover:text-gold-400 transition-colors bg-transparent border border-navy-200 dark:border-navy-700"
            >
              <Play size={16} />
              <span>View Our Work</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16 pt-10 md:pt-12 border-t border-navy-200 dark:border-navy-800"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold font-serif gradient-text mb-1.5 md:mb-2">
                100+
              </div>
              <div className="text-xs text-navy-600 dark:text-navy-400">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold font-serif gradient-text mb-1.5 md:mb-2">
                500+
              </div>
              <div className="text-xs text-navy-600 dark:text-navy-400">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold font-serif gradient-text mb-1.5 md:mb-2">
                5★
              </div>
              <div className="text-xs text-navy-600 dark:text-navy-400">Average Rating</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
