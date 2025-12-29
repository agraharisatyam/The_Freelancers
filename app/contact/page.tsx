import { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch",
  description: "Have a project in mind? Get in touch with us today. We're here to help bring your vision to life.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20 bg-gradient-to-br from-navy-900 to-navy-800 dark:from-navy-950 dark:to-navy-900">
      <div className="container-custom text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6 text-white">
          Get in <span className="gradient-text">Touch</span>
        </h1>
        <p className="text-xl text-navy-200 max-w-2xl mx-auto">
          Have a project in mind? Let's discuss how we can help bring your vision to life.
        </p>
      </div>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}

