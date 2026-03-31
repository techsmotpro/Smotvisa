import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Visa Checker Status tool | Smotvisa",
    description: "Check your visa status quickly with the Smotvisa Visa Checker Status Tool. Get real-time updates and track your visa application easily and securely online.",

    keywords: [
        "visa eligibility calculator",
        "check visa chances",
        "Canada PR eligibility",
        "UK visa checker",
        "USA B1/B2 eligibility",
        "visa eligibility test",
        "SmotVisa checker"
    ],

    alternates: {
        canonical: "https://smotvisa.com/visa-checker",
    },

    robots: {
        index: true,
        follow: true,
    },

    authors: [{ name: "SmotVisa Team" }],
    publisher: "SmotVisa",

    openGraph: {
        title: "Visa Checker Status tool | Smotvisa",
        description: "Check your visa status quickly with the Smotvisa Visa Checker Status Tool. Get real-time updates and track your visa application easily and securely online.",
        url: "https://smotvisa.com/visa-checker",
        siteName: "SmotVisa",
        images: ["/images/hero-travel-CJWf8Tv1.jpg"],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Visa Checker Status tool | Smotvisa",
        description: "Check your visa status quickly with the Smotvisa Visa Checker Status Tool. Get real-time updates and track your visa application easily and securely online.",
        images: ["/images/hero-travel-CJWf8Tv1.jpg"],
    }
};

export default function VisaCheckerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}