import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "../components/layout/Footer";
import dynamic from "next/dynamic";
import { Toaster } from "@/components/ui/toaster";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import JsonLd from "@/components/ui/JsonLd";
import TawkChat from "@/components/TawkChat";

const FloatingCTA = dynamic(() => import("@/components/ui/FloatingCTA"));

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
};

export const metadata: Metadata = {
    metadataBase: new URL("https://smotvisa.com"),
    title: "SmotVisa | Visa and Travel Agency",
    description:
        "SmotVisa helps you travel hassle-free with expert visa processing for US, UK, Canada, Australia & 50+ countries. Your trusted partner for global mobility.",
    openGraph: {
        title: "SmotVisa | Visa and Travel Agency",
        description:
            "Expert visa processing for US, UK, Canada, Australia & 50+ countries. Hassle-free travel services and 24/7 support.",
        type: "website",
        images: [
            {
                url: "/images/hero-travel-CJWf8Tv1.webp",
                width: 1200,
                height: 630,
                alt: "SmotVisa - Expert Visa and Travel Services",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@SMOT_VISA",
        images: [
            {
                url: "/images/hero-travel-CJWf8Tv1.webp",
                width: 1200,
                height: 630,
                alt: "SmotVisa - Expert Visa and Travel Services",
            },
        ],
    },
    icons: {
        icon: [
            { url: "/favicon.ico", sizes: "32x32" },
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
        ],
        apple: "/apple-touch-icon.png",
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
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WVZ8TS5C');`
                    }}
                />
            </head>
            <body className="antialiased">
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-WVZ8TS5C"
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    />
                </noscript>
                <a
                    href="#main"
                    className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-[9999] focus:bg-secondary focus:text-secondary-foreground focus:px-4 focus:py-2"
                >
                    Skip to content
                </a>
                <JsonLd
                    data={{
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        name: "SmotVisa",
                        url: "https://smotvisa.com",
                        logo: "https://smotvisa.com/logo.png",
                        description:
                            "Expert visa processing for US, UK, Canada, Australia & 50+ countries. Your trusted partner for global mobility.",
                        sameAs: [
                            "https://www.facebook.com/smotvisa",
                            "https://www.instagram.com/smotvisa",
                            "https://www.linkedin.com/company/smotvisa",
                        ],
                        contactPoint: {
                            "@type": "ContactPoint",
                            telephone: "+91-8904008843",
                            contactType: "customer service",
                            areaServed: "IN",
                            availableLanguage: ["English", "Hindi"],
                        },
                    }}
                />
                <TooltipProvider>
                    <Suspense
                        fallback={
                            <nav className="fixed top-0 left-0 w-full z-[9999] bg-primary/95 shadow-card border-b border-primary-foreground/10">
                                <div className="container mx-auto flex items-center justify-between px-4 py-5">
                                    <a href="/" className="flex items-center gap-3">
                                        <span className="text-xl font-bold text-primary-foreground">
                                            SmotVisa
                                        </span>
                                    </a>
                                    <div className="hidden lg:flex items-center gap-2 font-body">
                                        <a
                                            href="/"
                                            className="px-4 py-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground rounded-lg hover:bg-primary-foreground/10 transition-all"
                                        >
                                            Home
                                        </a>
                                        <a
                                            href="/about"
                                            className="px-4 py-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground rounded-lg hover:bg-primary-foreground/10 transition-all"
                                        >
                                            About
                                        </a>
                                        <a
                                            href="/services"
                                            className="px-4 py-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground rounded-lg hover:bg-primary-foreground/10 transition-all"
                                        >
                                            Services
                                        </a>
                                        <a
                                            href="/visa"
                                            className="px-4 py-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground rounded-lg hover:bg-primary-foreground/10 transition-all"
                                        >
                                            Destinations
                                        </a>
                                        <a
                                            href="/contact"
                                            className="px-4 py-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground rounded-lg hover:bg-primary-foreground/10 transition-all"
                                        >
                                            Branches
                                        </a>
                                        <a
                                            href="/blog"
                                            className="px-4 py-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground rounded-lg hover:bg-primary-foreground/10 transition-all"
                                        >
                                            Blog
                                        </a>
                                    </div>
                                    <a
                                        href="tel:+918904008843"
                                        className="hidden xl:block px-6 py-2.5 bg-secondary text-secondary-foreground font-body font-bold rounded-full hover:opacity-90 transition-all shadow-gold whitespace-nowrap"
                                    >
                                        CALL NOW : +91-8904008843
                                    </a>
                                </div>
                            </nav>
                        }
                    >
                        <Navbar />
                    </Suspense>
                    <main id="main" className="pt-20">
                        {children}
                    </main>
                    <Footer />
                    <FloatingCTA />
                </TooltipProvider>
                <Toaster />
                <Sonner />
                <TawkChat />
            </body>
        </html>
    );
}