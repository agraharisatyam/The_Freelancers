import { Metadata } from "next";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio | Our Best Work & Case Studies",
  description: "Explore our portfolio of stunning projects across web development, graphic design, and more. See real results from satisfied clients.",
};

export default function PortfolioPage() {
  return (
    <div className="pt-20 md:pt-24 pb-10 md:pb-12 bg-gradient-to-br from-navy-900 to-navy-800 dark:from-navy-950 dark:to-navy-900">
      <div className="container-custom text-center mb-10 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-bold font-serif mb-3 md:mb-4 text-white">
          Our <span className="gradient-text">Portfolio</span>
        </h1>
        <p className="text-base md:text-lg text-navy-200 max-w-2xl mx-auto">
          Showcasing excellence in every project
        </p>
      </div>
      <PortfolioGrid />
    </div>
  );
}

