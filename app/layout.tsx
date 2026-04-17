import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: "SmotVisa | Visa and Travel Agency",
  description:
    "SmotVisa helps you travel hassle-free with expert visa processing for US, UK, Canada, Australia & 50+ countries. Your trusted partner for global mobility.",
  openGraph: {
    title: "SmotVisa | Visa and Travel Agency",
    description:
      "Expert visa processing for US, UK, Canada, Australia & 50+ countries. Hassle-free travel services and 24/7 support.",
    type: "website",
    images: ["/assets/small--Y9qzfea.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@SMOT_VISA",
    images: ["/assets/small--Y9qzfea.png"],
  },
  icons: {
    icon: [
      { url: "/Fevicon.png", sizes: "16x16", type: "image/png" },
      { url: "/Fevicon.png", sizes: "32x32", type: "image/png" },
      { url: "/Fevicon.png", sizes: "48x48", type: "image/png" },
      { url: "/Fevicon.png", sizes: "64x64", type: "image/png" },
      { url: "/Fevicon.png", sizes: "128x128", type: "image/png" },
      { url: "/Fevicon.png", sizes: "256x256", type: "image/png" },
    ],
  },
};

import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Suspense } from "react";
import JsonLd from "@/components/ui/JsonLd";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="antialiased">
        <JsonLd data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "SmotVisa",
          "url": "https://smotvisa.com",
          "logo": "https://smotvisa.com/logo.png",
          "description": "Expert visa processing for US, UK, Canada, Australia & 50+ countries. Your trusted partner for global mobility.",
          "sameAs": [
            "https://www.facebook.com/smotvisa",
            "https://www.instagram.com/smotvisa",
            "https://www.linkedin.com/company/smotvisa"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-80-4567-8901",
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": ["English", "Hindi"]
          }
        }} />
        <TooltipProvider>
          <Suspense fallback={
            <nav className="fixed top-0 left-0 w-full z-[9999] bg-primary/95 shadow-card border-b border-primary-foreground/10">
              <div className="container mx-auto flex items-center justify-between px-4 py-5">
                <a href="/" className="flex items-center gap-3">
                  <span className="text-xl font-bold text-primary-foreground">SmotVisa</span>
                </a>
                <div className="hidden lg:flex items-center gap-2 font-body">
                  <a href="/" className="px-4 py-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground rounded-lg hover:bg-primary-foreground/10 transition-all">Home</a>
                  <a href="/about" className="px-4 py-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground rounded-lg hover:bg-primary-foreground/10 transition-all">About</a>
                  <a href="/services" className="px-4 py-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground rounded-lg hover:bg-primary-foreground/10 transition-all">Services</a>
                  <a href="/visa" className="px-4 py-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground rounded-lg hover:bg-primary-foreground/10 transition-all">Destinations</a>
                  <a href="/contact" className="px-4 py-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground rounded-lg hover:bg-primary-foreground/10 transition-all">Branches</a>
                  <a href="/blog" className="px-4 py-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground rounded-lg hover:bg-primary-foreground/10 transition-all">Blog</a>
                  <a href="/visa-checker" className="px-4 py-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground rounded-lg hover:bg-primary-foreground/10 transition-all">Visa Checker</a>
                </div>
                <a href="/contact" className="hidden xl:block px-6 py-2.5 bg-secondary text-secondary-foreground font-body font-bold rounded-full hover:opacity-90 transition-all shadow-gold whitespace-nowrap">Get a Quote</a>
              </div>
            </nav>
          }>
            <Navbar />
          </Suspense>
          <main className="pt-20">
            {children}
          </main>
          <Footer />
        </TooltipProvider>
        <Toaster />
        <Sonner />
        <Script
          id="tawk"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/69c2446229e9681c3d64dff1/1jkfdm932';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
