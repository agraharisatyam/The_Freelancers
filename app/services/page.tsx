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
      <div className="pt-20 md:pt-24 pb-10 md:pb-12 bg-gradient-to-br from-navy-900 to-navy-800 dark:from-navy-950 dark:to-navy-900">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-4xl font-bold font-serif mb-3 md:mb-4 text-white">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-base md:text-lg text-navy-200 max-w-2xl mx-auto">
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

