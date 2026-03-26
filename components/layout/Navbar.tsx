"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";

import { navLinks } from "@/data/navigationData";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
    const [activeMobileCategory, setActiveMobileCategory] = useState<string | null>(null);
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const handleLinkClick = () => {
        setIsOpen(false);
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        if (typeof window !== "undefined" && window.location.hash) {
            const id = window.location.hash.substring(1);
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth" });
                }, 100);
            }
        }
    }, [pathname]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const isActive = (href: string) => {
        // Return true only if the current pathname exactly matches the link's href.
        // This ensures that /contact/maharashtra and /contact/karnataka are distinct.
        return pathname === href;
    };

    return (
        <>
            {/* Main nav */}
            <nav className="fixed top-0 left-0 w-full z-[9999] bg-primary/95 backdrop-blur-md shadow-card border-b border-primary-foreground/10">
                <div className="container mx-auto flex items-center justify-between px-4 py-5">
                    <Link href="/" onClick={handleLinkClick} className="flex items-center gap-3 navbar-logo-container">
                        <Image 
                            src="/assets/small--Y9qzfea.png" 
                            alt="SmotVisa" 
                            width={60} 
                            height={60} 
                            className="w-auto h-16"
                        />
                        <div className="flex flex-col">
                            <span className="font-display font-bold text-xl text-primary-foreground tracking-tight">SMOTVISA</span>
                            <span className="text-xs font-body text-primary-foreground/70 uppercase tracking-wider">Visa & Travel Agents</span>
                        </div>
                    </Link>

                    {/* Desktop nav */}
                    <div className="hidden lg:flex items-center gap-2 xl:gap-1 font-body">
                        {navLinks.map((link) => {
                            if (link.dropdown) {
                                return (
                                    <div
                                        key={link.label}
                                        className="relative"
                                        onMouseEnter={() => setActiveDropdown(link.label)}
                                        onMouseLeave={() => setActiveDropdown(null)}
                                    >
                                        <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground rounded-lg hover:bg-primary-foreground/10 transition-all">
                                            {link.label} <ChevronDown className="h-3 w-3" />
                                        </button>
                                        <AnimatePresence>
                                            {activeDropdown === link.label && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 8 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 8 }}
                                                    className="absolute top-full left-0 mt-1 w-56 bg-card rounded-xl shadow-elevated border border-border p-2"
                                                >
                                                    {link.dropdown.map((item: any) => (
                                                        <div
                                                            key={item.id}
                                                            className="relative"
                                                            onMouseEnter={() => item.submenu && setActiveSubmenu(item.id)}
                                                            onMouseLeave={() => item.submenu && setActiveSubmenu(null)}
                                                        >
                                                            {item.href ? (
                                                                <Link
                                                                    href={item.href}
                                                                    onClick={handleLinkClick}
                                                                    className={`flex items-center justify-between px-3 py-2.5 text-sm rounded-lg transition-colors ${isActive(item.href)
                                                                        ? "text-secondary font-bold bg-secondary/5"
                                                                        : "text-foreground hover:bg-muted"
                                                                        }`}
                                                                >
                                                                    <span>{item.name}</span>
                                                                    {item.submenu && <ChevronDown className="h-3 w-3 -rotate-90" />}
                                                                </Link>
                                                            ) : (
                                                                <div className="flex items-center justify-between px-3 py-2.5 text-sm text-foreground rounded-lg select-none cursor-default">
                                                                    <span>{item.name}</span>
                                                                    {item.submenu && <ChevronDown className="h-3 w-3 -rotate-90" />}
                                                                </div>
                                                            )}

                                                            <AnimatePresence>
                                                                {item.submenu && activeSubmenu === item.id && (
                                                                    <motion.div
                                                                        initial={{ opacity: 0, x: 8 }}
                                                                        animate={{ opacity: 1, x: 0 }}
                                                                        exit={{ opacity: 0, x: 8 }}
                                                                        className="absolute top-0 left-full ml-1 w-56 bg-card rounded-xl shadow-elevated border border-border p-2"
                                                                    >
                                                                        {item.submenu.map((sub: any) => (
                                                                            <Link
                                                                                key={sub.id}
                                                                                href={sub.href}
                                                                                onClick={handleLinkClick}
                                                                                className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors ${isActive(sub.href)
                                                                                    ? "text-secondary font-bold bg-secondary/5"
                                                                                    : "text-foreground hover:bg-muted"
                                                                                    }`}
                                                                            >
                                                                                <span className="text-lg">{sub.flag}</span>
                                                                                <span>{sub.name}</span>
                                                                            </Link>
                                                                        ))}
                                                                    </motion.div>
                                                                )}
                                                            </AnimatePresence>
                                                        </div>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            }
                            return (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    onClick={handleLinkClick}
                                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${isActive(link.href)
                                        ? "text-secondary font-bold bg-secondary/5"
                                        : "text-primary-foreground/80 hover:text-secondary hover:bg-primary-foreground/10"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </div>

                    <div className="hidden xl:block">
                        <Link
                            href="/contact"
                            className="px-6 py-2.5 bg-secondary text-secondary-foreground font-body font-bold rounded-full hover:opacity-90 transition-all shadow-gold whitespace-nowrap"
                        >
                            Get a Quote
                        </Link>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 rounded-lg hover:bg-primary-foreground/10 transition-colors text-primary-foreground"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="lg:hidden overflow-y-auto border-t border-primary-foreground/10 bg-primary/95 max-h-[calc(100vh-80px)]"
                        >
                            <div className="px-4 py-4 space-y-1 font-body">
                                {navLinks.map((link) => {
                                    if (link.dropdown) {
                                        return (
                                            <div key={link.label} className="border-b border-primary-foreground/5 last:border-0 pb-1">
                                                <button
                                                    onClick={() => setActiveMobileCategory(activeMobileCategory === link.label ? null : link.label)}
                                                    className="flex items-center justify-between w-full px-4 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground/90 hover:bg-primary-foreground/5 transition-colors"
                                                >
                                                    <span>{link.label}</span>
                                                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${activeMobileCategory === link.label ? "rotate-180 text-secondary" : "text-primary-foreground/40"}`} />
                                                </button>
                                                <AnimatePresence>
                                                    {activeMobileCategory === link.label && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="pb-4 space-y-1">
                                                                {link.dropdown.map((item: any) => (
                                                                    <div key={item.id}>
                                                                        {item.submenu ? (
                                                                            <>
                                                                                <button
                                                                                    onClick={() => setActiveSubmenu(activeSubmenu === item.id ? null : item.id)}
                                                                                    className="flex items-center justify-between w-full px-6 py-2.5 text-sm rounded-lg hover:bg-primary-foreground/10 transition-colors text-primary-foreground/80"
                                                                                >
                                                                                    <span>{item.name}</span>
                                                                                    <ChevronDown className={`h-3 w-3 transition-transform ${activeSubmenu === item.id ? "rotate-180" : ""}`} />
                                                                                </button>
                                                                                {activeSubmenu === item.id && (
                                                                                    <div className="pl-8 mt-1 grid grid-cols-2 gap-1 pb-2">
                                                                                        {item.submenu.map((sub: any) => (
                                                                                            <Link
                                                                                                key={sub.id}
                                                                                                href={sub.href}
                                                                                                onClick={handleLinkClick}
                                                                                                className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-colors ${isActive(sub.href)
                                                                                                    ? "text-secondary font-bold bg-secondary/5"
                                                                                                    : "text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/10"
                                                                                                    }`}
                                                                                            >
                                                                                                <span>{sub.flag}</span>
                                                                                                <span>{sub.name.replace(" Visa", "")}</span>
                                                                                            </Link>
                                                                                        ))}
                                                                                    </div>
                                                                                )}
                                                                            </>
                                                                        ) : item.href ? (
                                                                            <Link
                                                                                href={item.href}
                                                                                onClick={handleLinkClick}
                                                                                className={`flex items-center justify-between w-full px-6 py-2.5 text-sm rounded-lg transition-colors ${isActive(item.href)
                                                                                    ? "text-secondary font-bold bg-secondary/5"
                                                                                    : "text-primary-foreground/80 hover:bg-primary-foreground/10"
                                                                                    }`}
                                                                            >
                                                                                <span>{item.name}</span>
                                                                            </Link>
                                                                        ) : (
                                                                            <div className="flex items-center justify-between w-full px-6 py-2.5 text-sm text-primary-foreground/60 rounded-lg select-none cursor-default">
                                                                                <span>{item.name}</span>
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        );
                                    }
                                    return (
                                        <Link
                                            key={link.label}
                                            href={link.href}
                                            onClick={handleLinkClick}
                                            className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${isActive(link.href)
                                                ? "text-secondary font-bold bg-secondary/5"
                                                : "text-primary-foreground hover:bg-primary-foreground/10"
                                                }`}
                                        >
                                            {link.label}
                                        </Link>
                                    );
                                })}
                            </div>
                            <div className="p-4 pt-0">
                                <Link
                                    href="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="block text-center px-6 py-3 bg-secondary text-secondary-foreground font-semibold text-sm rounded-full"
                                >
                                    Get Free Consultation
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
};

export default Navbar;