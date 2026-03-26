import { offices } from "@/data/officeData";
import OfficeDetailClient from "@/components/offices/OfficeDetailClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Visa Agents in Ahmedabad | SmotVisa",
    description: "Expert visa consultants in Ahmedabad. Get professional visa assistance for all countries at SmotVisa Ahmedabad office.",
    keywords: [
        "visa agents in Ahmedabad",
        "visa consultants Ahmedabad",
        "Ahmedabad visa services",
        "SmotVisa Ahmedabad",
        "visa agents Gujarat"
    ],
    alternates: {
        canonical: "https://smotvisa.com/contact/ahmedabad/visa-agents-in-ahmedabad",
    },
    robots: {
        index: true,
        follow: true,
    },
    authors: [{ name: "SmotVisa Team" }],
    publisher: "SmotVisa",
    openGraph: {
        title: "Visa Agents in Ahmedabad | SmotVisa",
        description: "Expert visa consultants in Ahmedabad. Get professional visa assistance for all countries at SmotVisa Ahmedabad office.",
        url: "https://smotvisa.com/contact/ahmedabad/visa-agents-in-ahmedabad",
        siteName: "SmotVisa",
        images: ["/images/hero-travel-CJWf8Tv1.jpg"],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Visa Agents in Ahmedabad | SmotVisa",
        description: "Expert visa consultants in Ahmedabad. Get professional visa assistance for all countries at SmotVisa Ahmedabad office.",
        images: ["/images/hero-travel-CJWf8Tv1.jpg"],
    }
};

export default function AhmedabadPage() {
    const office = offices.find(o => o.id === "ahmedabad");
    
    if (!office) {
        return null;
    }

    return <OfficeDetailClient office={office} />;
}