"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Palette, Briefcase, BarChart3, Smartphone, Zap, ChevronDown } from "lucide-react";

const services = [
  {
    id: "web-dev",
    icon: Code,
    title: "Web Development",
    description: "Custom, responsive websites built with cutting-edge technology",
    details: [
      "Responsive design for all devices",
      "Modern frameworks (React, Next.js, Vue)",
      "E-commerce solutions",
      "CMS integration",
      "Performance optimization",
      "SEO-friendly architecture",
    ],
    video: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
  },
  {
    id: "graphic-design",
    icon: Palette,
    title: "Graphic Design",
    description: "Stunning visuals that capture your brand's essence",
    details: [
      "Logo design & branding",
      "Print design (brochures, flyers)",
      "Digital graphics & illustrations",
      "Social media assets",
      "Packaging design",
      "Brand guidelines",
    ],
    video: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
  },
  {
    id: "consulting",
    icon: Briefcase,
    title: "Business Consulting",
    description: "Strategic insights to grow and scale your business",
    details: [
      "Business strategy development",
      "Market analysis & research",
      "Process optimization",
      "Digital transformation",
      "Growth planning",
      "Performance metrics",
    ],
    video: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
  },
  {
    id: "marketing",
    icon: BarChart3,
    title: "Digital Marketing",
    description: "Data-driven campaigns that deliver measurable results",
    details: [
      "SEO & content marketing",
      "Social media management",
      "PPC advertising",
      "Email campaigns",
      "Analytics & reporting",
      "Conversion optimization",
    ],
    video: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications",
    details: [
      "iOS & Android development",
      "React Native & Flutter",
      "App store optimization",
      "Push notifications",
      "In-app purchases",
      "Maintenance & updates",
    ],
    video: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
  },
  {
    id: "branding",
    icon: Zap,
    title: "Brand Identity",
    description: "Complete brand packages that make you stand out",
    details: [
      "Brand strategy & positioning",
      "Visual identity systems",
      "Typography & color palettes",
      "Brand voice & messaging",
      "Style guides",
      "Brand implementation",
    ],
    video: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
  },
];

export default function ServicesDetail() {
  const [activeTab, setActiveTab] = useState(services[0].id);

  return (
    <section className="section-padding bg-white dark:bg-navy-900">
      <div className="container-custom">
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all ${
                  activeTab === service.id
                    ? "bg-gold-500 text-navy-900"
                    : "bg-navy-100 dark:bg-navy-800 text-navy-700 dark:text-navy-200 hover:bg-navy-200 dark:hover:bg-navy-700"
                }`}
              >
                <Icon size={20} />
                <span>{service.title}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {services
            .filter((service) => service.id === activeTab)
            .map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-2 gap-8 items-center"
                >
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="p-4 bg-gradient-to-br from-gold-500 to-gold-600 rounded-xl">
                        <Icon className="text-white" size={32} />
                      </div>
                      <h2 className="text-3xl font-bold font-serif text-navy-900 dark:text-white">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-xl text-navy-600 dark:text-navy-300 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.details.map((detail, index) => (
                        <motion.li
                          key={detail}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center space-x-3 text-navy-700 dark:text-navy-200"
                        >
                          <div className="w-2 h-2 bg-gold-500 rounded-full" />
                          <span>{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={service.video}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent" />
                  </div>
                </motion.div>
              );
            })}
        </AnimatePresence>
      </div>
    </section>
  );
}

