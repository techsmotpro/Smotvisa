import type { MetadataRoute } from "next";
import { fetchBlogs } from "@/data/blogData";
import { visaCountries, services, branches, navLinks } from "@/data/navigationData";

export const revalidate = 86400; // Revalidate every 24 hours

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://smotvisa.com";
    const lastMod = new Date("2026-03-01");

    // 1. Core Static Pages
    const staticPages: MetadataRoute.Sitemap = [
        "/", "/about", "/services", "/visa", "/blog", "/contact", "/visa-checker",
        "/visa-agents-in-bangalore"
    ].map(path => ({
        url: `${baseUrl}${path}`,
        lastModified: lastMod,
        changeFrequency: path === "/" ? ("daily" as const) : ("weekly" as const),
        priority: path === "/" ? 1.0 : 0.8,
    }));

    // 2. Dynamic Visa/Destinations (Automated from navigationData)
    const destinationPages: MetadataRoute.Sitemap = visaCountries.map(country => ({
        url: `${baseUrl}${country.href}`,
        lastModified: lastMod,
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    // 3. Dynamic Service Categories (Automated from navigationData)
    const servicePages: MetadataRoute.Sitemap = services.map(service => ({
        url: `${baseUrl}${service.href}`,
        lastModified: lastMod,
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    // 4. Dynamic Branch/Location Pages (Automated from branches list)
    // We flatten the submenus to get all specific location pages
    const flattenedBranches: string[] = [];
    branches.forEach(b => {
        if (b.href) flattenedBranches.push(b.href);
        if (b.submenu) b.submenu.forEach(s => flattenedBranches.push(s.href));
    });

    const locationPages: MetadataRoute.Sitemap = [...new Set(flattenedBranches)].map(path => ({
        url: `${baseUrl}${path}`,
        lastModified: lastMod,
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    // 5. 🔥 Dynamic Blogs (Fully Automated from API)
    const blogs = await fetchBlogs();
    const blogPages: MetadataRoute.Sitemap = blogs.map(blog => ({
        url: `${baseUrl}/blog/${blog.slug || blog.id}`,
        lastModified: new Date(blog.updatedAt || blog.createdAt || blog.date || Date.now()),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    return [
        ...staticPages,
        ...destinationPages,
        ...servicePages,
        ...locationPages,
        ...blogPages,
    ];
}
