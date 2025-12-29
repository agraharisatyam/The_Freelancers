"use client";

import { motion } from "framer-motion";
import { Shield, Award, Users, CheckCircle } from "lucide-react";

const badges = [
  { icon: Shield, text: "SSL Secured", color: "from-blue-500 to-blue-600" },
  { icon: Award, text: "5-Star Rated", color: "from-gold-500 to-gold-600" },
  { icon: Users, text: "100+ Clients", color: "from-purple-500 to-purple-600" },
  { icon: CheckCircle, text: "Verified Pro", color: "from-green-500 to-green-600" },
];

export default function TrustBadges() {
  return (
    <section className="py-12 bg-navy-50 dark:bg-navy-900 border-y border-navy-200 dark:border-navy-800">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center justify-center p-6 bg-white dark:bg-navy-800 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`p-3 rounded-full bg-gradient-to-br ${badge.color} mb-3`}>
                  <Icon className="text-white" size={24} />
                </div>
                <p className="text-sm font-semibold text-navy-700 dark:text-white text-center">
                  {badge.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

