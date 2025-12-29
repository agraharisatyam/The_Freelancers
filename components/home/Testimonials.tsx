"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    rating: 5,
    text: "FreelancePro transformed our online presence. Their attention to detail and creative vision exceeded all expectations. Highly recommended!",
  },
  {
    name: "Michael Chen",
    role: "Founder, Design Studio",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    rating: 5,
    text: "Working with FreelancePro was a game-changer. They delivered a stunning website that perfectly captures our brand identity. Professional and reliable.",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, Growth Co.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    rating: 5,
    text: "The team at FreelancePro is exceptional. They understood our vision and brought it to life with incredible creativity and technical expertise.",
  },
  {
    name: "David Thompson",
    role: "Entrepreneur",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    rating: 5,
    text: "Outstanding service from start to finish. The project was delivered on time, within budget, and exceeded our expectations. Truly professional!",
  },
];

export default function Testimonials() {
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
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-navy-600 dark:text-navy-300 max-w-2xl mx-auto">
            Don&apos;t just take our word for it—hear from satisfied clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative p-8 bg-gradient-to-br from-navy-50 to-white dark:from-navy-800 dark:to-navy-900 rounded-2xl border border-navy-200 dark:border-navy-700 hover:border-gold-500 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 text-gold-500/20" size={60} />
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-gold-500"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center">
                    <Quote size={12} className="text-navy-900" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-navy-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-navy-600 dark:text-navy-400">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="fill-gold-500 text-gold-500" size={20} />
                ))}
              </div>
              <p className="text-navy-700 dark:text-navy-200 leading-relaxed">
                &quot;{testimonial.text}&quot;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

