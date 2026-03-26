import { ArrowRight, Shield, Clock, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import InquiryForm from "./InquiryForm";
import HeroContent from "@/components/sections/HeroContent";

const HeroSection = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-20 lg:pt-28 lg:pb-0 z-[1000]">
            {/* Background image */}
            <div className="absolute inset-0 z-[-1]">
                <Image
                    src="/images/hero-travel-CJWf8Tv1.jpg"
                    alt="Travel destination"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div>
                        <HeroContent />
                    </div>

                    <div className="hidden lg:block relative">
                        <InquiryForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
