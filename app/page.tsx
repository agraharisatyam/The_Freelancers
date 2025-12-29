import Hero from "@/components/home/Hero";
import ServicesTeaser from "@/components/home/ServicesTeaser";
import PortfolioCarousel from "@/components/home/PortfolioCarousel";
import Testimonials from "@/components/home/Testimonials";
import NewsletterSignup from "@/components/home/NewsletterSignup";
import TrustBadges from "@/components/home/TrustBadges";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <ServicesTeaser />
      <PortfolioCarousel />
      <Testimonials />
      <NewsletterSignup />
    </>
  );
}

