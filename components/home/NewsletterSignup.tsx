"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Download, CheckCircle } from "lucide-react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup logic here
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <section className="section-padding bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 dark:from-navy-950 dark:via-navy-900 dark:to-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-[33%] left-[33%] w-72 h-72 bg-gold-500 rounded-full blur-3xl" />
        <div className="absolute bottom-[33%] right-[33%] w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="container-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 mb-5 md:mb-6 bg-gold-500/20 border border-gold-500/30 rounded-full text-gold-400 text-xs font-medium">
              <Download size={14} />
              <span>Free Lead Magnet</span>
            </div>

            <h2 className="section-title text-white mb-3 md:mb-4">
              Get Your Free{" "}
              <span className="gradient-text">Freelance Success Guide</span>
            </h2>
            <p className="section-subtitle text-navy-200 mb-7 md:mb-8">
              Join our newsletter and receive exclusive tips, industry insights, and our comprehensive
              guide to freelance success—absolutely free!
            </p>

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-4"
            >
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-navy-400" size={18} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full pl-11 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white placeholder-navy-300 focus:outline-none focus:border-gold-500 transition-colors text-sm"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary bg-gold-500 text-navy-900 hover:bg-gold-400 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
              >
              {submitted ? (
                <>
                  <CheckCircle size={18} />
                  <span>Subscribed!</span>
                </>
              ) : (
                <>
                  <Download size={18} />
                  <span>Download Free Guide</span>
                </>
              )}
            </motion.button>
          </motion.form>

          <p className="text-xs text-navy-300">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
        </div>
      </div>
    </section>
  );
}

