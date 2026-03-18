"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight, User, Clock, Search, Star } from "lucide-react";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import { fetchBlogs } from "@/data/blogData";
import { useState, useEffect } from "react";
import type { BlogPost } from "@/data/blogData";

const BlogListingPage = () => {
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [blogs, setBlogs] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadBlogs = async () => {
            const fetchedBlogs = await fetchBlogs();
            setBlogs(fetchedBlogs);
            setLoading(false);
        };
        loadBlogs();
    }, []);

    const categories = ["All", ...new Set(blogs.map(b => b.category))];

    const filteredBlogs = blogs.filter(b => {
        const matchesSearch = b.title.toLowerCase().includes(search.toLowerCase()) ||
            b.excerpt.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = selectedCategory === "All" || b.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    if (loading) {
        return (
            <div className="min-h-screen bg-background pt-24 pb-20">
                <div className="container mx-auto px-4 text-center">
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary"></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <main className="bg-background min-h-screen">
            <PageHeader
                title="Smotvisa Travel Blog"
                description="Expert insights, visa guides, and travel inspiration to help you navigate the world with confidence."
                breadcrumbs={[{ label: "Blog" }]}
            />

            <section className="py-20 pb-24">
                <div className="container mx-auto px-4">
                    {/* Filters & Search */}
                    <div className="flex flex-col lg:flex-row gap-8 justify-between items-center mb-16">
                        <div className="flex flex-wrap justify-center gap-3">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-8 py-3 rounded-full text-xs font-display font-bold transition-all border ${selectedCategory === cat
                                            ? "bg-secondary text-secondary-foreground border-secondary shadow-gold"
                                            : "bg-card text-muted-foreground border-border hover:border-secondary/30 hover:text-secondary"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                        <div className="relative w-full lg:w-96">
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full pl-14 pr-6 py-4 rounded-2xl border border-border bg-card font-body text-sm focus:ring-2 focus:ring-secondary/30 outline-none transition-all shadow-sm"
                            />
                        </div>
                    </div>

                    {/* Blog Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {filteredBlogs.map((blog, idx) => (
                            <motion.article
                                key={blog.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group bg-card rounded-3xl overflow-hidden shadow-card border border-border hover:shadow-elevated transition-all duration-300 flex flex-col h-full"
                            >
                                <Link href={`/blog/${blog.id}`} className="block overflow-hidden h-64 relative">
                                    <img
                                        src={blog.image.startsWith('http') ? blog.image : 'https://picsum.photos/seed/' + blog.id + '/800/600'}
                                        alt={blog.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-gold">
                                        {blog.category}
                                    </div>
                                </Link>

                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-muted-foreground text-xs font-body mb-4">
                                        <div className="flex items-center gap-1.5 font-semibold">
                                            <Calendar className="h-3.5 w-3.5 text-secondary" />
                                            {blog.date}
                                        </div>
                                        <div className="flex items-center gap-1.5 font-semibold">
                                            <Clock className="h-3.5 w-3.5 text-secondary" />
                                            {blog.readTime} read
                                        </div>
                                    </div>

                                    <Link href={`/blog/${blog.id}`}>
                                        <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-4 group-hover:text-secondary transition-colors line-clamp-2 leading-tight">
                                            {blog.title}
                                        </h3>
                                    </Link>
                                    <p className="text-muted-foreground font-body text-sm leading-relaxed mb-8 line-clamp-3">
                                        {blog.excerpt.replace(/<[^>]*>/g, '').replace(/&hellip;/g, '...')}
                                    </p>

                                    <div className="mt-auto pt-6 border-t border-border flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-xs font-bold text-foreground/80">
                                            <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                                                <User className="h-4 w-4 text-secondary" />
                                            </div>
                                            {blog.author}
                                        </div>
                                        <Link
                                            href={`/blog/${blog.id}`}
                                            className="inline-flex items-center gap-2 text-sm font-bold text-secondary hover:translate-x-2 transition-all"
                                        >
                                            View Full Article <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    {filteredBlogs.length === 0 && (
                        <div className="text-center py-32 bg-muted/20 rounded-[3rem] border-2 border-dashed border-border">
                            <p className="text-xl text-muted-foreground font-display font-bold italic">No articles match your criteria. Try another search!</p>
                            <button
                                onClick={() => { setSearch(""); setSelectedCategory("All") }}
                                className="mt-6 text-secondary font-bold underline"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-grid-white" />
                <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
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
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default BlogListingPage;
