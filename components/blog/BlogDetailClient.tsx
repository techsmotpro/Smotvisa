import { MotionDiv } from "@/components/ui/MotionWrapper";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";
import DOMPurify from "dompurify";
import type { BlogPost } from "@/data/blogData";
import { blogCtaMapping } from "@/data/blogCtaMapping";
import ShareButton from "./ShareButton";
import BlogCtaSection from "./BlogCtaSection";

export default function BlogDetailClient({ blog }: { blog: BlogPost }) {
    const sanitizedContent = useMemo(() => {
        const html = typeof window !== "undefined" ? DOMPurify.sanitize(blog.content) : blog.content;
        // Comparison tables are wider than the article column on phones. Give each one
        // its own scroll container so the table scrolls instead of the whole page.
        return html
            .replace(/<table/g, '<div class="overflow-x-auto my-8"><table')
            .replace(/<\/table>/g, "</table></div>");
    }, [blog.content]);

    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-black pt-28 pb-14">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-secondary blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary blur-[120px] rounded-full translate-x-1/2 translate-y-1/2" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <MotionDiv
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-secondary font-body font-bold mb-5 hover:translate-x-[-4px] transition-all"
                        >
                            <ArrowLeft className="h-4 w-4" /> Back to Blog
                        </Link>
                        <div className="mb-4">
                            <span className="px-4 py-1.5 bg-secondary text-secondary-foreground text-xs font-body font-bold rounded-full uppercase tracking-widest shadow-gold">
                                {blog.category}
                            </span>
                        </div>
                        <h1 className="text-2xl md:text-4xl font-display font-bold text-primary-foreground mb-5 leading-tight">
                            {blog.title}
                        </h1>
                        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-primary-foreground/75 font-body text-sm md:text-base">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full bg-secondary/20 flex items-center justify-center border border-secondary/30">
                                    <User className="h-4 w-4 text-secondary" />
                                </div>
                                <span className="font-semibold">{blog.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-secondary" />
                                <span>{blog.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-secondary" />
                                <span>{blog.readTime} read</span>
                            </div>
                        </div>
                    </MotionDiv>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-10">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="prose prose-lg prose-slate max-w-none font-body text-muted-foreground leading-relaxed
                                      prose-headings:font-display prose-headings:font-semibold prose-headings:text-foreground
                                      prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-3
                                      prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-2
                                      prose-p:mb-4 prose-li:mb-1
                                      prose-strong:font-semibold prose-strong:text-foreground/80
                                      prose-a:text-secondary prose-a:font-medium hover:prose-a:underline
                                      prose-img:rounded-[2rem] prose-img:shadow-elevated prose-img:mt-12 prose-img:mb-12
                                      prose-table:w-full prose-table:my-0 prose-table:text-sm prose-table:border-collapse
                                      prose-thead:bg-secondary/10 prose-thead:border-b-0
                                      prose-th:border prose-th:border-border prose-th:px-4 prose-th:py-3 prose-th:text-left
                                      prose-th:font-display prose-th:font-semibold prose-th:text-foreground
                                      prose-td:border prose-td:border-border prose-td:px-4 prose-td:py-3 prose-td:align-top
                                      [&_td>p]:m-0 [&_th>p]:m-0"
                            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
                        />

                        {blogCtaMapping[blog.slug || blog.id] && (
                            <BlogCtaSection cta={blogCtaMapping[blog.slug || blog.id]} />
                        )}

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

