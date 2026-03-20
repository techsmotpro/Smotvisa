"use client";

import { Share2 } from "lucide-react";

export default function ShareButton({ title }: { title: string }) {
    const handleShare = () => {
        if (typeof window !== "undefined" && navigator.share) {
            navigator.share({
                title: title,
                url: window.location.href
            }).catch((err) => console.log("Error sharing", err));
        } else {
            // Fallback for browsers that don't support Web Share API
            navigator.clipboard.writeText(window.location.href);
            alert("Link copied to clipboard!");
        }
    };

    return (
        <button
            onClick={handleShare}
            className="p-3 rounded-full bg-muted hover:bg-secondary hover:text-secondary-foreground transition-all shadow-sm"
            aria-label="Share article"
        >
            <Share2 className="h-5 w-5" />
        </button>
    );
}
