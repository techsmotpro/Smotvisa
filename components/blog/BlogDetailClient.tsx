import { MotionDiv } from "@/components/ui/MotionWrapper";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import Link from "next/link";
import type { BlogPost } from "@/data/blogData";
import ShareButton from "./ShareButton";

export default function BlogDetailClient({ blog }: { blog: BlogPost }) {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[65vh] min-h-[500px] overflow-hidden">
                <img
                    src={blog.image || 'https://picsum.photos/seed/' + blog.id + '/1200/800'}
                    alt={blog.title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="absolute inset-0 bg-primary/20" />

                <div className="container mx-auto px-4 absolute bottom-0 left-0 right-0 pb-16">
                    <MotionDiv
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-5xl"
                    >
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-secondary font-body font-bold mb-8 hover:translate-x-[-4px] transition-all"
                        >
                            <ArrowLeft className="h-4 w-4" /> Back to Blog
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
                    </MotionDiv>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="prose prose-lg prose-slate max-w-none font-body text-muted-foreground leading-relaxed 
                                      prose-headings:font-display prose-headings:font-bold prose-headings:text-foreground
                                      prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-4 prose-h2:border-b prose-h2:border-border/50
                                      prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
                                      prose-p:mb-6 prose-li:mb-2
                                      prose-strong:font-semibold prose-strong:text-foreground/80
                                      prose-a:text-secondary prose-a:font-bold hover:prose-a:underline
                                      prose-img:rounded-[2rem] prose-img:shadow-elevated prose-img:mt-12 prose-img:mb-12"
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                        />

                        <div className="mt-20 pt-10 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6">
                            <div className="flex items-center gap-4">
                                <span className="text-sm font-bold text-foreground uppercase tracking-wider">Share this article:</span>
                                <div className="flex gap-2">
                                    <ShareButton title={blog.title} />
                                </div>
                            </div>
                            <Link
                                href="/blog"
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
}
