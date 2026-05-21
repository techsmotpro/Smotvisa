"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";

const EXCLUDED_ROUTES = ["/webinar"];

export default function TawkChat() {
    const pathname = usePathname();
    if (EXCLUDED_ROUTES.includes(pathname)) return null;

    return (
        <>
            <Script
                id="tawk-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `var Tawk_API=Tawk_API||{},Tawk_LoadStart=new Date();`,
                }}
            />
            <Script
                id="tawk-embed"
                src="https://embed.tawk.to/69c2446229e9681c3d64dff1/1jkfdm932"
                strategy="afterInteractive"
            />
        </>
    );
}
