"use client";

import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface Breadcrumb {
    label: string;
    href?: string;
}

interface PageHeaderProps {
    title: string;
    breadcrumbs: Breadcrumb[];
    description?: string;
}

const PageHeader = ({ title, breadcrumbs, description }: PageHeaderProps) => {
    return (
        <section className="relative pt-36 pb-20 overflow-hidden bg-primary">
            {/* Background Decorations */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-96 h-96 bg-secondary blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary blur-[120px] rounded-full translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 1, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl"
                >
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 mb-6 text-sm font-body">
                        <Link
                            href="/"
                            className="text-primary-foreground/60 hover:text-secondary transition-colors flex items-center gap-1.5"
                        >
                            <Home className="h-4 w-4" />
                            <span>Home</span>
                        </Link>
                        {breadcrumbs.map((crumb, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                                <ChevronRight className="h-3 w-3 text-primary-foreground/30" />
                                {crumb.href ? (
                                    <Link
                                        href={crumb.href}
                                        className="text-primary-foreground/60 hover:text-secondary transition-colors"
                                    >
                                        {crumb.label}
                                    </Link>
                                ) : (
                                    <span className="text-secondary font-semibold">
                                        {crumb.label}
                                    </span>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Title & Description */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-4">
                        {title}
                    </h1>
                    {description && (
                        <p className="text-lg md:text-xl font-body text-primary-foreground/70 leading-relaxed max-w-2xl">
                            {description}
                        </p>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default PageHeader;
