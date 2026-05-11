import blogsData from "./blogs.json";

interface BlogPostRaw {
    id: string;
    slug?: string;
    image: string;
    category: string;
    category_names?: string | string[];
    tagname?: string | string[];
    title: string;
    excerpt: string;
    content: string;
    author: string;
    date: string;
    readTime: string;
    updatedAt?: string;
    createdAt?: string;
}

export interface BlogPost {
    id: string;
    slug: string;
    image: string;
    category: string;
    category_names: string[];
    tagname: string[];
    title: string;
    excerpt: string;
    content: string;
    author: string;
    date: string;
    readTime: string;
    updatedAt?: string;
    createdAt?: string;
}

export interface BlogPostSummary {
    id: string;
    slug: string;
    image: string;
    category: string;
    category_names: string[];
    tagname: string[];
    title: string;
    excerpt: string;
    author: string;
    date: string;
    readTime: string;
}

const blogs: BlogPost[] = (blogsData as BlogPostRaw[]).map((b) => ({
    id: b.id,
    slug: b.slug || b.id,
    image: b.image,
    category: b.category || "Travel",
    category_names: b.category_names
        ? Array.isArray(b.category_names)
            ? b.category_names
            : [b.category_names]
        : b.category
          ? [b.category]
          : [],
    tagname: b.tagname ? (Array.isArray(b.tagname) ? b.tagname : [b.tagname]) : [],
    title: b.title,
    excerpt: b.excerpt ? b.excerpt.replace(/<[^>]*>/g, "").replace(/&hellip;/g, "...") : "",
    content: b.content ? convertPlainTextToHtml(b.content) : "",
    author: b.author || "SmotVisa Team",
    date: b.date,
    readTime: b.readTime,
    updatedAt: b.updatedAt,
    createdAt: b.createdAt,
}));

export function getBlogs(): BlogPost[] {
    return blogs;
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
    return blogs.find((b) => b.slug === slug || b.id === slug);
}

export function getBlogSummaries(): BlogPostSummary[] {
    return blogs.map(({ content: _content, updatedAt: _updatedAt, createdAt: _createdAt, ...summary }) => summary);
}

function convertPlainTextToHtml(text: string): string {
    const paragraphs = text.split(/\n\n+/).filter((p) => p.trim());
    return paragraphs
        .map((paragraph) => {
            const formatted = paragraph.replace(/\n/g, "<br>");
            return `<p>${formatted}</p>`;
        })
        .join("");
}