import { MotionDiv } from "@/components/ui/MotionWrapper";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { fetchReviews } from "@/data/reviewData";
import JsonLd from "@/components/ui/JsonLd";

const ReviewCards = async () => {
    const reviews = await fetchReviews();
    const avgRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

    const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "SmotVisa",
        "url": "https://smotvisa.com",
        "image": "https://smotvisa.com/logo.png",
        "telephone": "+91-8904008843",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bangalore",
            "addressRegion": "Karnataka",
            "addressCountry": "IN"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": avgRating.toFixed(1),
            "reviewCount": String(reviews.length),
            "bestRating": "5"
        },
        "review": reviews.map((review) => ({
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": review.name
            },
            "datePublished": review.date,
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": String(review.rating),
                "bestRating": "5"
            },
            "reviewBody": review.comment
        }))
    };

    return (
        <section className="py-12 bg-muted/30">
            <JsonLd data={reviewSchema} />
            <div className="container mx-auto px-4">
                <MotionDiv
                    initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-body font-semibold text-secondary uppercase tracking-widest">What Our Clients Say</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-4">
                        Client Testimonials
                    </h2>
                    <p className="text-muted-foreground font-body max-w-2xl mx-auto">
                        Hear from our satisfied clients about their experiences with SmotVisa.
                    </p>
                </MotionDiv>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reviews.map((review, idx) => (
                        <MotionDiv
                            key={review.id}
                            initial={{ opacity: 0, y: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group"
                        >
                            <Card className="h-full bg-card rounded-2xl overflow-hidden shadow-card border border-border hover:shadow-elevated transition-all duration-300">
                                <CardContent className="p-6">
                                    {/* Google icon + Verified badge */}
                                    <div className="flex items-center gap-2 mb-3">
                                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                                        </svg>
                                        <span className="text-xs font-body text-muted-foreground">Google Review</span>
                                    </div>

                                    {/* Star Rating */}
                                    <div className="flex items-center gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`h-4 w-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-muted"}`}
                                            />
                                        ))}
                                    </div>

                                    {/* Comment */}
                                    <p className="text-muted-foreground font-body mb-6 leading-relaxed">
                                        &ldquo;{review.comment}&rdquo;
                                    </p>

                                    {/* Client Info */}
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-sm">
                                            {review.name.charAt(0)}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-display font-bold text-foreground truncate">
                                                {review.name}
                                            </h4>
                                            <p className="text-sm font-body text-muted-foreground truncate">
                                                {review.role} &middot; {review.location}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </MotionDiv>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReviewCards;