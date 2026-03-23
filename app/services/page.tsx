import Link from "next/link";
import { ArrowRight, Globe, Search, Plane, MapPin, Ticket, Headphones, CheckCircle2 } from "lucide-react";
import { visaCountries } from "@/data/navigationData";
import { servicesData } from "@/data/servicesData";
import PageHeader from "@/components/ui/PageHeader";
import { MotionDiv } from "@/components/ui/MotionWrapper";

export const metadata = {
  title: "Premium Travel & Visa Services | SMOT VISA",
  description: "From expert visa processing to end-to-end tour planning, we take the stress out of travel with our comprehensive international services.",

  keywords: [
    "travel services India",
    "visa processing services",
    "tour planning",
    "air ticketing",
    "hotel booking",
    "travel insurance",
    "SMOT VISA"
  ],

  alternates: {
    canonical: "https://smotvisa.com/services",
  },

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "SMOT VISA Team" }],
  publisher: "SMOT VISA",

  openGraph: {
    title: "Premium Travel & Visa Services | SMOT VISA",
    description: "From expert visa processing to end-to-end tour planning, we take the stress out of travel with our comprehensive international services.",
    url: "https://smotvisa.com/services",
    siteName: "SMOT VISA",
    images: ["/images/hero-travel-CJWf8Tv1.jpg"],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Premium Travel & Visa Services | SMOT VISA",
    description: "From expert visa processing to end-to-end tour planning, we take the stress out of travel with our comprehensive international services.",
  }
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-background pb-20">
            <PageHeader
                title="Premium Travel & Visa Services"
                description="From expert visa processing to end-to-end tour planning, we take the stress out of travel with our comprehensive international services."
                breadcrumbs={[{ label: "Services" }]}
            />

            <div className="container mx-auto px-4 mt-20">
                {/* Intro Section */}
                <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <span className="text-xs font-display font-bold text-secondary uppercase tracking-[0.2em] mb-4 block">Our Expertise</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                        Integrated Solutions for Global Mobility
                    </h2>
                    <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto leading-relaxed">
                        Discover our suite of professional services designed to make your international journey seamless, from documentation to destination.
                    </p>
                </MotionDiv>

                {/* Main Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {servicesData.map((service, idx) => (
                        <MotionDiv
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-10 bg-card rounded-[2.5rem] shadow-card border border-border group hover:shadow-elevated hover:border-secondary/30 transition-all flex flex-col"
                        >
                            <div className="w-16 h-16 rounded-[1.5rem] bg-secondary/10 flex items-center justify-center mb-8 group-hover:bg-secondary transition-colors duration-500">
                                <service.icon className="h-8 w-8 text-secondary group-hover:text-secondary-foreground" />
                            </div>
                            <h3 className="text-2xl font-display font-bold text-foreground mb-4">{service.title}</h3>
                            <p className="text-muted-foreground font-body text-sm mb-8 leading-relaxed italic grow">
                                {service.description}
                            </p>
                            <ul className="space-y-4 mb-10">
                                {service.features.map((feature: string) => (
                                    <li key={feature} className="flex items-center gap-3 text-sm font-display font-bold text-foreground/80">
                                        <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href={service.href}
                                className="inline-flex items-center gap-2 text-sm font-display font-bold text-secondary hover:text-secondary/80 group-hover:gap-3 transition-all tracking-widest uppercase"
                            >
                                Detailed Intelligence <ArrowRight className="h-4 w-4" />
                            </Link>
                        </MotionDiv>
                    ))}
                </div>

                {/* Visa Services Detailed Grid */}
                <div className="bg-muted/30 rounded-[3.5rem] p-10 md:p-20 border border-border overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
                        <Globe className="w-80 h-80 text-foreground" />
                    </div>
                    <div className="relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-display font-bold text-foreground mb-4">Global Visa Destinations</h2>
                            <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
                                Comprehensive visa processing and consultancy for over 50+ countries worldwide, handled by our expert team.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                            {visaCountries.map((country: any, idx: number) => (
                                <MotionDiv
                                    key={country.name}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="group p-6 bg-card rounded-3xl shadow-sm border border-border hover:shadow-card hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center"
                                >
                                    <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform filter drop-shadow-sm">{country.flag}</div>
                                    <h4 className="text-base font-display font-bold text-foreground mb-1">{country.name}</h4>
                                    <p className="text-[10px] font-display font-bold text-muted-foreground mb-4 uppercase tracking-[0.1em]">Visa Intel</p>
                                    <Link
                                        href={country.href}
                                        className="mt-auto inline-flex items-center gap-1.5 text-[10px] font-display font-bold text-secondary hover:underline uppercase tracking-wider"
                                    >
                                        Requirements <ArrowRight className="h-3 w-3" />
                                    </Link>
                                </MotionDiv>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Branded CTA */}
                <div className="mt-24 text-center bg-primary rounded-[3.5rem] p-12 md:p-20 text-primary-foreground relative overflow-hidden shadow-elevated border border-white/10">
                    <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                        <ArrowRight className="w-64 h-64 rotate-45 text-white" />
                    </div>
                    <div className="relative z-10 space-y-8">
                        <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">Ready to Start Your Journey?</h2>
                        <p className="text-primary-foreground/70 font-body text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                            Contact our expert consultants today for a professional evaluation of your visa eligibility or to book your next bespoke tour.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 px-12 py-6 bg-secondary text-secondary-foreground font-display font-bold text-lg rounded-2xl hover:translate-y-[-2px] transition-all shadow-gold group"
                        >
                            Get Started Now <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
