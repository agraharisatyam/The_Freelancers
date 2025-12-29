"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Award, Users, Rocket, type LucideIcon } from "lucide-react";

const milestones = [
  {
    year: "2020",
    title: "Company Founded",
    description: "Started with a vision to revolutionize freelancing services",
    icon: Rocket,
  },
  {
    year: "2021",
    title: "First 50 Clients",
    description: "Reached our first major milestone with 50 satisfied clients",
    icon: Users,
  },
  {
    year: "2023",
    title: "Industry Recognition",
    description: "Awarded 'Best Freelancing Company' by Industry Leaders",
    icon: Award,
  },
  {
    year: "2025",
    title: "100+ Projects",
    description: "Successfully delivered over 100 projects with 95% client retention",
    icon: Calendar,
  },
];

export default function Timeline() {
  return (
    <section className="section-padding bg-white dark:bg-navy-900 pt-32">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-4">
            Our <span className="gradient-text">Journey</span>
          </h1>
          <p className="text-xl text-navy-600 dark:text-navy-300 max-w-2xl mx-auto">
            From humble beginnings to industry leaders
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gold-500 to-navy-300 dark:to-navy-700 hidden md:block" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isEven = index % 2 === 0;
              return (
                <TimelineItem
                  key={milestone.year}
                  milestone={milestone}
                  index={index}
                  isEven={isEven}
                  Icon={Icon}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  milestone,
  index,
  isEven,
  Icon,
}: {
  milestone: typeof milestones[0];
  index: number;
  isEven: boolean;
  Icon: LucideIcon;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`flex items-center gap-8 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } flex-col`}
    >
      <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"} text-center`}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="inline-block p-6 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl shadow-lg mb-4"
        >
          <Icon className="text-white" size={32} />
        </motion.div>
        <h3 className="text-2xl font-bold mb-2 text-navy-900 dark:text-white">
          {milestone.title}
        </h3>
        <p className="text-navy-600 dark:text-navy-300">{milestone.description}</p>
      </div>

      {/* Timeline dot */}
      <div className="relative z-10 flex-shrink-0">
        <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center border-4 border-white dark:border-navy-900 shadow-lg">
          <span className="text-navy-900 font-bold">{milestone.year}</span>
        </div>
      </div>

      <div className="flex-1" />
    </motion.div>
  );
}

