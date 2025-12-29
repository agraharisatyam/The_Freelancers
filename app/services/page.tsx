import { Metadata } from "next";
import ServicesDetail from "@/components/services/ServicesDetail";
import PricingPackages from "@/components/services/PricingPackages";
import BenefitsSection from "@/components/services/BenefitsSection";
import QuoteCalculator from "@/components/services/QuoteCalculator";

export const metadata: Metadata = {
  title: "Our Services | Premium Freelancing Solutions",
  description: "Comprehensive services including web development, graphic design, consulting, and more. Transparent pricing and proven results.",
};

export default function ServicesPage() {
  return (
    <>
      <div className="pt-32 pb-20 bg-gradient-to-br from-navy-900 to-navy-800 dark:from-navy-950 dark:to-navy-900">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6 text-white">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-navy-200 max-w-2xl mx-auto">
            Comprehensive solutions tailored to elevate your business
          </p>
        </div>
      </div>
      <ServicesDetail />
      <PricingPackages />
      <BenefitsSection />
      <QuoteCalculator />
    </>
  );
}

