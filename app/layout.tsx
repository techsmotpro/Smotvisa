import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Script from "next/script";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Smart Pro Visa | Visa, Tours & Travel Made Easy",
  description:
    "Smart Pro Visa helps you travel hassle-free with expert visa processing for US, UK, GCC & 50+ countries, flight bookings, tour packages, and 24/7 support.",
  openGraph: {
    title: "Smart Pro Visa | Hassle-Free Visa & Travel Services",
    description:
      "Expert visa processing for US, UK, GCC & 50+ countries. Flight bookings, tour packages, and 24/7 support.",
    type: "website",
    images: ["/newlogo.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@SmartProVisa",
    images: ["/newlogo.png"],
  },
  icons: {
    icon: "/assets/small--Y9qzfea.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="antialiased">
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />

        {/* Tawk Script */}
        <Script
          id="tawk"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/5d403f11e5ae967ef80d7fdd/default';
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
