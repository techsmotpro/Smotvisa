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
    icon: "/assets/small--Y9qzfea.png",
  },
};

import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Suspense } from "react";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="antialiased">
        <TooltipProvider>
          <Suspense fallback={<div className="h-16 bg-primary" />}>
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
