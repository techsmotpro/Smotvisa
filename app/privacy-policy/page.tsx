import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy - SmotVisa",
    description: "SmotVisa Privacy Policy - Learn how we collect, use, and protect your personal information when using our visa and travel services.",
    keywords: [
        "SmotVisa privacy policy",
        "data protection",
        "privacy",
        "personal information",
        "visa services"
    ],
    alternates: {
        canonical: "https://smotvisa.com/privacy-policy",
    },
    robots: {
        index: true,
        follow: true,
    },
    authors: [{ name: "SmotVisa Team" }],
    publisher: "SmotVisa",
    openGraph: {
        title: "Privacy Policy - SmotVisa",
        description: "SmotVisa Privacy Policy - Learn how we collect, use, and protect your personal information when using our visa and travel services.",
        url: "https://smotvisa.com/privacy-policy",
        siteName: "SmotVisa",
        images: ["/images/hero-travel-CJWf8Tv1.jpg"],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Privacy Policy - SmotVisa",
        description: "SmotVisa Privacy Policy - Learn how we collect, use, and protect your personal information when using our visa and travel services.",
        images: ["/images/hero-travel-CJWf8Tv1.jpg"],
    }
};

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-background pb-20">
            {/* Hero Section */}
            <section className="bg-primary pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                            Privacy Policy
                        </h1>
                        <p className="text-lg md:text-xl text-white/70 font-body leading-relaxed">
                            At Smotvisa, we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner.
                        </p>
                        <div className="mt-8 flex items-center gap-4 text-white/60">
                            <span className="text-sm">Effective Date:</span>
                            <span className="text-sm font-bold">08/04/2026</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <div className="container mx-auto px-4 mt-20">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-card rounded-3xl border border-border p-8 md:p-12 shadow-lg">
                        <div className="space-y-8">
                            <section>
                                <h2 className="text-2xl font-display font-bold text-foreground mb-4">1. Information We Collect</h2>
                                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                                    We may collect the following types of information:
                                </p>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="text-lg font-bold text-foreground mb-3">Personal Information</h3>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <span className="text-secondary font-bold">•</span>
                                                <span>Full Name</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-secondary font-bold">•</span>
                                                <span>Email Address</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-secondary font-bold">•</span>
                                                <span>Phone Number</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-secondary font-bold">•</span>
                                                <span>Passport Details (only when required for visa processing)</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-secondary font-bold">•</span>
                                                <span>Travel Information</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-foreground mb-3">Non-Personal Information</h3>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <span className="text-secondary font-bold">•</span>
                                                <span>Browser type and version</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-secondary font-bold">•</span>
                                                <span>IP address</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-secondary font-bold">•</span>
                                                <span>Device information</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-secondary font-bold">•</span>
                                                <span>Pages visited and time spent on the website</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-display font-bold text-foreground mb-4">2. How We Use Your Information</h2>
                                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                                    We use the collected information for:
                                </p>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Providing visa consultancy and travel-related services</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Processing visa applications and documentation</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Responding to inquiries and customer support requests</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Sending updates, offers, or important notifications</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Improving our website performance and user experience</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Complying with legal obligations</span>
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-display font-bold text-foreground mb-4">3. Cookies and Tracking Technologies</h2>
                                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                                    Smotvisa uses cookies and similar tracking technologies to:
                                </p>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Enhance user experience</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Analyze website traffic</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Remember user preferences</span>
                                    </li>
                                </ul>
                                <p className="text-muted-foreground font-body leading-relaxed mt-4">
                                    You can disable cookies through your browser settings, but some features of the website may not function properly.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-display font-bold text-foreground mb-4">4. Sharing of Information</h2>
                                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                                    We do not sell or rent your personal data. However, we may share your information with:
                                </p>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Government authorities and embassies for visa processing</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Trusted third-party service providers (payment gateways, IT support, etc.)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Legal authorities when required by law</span>
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-display font-bold text-foreground mb-4">5. Data Security</h2>
                                <p className="text-muted-foreground font-body leading-relaxed">
                                    We implement appropriate technical and organizational measures to protect your data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-display font-bold text-foreground mb-4">6. Third-Party Links</h2>
                                <p className="text-muted-foreground font-body leading-relaxed">
                                    Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those external sites.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-display font-bold text-foreground mb-4">7. Your Rights</h2>
                                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                                    Depending on applicable laws, you may have the right to:
                                </p>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Access your personal data</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Request correction of inaccurate information</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Request deletion of your data</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Withdraw consent at any time</span>
                                    </li>
                                </ul>
                                <p className="text-muted-foreground font-body leading-relaxed mt-4">
                                    To exercise these rights, please contact us using the details below.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-display font-bold text-foreground mb-4">8. Retention of Data</h2>
                                <p className="text-muted-foreground font-body leading-relaxed">
                                    We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-display font-bold text-foreground mb-4">9. Children's Privacy</h2>
                                <p className="text-muted-foreground font-body leading-relaxed">
                                    Our services are not directed toward individuals under the age of 18. We do not knowingly collect personal information from children.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-display font-bold text-foreground mb-4">10. Changes to This Privacy Policy</h2>
                                <p className="text-muted-foreground font-body leading-relaxed">
                                    We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-display font-bold text-foreground mb-4">11. Contact Us</h2>
                                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                                    If you have any questions or concerns about this Privacy Policy, you can contact us:
                                </p>
                                <div className="space-y-2 text-muted-foreground">
                                    <p className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">Website:</span>
                                        <span>smotvisa.com</span>
                                    </p>
                                    <p className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">Email:</span>
                                        <span>info@smotvisa.com</span>
                                    </p>
                                    <p className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">Phone:</span>
                                        <span>+91-9482386529</span>
                                    </p>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}