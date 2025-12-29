"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Code, Palette, Briefcase, BarChart3, Smartphone, Zap } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom, responsive websites built with cutting-edge technology",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Stunning visuals that capture your brand's essence",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Briefcase,
    title: "Business Consulting",
    description: "Strategic insights to grow and scale your business",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: BarChart3,
    title: "Digital Marketing",
    description: "Data-driven campaigns that deliver measurable results",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Zap,
    title: "Brand Identity",
    description: "Complete brand packages that make you stand out",
    color: "from-gold-500 to-yellow-500",
  },
];

export default function ServicesTeaser() {
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
            Our Premium <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-navy-600 dark:text-navy-300 max-w-2xl mx-auto">
            Comprehensive solutions tailored to elevate your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative p-8 bg-gradient-to-br from-white to-navy-50 dark:from-navy-800 dark:to-navy-900 rounded-2xl border border-navy-200 dark:border-navy-700 hover:border-gold-500 transition-all duration-300 cursor-pointer"
              >
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-300`}
                />
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} mb-6`}>
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-navy-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-navy-600 dark:text-navy-300 mb-6">{service.description}</p>
                <Link
                  href="/services"
                  className="text-gold-500 font-semibold flex items-center space-x-2 group-hover:translate-x-2 transition-transform"
                >
                  <span>Learn More</span>
                  <span>→</span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-12"
        >
          <Link href="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gold-500 text-navy-900 rounded-full font-semibold hover:bg-gold-400 transition-colors"
            >
              View All Services
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

