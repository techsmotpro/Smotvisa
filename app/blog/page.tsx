import { Star } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import { fetchBlogs } from "@/data/blogData";
import BlogClient from "@/components/blog/BlogClient";

export const metadata = {
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

  authors: [{ name: "SmotVisa Team" }],
  publisher: "SmotVisa",

  openGraph: {
    title: "Blog for Visa, International Travel Tips Flight Booking | Smotvisa",
    description: "Smotvisa blog for visa guides, international travel tips, and air ticket booking advice to help you plan smooth, affordable, and stress-free trips worldwide.",
    url: "https://smotvisa.com/blog",
    siteName: "SmotVisa",
    images: ["/images/hero-travel-CJWf8Tv1.jpg"],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Blog for Visa, International Travel Tips Flight Booking | Smotvisa",
    description: "Smotvisa blog for visa guides, international travel tips, and air ticket booking advice to help you plan smooth, affordable, and stress-free trips worldwide.",
  }
};

export default async function BlogListingPage() {
    const blogs = await fetchBlogs();

    return (
        <main className="bg-background min-h-screen">
            <PageHeader
                title="SmotVisa Travel Blog"
                description="Expert insights, visa guides, and travel inspiration to help you navigate the world with confidence."
                breadcrumbs={[{ label: "Blog" }]}
            />

            <BlogClient blogs={blogs} />

            {/* Newsletter CTA */}
            <section className="py-24 bg-gradient-to-r from-primary via-primary-light to-secondary text-primary-foreground relative overflow-hidden">
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
                    <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="bg-white/5 border border-white/20 rounded-full px-10 py-5 flex-grow outline-none focus:ring-2 focus:ring-secondary/50 transition-all font-body text-white placeholder:text-white/40 shadow-sm"
                        />
                        <button className="bg-secondary text-secondary-foreground font-bold px-12 py-5 rounded-full hover:shadow-gold transition-all">
                            Subscribe Now
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
