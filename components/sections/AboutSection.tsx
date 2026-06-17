import { MotionDiv } from "@/components/ui/MotionWrapper";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const whatWeDo = [
    "Free case assessment and the right visa type for your trip",
    "A personalised document checklist for your exact destination",
    "Accurate, complete application forms",
    "Tailored cover letters and day-by-day travel itineraries",
    "A full review for gaps, mismatches and red flags before you submit",
    "Help booking your visa appointment and preparing for it",
    "Rejection guidance to turn a refusal into a stronger fresh attempt",
];

const aboutStats = [
    { value: "2019", label: "Trusted Since" },
    { value: "98%", label: "Visa Success Rate" },
    { value: "5,000+", label: "Applications" },
    { value: "50+", label: "Countries" },
];

const AboutSection = ({ isFull = false }: { isFull?: boolean }) => {
    return (
        <section id="about" className={cn("py-12", isFull ? "bg-background" : "bg-card")}>
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <MotionDiv
                        initial={{ opacity: 0, x: 0 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="rounded-3xl overflow-hidden shadow-elevated relative h-[500px] md:h-[600px]">
                            <Image
                                src="/images/travelers-9_2z2QtE.webp"
                                alt="Travellers assisted by SmotVisa"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                        <div className="absolute bottom-4 right-4 md:-bottom-8 md:-right-8 bg-secondary text-secondary-foreground p-6 md:p-6 rounded-2xl md:rounded-3xl shadow-gold font-body border-4 border-card">
                            <div className="text-3xl md:text-5xl font-display font-bold mb-1">98%</div>
                            <div className="text-xs md:text-sm font-bold uppercase tracking-widest text-secondary-foreground/80">Visa Success Rate</div>
                        </div>
                    </MotionDiv>

                    <MotionDiv
                        initial={{ opacity: 0, x: 0 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-sm font-body font-semibold text-secondary uppercase tracking-widest">About SmotVisa</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-6 leading-tight break-words">
                            Visas Are <span className="text-secondary">All We Do</span>
                        </h2>

                        <div className="space-y-6 text-muted-foreground font-body text-lg leading-relaxed mb-8">
                            <p>
                                SmotVisa is a specialist visa assistance and travel documentation consultancy based in India,
                                helping travellers across the country secure tourist and business visas without the stress,
                                confusion and costly mistakes that derail so many applications.
                            </p>
                            <p>
                                We are not a general travel agency and we are not an immigration firm. Visas are all we do —
                                and that single-minded focus is exactly why travellers trust us with one of the most important
                                parts of their trip.
                            </p>

                            {isFull && (
                                <>
                                    <p>
                                        We take complete ownership of your visa paperwork, from the first question to the day you
                                        submit. A visa officer reads your application in minutes and looks for one thing: does
                                        this all make sense? We make sure your purpose of travel, your dates, your bookings, your
                                        finances and your ties to India tell one clear, consistent and honest story.
                                    </p>
                                    <p>
                                        SmotVisa is led by its CEO, <strong>Mr. Shaji Kandambeth</strong>, who brings over two
                                        decades of experience across visas, OCI, FRRO and travel documentation. The company was
                                        established in 2019, but the expertise guiding every application goes back much further —
                                        and it is that depth of knowledge that sets our work apart.
                                    </p>
                                    <p>
                                        Because we prepare files carefully and turn away shortcuts, the applications we assist
                                        enjoy a 98% approval rate across more than 5,000 successful visa applications. With offices
                                        in Mumbai and Bengaluru, we support travellers right across India — Delhi, Chennai,
                                        Hyderabad, Pune, Ahmedabad and beyond — over WhatsApp, phone and email.
                                    </p>
                                </>
                            )}
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                            {aboutStats.map((stat) => (
                                <div key={stat.label} className="text-center sm:text-left">
                                    <div className="text-2xl md:text-3xl font-display font-bold text-secondary">{stat.value}</div>
                                    <div className="text-xs font-body text-muted-foreground">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <h3 className="text-lg font-display font-bold text-foreground mb-4">What we do</h3>
                        <div className="grid gap-y-3 mb-10">
                            {whatWeDo.map((item) => (
                                <div key={item} className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                                    <span className="text-sm font-body text-foreground font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4">
                            {!isFull ? (
                                <Link
                                    href="/about"
                                    className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground font-body font-bold text-sm rounded-full hover:opacity-90 transition-all shadow-card"
                                >
                                    Learn More About Us <ArrowRight className="h-4 w-4" />
                                </Link>
                            ) : (
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground font-body font-bold text-sm rounded-full hover:opacity-90 transition-all shadow-card"
                                >
                                    Connect With Us <ArrowRight className="h-4 w-4" />
                                </Link>
                            )}
                        </div>
                    </MotionDiv>
                </div>

                {isFull && (
                    /* How We Do It — three pillars */
                    <div className="mt-32 grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Every file is a story that adds up",
                                desc: "We make sure your purpose of travel, dates, bookings, finances and ties to India tell one clear, consistent and honest story — with no loose ends to raise doubt."
                            },
                            {
                                title: "Experience paired with a careful checklist",
                                desc: "Every application is prepared against the latest, destination-specific requirements and then reviewed a second time by an experienced team member."
                            },
                            {
                                title: "Honest at every step",
                                desc: "We tell you upfront what your case needs, quote our fee transparently, and never promise an approval we can't control — the final decision always rests with the embassy."
                            }
                        ].map((item, i) => (
                            <MotionDiv
                                key={i}
                                initial={{ opacity: 0, y: 0 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 bg-card rounded-3xl border border-border hover:border-secondary/30 hover:shadow-elevated transition-all duration-300 group"
                            >
                                <h3 className="text-2xl font-display font-bold text-foreground mb-4">{item.title}</h3>
                                <p className="text-muted-foreground font-body leading-relaxed">{item.desc}</p>
                            </MotionDiv>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default AboutSection;
