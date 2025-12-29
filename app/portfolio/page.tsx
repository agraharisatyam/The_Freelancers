import { Metadata } from "next";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio | Our Best Work & Case Studies",
  description: "Explore our portfolio of stunning projects across web development, graphic design, and more. See real results from satisfied clients.",
};

export default function PortfolioPage() {
  return (
    <div className="pt-32 pb-20 bg-gradient-to-br from-navy-900 to-navy-800 dark:from-navy-950 dark:to-navy-900">
      <div className="container-custom text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6 text-white">
          Our <span className="gradient-text">Portfolio</span>
        </h1>
        <p className="text-xl text-navy-200 max-w-2xl mx-auto">
          Showcasing excellence in every project
        </p>
      </div>
      <PortfolioGrid />
    </div>
  );
}

