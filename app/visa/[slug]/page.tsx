import { visaData } from "@/data/visaData";
import PageHeader from "@/components/ui/PageHeader";
import Link from "next/link";
import VisaDetailClient from "@/components/visa/VisaDetailClient";

export default async function VisaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const id = slug.replace("-visa", "");
    const visa = (visaData as any)[id];

    if (!visa) {
        return (
            <div className="py-20 text-center container mx-auto px-4">
                <h2 className="text-3xl font-display font-bold mb-4 text-foreground">Visa Information Not Found</h2>
                <p className="text-muted-foreground mb-8">Sorry, we couldn't find information for this destination.</p>
                <Link href="/" className="text-secondary font-semibold hover:underline">Return to Home</Link>
            </div>
        );
    }

    return (
        <main className="bg-background">
            <PageHeader
                title={`${visa.name} Visa Services ${visa.flag || ""}`}
                description={visa.description}
                breadcrumbs={[
                    { label: "Visa Services", href: "/visa" },
                    { label: visa.name }
                ]}
            />

            <VisaDetailClient visa={visa} id={id} />
        </main>
    );
}
