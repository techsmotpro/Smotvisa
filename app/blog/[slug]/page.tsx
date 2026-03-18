"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import Link from "next/link";
import { fetchBlogBySlug } from "@/data/blogData";
import { useState, useEffect } from "react";
import type { BlogPost } from "@/data/blogData";

const BlogDetailPage = () => {
    const params = useParams();
    const router = useRouter();
    const slug = params.slug as string;

    const [blog, setBlog] = useState<BlogPost | undefined>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadBlog = async () => {
            if (slug) {
                const fetchedBlog = await fetchBlogBySlug(slug);
                setBlog(fetchedBlog);
            }
            setLoading(false);
        };
        loadBlog();
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen bg-background pt-24 pb-20">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary"></div>
                    </div>
                </div>
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="py-40 text-center container mx-auto px-4 bg-background">
                <h2 className="text-3xl font-display font-bold mb-4 text-foreground">Article Not Found</h2>
                <p className="text-muted-foreground mb-8">Sorry, we couldn't find the article you're looking for.</p>
                <Link href="/" className="text-secondary font-bold hover:underline">Return to Home</Link>
            </div>
        );
    }

    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[65vh] min-h-[500px] overflow-hidden">
                <img
                    src={blog.image.startsWith('http') ? blog.image : 'https://picsum.photos/seed/' + blog.id + '/1200/800'}
                    alt={blog.title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="absolute inset-0 bg-primary/20" />

                <div className="container mx-auto px-4 absolute bottom-0 left-0 right-0 pb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-5xl"
                    >
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-secondary font-body font-bold mb-8 hover:translate-x-[-4px] transition-all"
                        >
                            <ArrowLeft className="h-4 w-4" /> Back to Home
                        </Link>
                        <div className="mb-6">
                            <span className="px-4 py-1.5 bg-secondary text-secondary-foreground text-xs font-body font-bold rounded-full uppercase tracking-widest shadow-gold">
                                {blog.category}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-8 leading-tight">
                            {blog.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-8 text-foreground/80 font-body text-base">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center border border-secondary/30">
                                    <User className="h-5 w-5 text-secondary" />
                                </div>
                                <span className="font-semibold">{blog.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="h-5 w-5 text-secondary" />
                                <span>{blog.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="h-5 w-5 text-secondary" />
                                <span>{blog.readTime} read</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="prose prose-lg prose-slate max-w-none font-body text-muted-foreground leading-relaxed 
                                      prose-headings:font-display prose-headings:font-bold prose-headings:text-foreground
                                      prose-strong:text-foreground prose-a:text-secondary hover:prose-a:underline"
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                        />

                        <div className="mt-20 pt-10 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6">
                            <div className="flex items-center gap-4">
                                <span className="text-sm font-bold text-foreground uppercase tracking-wider">Share this article:</span>
                                <div className="flex gap-2">
                                    <button className="p-3 rounded-full bg-muted hover:bg-secondary hover:text-secondary-foreground transition-all shadow-sm">
                                        <Share2 className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>
                            <Link
                                href="/"
                                className="px-10 py-4 bg-primary text-primary-foreground rounded-full text-base font-bold hover:opacity-90 transition-all shadow-card"
                            >
                                Explorer More Blogs
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogDetailPage;
