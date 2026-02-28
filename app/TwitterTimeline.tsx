"use client";

export default function TwitterTimeline() {
    return (
        <div
            style={{
                width: "100%",
                maxWidth: "600px",
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid #2a2a2a",
            }}
        >
            <iframe
                src="https://syndication.twitter.com/srv/timeline-profile/screen-name/Studio_Gravitia?dnt=true&embedId=twitter-widget-0&frame=false&hideBorder=true&hideFooter=true&hideHeader=true&hideScrollBar=false&lang=en&theme=dark&transparent=true"
                style={{
                    width: "100%",
                    height: "600px",
                    border: "none",
                    background: "transparent",
                }}
                title="@Studio_Gravitia Twitter Timeline"
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            />
        </div>
    );
}
