"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, Heart, Shield } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for perfection in every project, delivering results that exceed expectations.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Constantly pushing boundaries with cutting-edge solutions and creative approaches.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We love what we do, and it shows in every detail of our work.",
    color: "from-red-500 to-rose-500",
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "Trustworthy partnerships built on transparency, communication, and integrity.",
    color: "from-green-500 to-emerald-500",
  },
];

export default function MissionStatement() {
  return (
    <section className="section-padding bg-gradient-to-br from-navy-50 to-white dark:from-navy-900 dark:to-navy-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
            Our <span className="gradient-text">Mission</span>
          </h2>
          <p className="text-xl text-navy-600 dark:text-navy-300 leading-relaxed">
            To empower businesses and individuals by transforming their visions into stunning digital
            realities. We combine creative excellence with technical expertise to deliver solutions
            that not only meet but exceed expectations, fostering long-term partnerships built on
            trust and results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="text-center p-8 bg-white dark:bg-navy-800 rounded-2xl border border-navy-200 dark:border-navy-700 hover:border-gold-500 transition-all"
              >
                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${value.color} mb-6`}
                >
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-navy-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-navy-600 dark:text-navy-300">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

