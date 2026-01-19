"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, TrendingUp } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "10 Essential Web Design Trends for 2025",
    excerpt: "Discover the latest web design trends that will shape the digital landscape in 2025.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    category: "Design",
    date: "March 15, 2025",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 2,
    title: "How to Build a Successful Freelance Business",
    excerpt: "Learn the strategies and tactics that top freelancers use to build thriving businesses.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
    category: "Business",
    date: "March 10, 2025",
    readTime: "8 min read",
    featured: false,
  },
  {
    id: 3,
    title: "SEO Best Practices for Modern Websites",
    excerpt: "Master the art of SEO with these proven strategies that drive organic traffic.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    category: "Marketing",
    date: "March 5, 2025",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 4,
    title: "The Future of Mobile App Development",
    excerpt: "Explore emerging technologies and frameworks shaping the future of mobile apps.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
    category: "Development",
    date: "February 28, 2025",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 5,
    title: "Branding Strategies That Actually Work",
    excerpt: "Discover how to create a memorable brand that resonates with your target audience.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
    category: "Branding",
    date: "February 20, 2025",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 6,
    title: "Client Communication: The Key to Project Success",
    excerpt: "Learn how effective communication can make or break your freelance projects.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
    category: "Business",
    date: "February 15, 2025",
    readTime: "5 min read",
    featured: false,
  },
];

export default function BlogGrid() {
  const featuredArticle = articles.find((article) => article.featured);
  const regularArticles = articles.filter((article) => !article.featured);

  return (
    <section className="section-padding bg-white dark:bg-navy-900">
      <div className="container-custom">
        {/* Featured Article */}
        {featuredArticle && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <Link href={`/blog/${featuredArticle.id}`}>
              <div className="relative group cursor-pointer">
                <div className="relative aspect-golden rounded-xl overflow-hidden">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/50 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center space-x-1 px-2 py-1 bg-gold-500 text-navy-900 rounded-full text-xs font-semibold">
                      <TrendingUp size={14} />
                      <span>Featured</span>
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <span className="inline-block px-2 py-0.5 mb-2 bg-gold-500/20 border border-gold-500/30 rounded-full text-gold-400 text-xs font-medium">
                      {featuredArticle.category}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold font-serif mb-2 text-white">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-base text-navy-200 mb-3 max-w-2xl">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="flex items-center space-x-4 text-navy-300 text-xs">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{featuredArticle.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{featuredArticle.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-gap">
          {regularArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.01 }}
              className="group"
            >
              <Link href={`/blog/${article.id}`}>
                <div className="relative overflow-hidden rounded-xl bg-navy-100 dark:bg-navy-800 border border-navy-200 dark:border-navy-700 hover:border-gold-500 transition-all cursor-pointer">
                  <div className="relative aspect-golden overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-0.5 bg-white/90 dark:bg-navy-900/90 backdrop-blur-md rounded-full text-xs font-semibold text-navy-900 dark:text-white">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold mb-2 text-navy-900 dark:text-white group-hover:text-gold-500 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-navy-600 dark:text-navy-300 mb-3 text-xs">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 text-xs text-navy-500 dark:text-navy-400">
                        <div className="flex items-center space-x-1">
                          <Calendar size={12} />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock size={12} />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <ArrowRight className="text-gold-500 group-hover:translate-x-1 transition-transform" size={18} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

