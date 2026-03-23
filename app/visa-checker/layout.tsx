import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Visa Eligibility Calculator | Check Your Visa Chances | SmotVisa",
    description: "Calculate your visa eligibility for Canada PR, UK visitor visa, and USA B1/B2 in seconds using our advanced visa checker.",

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
        title: "Visa Eligibility Calculator | Check Your Visa Chances | SmotVisa",
        description: "Calculate your visa eligibility for Canada PR, UK visitor visa, and USA B1/B2 in seconds using our advanced visa checker.",
        url: "https://smotvisa.com/visa-checker",
        siteName: "SmotVisa",
        images: ["/images/hero-travel-CJWf8Tv1.jpg"],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Visa Eligibility Calculator | Check Your Visa Chances | SmotVisa",
        description: "Calculate your visa eligibility for Canada PR, UK visitor visa, and USA B1/B2 in seconds using our advanced visa checker.",
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