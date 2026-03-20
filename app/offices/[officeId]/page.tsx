import { offices } from "@/data/officeData";
import { notFound } from "next/navigation";
import OfficeDetailClient from "@/components/offices/OfficeDetailClient";

export async function generateStaticParams() {
    return offices.map((office) => ({
        officeId: office.id,
    }));
}

export default async function OfficeDetailPage({ params }: { params: Promise<{ officeId: string }> }) {
    const { officeId } = await params;
    const office = offices.find((o) => o.id === officeId);

    if (!office) {
        return notFound();
    }

    return <OfficeDetailClient office={office} />;
}
