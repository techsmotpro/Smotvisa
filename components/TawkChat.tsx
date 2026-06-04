"use client";

import Script from "next/script";

export default function TawkChat() {
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
