"use client";

import { useLang } from "./LangContext";

export default function LatestNews() {
    const { t } = useLang();

    const newsItems = [
        {
            title: t("news1_title"),
            desc: t("news1_desc"),
            date: t("news1_date"),
            link: "https://x.com/Studio_Gravitia",
            image: "/banner1.png",
        },
        {
            title: t("news2_title"),
            desc: t("news2_desc"),
            date: t("news2_date"),
            link: "https://x.com/Studio_Gravitia",
            image: "/banner2.png",
        },
        {
            title: t("news3_title"),
            desc: t("news3_desc"),
            date: t("news3_date"),
            link: "https://x.com/Studio_Gravitia",
            image: "/banner3.png",
        },
    ];

    return (
        <div>
            <div className="news-grid">
                {newsItems.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="news-card"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="news-card-image"
                        />
                        <div className="news-card-body">
                            <div className="news-card-date">{item.date}</div>
                            <h3 className="news-card-title">{item.title}</h3>
                            <p className="news-card-desc">{item.desc}</p>
                        </div>
                    </a>
                ))}
            </div>
            <div style={{ marginTop: "20px", textAlign: "center" }}>
                <a
                    href="https://x.com/Studio_Gravitia"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        color: "#e63946",
                        textDecoration: "none",
                        fontSize: "14px",
                        fontWeight: 600,
                        padding: "10px 24px",
                        border: "1px solid #2a2a2a",
                        borderRadius: "8px",
                        transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "#e63946";
                        e.currentTarget.style.background = "rgba(230,57,70,0.1)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "#2a2a2a";
                        e.currentTarget.style.background = "transparent";
                    }}
                >
                    {t("follow_btn")}
                </a>
            </div>
        </div>
    );
}
