import { MetadataRoute } from "next";
import { getBlogs } from "@/data/blogData";

const BASE_URL = "https://smotvisa.com";

export default function sitemap(): MetadataRoute.Sitemap {
    const blogs = getBlogs();
    const buildDate = new Date();

    const mostRecentBlogDate = blogs.reduce<Date>((latest, blog) => {
        const d = new Date(blog.date);
        return d > latest ? d : latest;
    }, new Date(0));

    const staticPages: MetadataRoute.Sitemap = [
        { url: BASE_URL, lastModified: buildDate, changeFrequency: "daily", priority: 1.0 },
        { url: `${BASE_URL}/about`, lastModified: buildDate, changeFrequency: "monthly", priority: 0.6 },
        { url: `${BASE_URL}/services`, lastModified: buildDate, changeFrequency: "weekly", priority: 0.9 },
        { url: `${BASE_URL}/services/air-ticketing`, lastModified: buildDate, changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE_URL}/services/tours`, lastModified: buildDate, changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE_URL}/visa`, lastModified: buildDate, changeFrequency: "weekly", priority: 0.9 },
        { url: `${BASE_URL}/visa/us-visa-consultant`, lastModified: buildDate, changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE_URL}/visa/uk-visa-consultant`, lastModified: buildDate, changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE_URL}/visa/canada-visa-consultant`, lastModified: buildDate, changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE_URL}/visa/australia-visa-consultant`, lastModified: buildDate, changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE_URL}/visa/uae-visa-consultant`, lastModified: buildDate, changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE_URL}/visa/schengen-visa-consultant`, lastModified: buildDate, changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE_URL}/blog`, lastModified: mostRecentBlogDate, changeFrequency: "weekly", priority: 0.7 },
        { url: `${BASE_URL}/contact`, lastModified: buildDate, changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE_URL}/reachout`, lastModified: buildDate, changeFrequency: "monthly", priority: 0.6 },
        { url: `${BASE_URL}/privacy-policy`, lastModified: buildDate, changeFrequency: "yearly", priority: 0.3 },
        { url: `${BASE_URL}/terms-of-service`, lastModified: buildDate, changeFrequency: "yearly", priority: 0.3 },
        // Office pages
        { url: `${BASE_URL}/contact/mumbai/visa-agents-in-bandra-east`, lastModified: buildDate, changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE_URL}/contact/mumbai/visa-agents-in-kandivali`, lastModified: buildDate, changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE_URL}/contact/mumbai/visa-agents-in-goregaon-east`, lastModified: buildDate, changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE_URL}/contact/pune/visa-agents-in-shivaji-nagar`, lastModified: buildDate, changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE_URL}/contact/pune/visa-agents-in-yerwada`, lastModified: buildDate, changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE_URL}/contact/delhi/visa-agents-in-connaught-place`, lastModified: buildDate, changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE_URL}/contact/visakhapatnam/visa-agents-in-walter`, lastModified: buildDate, changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE_URL}/contact/bangalore/visa-agents-in-cv-raman-nagar`, lastModified: buildDate, changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE_URL}/contact/ahmedabad/visa-agents-in-ahmedabad`, lastModified: buildDate, changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE_URL}/contact/jaipur/visa-agents-in-jaipur`, lastModified: buildDate, changeFrequency: "monthly", priority: 0.7 },
        // Bangalore neighbourhood pages
        { url: `${BASE_URL}/visa-agents-in-bangalore`, lastModified: buildDate, changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE_URL}/visa-agents-in-hsr-layout`, lastModified: buildDate, changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE_URL}/visa-agents-in-indiranagar`, lastModified: buildDate, changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE_URL}/visa-agents-in-jayanagar`, lastModified: buildDate, changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE_URL}/visa-agents-in-koramangala`, lastModified: buildDate, changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE_URL}/visa-agents-in-kr-puram`, lastModified: buildDate, changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE_URL}/visa-agents-in-marathahalli`, lastModified: buildDate, changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE_URL}/visa-agents-in-whitefield`, lastModified: buildDate, changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE_URL}/visa-agents-in-electronic-city`, lastModified: buildDate, changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE_URL}/visa-agents-in-bellandur`, lastModified: buildDate, changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE_URL}/visa-agents-in-jp-nagar`, lastModified: buildDate, changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE_URL}/visa-agents-in-sarjapur-road`, lastModified: buildDate, changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE_URL}/visa-agents-in-btm-layout`, lastModified: buildDate, changeFrequency: "monthly", priority: 0.7 },
    ];

    const blogPages: MetadataRoute.Sitemap = blogs.map((blog) => ({
        url: `${BASE_URL}/blog/${blog.slug}`,
        lastModified: new Date(blog.date),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    return [...staticPages, ...blogPages];
}
