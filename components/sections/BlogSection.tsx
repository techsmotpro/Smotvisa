import { MotionDiv } from "@/components/ui/MotionWrapper";
import { Calendar, ArrowRight, User, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { fetchBlogs } from "@/data/blogData";

const BlogSection = async () => {
    const fetchedBlogs = await fetchBlogs();
    const blogs = fetchedBlogs.slice(0, 3); // Show only 3 blogs in the section

    return (
        <section id="blog" className="py-12 bg-background">
            <div className="container mx-auto px-4">
                <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-body font-semibold text-secondary uppercase tracking-widest">Our Blog</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-4">
                        Travel Tips & Insights
                    </h2>
                    <p className="text-muted-foreground font-body max-w-2xl mx-auto">
                        Stay updated with the latest visa requirements, travel guides, and destination tips.
                    </p>
                </MotionDiv>

                <div className="grid md:grid-cols-3 gap-8">
                    {blogs.map((blog, idx) => (
                        <MotionDiv
                            key={blog.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group bg-card rounded-2xl overflow-hidden shadow-card border border-border hover:shadow-elevated transition-all duration-300"
                        >
                            <div className="relative overflow-hidden aspect-video">
                                <Link href={`/blog/${blog.slug || blog.id}`} className="block w-full h-full">
                                    <Image
                                        src={blog.image || 'https://picsum.photos/seed/' + blog.id + '/800/450'}
                                        alt={blog.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </Link>
                                <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-secondary text-secondary-foreground text-xs font-body font-bold rounded-full pointer-events-none">
                                    {blog.category}
                                </span>
                            </div>
                            <div className="p-6">
                                <Link href={`/blog/${blog.slug || blog.id}`}>
                                    <h3 className="text-lg font-display font-bold text-foreground mb-2 group-hover:text-secondary transition-colors line-clamp-2">
                                        {blog.title}
                                    </h3>
                                </Link>
                                <p className="text-sm font-body text-muted-foreground mb-4 line-clamp-2">{blog.excerpt}</p>
                                <div className="flex items-center justify-between text-xs font-body text-muted-foreground">
                                    <div className="flex items-center gap-1">
                                        <User className="h-3 w-3" /> {blog.author}
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="h-3 w-3" /> {blog.date}
                                        </div>
                                        <div className="hidden sm:flex items-center gap-1">
                                            <Clock className="h-3 w-3" /> {blog.readTime}
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 pt-4 border-t border-border flex justify-end">
                                    <Link href={`/blog/${blog.slug || blog.id}`} className="text-xs font-bold text-secondary flex items-center gap-1 hover:gap-2 transition-all">
                                        Read Story <ArrowRight className="h-3 w-3" />
                                    </Link>
                                </div>
                            </div>
                        </MotionDiv>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-secondary/10 text-secondary font-body font-bold rounded-full hover:bg-secondary/20 transition-all"
                    >
                        Browse All Insights <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
