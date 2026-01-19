import { Metadata } from "next";
import BlogGrid from "@/components/blog/BlogGrid";

export const metadata: Metadata = {
  title: "Blog & Resources | Insights, Tips & Industry News",
  description: "Stay updated with the latest insights, tips, and industry news from our expert team.",
};

export default function BlogPage() {
  return (
    <div className="pt-20 md:pt-24 pb-10 md:pb-12 bg-gradient-to-br from-navy-900 to-navy-800 dark:from-navy-950 dark:to-navy-900">
      <div className="container-custom text-center mb-10 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-bold font-serif mb-3 md:mb-4 text-white">
          Blog & <span className="gradient-text">Resources</span>
        </h1>
        <p className="text-base md:text-lg text-navy-200 max-w-2xl mx-auto">
          Insights, tips, and industry news to help you succeed
        </p>
      </div>
      <BlogGrid />
    </div>
  );
}

