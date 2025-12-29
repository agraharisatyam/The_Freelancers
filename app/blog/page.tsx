import { Metadata } from "next";
import BlogGrid from "@/components/blog/BlogGrid";

export const metadata: Metadata = {
  title: "Blog & Resources | Insights, Tips & Industry News",
  description: "Stay updated with the latest insights, tips, and industry news from our expert team.",
};

export default function BlogPage() {
  return (
    <div className="pt-32 pb-20 bg-gradient-to-br from-navy-900 to-navy-800 dark:from-navy-950 dark:to-navy-900">
      <div className="container-custom text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6 text-white">
          Blog & <span className="gradient-text">Resources</span>
        </h1>
        <p className="text-xl text-navy-200 max-w-2xl mx-auto">
          Insights, tips, and industry news to help you succeed
        </p>
      </div>
      <BlogGrid />
    </div>
  );
}

