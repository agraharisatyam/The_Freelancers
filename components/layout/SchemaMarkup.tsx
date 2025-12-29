"use client";

import { useEffect } from "react";

export default function SchemaMarkup() {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "FreelancePro",
      description:
        "Premium freelancing services specializing in web development, graphic design, and business consulting",
      url: "https://freelancepro.com",
      logo: "https://freelancepro.com/logo.png",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-555-123-4567",
        contactType: "Customer Service",
        email: "hello@freelancepro.com",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "123 Design Street",
        addressLocality: "Creative City",
        addressRegion: "CC",
        postalCode: "12345",
        addressCountry: "US",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "100",
      },
      priceRange: "$$",
      areaServed: "Worldwide",
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema);
    script.id = "schema-markup";
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById("schema-markup");
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
    };
  }, []);

  return null;
}

