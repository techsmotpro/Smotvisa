import "flag-icons/css/flag-icons.min.css";

/**
 * Converts a flag emoji (e.g. "🇺🇸") to its ISO 3166-1 alpha-2 code ("us").
 * Flag emoji are pairs of Regional Indicator Symbols (U+1F1E6–U+1F1FF),
 * each mapping to a letter A–Z, so the conversion is purely arithmetic.
 */
function emojiToCode(emoji: string): string {
    if (typeof emoji !== "string" || !emoji) return "";
    const letters = [...emoji]
        .map((ch) => ch.codePointAt(0) ?? 0)
        .filter((cp) => cp >= 0x1f1e6 && cp <= 0x1f1ff)
        .map((cp) => String.fromCharCode(cp - 0x1f1e6 + 97));
    return letters.join("");
}

interface CountryFlagProps {
    /** A flag emoji such as "🇺🇸" or "🇪🇺". */
    emoji: string;
    /** Extra classes for sizing/spacing — font-size controls the flag size. */
    className?: string;
}

/**
 * Renders a country flag as a self-hosted SVG via flag-icons, so flags show
 * consistently on every platform (Windows desktop does NOT render flag emoji).
 * Falls back to the raw emoji if the code can't be derived.
 */
export default function CountryFlag({ emoji, className = "" }: CountryFlagProps) {
    const code = emojiToCode(emoji);
    if (!code) return <span className={className}>{emoji}</span>;
    return (
        <span
            className={`fi fi-${code} rounded-sm ${className}`}
            role="img"
            aria-label={`${code.toUpperCase()} flag`}
        />
    );
}
