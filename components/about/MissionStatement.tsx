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
          className="container-content text-center mb-10 md:mb-12"
        >
          <h2 className="section-title">
            Our <span className="gradient-text">Mission</span>
          </h2>
          <p className="section-subtitle">
            To empower businesses and individuals by transforming their visions into stunning digital
            realities. We combine creative excellence with technical expertise to deliver solutions
            that not only meet but exceed expectations, fostering long-term partnerships built on
            trust and results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-gap">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="card card-padding text-center hover:border-gold-500 transition-all"
              >
                <div
                  className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${value.color} mb-4`}
                >
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-navy-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-sm text-navy-600 dark:text-navy-300">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

