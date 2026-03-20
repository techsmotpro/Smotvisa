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

    return {
        title: `${blog.title} | SMOT VISA Blog`,
        description: blog.excerpt.replace(/<[^>]*>/g, '').substring(0, 160),
        openGraph: {
            title: blog.title,
            description: blog.excerpt.replace(/<[^>]*>/g, '').substring(0, 160),
            images: [blog.image.startsWith('http') ? blog.image : 'https://picsum.photos/seed/' + blog.id + '/1200/800'],
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
