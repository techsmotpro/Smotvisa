import PageHeader from "@/components/ui/PageHeader";
import ContactClient from "@/components/contact/ContactClient";
import { offices } from "@/data/officeData";

export async function generateStaticParams() {
    return [
        { branchId: [] }, // Root /contact
        ...offices.map((office) => ({
            branchId: [office.id],
        })),
    ];
}

export default async function ContactPage({ params }: { params: Promise<{ branchId?: string[] }> }) {
    const { branchId: branchIdArray } = await params;
    const branchId = branchIdArray ? branchIdArray[0] : undefined;

    return (
        <main className="bg-background min-h-screen">
            <PageHeader
                title="Contact Our Experts"
                description="Connect with India's leading visa and travel consultants. We provide personalized support for all your international journeys."
                breadcrumbs={[{ label: "Contact Us" }]}
            />

            <ContactClient offices={offices} initialBranchId={branchId} />
        </main>
    );
}
