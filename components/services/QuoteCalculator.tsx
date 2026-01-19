"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, DollarSign } from "lucide-react";

type ServiceType = "web" | "design" | "mobile" | "marketing" | "consulting";
type Complexity = "simple" | "medium" | "complex";

const servicePrices: Record<ServiceType, Record<Complexity, number>> = {
  web: { simple: 2000, medium: 5000, complex: 10000 },
  design: { simple: 1000, medium: 3000, complex: 6000 },
  mobile: { simple: 3000, medium: 8000, complex: 15000 },
  marketing: { simple: 1500, medium: 4000, complex: 8000 },
  consulting: { simple: 2000, medium: 5000, complex: 10000 },
};

export default function QuoteCalculator() {
  const [serviceType, setServiceType] = useState<ServiceType>("web");
  const [complexity, setComplexity] = useState<Complexity>("medium");
  const [pages, setPages] = useState(5);
  const [estimatedPrice, setEstimatedPrice] = useState(0);

  const calculatePrice = () => {
    const basePrice = servicePrices[serviceType][complexity];
    const pageMultiplier = serviceType === "web" ? pages * 100 : 0;
    // Base price already accounts for complexity, so we just add page multiplier
    const total = basePrice + pageMultiplier;
    setEstimatedPrice(Math.round(total));
  };

  return (
    <section className="section-padding bg-gradient-to-br from-navy-900 to-navy-800 dark:from-navy-950 dark:to-navy-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container-content"
        >
          <div className="text-center mb-8 md:mb-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 mb-4 bg-gold-500/20 border border-gold-500/30 rounded-full text-gold-400 text-xs font-medium">
              <Calculator size={14} />
              <span>Instant Quote Calculator</span>
            </div>
            <h2 className="section-title text-white mb-3">
              Get an <span className="gradient-text">Instant Estimate</span>
            </h2>
            <p className="section-subtitle text-navy-200">
              Calculate your project cost in seconds
            </p>
          </div>

          <div className="card card-padding shadow-lg">
            <div className="space-y-5">
              {/* Service Type */}
              <div>
                <label className="form-label">Service Type</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {(["web", "design", "mobile", "marketing", "consulting"] as ServiceType[]).map(
                    (type) => (
                      <motion.button
                        key={type}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setServiceType(type)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                          serviceType === type
                            ? "bg-gold-500 text-navy-900"
                            : "bg-navy-100 dark:bg-navy-700 text-navy-700 dark:text-navy-200 hover:bg-navy-200 dark:hover:bg-navy-600"
                        }`}
                      >
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </motion.button>
                    )
                  )}
                </div>
              </div>

              <div>
                <label className="form-label">Project Complexity</label>
                <div className="grid grid-cols-3 gap-2">
                  {(["simple", "medium", "complex"] as Complexity[]).map((comp) => (
                    <motion.button
                      key={comp}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setComplexity(comp)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        complexity === comp
                          ? "bg-gold-500 text-navy-900"
                          : "bg-navy-100 dark:bg-navy-700 text-navy-700 dark:text-navy-200 hover:bg-navy-200 dark:hover:bg-navy-600"
                      }`}
                    >
                      {comp.charAt(0).toUpperCase() + comp.slice(1)}
                    </motion.button>
                  ))}
                </div>
              </div>

              {serviceType === "web" && (
                <div>
                  <label className="form-label">Number of Pages: {pages}</label>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={pages}
                    onChange={(e) => setPages(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
              )}

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={calculatePrice}
                className="btn-primary w-full bg-gold-500 text-navy-900 hover:bg-gold-400 flex items-center justify-center space-x-2"
              >
                <Calculator size={18} />
                <span>Calculate Estimate</span>
              </motion.button>

              {estimatedPrice > 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-5 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg text-center"
                >
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <DollarSign size={24} className="text-navy-900" />
                    <span className="text-3xl font-bold text-navy-900">
                      {estimatedPrice.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-xs text-navy-800">
                    Estimated project cost (final quote may vary)
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

