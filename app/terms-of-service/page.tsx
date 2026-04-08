import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms & Conditions - SmotVisa",
    description: "SmotVisa Terms & Conditions - Read our terms of service and refund policy for visa and travel services.",
    keywords: [
        "SmotVisa terms and conditions",
        "terms of service",
        "refund policy",
        "visa services",
        "travel services"
    ],
    alternates: {
        canonical: "https://smotvisa.com/terms-of-service",
    },
    robots: {
        index: true,
        follow: true,
    },
    authors: [{ name: "SmotVisa Team" }],
    publisher: "SmotVisa",
    openGraph: {
        title: "Terms & Conditions - SmotVisa",
        description: "SmotVisa Terms & Conditions - Read our terms of service and refund policy for visa and travel services.",
        url: "https://smotvisa.com/terms-of-service",
        siteName: "SmotVisa",
        images: ["/images/hero-travel-CJWf8Tv1.jpg"],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Terms & Conditions - SmotVisa",
        description: "SmotVisa Terms & Conditions - Read our terms of service and refund policy for visa and travel services.",
        images: ["/images/hero-travel-CJWf8Tv1.jpg"],
    }
};

export default function TermsOfServicePage() {
    return (
        <main className="min-h-screen bg-background pb-20">
            {/* Hero Section */}
            <section className="bg-primary pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                            Terms & Conditions
                        </h1>
                        <p className="text-lg md:text-xl text-white/70 font-body leading-relaxed">
                            Welcome to smotvisa.com. By accessing or using our services, you agree to comply with our terms and conditions.
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
                                <h2 className="text-2xl font-display font-bold text-foreground mb-4">1. Services Overview</h2>
                                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                                    Smotvisa provides:
                                </p>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Visa consultancy and assistance</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Documentation guidance</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Travel-related services (tour packages, air ticketing, hotel booking)</span>
                                    </li>
                                </ul>
                                <p className="text-muted-foreground font-body leading-relaxed mt-4">
                                    We act as an intermediary and do not guarantee visa approval, as decisions are solely made by embassies and immigration authorities.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-display font-bold text-foreground mb-4">2. User Responsibilities</h2>
                                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                                    By using our services, you agree:
                                </p>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>To provide accurate and complete information</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Not to submit false, misleading, or fraudulent documents</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>To comply with immigration and visa regulations</span>
                                    </li>
                                </ul>
                                <p className="text-muted-foreground font-body leading-relaxed mt-4">
                                    Any misrepresentation may result in rejection and legal consequences.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-display font-bold text-foreground mb-4">3. Visa Approval Disclaimer</h2>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Visa approval is not guaranteed</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Processing time depends on respective embassies</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>We are not responsible for delays, rejections, or additional document requests</span>
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-display font-bold text-foreground mb-4">4. Fees & Payments</h2>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Service fees must be paid in advance unless stated otherwise</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Fees may vary depending on visa type and country</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Government/embassy fees are non-refundable</span>
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-display font-bold text-foreground mb-4">5. Cancellation Policy</h2>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Once the visa process has started, cancellation requests may not be accepted</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Any approved refunds will follow our Refund Policy</span>
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-display font-bold text-foreground mb-4">6. Intellectual Property</h2>
                                <p className="text-muted-foreground font-body leading-relaxed">
                                    All website content (text, logos, design) belongs to Smotvisa and cannot be copied, reproduced, or distributed without permission.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-display font-bold text-foreground mb-4">7. Limitation of Liability</h2>
                                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                                    Smotvisa shall not be liable for:
                                </p>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Visa rejection or delay</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Loss of documents submitted to embassies</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Travel losses (flight, hotel, etc.)</span>
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-display font-bold text-foreground mb-4">8. Third-Party Services</h2>
                                <p className="text-muted-foreground font-body leading-relaxed">
                                    We may use third-party services (payment gateways, airlines, hotels). We are not responsible for their actions, policies, or service quality.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-display font-bold text-foreground mb-4">9. Privacy</h2>
                                <p className="text-muted-foreground font-body leading-relaxed">
                                    Your use of this website is also governed by our Privacy Policy.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-display font-bold text-foreground mb-4">10. Governing Law (India Compliance)</h2>
                                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                                    These Terms shall be governed by:
                                </p>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Information Technology Act, 2000 (India)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Applicable Indian laws</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Jurisdiction: Courts of Bangalore</span>
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-display font-bold text-foreground mb-4">12. Changes to Terms</h2>
                                <p className="text-muted-foreground font-body leading-relaxed">
                                    We may update these Terms at any time. Continued use of the website means you accept the updated terms.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-display font-bold text-foreground mb-4">13. Contact Information</h2>
                                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                                    For any queries, please contact us:
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

                            <hr className="border-border my-8" />

                            <section>
                                <h2 className="text-2xl font-display font-bold text-foreground mb-4">Refund Policy</h2>
                                <div className="flex items-center gap-4 text-white/60 mb-6">
                                    <span className="text-sm">Effective Date:</span>
                                    <span className="text-sm font-bold">08/02/2026</span>
                                </div>
                                
                                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                                    At Smotvisa, we maintain a transparent and fair refund policy for our customers.
                                </p>

                                <h3 className="text-xl font-bold text-foreground mb-3">1. General Refund Policy</h3>
                                <ul className="space-y-2 text-muted-foreground mb-6">
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Visa consultancy fees are partially or fully non-refundable depending on the stage of processing</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Embassy/government fees are strictly non-refundable</span>
                                    </li>
                                </ul>

                                <h3 className="text-xl font-bold text-foreground mb-3">2. Eligibility for Refund</h3>
                                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                                    Refunds may be considered only if:
                                </p>
                                <ul className="space-y-2 text-muted-foreground mb-6">
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>The application has not yet been processed</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Payment was made by mistake or duplicate transaction</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Service has not been initiated</span>
                                    </li>
                                </ul>

                                <h3 className="text-xl font-bold text-foreground mb-3">3. Non-Refundable Cases</h3>
                                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                                    No refund will be issued if:
                                </p>
                                <ul className="space-y-2 text-muted-foreground mb-6">
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Visa application has already been submitted</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Client withdraws after documentation review</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Visa is rejected by embassy</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Delay is caused by embassy or third parties</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Incorrect or incomplete documents provided by client</span>
                                    </li>
                                </ul>

                                <h3 className="text-xl font-bold text-foreground mb-3">4. Partial Refund Cases</h3>
                                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                                    Partial refunds may apply if:
                                </p>
                                <ul className="space-y-2 text-muted-foreground mb-6">
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Work has started but not completed</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Documentation review is done but submission is pending</span>
                                    </li>
                                </ul>

                                <h3 className="text-xl font-bold text-foreground mb-3">5. Processing Time for Refund</h3>
                                <ul className="space-y-2 text-muted-foreground mb-6">
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Approved refunds will be processed within 7–14 business days</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Refund will be credited via original payment method</span>
                                    </li>
                                </ul>

                                <h3 className="text-xl font-bold text-foreground mb-3">6. Chargebacks & Disputes</h3>
                                <ul className="space-y-2 text-muted-foreground mb-6">
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Customers must contact Smotvisa before initiating chargebacks</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Fraudulent disputes may lead to legal action under Indian law</span>
                                    </li>
                                </ul>

                                <h3 className="text-xl font-bold text-foreground mb-3">7. GDPR + Data Handling in Refunds</h3>
                                <ul className="space-y-2 text-muted-foreground mb-6">
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Payment and personal data are handled securely</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Users can request deletion of their data after service completion</span>
                                    </li>
                                </ul>

                                <h3 className="text-xl font-bold text-foreground mb-3">8. Contact for Refund Requests</h3>
                                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                                    To request a refund, contact:
                                </p>
                                <div className="space-y-2 text-muted-foreground">
                                    <p className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">Email:</span>
                                        <span>info@smotvisa.com</span>
                                    </p>
                                    <p className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">Phone:</span>
                                        <span>+91-9482386529</span>
                                    </p>
                                    <p className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">Website:</span>
                                        <span>smotvisa.com</span>
                                    </p>
                                </div>
                            </section>

                            <hr className="border-border my-8" />

                            <section>
                                <h2 className="text-2xl font-display font-bold text-foreground mb-4">Legal Optimization (Important)</h2>
                                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                                    To make your website fully compliant & trustworthy, ensure:
                                </p>
                                
                                <h3 className="text-xl font-bold text-foreground mb-3">✅ Required Pages in Footer:</h3>
                                <ul className="space-y-2 text-muted-foreground mb-6">
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Privacy Policy</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Terms & Conditions</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Refund Policy</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Branch</span>
                                    </li>
                                </ul>

                                <h3 className="text-xl font-bold text-foreground mb-3">✅ Consent Checkbox (Very Important):</h3>
                                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                                    On forms:
                                </p>
                                <p className="text-muted-foreground font-body leading-relaxed mb-6 italic">
                                    "I agree to the Privacy Policy and Terms & Conditions"
                                </p>

                                <h3 className="text-xl font-bold text-foreground mb-3">✅ GDPR Compliance Must-Haves:</h3>
                                <ul className="space-y-2 text-muted-foreground mb-6">
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Cookie consent banner</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Data request email (for deletion/access)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Clear opt-in for marketing emails</span>
                                    </li>
                                </ul>

                                <h3 className="text-xl font-bold text-foreground mb-3">✅ Indian IT Act Compliance:</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Mention business address</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Show contact details clearly</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary font-bold">•</span>
                                        <span>Avoid misleading claims (like "100% visa guarantee")</span>
                                    </li>
                                </ul>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}