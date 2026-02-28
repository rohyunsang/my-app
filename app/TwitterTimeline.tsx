"use client";

import { useEffect, useRef } from "react";

export default function TwitterTimeline() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Inject raw HTML + script directly into DOM, bypassing React
        containerRef.current.innerHTML = `
      <a class="twitter-timeline"
         data-theme="dark"
         data-height="600"
         data-chrome="noheader nofooter noborders"
         href="https://twitter.com/Studio_Gravitia?ref_src=twsrc%5Etfw">
        Tweets by @Studio_Gravitia
      </a>
    `;

        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.charset = "utf-8";
        script.async = true;
        containerRef.current.appendChild(script);

        return () => {
            if (containerRef.current) {
                containerRef.current.innerHTML = "";
            }
        };
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                maxWidth: "600px",
                minHeight: "200px",
                borderRadius: "12px",
                overflow: "hidden",
            }}
        />
    );
}
