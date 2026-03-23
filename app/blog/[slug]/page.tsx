import { fetchBlogBySlug, fetchBlogs } from "@/data/blogData";
import { notFound } from "next/navigation";
import BlogDetailClient from "@/components/blog/BlogDetailClient";
import type { Metadata } from "next";

export async function generateStaticParams() {
    const blogs = await fetchBlogs();
    return blogs.map((blog) => ({
        slug: blog.slug || blog.id,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const blog = await fetchBlogBySlug(slug);

    if (!blog) return {};

    const plainExcerpt = blog.excerpt.replace(/<[^>]*>/g, '').substring(0, 160);
    const image = blog.image.startsWith('http') ? blog.image : 'https://picsum.photos/seed/' + blog.id + '/1200/800';

    return {
        title: `${blog.title} | SMOT VISA Blog`,
        description: plainExcerpt,
        keywords: [
            "SMOT VISA blog",
            "visa guides",
            "travel tips",
            blog.category.toLowerCase(),
            "travel blog India"
        ],

        alternates: {
            canonical: `https://smotvisa.com/blog/${slug}`,
        },

        robots: {
            index: true,
            follow: true,
        },

        authors: [{ name: blog.author || "SMOT VISA Team" }],
        publisher: "SMOT VISA",

        openGraph: {
            title: blog.title,
            description: plainExcerpt,
            url: `https://smotvisa.com/blog/${slug}`,
            siteName: "SMOT VISA",
            images: [image],
            type: "article",
        },

        twitter: {
            card: "summary_large_image",
            title: blog.title,
            description: plainExcerpt,
            images: [image],
        }
    };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const blog = await fetchBlogBySlug(slug);

    if (!blog) {
        notFound();
    }

    return <BlogDetailClient blog={blog} />;
}
