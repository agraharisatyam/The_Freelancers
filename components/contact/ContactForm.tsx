"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

type ServiceType = "web" | "design" | "mobile" | "marketing" | "consulting" | "other";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "web" as ServiceType,
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all required fields.");
      return;
    }

    // Simulate form submission
    try {
      // In a real app, you would send this to your API
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "web",
        budget: "",
        message: "",
      });
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="card card-padding shadow-lg"
    >
      <h2 className="text-2xl font-bold font-serif mb-5 text-navy-900 dark:text-white">
        Send us a Message
      </h2>

      {submitted ? (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center py-8"
        >
          <CheckCircle className="mx-auto mb-3 text-gold-500" size={48} />
          <h3 className="text-xl font-bold mb-2 text-navy-900 dark:text-white">
            Thank You!
          </h3>
          <p className="text-sm text-navy-600 dark:text-navy-300 mb-5">
            We&apos;ve received your message and will get back to you within 24 hours.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="btn-primary bg-gold-500 text-navy-900 hover:bg-gold-400"
          >
            Send Another Message
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center space-x-2 text-sm text-red-700 dark:text-red-400"
            >
              <AlertCircle size={18} />
              <span>{error}</span>
            </motion.div>
          )}

          <div className="grid md:grid-cols-2 grid-gap-sm">
            <div>
              <label className="form-label">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="form-label">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-gap-sm">
            <div>
              <label className="form-label">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
                placeholder="+1 (555) 123-4567"
              />
            </div>
            <div>
              <label className="form-label">
                Service Type <span className="text-red-500">*</span>
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="form-input"
              >
                <option value="web">Web Development</option>
                <option value="design">Graphic Design</option>
                <option value="mobile">Mobile Apps</option>
                <option value="marketing">Digital Marketing</option>
                <option value="consulting">Business Consulting</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="form-label">Budget Range</label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="form-input"
            >
              <option value="">Select budget range</option>
              <option value="under-5k">Under $5,000</option>
              <option value="5k-10k">$5,000 - $10,000</option>
              <option value="10k-25k">$10,000 - $25,000</option>
              <option value="25k-50k">$25,000 - $50,000</option>
              <option value="50k-plus">$50,000+</option>
            </select>
          </div>

          <div>
            <label className="form-label">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="form-input resize-none"
              placeholder="Tell us about your project..."
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary w-full bg-gold-500 text-navy-900 hover:bg-gold-400 flex items-center justify-center space-x-2"
          >
            <Send size={18} />
            <span>Send Message</span>
          </motion.button>
        </form>
      )}
    </motion.div>
  );
}

