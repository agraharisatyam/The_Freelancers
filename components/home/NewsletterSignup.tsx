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
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 mb-6 bg-gold-500/20 border border-gold-500/30 rounded-full text-gold-400 text-sm font-medium">
            <Download size={16} />
            <span>Free Lead Magnet</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-white">
            Get Your Free{" "}
            <span className="gradient-text">Freelance Success Guide</span>
          </h2>
          <p className="text-xl text-navy-200 mb-8">
            Join our newsletter and receive exclusive tips, industry insights, and our comprehensive
            guide to freelance success—absolutely free!
          </p>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto"
          >
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-navy-400" size={20} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white placeholder-navy-300 focus:outline-none focus:border-gold-500 transition-colors"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gold-500 text-navy-900 rounded-full font-semibold hover:bg-gold-400 transition-colors flex items-center justify-center space-x-2"
            >
              {submitted ? (
                <>
                  <CheckCircle size={20} />
                  <span>Subscribed!</span>
                </>
              ) : (
                <>
                  <Download size={20} />
                  <span>Download Free Guide</span>
                </>
              )}
            </motion.button>
          </motion.form>

          <p className="text-sm text-navy-300 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

