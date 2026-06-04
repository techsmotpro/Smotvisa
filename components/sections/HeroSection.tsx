import { ArrowRight, Shield, Clock, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import InquiryForm from "./InquiryForm";
import HeroContent from "@/components/sections/HeroContent";

const HeroSection = () => {
    return (
        <section
            id="home"
            className="relative lg:min-h-screen lg:flex lg:items-center overflow-hidden pt-20 lg:pt-28 lg:pb-0"
            style={{ zIndex: 1000, backgroundColor: "hsl(217, 72%, 18%)" }}
        >
            {/* Hero background image — single image, CSS handles mobile/desktop */}
            <div className="absolute inset-0 lg:block" style={{ zIndex: -1 }}>
                <Image
                    src="/images/hero-travel-CJWf8Tv1.webp"
                    alt="Visa and travel consultation services by SmotVisa, Bangalore"
                    fill
                    className="object-cover object-center"
                    sizes="100vw"
                    priority
                />
                <div className="hero-overlay" />
            </div>

            <div className="container mx-auto px-4 relative py-10 lg:py-0" style={{ zIndex: 10 }}>
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