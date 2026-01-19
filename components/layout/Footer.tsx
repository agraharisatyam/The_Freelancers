"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
  resources: [
    { name: "FAQ", href: "/faq" },
    { name: "Support", href: "/support" },
    { name: "Contact", href: "/contact" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const trustBadges = [
  "SSL Secured",
  "5-Star Rated on Clutch",
  "100+ Projects Delivered",
  "Member of AIGA",
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 text-black">
      <div className="container-custom section-padding py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-gap mb-6">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <div className="h-7 md:h-8 w-auto">
                <img
                  src="/Gemini_Generated_Image_los0s3los0s3los0.png"
                  alt="SAJSOFTWARES Logo"
                  className="h-full w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-gray-600 mb-4 text-xs leading-relaxed">
              Transforming visions into reality with expert freelancing services. Premium quality,
              stunning results.
            </p>
            <div className="space-y-1.5 text-xs text-gray-600">
              <div className="flex items-center space-x-2">
                <Mail size={14} className="flex-shrink-0" />
                <span>hello@freelancepro.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={14} className="flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={14} className="flex-shrink-0" />
                <span>123 Design Street, Creative City</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-2 text-sm">Company</h4>
            <ul className="space-y-1">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs text-gray-600 hover:text-gold-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-2 text-sm">Legal</h4>
            <ul className="space-y-1">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs text-gray-600 hover:text-gold-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-2 text-sm">Resources</h4>
            <ul className="space-y-1 mb-4">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs text-gray-600 hover:text-gold-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-1.5 bg-gray-100 rounded-full hover:bg-gold-500 transition-colors flex-shrink-0"
                    aria-label={social.label}
                  >
                    <Icon size={14} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-200 pt-4">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
            {trustBadges.map((badge) => (
              <motion.div
                key={badge}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium"
              >
                {badge}
              </motion.div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-xs">
            © {new Date().getFullYear()} SAJSOFTWARES. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

