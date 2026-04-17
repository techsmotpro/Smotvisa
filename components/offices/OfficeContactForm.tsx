"use client";

export default function OfficeContactForm() {
    return (
        <form className="space-y-3 text-black" onSubmit={(e) => e.preventDefault()}>
            <h3 className="text-xl font-display font-bold text-foreground mb-4">Contact Us</h3>

            <div className="space-y-1">
                <label className="text-[10px] font-body font-bold text-muted-foreground uppercase tracking-[0.2em] ml-1">Full Name</label>
                <input
                    type="text"
                    required
                    className="w-full px-3 py-2 rounded-lg border border-border bg-muted/30 text-foreground font-body text-sm focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all placeholder:text-muted-foreground/50"
                    placeholder="Enter your name"
                />
            </div>

            <div className="space-y-1">
                <label className="text-[10px] font-body font-bold text-muted-foreground uppercase tracking-[0.2em] ml-1">Email Address</label>
                <input
                    type="email"
                    required
                    className="w-full px-3 py-2 rounded-lg border border-border bg-muted/30 text-foreground font-body text-sm focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all placeholder:text-muted-foreground/50"
                    placeholder="name@example.com"
                />
            </div>

            <div className="space-y-1">
                <label className="text-[10px] font-body font-bold text-muted-foreground uppercase tracking-[0.2em] ml-1">Message</label>
                <textarea
                    rows={3}
                    required
                    className="w-full px-3 py-2 rounded-lg border border-border bg-muted/30 text-foreground font-body text-sm focus:ring-2 focus:ring-secondary/50 focus:border-secondary outline-none transition-all resize-none placeholder:text-muted-foreground/50"
                    placeholder="Tell us about your requirements..."
                />
            </div>

            <button
                type="submit"
                className="w-full px-4 py-3 bg-secondary text-secondary-foreground font-display font-bold text-sm rounded-lg shadow-gold hover:translate-y-[-2px] transition-all text-center"
            >
                Send Message
            </button>
        </form>
    );
}