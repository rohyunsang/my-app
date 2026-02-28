"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

export default function TwitterTimeline() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // If script already loaded, re-render the widget
        if (window.twttr && containerRef.current) {
            window.twttr.widgets.load(containerRef.current);
        }
    }, []);

    return (
        <>
            <Script
                src="https://platform.twitter.com/widgets.js"
                strategy="lazyOnload"
                onLoad={() => {
                    if (window.twttr && containerRef.current) {
                        window.twttr.widgets.load(containerRef.current);
                    }
                }}
            />
            <div
                ref={containerRef}
                style={{
                    maxWidth: "600px",
                    borderRadius: "12px",
                    overflow: "hidden",
                }}
            >
                <a
                    className="twitter-timeline"
                    data-theme="dark"
                    data-height="600"
                    data-chrome="noheader nofooter noborders transparent"
                    href="https://twitter.com/Studio_Gravitia?ref_src=twsrc%5Etfw"
                >
                    Loading tweets...
                </a>
            </div>
        </>
    );
}

declare global {
    interface Window {
        twttr?: {
            widgets: {
                load: (el?: HTMLElement) => void;
            };
        };
    }
}
