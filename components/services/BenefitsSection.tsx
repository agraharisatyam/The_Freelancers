"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const benefits = [
  { label: "Client Retention Rate", value: 95, color: "from-green-500 to-emerald-500" },
  { label: "Project Success Rate", value: 98, color: "from-blue-500 to-cyan-500" },
  { label: "On-Time Delivery", value: 97, color: "from-purple-500 to-pink-500" },
  { label: "Client Satisfaction", value: 99, color: "from-gold-500 to-yellow-500" },
];

export default function BenefitsSection() {
  return (
    <section className="section-padding bg-white dark:bg-navy-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">
            Proven <span className="gradient-text">Results</span>
          </h2>
          <p className="text-xl text-navy-600 dark:text-navy-300 max-w-2xl mx-auto">
            Numbers that speak for themselves
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={benefit.label} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitCard({
  benefit,
  index,
}: {
  benefit: typeof benefits[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -5, scale: 1.05 }}
      className="p-8 bg-gradient-to-br from-navy-50 to-white dark:from-navy-800 dark:to-navy-900 rounded-2xl border border-navy-200 dark:border-navy-700 text-center"
    >
      <div className={`text-5xl font-bold mb-2 bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`}>
        {isInView ? `${benefit.value}%` : "0%"}
      </div>
      <p className="text-navy-700 dark:text-navy-200 font-medium">{benefit.label}</p>
      <div className="mt-4 h-2 bg-navy-200 dark:bg-navy-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${benefit.value}%` } : {}}
          transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
          className={`h-full bg-gradient-to-r ${benefit.color} rounded-full`}
        />
      </div>
    </motion.div>
  );
}

