"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, User, Award, Mail, Phone, Globe, CheckCircle2 } from "lucide-react";
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

// Scoring logic
const calculateScore = (data: z.infer<typeof formSchema>) => {
    let score = 0;

    // Age scoring
    if (data.age === "below-18") score += 15;
    else if (data.age === "18-30") score += 25;
    else if (data.age === "31-35") score += 20;
    else if (data.age === "36-40") score += 15;
    else if (data.age === "41-45") score += 10;
    else if (data.age === "46+") score += 5;

    // Education scoring
    if (data.education === "no-school") score += 5;
    else if (data.education === "primary") score += 8;
    else if (data.education === "secondary") score += 12;
    else if (data.education === "high-school") score += 15;
    else if (data.education === "diploma") score += 18;
    else if (data.education === "bachelor") score += 20;
    else if (data.education === "masters") score += 25;
    else if (data.education === "phd") score += 30;

    // Experience scoring
    if (data.experience === "no-exp") score += 0;
    else if (data.experience === "0-1") score += 5;
    else if (data.experience === "1-2") score += 10;
    else if (data.experience === "2-3") score += 15;
    else if (data.experience === "3+") score += 20;

    // English scoring
    if (data.english === "not-given") score += 0;
    else if (data.english === "dont-know") score += 5;
    else if (data.english === "5-6") score += 10;
    else if (data.english === "6-7") score += 15;
    else if (data.english === "7+") score += 20;

    // Funds scoring
    if (data.funds === "no-upper") score += 15;
    else if (data.funds === "10+") score += 10;
    else if (data.funds === "5-10") score += 5;
    else if (data.funds === "0-5") score += 2;

    return score;
};

// Result determination
const getResult = (score: number) => {
    if (score >= 80) return "High Chance";
    if (score >= 60) return "Medium Chance";
    return "Low Chance";
};

const VisaEligibilityPage = () => {
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);
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

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        setIsLoading(true);
        const calculatedScore = calculateScore(data);
        const resultText = getResult(calculatedScore);

        // Send data to team via email
        try {
            const response = await fetch("https://smotvisa-pro-backend-visa.vercel.app/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...data,
                    score: calculatedScore,
                    result: resultText,
                    type: "visa-eligibility-check",
                }),
            });

            if (response.ok) {
                toast({
                    title: "Success!",
                    description: "Your visa eligibility check has been sent. We'll get back to you soon.",
                });
            } else {
                toast({
                    title: "Error",
                    description: "Failed to send your visa eligibility check. Please try again later.",
                    variant: "destructive",
                });
            }
        } catch (error) {
            console.error("Error sending visa eligibility check:", error);
            toast({
                title: "Error",
                description: "Failed to send your visa eligibility check. Please check your internet connection.",
                variant: "destructive",
            });
        }

        setScore(calculatedScore);
        setResult(resultText);
        setShowResult(true);
        setIsLoading(false);
    };

    return (
        <div className="min-h-screen bg-background pb-20">
            <PageHeader
                title="Visa Eligibility Checker"
                description="Get instant feedback on your visa eligibility with our advanced scoring system."
                breadcrumbs={[
                    { label: "Visa Services", href: "/destinations" },
                    { label: "Eligibility Checker" }
                ]}
            />

            <div className="container mx-auto px-4 mt-12">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <AnimatePresence mode="wait">
                            {!showResult ? (
                                <motion.div
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <Form {...form}>
                                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                            <Card className="border-border/50 shadow-card rounded-[2rem]">
                                                <CardHeader>
                                                    <CardTitle className="flex items-center gap-2 font-display text-xl">
                                                        <User className="h-5 w-5 text-secondary" /> Personal Information
                                                    </CardTitle>
                                                    <CardDescription className="italic">
                                                        Please provide your basic contact details
                                                    </CardDescription>
                                                </CardHeader>
                                                <CardContent className="space-y-4">
                                                    <FormField
                                                        control={form.control}
                                                        name="name"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel className="font-display font-medium">Full Name</FormLabel>
                                                                <FormControl>
                                                                    <Input placeholder="John Doe" {...field} className="rounded-xl" />
                                                                </FormControl>
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
                                                                    <FormControl>
                                                                        <Input type="email" placeholder="john@example.com" {...field} className="rounded-xl" />
                                                                    </FormControl>
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
                                                                    <FormControl>
                                                                        <Input type="tel" placeholder="+91-9876543210" {...field} className="rounded-xl" />
                                                                    </FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )}
                                                        />
                                                    </div>
                                                </CardContent>
                                            </Card>

                                            <Card className="border-border/50 shadow-card rounded-[2rem]">
                                                <CardHeader>
                                                    <CardTitle className="flex items-center gap-2 font-display text-xl">
                                                        <Globe className="h-5 w-5 text-secondary" /> Application Profile
                                                    </CardTitle>
                                                    <CardDescription className="italic">
                                                        Tell us more about your background and goals
                                                    </CardDescription>
                                                </CardHeader>
                                                <CardContent className="space-y-4">
                                                    <FormField
                                                        control={form.control}
                                                        name="country"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel className="font-display font-medium">Desired Destination</FormLabel>
                                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                                    <FormControl>
                                                                        <SelectTrigger className="rounded-xl">
                                                                            <SelectValue placeholder="Select country" />
                                                                        </SelectTrigger>
                                                                    </FormControl>
                                                                    <SelectContent className="rounded-xl">
                                                                        <SelectItem value="canada">Canada</SelectItem>
                                                                        <SelectItem value="australia">Australia</SelectItem>
                                                                        <SelectItem value="uk">United Kingdom</SelectItem>
                                                                        <SelectItem value="usa">United States</SelectItem>
                                                                        <SelectItem value="uae">UAE</SelectItem>
                                                                        <SelectItem value="schengen">Schengen Area</SelectItem>
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
                                                                    <FormLabel className="font-display font-medium">Age Group</FormLabel>
                                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                                        <FormControl>
                                                                            <SelectTrigger className="rounded-xl">
                                                                                <SelectValue placeholder="Select age" />
                                                                            </SelectTrigger>
                                                                        </FormControl>
                                                                        <SelectContent className="rounded-xl">
                                                                            <SelectItem value="below-18">Below 18</SelectItem>
                                                                            <SelectItem value="18-30">18-30</SelectItem>
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
                                                                    <FormLabel className="font-display font-medium">Highest Education</FormLabel>
                                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                                        <FormControl>
                                                                            <SelectTrigger className="rounded-xl">
                                                                                <SelectValue placeholder="Select level" />
                                                                            </SelectTrigger>
                                                                        </FormControl>
                                                                        <SelectContent className="rounded-xl">
                                                                            <SelectItem value="no-school">No Schooling</SelectItem>
                                                                            <SelectItem value="primary">Primary School</SelectItem>
                                                                            <SelectItem value="secondary">Secondary School</SelectItem>
                                                                            <SelectItem value="high-school">High School</SelectItem>
                                                                            <SelectItem value="diploma">Diploma</SelectItem>
                                                                            <SelectItem value="bachelor">Bachelor's</SelectItem>
                                                                            <SelectItem value="masters">Master's</SelectItem>
                                                                            <SelectItem value="phd">PhD</SelectItem>
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
                                                                    <FormLabel className="font-display font-medium">Work Experience</FormLabel>
                                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                                        <FormControl>
                                                                            <SelectTrigger className="rounded-xl">
                                                                                <SelectValue placeholder="Select years" />
                                                                            </SelectTrigger>
                                                                        </FormControl>
                                                                        <SelectContent className="rounded-xl">
                                                                            <SelectItem value="no-exp">No Experience</SelectItem>
                                                                            <SelectItem value="0-1">0-1 year</SelectItem>
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
                                                                    <FormLabel className="font-display font-medium">IELTS Proficiency</FormLabel>
                                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                                        <FormControl>
                                                                            <SelectTrigger className="rounded-xl">
                                                                                <SelectValue placeholder="Select score" />
                                                                            </SelectTrigger>
                                                                        </FormControl>
                                                                        <SelectContent className="rounded-xl">
                                                                            <SelectItem value="not-given">Not Attempted</SelectItem>
                                                                            <SelectItem value="dont-know">I don't know</SelectItem>
                                                                            <SelectItem value="5-6">5-6 band</SelectItem>
                                                                            <SelectItem value="6-7">6-7 band</SelectItem>
                                                                            <SelectItem value="7+">7+ band</SelectItem>
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
                                                                <FormLabel className="font-display font-medium">Available Funds (Lakh INR)</FormLabel>
                                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                                    <FormControl>
                                                                        <SelectTrigger className="rounded-xl">
                                                                            <SelectValue placeholder="Select amount" />
                                                                        </SelectTrigger>
                                                                    </FormControl>
                                                                    <SelectContent className="rounded-xl">
                                                                        <SelectItem value="no-upper">No Upper Budget</SelectItem>
                                                                        <SelectItem value="10+">10+ lakh</SelectItem>
                                                                        <SelectItem value="5-10">5-10 lakh</SelectItem>
                                                                        <SelectItem value="0-5">Less than 5 lakh</SelectItem>
                                                                    </SelectContent>
                                                                </Select>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                </CardContent>
                                                <CardFooter className="pt-6">
                                                    <Button
                                                        type="submit"
                                                        className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 py-6 rounded-2xl font-display font-bold text-lg shadow-gold"
                                                        disabled={isLoading}
                                                    >
                                                        {isLoading ? (
                                                            <div className="flex items-center gap-2">
                                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                                Calculating Score...
                                                            </div>
                                                        ) : (
                                                            "Check Eligibility"
                                                        )}
                                                    </Button>
                                                </CardFooter>
                                            </Card>
                                        </form>
                                    </Form>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="result"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                >
                                    <Card className="bg-primary p-2 rounded-[3.5rem] shadow-elevated relative overflow-hidden border border-white/10">
                                        <div className="absolute inset-0 opacity-10 pointer-events-none bg-grid-white" />
                                        <CardHeader className="text-center pt-10">
                                            <div className="mx-auto w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6 shadow-gold">
                                                <Award className="h-8 w-8 text-secondary-foreground" />
                                            </div>
                                            <CardTitle className="text-3xl font-display font-bold text-primary-foreground">
                                                Eligibility Score
                                            </CardTitle>
                                            <CardDescription className="text-primary-foreground/70 italic">
                                                Real-time assessment results based on your profile
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-10 px-10 pb-10">
                                            <div className="text-center border-t border-b border-white/10 py-10">
                                                <div className="text-8xl font-display font-bold text-primary-foreground mb-4">{score}</div>
                                                <div className={cn(
                                                    "inline-block px-6 py-2 rounded-full font-display font-bold text-lg uppercase tracking-widest",
                                                    result === "High Chance" ? "bg-green-500/20 text-green-400" :
                                                        result === "Medium Chance" ? "bg-orange-500/20 text-orange-400" :
                                                            "bg-red-500/20 text-red-400"
                                                )}>
                                                    {result}
                                                </div>
                                            </div>

                                            <div className="space-y-4">
                                                <h3 className="font-display font-bold text-xl text-primary-foreground">Consultation Insight:</h3>
                                                <p className="text-primary-foreground/80 font-body leading-relaxed italic text-lg">
                                                    {result === "High Chance" && "Your profile demonstrates strategic alignment with primary visa criteria. We recommend immediate submission to leverage current processing times."}
                                                    {result === "Medium Chance" && "Your profile is competitive but would benefit from refined documentation strategy. Our experts can help bridge the gap for a premium application."}
                                                    {result === "Low Chance" && "Current indicators suggest a need for profile enhancement. Schedule a strategic roadmap session with us to identify high-impact improvements."}
                                                </p>
                                            </div>
                                        </CardContent>
                                        <CardFooter className="flex flex-col gap-4 pb-12 px-10">
                                            <Button
                                                onClick={() => setShowResult(false)}
                                                className="w-full bg-white/10 border-2 border-white/20 text-white hover:bg-white/20 py-8 rounded-2xl font-display font-bold text-lg"
                                            >
                                                Re-evaluate Profile
                                            </Button>
                                            <Button
                                                onClick={() => window.location.href = "/contact"}
                                                className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 py-8 rounded-2xl font-display font-bold text-lg shadow-gold"
                                            >
                                                Book Strategic Consultation
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <h3 className="text-2xl font-display font-bold text-foreground">Assessment Intelligence</h3>
                            <p className="text-muted-foreground font-body italic leading-relaxed">
                                Our proprietary scoring algorithm evaluates your profile across five critical regulatory vectors to provide a data-driven success probability.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            {[
                                { label: "Age", range: "5-25 Units" },
                                { label: "Academic Depth", range: "5-30 Units" },
                                { label: "Professional Tenure", range: "0-20 Units" },
                                { label: "Language Proficiency", range: "0-20 Units" },
                                { label: "Financial Sustainability", range: "2-15 Units" }
                            ].map((v, i) => (
                                <div key={i} className="flex justify-between items-center p-5 bg-card rounded-2xl border border-border shadow-sm group hover:border-secondary transition-colors">
                                    <span className="font-display font-bold text-foreground/80">{v.label}</span>
                                    <span className="text-secondary font-display font-bold italic">{v.range}</span>
                                </div>
                            ))}
                        </div>

                        <div className="p-8 bg-muted/50 rounded-[2.5rem] border border-border space-y-6">
                            <h3 className="text-xl font-display font-bold text-foreground">Why Smotvisa?</h3>
                            <div className="space-y-4">
                                {[
                                    "Algorithmic Precision based on current consulate data",
                                    "Strategic Gap Analysis for profile enhancement",
                                    "Direct Bridge to Professional Case Managers",
                                    "100% Privacy Compliance for all data packets"
                                ].map(item => (
                                    <div key={item} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                        <p className="text-sm font-body text-muted-foreground italic">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default VisaEligibilityPage;
