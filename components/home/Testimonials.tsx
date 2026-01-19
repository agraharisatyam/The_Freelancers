"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content:
      "SAJSOFTWARES transformed our online presence completely. Their attention to detail and creative vision exceeded all our expectations. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
  },
  {
    name: "Michael Chen",
    role: "Founder, DesignCo",
    content:
      "Working with SAJSOFTWARES was a game-changer. They delivered a stunning website that perfectly captures our brand identity. The team is professional and incredibly talented.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, Growth Labs",
    content:
      "Outstanding service from start to finish. They understood our vision and brought it to life beautifully. Our new website has significantly increased our conversion rates.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-gradient-to-br from-navy-50 to-white dark:from-navy-900 dark:to-navy-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2 className="section-title">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="section-subtitle">
            Don&apos;t just take our word for it—hear from our satisfied clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 grid-gap">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card card-padding relative shadow-lg"
            >
              <Quote className="absolute top-4 right-4 text-gold-500/20" size={32} />
              <div className="mb-4 space-y-3">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="fill-gold-500 text-gold-500" size={14} />
                  ))}
                </div>
                <p className="text-navy-700 dark:text-navy-200 relative z-10 text-sm">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </div>
              <div className="flex items-center space-x-3 mt-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-sm text-navy-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-navy-600 dark:text-navy-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
