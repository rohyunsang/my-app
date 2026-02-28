"use client";

import { useEffect, useRef } from "react";

// ============================================
// 🔧 여기에 트윗 링크를 수정하세요!
// 새 트윗을 추가하거나 순서를 바꿀 수 있어요.
// ============================================
const TWEET_URLS = [
    "https://x.com/Studio_Gravitia/status/1895097498878083498",
    "https://x.com/Studio_Gravitia/status/1893978869230768547",
    "https://x.com/Studio_Gravitia/status/1888548901357265159",
];

export default function TwitterTimeline() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Build blockquotes for each tweet
        const html = TWEET_URLS.map(
            (url) =>
                `<blockquote class="twitter-tweet" data-theme="dark">
          <a href="${url}"></a>
        </blockquote>`
        ).join("");

        containerRef.current.innerHTML = html;

        // Load Twitter widget script to render the blockquotes
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
                display: "flex",
                flexDirection: "column",
                gap: "16px",
            }}
        >
            <div style={{ textAlign: "center", padding: "40px", color: "#888" }}>
                Loading tweets...
            </div>
        </div>
    );
}
