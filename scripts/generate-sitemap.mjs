import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const BASE_URL = "https://smotvisa.com";

const blogs = JSON.parse(readFileSync(resolve(ROOT, "data/blogs.json"), "utf-8"));
const buildDate = new Date().toISOString().split("T")[0];

function entry(url, lastmod, changefreq, priority) {
    return `  <url>\n    <loc>${url}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
}

function blogDate(dateStr) {
    const d = new Date(dateStr);
    return isNaN(d) ? buildDate : d.toISOString().split("T")[0];
}

const mostRecentBlog = blogs.reduce((latest, b) => {
    const d = new Date(b.id_date || b.date);
    return d > new Date(latest) ? blogDate(b.date) : latest;
}, "2000-01-01");

const staticEntries = [
    entry(BASE_URL, buildDate, "daily", "1.0"),
    entry(`${BASE_URL}/about`, buildDate, "monthly", "0.6"),
    entry(`${BASE_URL}/services`, buildDate, "weekly", "0.9"),
    entry(`${BASE_URL}/services/air-ticketing`, buildDate, "monthly", "0.8"),
    entry(`${BASE_URL}/services/tours`, buildDate, "monthly", "0.8"),
    entry(`${BASE_URL}/visa`, buildDate, "weekly", "0.9"),
    entry(`${BASE_URL}/visa/us-visa-consultant`, buildDate, "monthly", "0.8"),
    entry(`${BASE_URL}/visa/uk-visa-consultant`, buildDate, "monthly", "0.8"),
    entry(`${BASE_URL}/visa/canada-visa-consultant`, buildDate, "monthly", "0.8"),
    entry(`${BASE_URL}/visa/australia-visa-consultant`, buildDate, "monthly", "0.8"),
    entry(`${BASE_URL}/visa/uae-visa-consultant`, buildDate, "monthly", "0.8"),
    entry(`${BASE_URL}/visa/schengen-visa-consultant`, buildDate, "monthly", "0.8"),
    entry(`${BASE_URL}/blog`, mostRecentBlog, "weekly", "0.7"),
    entry(`${BASE_URL}/contact`, buildDate, "monthly", "0.8"),
    entry(`${BASE_URL}/reachout`, buildDate, "monthly", "0.6"),
    entry(`${BASE_URL}/privacy-policy`, buildDate, "yearly", "0.3"),
    entry(`${BASE_URL}/terms-of-service`, buildDate, "yearly", "0.3"),
    // Office pages
    entry(`${BASE_URL}/contact/mumbai/visa-agents-in-bandra-east`, buildDate, "monthly", "0.7"),
    entry(`${BASE_URL}/contact/mumbai/visa-agents-in-kandivali`, buildDate, "monthly", "0.7"),
    entry(`${BASE_URL}/contact/mumbai/visa-agents-in-goregaon-east`, buildDate, "monthly", "0.7"),
    entry(`${BASE_URL}/contact/pune/visa-agents-in-shivaji-nagar`, buildDate, "monthly", "0.7"),
    entry(`${BASE_URL}/contact/pune/visa-agents-in-yerwada`, buildDate, "monthly", "0.7"),
    entry(`${BASE_URL}/contact/delhi/visa-agents-in-connaught-place`, buildDate, "monthly", "0.7"),
    entry(`${BASE_URL}/contact/visakhapatnam/visa-agents-in-walter`, buildDate, "monthly", "0.7"),
    entry(`${BASE_URL}/contact/bangalore/visa-agents-in-cv-raman-nagar`, buildDate, "monthly", "0.7"),
    entry(`${BASE_URL}/contact/ahmedabad/visa-agents-in-ahmedabad`, buildDate, "monthly", "0.7"),
    entry(`${BASE_URL}/contact/jaipur/visa-agents-in-jaipur`, buildDate, "monthly", "0.7"),
    // Bangalore neighbourhood pages
    entry(`${BASE_URL}/visa-agents-in-bangalore`, buildDate, "monthly", "0.7"),
    entry(`${BASE_URL}/visa-agents-in-hsr-layout`, buildDate, "monthly", "0.7"),
    entry(`${BASE_URL}/visa-agents-in-indiranagar`, buildDate, "monthly", "0.7"),
    entry(`${BASE_URL}/visa-agents-in-jayanagar`, buildDate, "monthly", "0.7"),
    entry(`${BASE_URL}/visa-agents-in-koramangala`, buildDate, "monthly", "0.7"),
    entry(`${BASE_URL}/visa-agents-in-kr-puram`, buildDate, "monthly", "0.7"),
    entry(`${BASE_URL}/visa-agents-in-marathahalli`, buildDate, "monthly", "0.7"),
    entry(`${BASE_URL}/visa-agents-in-whitefield`, buildDate, "monthly", "0.7"),
    entry(`${BASE_URL}/visa-agents-in-electronic-city`, buildDate, "monthly", "0.7"),
    entry(`${BASE_URL}/visa-agents-in-bellandur`, buildDate, "monthly", "0.7"),
    entry(`${BASE_URL}/visa-agents-in-jp-nagar`, buildDate, "monthly", "0.7"),
    entry(`${BASE_URL}/visa-agents-in-sarjapur-road`, buildDate, "monthly", "0.7"),
    entry(`${BASE_URL}/visa-agents-in-btm-layout`, buildDate, "monthly", "0.7"),
    entry(`${BASE_URL}/visa-agent-in-pune`, buildDate, "monthly", "0.7"),
    entry(`${BASE_URL}/visa-agent-in-mumbai`, buildDate, "monthly", "0.7"),
    entry(`${BASE_URL}/visa-agent-in-jaipur`, buildDate, "monthly", "0.7"),
    entry(`${BASE_URL}/visa-agent-in-hyderabad`, buildDate, "monthly", "0.7"),
    entry(`${BASE_URL}/visa-agent-in-delhi`, buildDate, "monthly", "0.7"),
    entry(`${BASE_URL}/visa-agent-in-chennai`, buildDate, "monthly", "0.7"),
    entry(`${BASE_URL}/visa-agent-in-ahmedabad`, buildDate, "monthly", "0.7"),
];

const blogEntries = blogs.map((b) => {
    const slug = b.slug || b.id;
    return entry(`${BASE_URL}/blog/${slug}`, blogDate(b.date), "monthly", "0.7");
});

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticEntries, ...blogEntries].join("\n")}
</urlset>`;

writeFileSync(resolve(ROOT, "public/sitemap.xml"), xml, "utf-8");
console.log(`Sitemap generated: ${staticEntries.length + blogEntries.length} URLs (build date: ${buildDate})`);
