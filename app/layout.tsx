import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import DarkModeProvider from "@/components/providers/DarkModeProvider";
import SchemaMarkup from "@/components/layout/SchemaMarkup";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SAJSOFTWARES | Premium Freelancing Services | Transform Your Vision into Reality",
  description: "Professional freelancing company specializing in web development, graphic design, and consulting. Stunning visuals, expert craftsmanship, and proven results.",
  keywords: "freelancing, web development, graphic design, consulting, professional services, SAJSOFTWARES",
  authors: [{ name: "SAJSOFTWARES" }],
  openGraph: {
    title: "SAJSOFTWARES - Premium Freelancing Services",
    description: "Transform your vision into reality with our expert freelancing services",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${playfair.variable} font-sans antialiased`}>
        <DarkModeProvider>
          <SchemaMarkup />
          <SmoothScroll>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </SmoothScroll>
        </DarkModeProvider>
      </body>
    </html>
  );
}

