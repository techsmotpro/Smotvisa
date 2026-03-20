export interface BlogPost {
    id: string;
    slug: string;
    image: string;
    category: string;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    date: string;
    readTime: string;
}

// Fallback blog data for when API fails
const fallbackBlogs: BlogPost[] = [
    {
        id: 'fallback-1',
        slug: 'top-10-travel-destinations-2024',
        image: 'https://picsum.photos/seed/fallback1/800/600',
        category: 'Travel Tips',
        title: 'Top 10 Travel Destinations for 2024',
        excerpt: 'Discover the most beautiful and exciting places to visit this year. From tropical paradises to cultural capitals, these destinations should be on every traveler\'s list.',
        content: '<p>Traveling is an enriching experience that broadens our horizons and creates unforgettable memories. In 2024, several destinations stand out for their unique charm, cultural richness, and natural beauty.</p><p>Whether you\'re seeking adventure, relaxation, or cultural immersion, these top 10 destinations offer something for every traveler.</p>',
        author: 'Travel Expert',
        date: 'Jan 15, 2024',
        readTime: '5 min'
    },
    {
        id: 'fallback-2',
        slug: 'schengen-visa-application-guide',
        image: 'https://picsum.photos/seed/fallback2/800/600',
        category: 'Visa Guide',
        title: 'How to Apply for a Schengen Visa',
        excerpt: 'A complete guide to applying for a Schengen visa, including required documents, processing times, and tips for a successful application.',
        content: '<p>The Schengen visa allows travelers to visit 27 European countries with a single visa. Applying for a Schengen visa can seem daunting, but with proper preparation, it can be a smooth process.</p><p>This guide will walk you through everything you need to know, from gathering documents to attending your visa interview.</p>',
        author: 'Visa Specialist',
        date: 'Feb 20, 2024',
        readTime: '8 min'
    },
    {
        id: 'fallback-3',
        slug: 'essential-travel-packing-list',
        image: 'https://picsum.photos/seed/fallback3/800/600',
        category: 'Travel Tips',
        title: 'Essential Travel Packing List',
        excerpt: 'Don\'t forget anything important! This comprehensive packing list covers everything you need for a stress-free trip.',
        content: '<p>Packing can be one of the most stressful parts of travel. Having a well-planned packing list ensures you don\'t forget essential items and helps you travel light.</p><p>This list includes everything from travel documents to clothing, toiletries, and electronics, tailored to different types of trips.</p>',
        author: 'Travel Advisor',
        date: 'Mar 5, 2024',
        readTime: '6 min'
    }
];

// Fetch blogs from Smot Pro backend API
export const fetchBlogs = async (): Promise<BlogPost[]> => {
    try {
        const response = await fetch('https://smot-pro-backend-visa.vercel.app/api/blogs', {
            next: { revalidate: 3600 } // Cache for 1 hour
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const blogs: BlogPost[] = await response.json();

        // Return blogs if we get valid data, otherwise return fallbacks
        const results = blogs && blogs.length > 0 ? blogs : fallbackBlogs;
        return results.map(b => ({
            ...b,
            slug: b.slug || b.id
        }));
    } catch (error) {
        console.error('Error fetching blogs:', error);
        // Return fallback data if API fails
        return fallbackBlogs;
    }
};

// Helper function to fetch a single blog by slug
export const fetchBlogBySlug = async (slug: string): Promise<BlogPost | undefined> => {
    try {
        const response = await fetch(`https://smot-pro-backend-visa.vercel.app/api/blogs/${slug}`, {
            next: { revalidate: 3600 } // Cache for 1 hour
        });
        if (!response.ok) {
            if (response.status === 404) {
                return undefined;
            }
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const blog: BlogPost = await response.json();
        return {
            ...blog,
            slug: blog.slug || blog.id
        };
    } catch (error) {
        console.error('Error fetching blog by slug:', error);
        // Find blog from fallback data if API fails
        return fallbackBlogs.find(b => b.slug === slug || b.id === slug);
    }
};