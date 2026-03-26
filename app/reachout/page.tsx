import PageHeader from "@/components/ui/PageHeader";
import InquiryForm from "@/components/sections/InquiryForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Reach Out to Us | SmotVisa",
    description: "Have questions? Reach out to SmotVisa's expert team for personalized visa and travel assistance. We're here to help you plan your international journey.",
    keywords: [
        "reach out SmotVisa",
        "contact visa experts",
        "travel assistance",
        "visa help",
        "SmotVisa support"
    ],
    alternates: {
        canonical: "https://smotvisa.com/reachout",
    },
    robots: {
        index: true,
        follow: true,
    },
    authors: [{ name: "SmotVisa Team" }],
    publisher: "SmotVisa",
    openGraph: {
        title: "Reach Out to Us | SmotVisa",
        description: "Have questions? Reach out to SmotVisa's expert team for personalized visa and travel assistance. We're here to help you plan your international journey.",
        url: "https://smotvisa.com/reachout",
        siteName: "SmotVisa",
        images: ["/images/hero-travel-CJWf8Tv1.jpg"],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Reach Out to Us | SmotVisa",
        description: "Have questions? Reach out to SmotVisa's expert team for personalized visa and travel assistance. We're here to help you plan your international journey.",
        images: ["/images/hero-travel-CJWf8Tv1.jpg"],
    }
};

export default function ReachOutPage() {
    return (
        <main className="bg-background min-h-screen">
            <PageHeader
                title="Reach Out to Us"
                description="Have questions? Reach out to SmotVisa's expert team for personalized visa and travel assistance. We're here to help you plan your international journey."
                breadcrumbs={[{ label: "Reach Out" }]}
            />

            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Text Section */}
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                                We're Here to Help You Travel the World
                            </h2>
                            <p className="text-lg font-body text-muted-foreground leading-relaxed">
                                Whether you're planning a dream vacation, a business trip, or need assistance with visa applications, our expert team at SmotVisa is ready to guide you every step of the way.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-primary font-bold">✓</span>
                                    </div>
                                    <div>
                                        <h3 className="font-body font-semibold text-foreground">Visa Expertise</h3>
                                        <p className="text-sm text-muted-foreground">15+ years of experience in visa processing</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-primary font-bold">✓</span>
                                    </div>
                                    <div>
                                        <h3 className="font-body font-semibold text-foreground">Document Assistance</h3>
                                        <p className="text-sm text-muted-foreground">Complete guidance for all visa documentation</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-primary font-bold">✓</span>
                                    </div>
                                    <div>
                                        <h3 className="font-body font-semibold text-foreground">100% Success Rate</h3>
                                        <p className="text-sm text-muted-foreground">Guaranteed satisfaction with visa approvals</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Inquiry Form */}
                        <InquiryForm />
                    </div>
                </div>
            </section>
        </main>
    );
}