import { getBlogs, getBlogBySlug } from "@/data/blogData";
import { notFound } from "next/navigation";
import BlogDetailClient from "@/components/blog/BlogDetailClient";
import JsonLd from "@/components/ui/JsonLd";
import type { Metadata } from "next";

export function generateStaticParams() {
    const blogs = getBlogs();
    return blogs.map((blog) => ({
        slug: blog.slug || blog.id,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const blog = getBlogBySlug(slug);

    if (!blog) return {};

    const plainExcerpt = blog.metaDescription || blog.excerpt.replace(/<[^>]*>/g, "").substring(0, 160);
    const image = blog.image.startsWith("http") ? blog.image : `https://smotvisa.com${blog.image}`;

    return {
        title: blog.seoTitle || `${blog.title} | SmotVisa Blog`,
        description: plainExcerpt,
        keywords: [blog.title, blog.category || "visa blog", "SmotVisa blog", "visa tips", "travel guide"].filter(Boolean),
        alternates: {
            canonical: `https://smotvisa.com/blog/${slug}`,
        },
        robots: {
            index: true,
            follow: true,
        },
        openGraph: {
            title: blog.title,
            description: plainExcerpt,
            url: `https://smotvisa.com/blog/${slug}`,
            siteName: "SmotVisa",
            images: [image],
            type: "article",
            publishedTime: blog.date,
            authors: [blog.author || "SmotVisa Team"],
        },
        twitter: {
            card: "summary_large_image",
            title: blog.title,
            description: plainExcerpt,
            images: [image],
        },
    };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const blog = getBlogBySlug(slug);

    if (!blog) {
        notFound();
    }

    const image = blog.image.startsWith("http") ? blog.image : `https://smotvisa.com${blog.image}`;

    return (
        <>
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    headline: blog.title,
                    description: blog.excerpt.replace(/<[^>]*>/g, ""),
                    image: image,
                    author: {
                        "@type": "Person",
                        name: blog.author || "SmotVisa Team",
                    },
                    publisher: {
                        "@type": "Organization",
                        name: "SmotVisa",
                        logo: {
                            "@type": "ImageObject",
                            url: "https://smotvisa.com/logo.png",
                        },
                    },
                    datePublished: blog.date,
                    dateModified: blog.updatedAt || blog.date,
                    mainEntityOfPage: {
                        "@type": "WebPage",
                        "@id": `https://smotvisa.com/blog/${slug}`,
                    },
                }}
            />
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    itemListElement: [
                        { "@type": "ListItem", position: 1, name: "Home", item: "https://smotvisa.com/" },
                        { "@type": "ListItem", position: 2, name: "Blog", item: "https://smotvisa.com/blog" },
                        {
                            "@type": "ListItem",
                            position: 3,
                            name: blog.title,
                            item: `https://smotvisa.com/blog/${slug}`,
                        },
                    ],
                }}
            />
            {blog.faq && blog.faq.length > 0 && (
                <JsonLd
                    data={{
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: blog.faq.map((item) => ({
                            "@type": "Question",
                            name: item.question,
                            acceptedAnswer: {
                                "@type": "Answer",
                                text: item.answer,
                            },
                        })),
                    }}
                />
            )}
            <BlogDetailClient blog={blog} />
        </>
    );
}