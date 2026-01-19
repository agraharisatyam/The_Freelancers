"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, TrendingUp, Users, Calendar } from "lucide-react";

type Category = "all" | "web" | "design" | "mobile" | "branding";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "web" as Category,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    description: "Modern e-commerce solution with seamless checkout and inventory management",
    metrics: { traffic: "+250%", conversion: "+180%", revenue: "+320%" },
    client: "TechRetail Inc.",
    year: "2024",
  },
  {
    id: 2,
    title: "Brand Identity Design",
    category: "branding" as Category,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
    description: "Complete rebranding for tech startup with modern visual identity",
    metrics: { recognition: "+400%", engagement: "+220%" },
    client: "StartupXYZ",
    year: "2024",
  },
  {
    id: 3,
    title: "Mobile Banking App",
    category: "mobile" as Category,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
    description: "Secure and intuitive banking experience for iOS and Android",
    metrics: { downloads: "500K+", rating: "4.8/5", users: "200K+" },
    client: "FinancePro",
    year: "2023",
  },
  {
    id: 4,
    title: "SaaS Dashboard",
    category: "web" as Category,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    description: "Analytics dashboard with real-time data visualization",
    metrics: { efficiency: "+300%", satisfaction: "95%" },
    client: "DataViz Co.",
    year: "2024",
  },
  {
    id: 5,
    title: "Fashion Brand Identity",
    category: "design" as Category,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
    description: "Luxury fashion brand visual identity and packaging design",
    metrics: { sales: "+150%", brand: "+280%" },
    client: "Luxe Fashion",
    year: "2023",
  },
  {
    id: 6,
    title: "Fitness Mobile App",
    category: "mobile" as Category,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
    description: "Comprehensive fitness tracking app with social features",
    metrics: { active: "100K+", retention: "85%" },
    client: "FitLife",
    year: "2024",
  },
  {
    id: 7,
    title: "Corporate Website",
    category: "web" as Category,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    description: "Professional corporate website with CMS integration",
    metrics: { leads: "+200%", engagement: "+180%" },
    client: "CorpGlobal",
    year: "2023",
  },
  {
    id: 8,
    title: "Restaurant Branding",
    category: "branding" as Category,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
    description: "Complete branding package for upscale restaurant chain",
    metrics: { awareness: "+350%", bookings: "+240%" },
    client: "Gourmet Bistro",
    year: "2024",
  },
];

const categories: { id: Category; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Development" },
  { id: "design", label: "Graphic Design" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "branding", label: "Branding" },
];

export default function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="section-padding bg-white dark:bg-navy-900">
      <div className="container-custom">
        <div className="flex flex-wrap justify-center gap-3 mb-8 md:mb-10">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                selectedCategory === category.id
                  ? "bg-gold-500 text-navy-900"
                  : "bg-navy-100 dark:bg-navy-800 text-navy-700 dark:text-navy-200 hover:bg-navy-200 dark:hover:bg-navy-700"
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-gap"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project)}
                className="group relative cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl bg-navy-100 dark:bg-navy-800 aspect-golden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-2 py-0.5 mb-2 bg-gold-500/20 border border-gold-500/30 rounded-full text-gold-400 text-xs font-medium">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-xs text-navy-200">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-navy-900/95 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-white dark:bg-navy-800 rounded-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-navy-900/50 backdrop-blur-md rounded-full text-white hover:bg-navy-900 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="relative h-96">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="inline-block px-2 py-0.5 mb-2 bg-gold-500/20 border border-gold-500/30 rounded-full text-gold-400 text-xs font-medium">
                      {selectedProject.category}
                    </span>
                    <h2 className="text-2xl font-bold font-serif mb-2 text-navy-900 dark:text-white">
                      {selectedProject.title}
                    </h2>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-navy-600 dark:text-navy-300">
                    <Users size={18} />
                    <span>{selectedProject.client}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-navy-600 dark:text-navy-300">
                    <Calendar size={18} />
                    <span>{selectedProject.year}</span>
                  </div>
                </div>

                <p className="text-base text-navy-700 dark:text-navy-200 mb-6">
                  {selectedProject.description}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                  {Object.entries(selectedProject.metrics).map(([key, value]) => (
                    <div
                      key={key}
                      className="p-3 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg text-center"
                    >
                      <TrendingUp className="mx-auto mb-1 text-navy-900" size={20} />
                      <div className="text-xl font-bold text-navy-900">{value}</div>
                      <div className="text-xs text-navy-800 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                <button className="w-full md:w-auto px-6 py-3 bg-gold-500 text-navy-900 rounded-full text-sm font-semibold hover:bg-gold-400 transition-colors flex items-center justify-center space-x-2">
                  <span>View Case Study</span>
                  <ExternalLink size={18} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

