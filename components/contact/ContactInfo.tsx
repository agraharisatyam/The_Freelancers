"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    info: "hello@freelancepro.com",
    link: "mailto:hello@freelancepro.com",
    description: "We'll respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    info: "+1 (555) 123-4567",
    link: "tel:+15551234567",
    description: "Mon-Fri, 9am-6pm EST",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    info: "123 Design Street",
    link: "#",
    description: "Creative City, CC 12345",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    info: "Available Now",
    link: "#",
    description: "Chat with us instantly",
  },
];

const hours = [
  { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
  { day: "Saturday", time: "10:00 AM - 4:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="space-y-5 md:space-y-6"
    >
      <div className="card card-padding shadow-lg">
        <h2 className="text-2xl font-bold font-serif mb-5 text-navy-900 dark:text-white">
          Contact Information
        </h2>
        <div className="space-y-3 md:space-y-4">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={method.title}
                href={method.link}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5 }}
                className="flex items-start space-x-3 p-3 bg-navy-50 dark:bg-navy-900 rounded-lg hover:bg-navy-100 dark:hover:bg-navy-700 transition-colors group"
              >
                <div className="p-2 bg-gold-500 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
                  <Icon className="text-navy-900" size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-base mb-1 text-navy-900 dark:text-white">
                    {method.title}
                  </h3>
                  <p className="text-gold-500 font-medium mb-0.5 text-sm">{method.info}</p>
                  <p className="text-xs text-navy-600 dark:text-navy-300">
                    {method.description}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>

      <div className="card card-padding shadow-lg">
        <div className="flex items-center space-x-2 mb-5">
          <Clock className="text-gold-500 flex-shrink-0" size={22} />
          <h2 className="text-xl font-bold font-serif text-navy-900 dark:text-white">
            Business Hours
          </h2>
        </div>
        <div className="space-y-2">
          {hours.map((hour) => (
            <div
              key={hour.day}
              className="flex justify-between items-center p-2.5 bg-navy-50 dark:bg-navy-900 rounded-lg"
            >
              <span className="font-medium text-sm text-navy-900 dark:text-white">{hour.day}</span>
              <span className="text-xs text-navy-600 dark:text-navy-300">{hour.time}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-gold-500 to-gold-600 rounded-xl p-5 md:p-6 text-center">
        <h3 className="text-xl font-bold font-serif mb-2 text-navy-900">
          Ready to Start Your Project?
        </h3>
        <p className="text-navy-800 mb-4 text-sm">
          Book a free consultation call with our team to discuss your project needs.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-primary bg-navy-900 text-white hover:bg-navy-800"
        >
          Schedule a Call
        </motion.button>
      </div>
    </motion.div>
  );
}

