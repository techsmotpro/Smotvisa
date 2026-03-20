"use client";

import { Facebook, Instagram, Twitter, Youtube, ArrowUp, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { navLinks, services } from "@/data/navigationData";
import { offices, seoLocations } from "@/data/officeData";

const Footer = () => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-grid-white" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Tagline */}
          <div className="space-y-6">
            <Link href="/" className="block">
              <Image src="/assets/small--Y9qzfea.png" alt="SMOT VISA" width={100} height={100} className="w-auto h-20 mb-4 brightness-200 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-500 hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.5)]" />
              <h2 className="font-display font-bold text-2xl text-primary-foreground tracking-tight">SMOT VISA</h2>
              <p className="text-[10px] font-body text-primary-foreground/60 uppercase tracking-widest mt-1 font-bold">Visa and Travel Agency</p>
            </Link>
            <p className="text-sm font-body text-primary-foreground/70 leading-relaxed italic">
              "The status of the customer needs is monitored online with the help of our state of technology."
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={`Social Media Link ${i}`}
                  className="p-2.5 bg-primary-foreground/10 rounded-xl hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links & Services */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-1">
            <div>
              <h4 className="text-xs font-body font-bold uppercase tracking-[0.2em] text-secondary mb-6">Explore</h4>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm font-body text-primary-foreground/70 hover:text-secondary transition-colors"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-body font-bold uppercase tracking-[0.2em] text-secondary mb-6">Services</h4>
              <ul className="space-y-4">
                {services.map((service) => (
                  <li key={service.id}>
                    {service.href ? (
                      <Link href={service.href} className="text-sm font-body text-primary-foreground/70 hover:text-secondary transition-colors" onClick={() => window.scrollTo(0, 0)}>
                        {service.name}
                      </Link>
                    ) : (
                      <span className="text-sm font-body text-primary-foreground/40 cursor-default select-none uppercase tracking-widest text-[10px]">
                        {service.name}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Our Presence */}
          <div>
            <h4 className="text-xs font-body font-bold uppercase tracking-[0.2em] text-secondary mb-6">Our Presence</h4>
            <ul className="space-y-3">
              {[
                { name: "Maharashtra", href: "/contact" },
                { name: "Delhi", href: "/contact/delhi" },
                { name: "Andhra Pradesh", href: "/contact" },
                { name: "Karnataka", href: "/contact" },
                { name: "Ahmedabad", href: "/contact/ahmedabad" },
                { name: "Jaipur", href: "/contact/jaipur" },
              ].map((loc) => (
                <li key={loc.name}>
                  <Link
                    href={loc.href}
                    className="text-sm font-body text-primary-foreground/70 hover:text-secondary transition-colors flex items-center gap-2"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary/40" />
                    {loc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SEO Locations / Quick Services */}
          <div>
            <h4 className="text-xs font-body font-bold uppercase tracking-[0.2em] text-secondary mb-6">Popular Locations</h4>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {seoLocations.map((loc) => (
                <Link
                  key={loc}
                  href="/contact"
                  className="text-xs font-body text-primary-foreground/50 hover:text-secondary transition-colors"
                >
                  Visa Services in {loc}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10 bg-black/20">
        <div className="container mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-4">
            <div className="space-y-1">
              <p className="text-xs font-body text-primary-foreground/50">
                SMOT VISA
              </p>
              <p className="text-[10px] font-body text-primary-foreground/30">
                Managed by SMOT VISA Team.
              </p>
            </div>
          </div>

          <div className="flex gap-8 text-[11px] font-body text-primary-foreground/40">
            <Link href="#" className="hover:text-secondary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-secondary transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-secondary transition-colors">Cookies Settings</Link>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex flex-col items-center gap-1 text-[10px] font-body text-primary-foreground/30 hover:text-secondary transition-colors cursor-pointer"
          >
            <div className="p-2 bg-primary-foreground/10 rounded-full group-hover:bg-secondary transition-colors">
              <ArrowUp className="h-4 w-4 text-primary-foreground" />
            </div>
            TOP
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;