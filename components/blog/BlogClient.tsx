"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, User, Clock, Search, Star } from "lucide-react";
import Link from "next/link";
import type { BlogPost } from "@/data/blogData";

export default function BlogClient({ blogs }: { blogs: BlogPost[] }) {
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Extract all possible categories from all fields (category, category_names, tagname)
    const extractCategories = (blog: BlogPost): string[] => {
        const categories: string[] = [];
        
        if (blog.category) {
            categories.push(blog.category);
        }
        
        if (blog.category_names) {
            if (typeof blog.category_names === 'string') {
                categories.push(blog.category_names);
            } else {
                categories.push(...blog.category_names);
            }
        }
        
        if (blog.tagname) {
            if (typeof blog.tagname === 'string') {
                categories.push(blog.tagname);
            } else {
                categories.push(...blog.tagname);
            }
        }
        
        return categories.filter(Boolean);
    };

    // Get unique categories from all blogs
    const categories = ["All", ...new Set(blogs.flatMap(extractCategories))];

    const filteredBlogs = blogs.filter(b => {
        const matchesSearch = b.title.toLowerCase().includes(search.toLowerCase()) ||
            b.excerpt.toLowerCase().includes(search.toLowerCase());
        
        if (selectedCategory === "All") {
            return matchesSearch;
        }
        
        // Check if blog matches selected category in any of the category fields
        const blogCategories = extractCategories(b);
        return matchesSearch && blogCategories.some(cat => 
            cat.toLowerCase() === selectedCategory.toLowerCase()
        );
    });

    return (
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
                            initial={{ opacity: 1, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group bg-card rounded-3xl overflow-hidden shadow-card border border-border hover:shadow-elevated transition-all duration-300 flex flex-col h-full"
                        >
                            <Link href={`/blog/${blog.slug || blog.id}`} className="block overflow-hidden h-64 relative">
                                <img
                                    src={blog.image || 'https://picsum.photos/seed/' + blog.id + '/800/600'}
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

                                <Link href={`/blog/${blog.slug || blog.id}`}>
                                    <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-4 group-hover:text-secondary transition-colors line-clamp-2 leading-tight">
                                        {blog.title}
                                    </h3>
                                </Link>
                                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-8 line-clamp-3">
                                    {blog.excerpt}
                                </p>

                                <div className="mt-auto pt-6 border-t border-border flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-xs font-bold text-foreground/80">
                                        <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                                            <User className="h-4 w-4 text-secondary" />
                                        </div>
                                        {blog.author}
                                    </div>
                                    <Link
                                        href={`/blog/${blog.slug || blog.id}`}
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
                    <div className="text-center py-32 bg-secondary/5 rounded-[3rem] border-2 border-dashed border-border/50">
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
    );
}
