"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Mail, Github } from "lucide-react";

const teamMembers = [
  {
    name: "Alexandra Martinez",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    bio: "10+ years of experience in design and branding",
    skills: ["UI/UX Design", "Brand Identity", "Creative Strategy"],
    linkedin: "#",
    email: "alexandra@freelancepro.com",
  },
  {
    name: "James Wilson",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    bio: "Full-stack developer passionate about cutting-edge technology",
    skills: ["React", "Node.js", "TypeScript", "Next.js"],
    linkedin: "#",
    github: "#",
  },
  {
    name: "Sophie Chen",
    role: "Marketing Strategist",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    bio: "Data-driven marketer with expertise in growth strategies",
    skills: ["SEO", "Content Marketing", "Analytics"],
    linkedin: "#",
    email: "sophie@freelancepro.com",
  },
  {
    name: "Michael Rodriguez",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    bio: "Ensuring seamless project delivery and client satisfaction",
    skills: ["Agile", "Scrum", "Client Relations"],
    linkedin: "#",
  },
];

export default function TeamBios() {
  return (
    <section className="section-padding bg-white dark:bg-navy-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2 className="section-title">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <p className="section-subtitle">
            Talented professionals dedicated to your success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-gap">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-navy-50 to-white dark:from-navy-800 dark:to-navy-900 border border-navy-200 dark:border-navy-700">
                <div className="relative aspect-golden overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold mb-1 text-navy-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-gold-500 font-semibold mb-2 text-sm">{member.role}</p>
                  <p className="text-xs text-navy-600 dark:text-navy-300 mb-3">
                    {member.bio}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 bg-navy-100 dark:bg-navy-700 text-navy-700 dark:text-navy-200 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-2">
                    {member.linkedin && (
                      <motion.a
                        href={member.linkedin}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-1.5 bg-navy-100 dark:bg-navy-700 rounded-full hover:bg-gold-500 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={16} className="text-navy-700 dark:text-navy-200" />
                      </motion.a>
                    )}
                    {member.email && (
                      <motion.a
                        href={`mailto:${member.email}`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-1.5 bg-navy-100 dark:bg-navy-700 rounded-full hover:bg-gold-500 transition-colors"
                        aria-label="Email"
                      >
                        <Mail size={16} className="text-navy-700 dark:text-navy-200" />
                      </motion.a>
                    )}
                    {member.github && (
                      <motion.a
                        href={member.github}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-1.5 bg-navy-100 dark:bg-navy-700 rounded-full hover:bg-gold-500 transition-colors"
                        aria-label="GitHub"
                      >
                        <Github size={16} className="text-navy-700 dark:text-navy-200" />
                      </motion.a>
                    )}
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

