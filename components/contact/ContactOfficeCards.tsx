import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { Office } from "@/data/officeData";

const getOfficeUrl = (officeId: string): string => {
    const urlMap: Record<string, string> = {
        "bandra-east-mumbai": "/contact/mumbai/visa-agents-in-bandra-east",
        "kandivali-mumbai": "/contact/mumbai/visa-agents-in-kandivali",
        "shivaji-nagar-pune": "/contact/pune/visa-agents-in-shivaji-nagar",
        "yerwada-pune": "/contact/pune/visa-agents-in-yerwada",
        "delhi": "/contact/delhi/visa-agents-in-connaught-place",
        "walter-visakhapatnam": "/contact/visakhapatnam/visa-agents-in-walter",
        "cv-raman-nagar-bangalore": "/contact/bangalore/visa-agents-in-cv-raman-nagar",
        "ahmedabad": "/contact/ahmedabad/visa-agents-in-ahmedabad",
        "jaipur": "/contact/jaipur/visa-agents-in-jaipur",
        "goregaon-east-mumbai": "/contact/mumbai/visa-agents-in-goregaon-east"
    };

    return urlMap[officeId] || `/offices/${officeId}`;
};

export default function ContactOfficeCards({ offices }: { offices: Office[] }) {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                {offices.length > 0 ? (
                    offices.map((office) => (
                        <Link
                            key={office.id}
                            href={getOfficeUrl(office.id)}
                            className="block rounded-2xl border border-border bg-card p-6 hover:border-secondary/30 hover:shadow-lg transition-all"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1 block">
                                        {office.city} Office
                                    </span>
                                    <h3 className="text-xl font-display font-bold leading-tight">
                                        {office.name}
                                    </h3>
                                </div>
                                <MapPin className="h-5 w-5 text-muted-foreground" />
                            </div>

                            <div className="space-y-3 text-sm">
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-muted/20 flex items-center justify-center shrink-0">
                                        <MapPin className="h-4 w-4" />
                                    </div>
                                    <p className="font-body leading-relaxed text-muted-foreground pt-0.5">
                                        {office.address}
                                    </p>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-muted/20 flex items-center justify-center shrink-0">
                                        <Phone className="h-4 w-4" />
                                    </div>
                                    <div className="space-y-1 pt-0.5">
                                        {office.phone.map((p, i) => (
                                            <p key={i} className="font-body font-bold">
                                                {p}
                                            </p>
                                        ))}
                                    </div>
                                </div>

                                {office.email && (
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-muted/20 flex items-center justify-center shrink-0">
                                            <Mail className="h-4 w-4" />
                                        </div>
                                        <p className="font-body font-bold pt-0.5">{office.email}</p>
                                    </div>
                                )}
                            </div>
                        </Link>
                    ))
                ) : (
                    <div className="col-span-full rounded-2xl border border-border bg-card p-8 text-center">
                        <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <h3 className="text-lg font-display font-bold text-foreground mb-2">No offices found</h3>
                        <p className="text-muted-foreground font-body text-sm">
                            Try searching for a different city or location
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}