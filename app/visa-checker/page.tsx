"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, User, Award, Mail, Phone, Globe, CheckCircle2, QrCode, MessageCircle, BarChart3, TrendingUp, ShieldCheck, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import PageHeader from "@/components/ui/PageHeader";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = "919036329410"; // Updated per actual brand number if available

// Form validation schema
const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    phone: z.string().min(10, {
        message: "Please enter a valid phone number.",
    }),
    age: z.string().min(1, {
        message: "Please select your age.",
    }),
    education: z.string().min(1, {
        message: "Please select your education level.",
    }),
    experience: z.string().min(1, {
        message: "Please select your work experience.",
    }),
    english: z.string().min(1, {
        message: "Please select your English proficiency.",
    }),
    funds: z.string().min(1, {
        message: "Please select your financial status.",
    }),
    country: z.string().min(1, {
        message: "Please select your desired country.",
    }),
});

type ScoreBreakdown = {
    age: number;
    education: number;
    experience: number;
    english: number;
    funds: number;
    total: number;
};

// Scoring logic
const calculateScore = (data: z.infer<typeof formSchema>): ScoreBreakdown => {
    let breakdown = {
        age: 0,
        education: 0,
        experience: 0,
        english: 0,
        funds: 0,
        total: 0
    };

    const country = data.country;

    // Age scoring (Standard but weighted by country)
    if (data.age === "below-18") breakdown.age = 15;
    else if (data.age === "18-30") breakdown.age = 25;
    else if (data.age === "31-35") breakdown.age = 20;
    else if (data.age === "36-40") breakdown.age = 15;
    else if (data.age === "41-45") breakdown.age = 10;
    else if (data.age === "46+") breakdown.age = 5;

    // Education scoring (High weight for Canada/Australia)
    const eduWeight = (country === "canada" || country === "australia") ? 1.2 : 1.0;
    if (data.education === "no-school") breakdown.education = Math.round(5 * eduWeight);
    else if (data.education === "primary") breakdown.education = Math.round(8 * eduWeight);
    else if (data.education === "secondary") breakdown.education = Math.round(12 * eduWeight);
    else if (data.education === "high-school") breakdown.education = Math.round(15 * eduWeight);
    else if (data.education === "diploma") breakdown.education = Math.round(18 * eduWeight);
    else if (data.education === "bachelor") breakdown.education = Math.round(20 * eduWeight);
    else if (data.education === "masters") breakdown.education = Math.round(25 * eduWeight);
    else if (data.education === "phd") breakdown.education = Math.round(30 * eduWeight);

    // Experience scoring (High weight for Canada/UK)
    const expWeight = (country === "canada" || country === "uk") ? 1.2 : 1.0;
    if (data.experience === "no-exp") breakdown.experience = 0;
    else if (data.experience === "0-1") breakdown.experience = Math.round(5 * expWeight);
    else if (data.experience === "1-2") breakdown.experience = Math.round(10 * expWeight);
    else if (data.experience === "2-3") breakdown.experience = Math.round(15 * expWeight);
    else if (data.experience === "3+") breakdown.experience = Math.round(20 * expWeight);

    // English scoring (Critical for Canada/Australia/UK)
    const engWeight = (country === "canada" || country === "australia" || country === "uk") ? 1.5 : 0.8;
    if (data.english === "not-given") breakdown.english = 0;
    else if (data.english === "dont-know") breakdown.english = Math.round(5 * engWeight);
    else if (data.english === "5-6") breakdown.english = Math.round(10 * engWeight);
    else if (data.english === "6-7") breakdown.english = Math.round(15 * engWeight);
    else if (data.english === "7+") breakdown.english = Math.round(20 * engWeight);

    // Funds scoring (Critical for USA B1/B2 and UK Visitor)
    const fundWeight = (country === "usa" || country === "uk" || country === "schengen") ? 1.4 : 1.0;
    if (data.funds === "no-upper") breakdown.funds = Math.round(20 * fundWeight);
    else if (data.funds === "10+") breakdown.funds = Math.round(15 * fundWeight);
    else if (data.funds === "5-10") breakdown.funds = Math.round(8 * fundWeight);
    else if (data.funds === "0-5") breakdown.funds = Math.round(3 * fundWeight);

    breakdown.total = breakdown.age + breakdown.education + breakdown.experience + breakdown.english + breakdown.funds;

    return breakdown;
};

// Result determination
const getResult = (score: number) => {
    if (score >= 85) return "Very High Chance";
    if (score >= 70) return "High Chance";
    if (score >= 50) return "Medium Chance";
    return "Low Chance";
};

const VisaEligibilityPage = () => {
    const [showResult, setShowResult] = useState(false);
    const [breakdown, setBreakdown] = useState<ScoreBreakdown | null>(null);
    const [result, setResult] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            age: "",
            education: "",
            experience: "",
            english: "",
            funds: "",
            country: "",
        },
    });

    const formValues = form.watch();
    const progress = useMemo(() => {
        const fields = ["name", "email", "phone", "age", "education", "experience", "english", "funds", "country"] as const;
        const filled = fields.filter(f => formValues[f] && formValues[f] !== "").length;
        return (filled / fields.length) * 100;
    }, [formValues]);

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        setIsLoading(true);
        const calculatedBreakdown = calculateScore(data);
        const resultText = getResult(calculatedBreakdown.total);

        try {
            const response = await fetch("https://smotvisa-pro-backend-visa.vercel.app/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...data,
                    score: calculatedBreakdown.total,
                    breakdown: calculatedBreakdown,
                    result: resultText,
                    type: "visa-eligibility-check",
                }),
            });

            if (response.ok) {
                toast({ title: "Success!", description: "Your profile assessment has been sent to our experts." });
            }
        } catch (error) {
            console.error("Error sending check:", error);
        }

        setBreakdown(calculatedBreakdown);
        setResult(resultText);
        setShowResult(true);
        setIsLoading(false);
    };

    const handleWhatsApp = () => {
        const message = `Hi SMOT VISA! I just checked my visa eligibility for ${formValues.country?.toUpperCase()}. My score was ${breakdown?.total} (${result}). I'd like a professional review of my profile.`;
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
    };

    return (
        <div className="min-h-screen bg-background pb-20">
            <PageHeader
                title="Visa Eligibility Calculator"
                description="Calculate your visa chances for Canada PR, UK visitor visa, and USA B1/B2 in seconds."
                breadcrumbs={[
                    { label: "Visa Services", href: "/visa" },
                    { label: "Eligibility Checker" }
                ]}
            />

            {/* SEO Content Section */}
            <section className="py-12 bg-secondary/5 border-b border-border">
                <div className="container mx-auto px-4 max-w-5xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                            Check Your Visa Eligibility for Canada, UK, USA & Australia
                        </h2>
                        <p className="text-lg font-body text-muted-foreground italic leading-relaxed max-w-3xl mx-auto">
                            Our advanced Visa Eligibility Checker uses real-time consulate trends and regulatory requirements to provide a precise success probability. Whether you're aiming for a <strong>Canada Express Entry CRS score</strong>,
                            a <strong>USA B1/B2 Business Visa</strong>, or <strong>UK Tourist Visa</strong>, get the insights you need before you file.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 mt-12">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6">
                        {!showResult && (
                            <div className="mb-8 space-y-2">
                                <div className="flex justify-between items-end mb-2">
                                    <span className="text-xs font-display font-bold text-secondary uppercase tracking-widest">Assessment Progress</span>
                                    <span className="text-sm font-display font-bold text-foreground">{Math.round(progress)}%</span>
                                </div>
                                <div className="h-2 w-full bg-muted rounded-full overflow-hidden border border-border">
                                    <motion.div
                                        className="h-full bg-secondary"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${progress}%` }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </div>
                            </div>
                        )}

                        <AnimatePresence mode="wait">
                            {!showResult ? (
                                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                    <Form {...form}>
                                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                            <Card className="border-border/50 shadow-card rounded-[2rem] hover:shadow-elevated transition-shadow">
                                                <CardHeader>
                                                    <CardTitle className="flex items-center gap-2 font-display text-xl text-foreground">
                                                        <User className="h-5 w-5 text-secondary" /> Personal Profile
                                                    </CardTitle>
                                                    <CardDescription className="italic">Basic identity and contact details for the assessment report.</CardDescription>
                                                </CardHeader>
                                                <CardContent className="space-y-4">
                                                    <FormField
                                                        control={form.control}
                                                        name="name"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel className="font-display font-medium">Full Name</FormLabel>
                                                                <FormControl><Input placeholder="John Doe" {...field} className="rounded-xl" /></FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                    <div className="grid md:grid-cols-2 gap-4">
                                                        <FormField
                                                            control={form.control}
                                                            name="email"
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormLabel className="font-display font-medium">Email Address</FormLabel>
                                                                    <FormControl><Input type="email" placeholder="john@example.com" {...field} className="rounded-xl" /></FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )}
                                                        />
                                                        <FormField
                                                            control={form.control}
                                                            name="phone"
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormLabel className="font-display font-medium">Phone Number</FormLabel>
                                                                    <FormControl><Input type="tel" placeholder="+91-XXXXXXXXXX" {...field} className="rounded-xl" /></FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )}
                                                        />
                                                    </div>
                                                </CardContent>
                                            </Card>

                                            <Card className="border-border/50 shadow-card rounded-[2rem] hover:shadow-elevated transition-shadow">
                                                <CardHeader>
                                                    <CardTitle className="flex items-center gap-2 font-display text-xl text-foreground">
                                                        <Globe className="h-5 w-5 text-secondary" /> Eligibility Profile
                                                    </CardTitle>
                                                    <CardDescription className="italic">Select your target destination and current status.</CardDescription>
                                                </CardHeader>
                                                <CardContent className="space-y-4">
                                                    <FormField
                                                        control={form.control}
                                                        name="country"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel className="font-display font-medium">Target Country</FormLabel>
                                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                                    <FormControl><SelectTrigger className="rounded-xl"><SelectValue placeholder="Select country" /></SelectTrigger></FormControl>
                                                                    <SelectContent className="rounded-xl">
                                                                        <SelectItem value="canada">Canada (PR / Study / Visitor)</SelectItem>
                                                                        <SelectItem value="australia">Australia (Study / Work)</SelectItem>
                                                                        <SelectItem value="uk">United Kingdom (Student / Visitor)</SelectItem>
                                                                        <SelectItem value="usa">United States (B1/B2 / F1)</SelectItem>
                                                                        <SelectItem value="schengen">Schengen Europe</SelectItem>
                                                                    </SelectContent>
                                                                </Select>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                    <div className="grid md:grid-cols-2 gap-4">
                                                        <FormField
                                                            control={form.control}
                                                            name="age"
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormLabel className="font-display font-medium">Current Age</FormLabel>
                                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                                        <FormControl><SelectTrigger className="rounded-xl"><SelectValue placeholder="Select age" /></SelectTrigger></FormControl>
                                                                        <SelectContent className="rounded-xl">
                                                                            <SelectItem value="18-30">18-30 (Optimal)</SelectItem>
                                                                            <SelectItem value="31-35">31-35</SelectItem>
                                                                            <SelectItem value="36-40">36-40</SelectItem>
                                                                            <SelectItem value="41-45">41-45</SelectItem>
                                                                            <SelectItem value="46+">46+</SelectItem>
                                                                        </SelectContent>
                                                                    </Select>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )}
                                                        />
                                                        <FormField
                                                            control={form.control}
                                                            name="education"
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormLabel className="font-display font-medium">Highest Qualification</FormLabel>
                                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                                        <FormControl><SelectTrigger className="rounded-xl"><SelectValue placeholder="Select level" /></SelectTrigger></FormControl>
                                                                        <SelectContent className="rounded-xl">
                                                                            <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                                                                            <SelectItem value="masters">Master's Degree</SelectItem>
                                                                            <SelectItem value="diploma">Diploma / Associate</SelectItem>
                                                                            <SelectItem value="phd">PhD</SelectItem>
                                                                            <SelectItem value="high-school">High School</SelectItem>
                                                                        </SelectContent>
                                                                    </Select>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )}
                                                        />
                                                    </div>
                                                    <div className="grid md:grid-cols-2 gap-4">
                                                        <FormField
                                                            control={form.control}
                                                            name="experience"
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormLabel className="font-display font-medium">Experience (Years)</FormLabel>
                                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                                        <FormControl><SelectTrigger className="rounded-xl"><SelectValue placeholder="Select years" /></SelectTrigger></FormControl>
                                                                        <SelectContent className="rounded-xl">
                                                                            <SelectItem value="no-exp">Fresher / No Exp</SelectItem>
                                                                            <SelectItem value="1-2">1-2 years</SelectItem>
                                                                            <SelectItem value="2-3">2-3 years</SelectItem>
                                                                            <SelectItem value="3+">3+ years</SelectItem>
                                                                        </SelectContent>
                                                                    </Select>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )}
                                                        />
                                                        <FormField
                                                            control={form.control}
                                                            name="english"
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormLabel className="font-display font-medium">English (IELTS/PTE)</FormLabel>
                                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                                        <FormControl><SelectTrigger className="rounded-xl"><SelectValue placeholder="Select level" /></SelectTrigger></FormControl>
                                                                        <SelectContent className="rounded-xl">
                                                                            <SelectItem value="7+">7.0+ (Advanced)</SelectItem>
                                                                            <SelectItem value="6-7">6.0 - 7.0 (Stable)</SelectItem>
                                                                            <SelectItem value="5-6">Below 6.0</SelectItem>
                                                                            <SelectItem value="not-given">Not Attempted</SelectItem>
                                                                        </SelectContent>
                                                                    </Select>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )}
                                                        />
                                                    </div>
                                                    <FormField
                                                        control={form.control}
                                                        name="funds"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel className="font-display font-medium">Financial Liquidity (Lakh INR)</FormLabel>
                                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                                    <FormControl><SelectTrigger className="rounded-xl"><SelectValue placeholder="Select range" /></SelectTrigger></FormControl>
                                                                    <SelectContent className="rounded-xl">
                                                                        <SelectItem value="no-upper">No Upper Bound (Premium)</SelectItem>
                                                                        <SelectItem value="10+">10 - 25 Lakh</SelectItem>
                                                                        <SelectItem value="5-10">5 - 10 Lakh</SelectItem>
                                                                        <SelectItem value="0-5">Less than 5 Lakh</SelectItem>
                                                                    </SelectContent>
                                                                </Select>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                </CardContent>
                                                <CardFooter className="pt-6">
                                                    <Button type="submit" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 py-8 rounded-2xl font-display font-bold text-lg shadow-gold transition-all" disabled={isLoading}>
                                                        {isLoading ? "Analyzing Profile..." : "Calculate Chances Now"}
                                                    </Button>
                                                </CardFooter>
                                            </Card>
                                        </form>
                                    </Form>
                                </motion.div>
                            ) : (
                                <motion.div key="result" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                                    <div className="bg-card rounded-[3rem] shadow-elevated border border-border p-8 md:p-12 relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 p-8 opacity-5">
                                            <Calculator className="w-40 h-40 text-secondary" />
                                        </div>

                                        <div className="text-center mb-12">
                                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/10 rounded-full mb-4">
                                                <Award className="h-4 w-4 text-secondary" />
                                                <span className="text-xs font-display font-bold text-secondary uppercase tracking-widest">Algorithm Output</span>
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">Assessment Complete</h3>
                                            <p className="text-sm font-body text-muted-foreground italic">Score based on {formValues.country?.toUpperCase()} regulatory weights</p>
                                        </div>

                                        <div className="flex flex-col items-center justify-center py-10 border-y border-border/50 mb-10 relative">
                                            <div className="text-8xl md:text-9xl font-display font-bold text-foreground transition-all duration-700">{breakdown?.total}</div>
                                            <div className={cn(
                                                "px-8 py-2.5 rounded-full font-display font-bold text-lg uppercase tracking-widest shadow-sm",
                                                result.includes("High") ? "bg-green-500/10 text-green-600 border border-green-500/20" :
                                                    result.includes("Medium") ? "bg-orange-500/10 text-orange-600 border border-orange-500/20" :
                                                        "bg-red-500/10 text-red-600 border border-red-500/20"
                                            )}>
                                                {result}
                                            </div>
                                        </div>

                                        <div className="grid gap-4 mb-10">
                                            <h4 className="text-sm font-display font-bold text-foreground flex items-center gap-2">
                                                <BarChart3 className="h-4 w-4 text-secondary" /> Score Breakdown
                                            </h4>
                                            <div className="grid sm:grid-cols-2 gap-4">
                                                {[
                                                    { label: "Age", value: breakdown?.age },
                                                    { label: "Academic", value: breakdown?.education },
                                                    { label: "Experience", value: breakdown?.experience },
                                                    { label: "English", value: breakdown?.english },
                                                    { label: "Financials", value: breakdown?.funds },
                                                ].map((v, i) => (
                                                    <div key={i} className="flex justify-between items-center p-4 bg-muted/30 rounded-xl border border-border/50">
                                                        <span className="text-xs font-display font-bold text-muted-foreground uppercase">{v.label}</span>
                                                        <span className="font-display font-bold text-foreground">{v.value} pts</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="p-6 bg-secondary/5 rounded-2xl border border-secondary/20 mb-10">
                                            <h4 className="text-sm font-display font-bold text-foreground mb-2 flex items-center gap-2">
                                                <TrendingUp className="h-4 w-4 text-secondary" /> Professional Tip:
                                            </h4>
                                            <p className="text-sm font-body text-muted-foreground leading-relaxed italic border-l-2 border-secondary pl-4">
                                                {result.includes("High") && "Excellent standing. We recommend locked-in filing within 15 days to avoid policy shifts."}
                                                {result.includes("Medium") && "Your core profile is strong. Strategically adding a professional cover letter or enhanced financial portfolio would increase your probability."}
                                                {result.includes("Low") && "Currently, regulatory hurdles are visible. Schedule a strategic roadmap session to bridge these gaps before application."}
                                            </p>
                                        </div>

                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <Button onClick={handleWhatsApp} className="bg-[#25D366] hover:bg-[#20ba5a] text-white py-8 rounded-2xl font-display font-bold text-lg group">
                                                <MessageCircle className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" /> Expert Review
                                            </Button>
                                            <Button onClick={() => setShowResult(false)} variant="outline" className="py-8 rounded-2xl font-display font-bold text-lg hover:bg-secondary/10 transition-colors">
                                                Start Over
                                            </Button>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="space-y-8 lg:sticky lg:top-24">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-display font-bold text-foreground underline decoration-secondary decoration-4 underline-offset-8">Intelligent Logistics</h3>
                            <p className="text-muted-foreground font-body italic leading-relaxed text-lg">
                                SMOT VISA uses proprietary data models that simulate actual visa application workflows. Our scoring is dynamic, meaning it shifts with current regulatory climates.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            {[
                                { title: "CRS Equivalent Logic", icon: Award, desc: "For Canada PR, we use CRS-aligned weighting for accurate pre-assessment." },
                                { title: "B1/B2 Financial Vectors", icon: ShieldCheck, desc: "US visitor evaluations prioritize financial stability and local ties." },
                                { title: "Real-time Policy Mapping", icon: Clock, desc: "Our engine is updated weekly as global visa policies evolve." },
                            ].map((item, i) => (
                                <motion.div key={i} whileHover={{ x: 5 }} className="flex gap-5 p-6 bg-card rounded-[2rem] border border-border shadow-sm group hover:border-secondary transition-all">
                                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                                        <item.icon className="h-6 w-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="font-display font-bold text-foreground mb-1">{item.title}</h4>
                                        <p className="text-sm text-muted-foreground leading-relaxed italic">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="relative group cursor-pointer overflow-hidden rounded-[2.5rem] bg-primary p-1">
                            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary-light opacity-20 group-hover:opacity-40 transition-opacity" />
                            <div className="relative bg-primary rounded-[2.4rem] p-10 text-center space-y-6">
                                <QrCode className="h-12 w-12 text-secondary mx-auto mb-4" />
                                <h4 className="text-2xl font-display font-bold text-white uppercase tracking-tighter">Strategic Gap Analysis</h4>
                                <p className="text-sm text-white/70 italic leading-relaxed">
                                    Our assessment doesn't just give you a score. It gives you a roadmap to <strong>success</strong>.
                                </p>
                                <Button onClick={() => window.location.href = "/contact"} className="w-full bg-secondary text-secondary-foreground font-display font-bold py-6 rounded-xl shadow-gold group">
                                    Connect with Case Managers <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisaEligibilityPage;
