import { Star } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import JsonLd from "@/components/ui/JsonLd";
import { getBlogSummaries } from "@/data/blogData";
import dynamic from "next/dynamic";

const BlogClient = dynamic(() => import("@/components/blog/BlogClient"));
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog for Visa, International Travel Tips Flight Booking | Smotvisa",
    description: "Smotvisa blog for visa guides, international travel tips, and air ticket booking advice to help you plan smooth, affordable, and stress-free trips worldwide.",
    keywords: [
        "travel blog India",
        "visa guides",
        "travel tips",
        "SmotVisa blog",
        "visa processing tips",
        "travel inspiration"
    ],
    alternates: {
        canonical: "https://smotvisa.com/blog",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Visa Guides & Travel Tips | SmotVisa Blog",
        description:
            "Expert visa guides, international travel tips, and air ticket booking advice from SmotVisa.",
        url: "https://smotvisa.com/blog",
        siteName: "SmotVisa",
        images: ["/images/hero-travel-CJWf8Tv1.webp"],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Visa Guides & Travel Tips | SmotVisa Blog",
        description:
            "Expert visa guides, international travel tips, and air ticket booking advice from SmotVisa.",
        images: ["/images/hero-travel-CJWf8Tv1.webp"],
    },
    authors: [{ name: "SmotVisa Team" }],
    publisher: "SmotVisa",
};

export default function BlogListingPage() {
    const blogs = getBlogSummaries();

    return (
        <main className="bg-background min-h-screen">
            <JsonLd data={{
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://smotvisa.com/" },
                    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://smotvisa.com/blog" }
                ]
            }} />
            <PageHeader
                title="Find out our variety of news on visa and travel"
                description="Expert insights, visa guides, and travel inspiration to help you navigate the world with confidence."
                breadcrumbs={[{ label: "Blog" }]}
            />

            <BlogClient blogs={blogs} />

            {/* Newsletter CTA */}
            <section className="py-14 bg-gradient-to-r from-primary via-primary-light to-secondary text-primary-foreground relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-grid-white" />
                <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl px-4">
                    <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full shadow-sm mb-8 border border-white/20">
                        <Star className="h-4 w-4 text-secondary" fill="currentColor" />
                        <span className="text-xs font-bold text-white uppercase tracking-widest">Never Miss an Update</span>
                    </div>
                    <h2 className="text-3xl md:text-6xl font-display font-bold mb-6">Join Our Travel Community</h2>
                    <p className="text-xl font-body text-primary-foreground/70 mb-12 leading-relaxed max-w-2xl mx-auto">
                        Subscribe to receive the latest visa news, expert travel tips, and special offers directly in your inbox.
                    </p>
                    <a
                        href="https://wa.me/919036329410?text=Hi%20SmotVisa%2C%20I%27d%20like%20to%20subscribe%20to%20your%20newsletter"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-secondary text-secondary-foreground font-bold px-12 py-5 rounded-full hover:shadow-gold transition-all"
                    >
                        Subscribe via WhatsApp
                    </a>
                </div>
            </section>
        </main>
    );
}