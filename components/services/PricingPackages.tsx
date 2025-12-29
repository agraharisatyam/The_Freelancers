"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import Link from "next/link";

const packages = [
  {
    name: "Starter",
    price: "$999",
    period: "project",
    description: "Perfect for small businesses getting started",
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Basic SEO",
      "Contact form",
      "1 revision round",
      "2 weeks delivery",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$2,999",
    period: "project",
    description: "Most popular choice for growing businesses",
    features: [
      "Up to 15 pages",
      "Custom design",
      "Advanced SEO",
      "CMS integration",
      "3 revision rounds",
      "4 weeks delivery",
      "6 months support",
      "Analytics setup",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "quote",
    description: "Tailored solutions for large organizations",
    features: [
      "Unlimited pages",
      "Fully custom solution",
      "White-label option",
      "Priority support",
      "Unlimited revisions",
      "Dedicated team",
      "Ongoing maintenance",
      "Training & documentation",
    ],
    popular: false,
  },
];

export default function PricingPackages() {
  return (
    <section className="section-padding bg-gradient-to-br from-navy-50 to-white dark:from-navy-900 dark:to-navy-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">
            Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-xl text-navy-600 dark:text-navy-300 max-w-2xl mx-auto">
            Choose the perfect package for your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative p-8 rounded-2xl border-2 ${
                pkg.popular
                  ? "bg-gradient-to-br from-gold-500 to-gold-600 border-gold-500 scale-105"
                  : "bg-white dark:bg-navy-800 border-navy-200 dark:border-navy-700"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center space-x-1 px-4 py-1 bg-navy-900 text-white rounded-full text-sm font-semibold">
                    <Star size={16} className="fill-white" />
                    <span>Best Value</span>
                  </div>
                </div>
              )}

              <div className={`text-center mb-8 ${pkg.popular ? "text-navy-900" : ""}`}>
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  {pkg.period !== "quote" && (
                    <span className="text-lg opacity-75">/{pkg.period}</span>
                  )}
                </div>
                <p className="text-sm opacity-75">{pkg.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-start space-x-3 ${
                      pkg.popular ? "text-navy-900" : "text-navy-700 dark:text-navy-200"
                    }`}
                  >
                    <Check
                      className={`flex-shrink-0 mt-0.5 ${
                        pkg.popular ? "text-navy-900" : "text-gold-500"
                      }`}
                      size={20}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 rounded-full font-semibold transition-colors ${
                    pkg.popular
                      ? "bg-navy-900 text-white hover:bg-navy-800"
                      : "bg-gold-500 text-navy-900 hover:bg-gold-400"
                  }`}
                >
                  {pkg.price === "Custom" ? "Get Quote" : "Get Started"}
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

