"use client";

// ============================================
// 🔧 뉴스를 수정하려면 아래 배열을 편집하세요!
// title: 제목
// desc: 설명
// date: 날짜
// link: 클릭 시 이동할 URL (트윗 링크, 스팀 링크 등)
// image: 이미지 경로 (public 폴더 기준)
// ============================================
const NEWS_ITEMS = [
    {
        title: "Chapter 1 개발 완료!",
        desc: "어두운 터널 너머에 새로운 스테이지가 기다리고 있습니다. 곧 Chapter 2 개발에 돌입합니다!",
        date: "Feb 7, 2026",
        link: "https://x.com/Studio_Gravitia",
        image: "/banner1.png",
    },
    {
        title: "새로운 스테이지 공개",
        desc: "이동 중 갑자기 이상한 구조물이 길을 막았습니다... 지진이다! 새로운 장애물 시스템을 만나보세요.",
        date: "Jan 26, 2026",
        link: "https://x.com/Studio_Gravitia",
        image: "/banner2.png",
    },
    {
        title: "2026년 개발 로드맵",
        desc: "올해의 개발 계획과 목표를 공유합니다. 많은 응원 부탁드립니다!",
        date: "Jan 2, 2026",
        link: "https://x.com/Studio_Gravitia",
        image: "/banner3.png",
    },
];

export default function LatestNews() {
    return (
        <div>
            <div className="news-grid">
                {NEWS_ITEMS.map((item, index) => (
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
                    𝕏 Follow @Studio_Gravitia for more →
                </a>
            </div>
        </div>
    );
}
