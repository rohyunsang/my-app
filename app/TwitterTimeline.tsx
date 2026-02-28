"use client";

import { useEffect, useRef, useState } from "react";

declare global {
    interface Window {
        twttr?: {
            widgets: {
                load: (el?: HTMLElement) => void;
                createTimeline: (
                    widgetId: { sourceType: string; screenName: string },
                    el: HTMLElement,
                    options?: Record<string, unknown>
                ) => Promise<HTMLElement>;
            };
        };
    }
}

export default function TwitterTimeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (loaded) return;

        const renderTimeline = () => {
            if (window.twttr && containerRef.current) {
                // Clear any previous content
                containerRef.current.innerHTML = "";
                window.twttr.widgets
                    .createTimeline(
                        { sourceType: "profile", screenName: "Studio_Gravitia" },
                        containerRef.current,
                        {
                            theme: "dark",
                            height: 600,
                            chrome: "noheader nofooter noborders transparent",
                            dnt: true,
                        }
                    )
                    .then(() => setLoaded(true))
                    .catch(() => {
                        // Fallback: show link to Twitter profile
                        if (containerRef.current) {
                            containerRef.current.innerHTML = `
                <div style="text-align:center;padding:40px 20px;border:1px solid #2a2a2a;border-radius:12px;">
                  <p style="color:#888;margin-bottom:16px;">Twitter timeline could not be loaded.</p>
                  <a href="https://x.com/Studio_Gravitia" target="_blank" rel="noopener noreferrer"
                     style="color:#e63946;text-decoration:none;font-weight:600;">
                    Follow @Studio_Gravitia on X →
                  </a>
                </div>
              `;
                        }
                    });
            }
        };

        // Load the Twitter widget script
        if (!window.twttr) {
            const script = document.createElement("script");
            script.src = "https://platform.twitter.com/widgets.js";
            script.async = true;
            script.onload = () => {
                // widgets.js sets window.twttr after a brief delay
                setTimeout(renderTimeline, 500);
            };
            document.head.appendChild(script);
        } else {
            renderTimeline();
        }
    }, [loaded]);

    return (
        <div
            ref={containerRef}
            style={{
                maxWidth: "600px",
                minHeight: "200px",
                borderRadius: "12px",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    textAlign: "center",
                    padding: "40px",
                    color: "#888",
                }}
            >
                Loading timeline...
            </div>
        </div>
    );
}
