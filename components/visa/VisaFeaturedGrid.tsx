import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MotionDiv } from "@/components/ui/MotionWrapper";

interface Destination {
    id: string;
    name: string;
    flag: string;
    image: string;
    visaType: string;
    processing: string;
    price: string;
    category: string;
}

export default function VisaFeaturedGrid({ destinations }: { destinations: Destination[] }) {
    return (
        <div className="mb-24">
            <div className="flex items-center gap-3 mb-10">
                <div className="w-1.5 h-8 bg-secondary rounded-full" />
                <h2 className="text-3xl font-display font-bold text-foreground">Featured Destinations</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {destinations.map((dest, idx) => (
                    <MotionDiv
                        key={dest.name}
                        initial={{ opacity: 1, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="group relative rounded-3xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 bg-card border border-border"
                    >
                        <Link href={`/visa/${dest.id}-visa-consultant`}>
                            <div className="aspect-[3/4] relative overflow-hidden">
                                <img
                                    src={dest.image}
                                    alt={dest.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-secondary text-secondary-foreground text-[10px] font-display font-bold rounded-full uppercase tracking-widest shadow-gold">
                                        {dest.category}
                                    </span>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-3xl">{dest.flag}</span>
                                        <h3 className="text-2xl font-display font-bold text-white">{dest.name}</h3>
                                    </div>
                                    <p className="text-xs font-body text-white/70 mb-6 leading-relaxed">{dest.visaType}</p>

                                    <div className="flex items-center justify-between border-t border-white/10 pt-6">
                                        <div>
                                            <p className="text-[10px] uppercase font-display font-bold text-white/40 tracking-[0.2em]">Processing</p>
                                            <p className="text-sm font-body font-bold text-secondary">{dest.processing}</p>
                                        </div>
                                        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-secondary transition-all border border-white/10">
                                            <ArrowRight className="h-6 w-6 text-white group-hover:text-secondary-foreground" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </MotionDiv>
                ))}
            </div>
        </div>
    );
}