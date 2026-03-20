import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-muted/30">
            <div className="text-center p-8 bg-card rounded-[2.5rem] shadow-elevated border border-border max-w-md w-full">
                <h1 className="mb-6 text-7xl font-display font-bold text-primary">404</h1>
                <h2 className="mb-4 text-2xl font-display font-bold text-foreground">
                    Oops! Page not found
                </h2>
                <p className="mb-10 text-base font-body text-muted-foreground leading-relaxed">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <Link
                    href="/"
                    className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-secondary-foreground font-display font-bold rounded-2xl shadow-gold hover:translate-y-[-2px] transition-all"
                >
                    Return to Home
                </Link>
            </div>
        </div>
    );
}
