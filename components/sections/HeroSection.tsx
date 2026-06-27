import InquiryForm from "./InquiryForm";
import HeroContent from "@/components/sections/HeroContent";
import HeroCarousel from "@/components/sections/HeroCarousel";

const HeroSection = () => {
    return (
        <section
            id="home"
            className="relative lg:min-h-screen lg:flex lg:items-center overflow-x-hidden pt-20 lg:pt-24 pb-12 lg:pb-16"
            style={{ zIndex: 1000, backgroundColor: "hsl(210, 100%, 18%)" }}
        >
            {/* Hero background carousel */}
            <HeroCarousel />

            <div className="container mx-auto px-4 relative py-10 lg:py-0" style={{ zIndex: 10 }}>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">
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



