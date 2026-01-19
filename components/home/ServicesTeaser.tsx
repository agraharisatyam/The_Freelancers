"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Code, Palette, BarChart3, Smartphone, ArrowRight } from "lucide-react";

// Hick's Law: Only 3 services to reduce decision paralysis
const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Stunning visual designs that capture your brand's essence",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: BarChart3,
    title: "Business Consulting",
    description: "Strategic guidance to grow your business and maximize potential",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android",
    color: "from-orange-500 to-orange-600",
  },
];

export default function ServicesTeaser() {
  return (
    <section className="section-padding bg-white dark:bg-navy-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2 className="section-title">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive solutions tailored to your unique needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-gap mb-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group card card-padding hover:border-gold-500/50 transition-all cursor-pointer"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${service.color} mb-3`}>
                  <Icon className="text-white" size={20} />
                </div>
                <h3 className="text-lg font-bold font-serif mb-2 text-navy-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-navy-600 dark:text-navy-400 text-sm mb-3">
                  {service.description}
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center space-x-1 text-gold-600 dark:text-gold-400 font-medium text-xs group-hover:space-x-2 transition-all"
                >
                  <span>Learn more</span>
                  <ArrowRight size={14} />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Link
            href="/services"
            className="btn-primary inline-flex items-center justify-center space-x-2 bg-navy-900 dark:bg-white text-white dark:text-navy-900 hover:bg-navy-800 dark:hover:bg-gray-100"
          >
            <span>View All Services</span>
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
