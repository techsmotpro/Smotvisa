"use client";

import { useEffect } from "react";

export default function TawkTo() {
    useEffect(() => {
        if (typeof window === "undefined") return;
        if ((window as any).Tawk_API) return;

        (window as any).Tawk_API = (window as any).Tawk_API || {};
        (window as any).Tawk_LoadStart = new Date();

        const s1 = document.createElement("script");
        const s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = "https://embed.tawk.to/69c2446229e9681c3d64dff1/1jkfdm932";
        s1.charset = "UTF-8";
        s1.setAttribute("crossorigin", "*");
        s0.parentNode?.insertBefore(s1, s0);
    }, []);

    return null;
}