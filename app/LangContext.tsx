"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "ko";

interface LangContextType {
    lang: Lang;
    setLang: (lang: Lang) => void;
    t: (key: string) => string;
}

const translations: Record<Lang, Record<string, string>> = {
    en: {
        // Header
        tagline: "Crafting Worlds Beyond Gravity",
        nav_press: "Press",
        nav_about: "About Us",
        // Sections
        latest_news: "Latest News",
        our_games: "Our Games",
        follow_btn: "𝕏 Follow @Studio_Gravitia for more →",
        // Footer
        privacy: "Privacy Policy",
        press_kit: "Press Kit",
        contact: "Contact",
        footer_copy: "© 2025 Gravitia. All rights reserved.",
        // Slides
        slide1_title: "Eclipsed Realms",
        slide1_subtitle: "A dark fantasy RPG — Coming 2026",
        slide1_badge: "NEW",
        slide2_title: "Stellar Drift",
        slide2_subtitle: "Explore the cosmos in this open-world space adventure",
        slide2_badge: "COMING SOON",
        slide3_title: "Shadow Protocol",
        slide3_subtitle: "Stealth action in a cyberpunk mega-city",
        slide3_badge: "IN DEVELOPMENT",
        // News
        news1_title: "Chapter 1 Development Complete!",
        news1_desc:
            "A new stage awaits beyond the dark tunnel. We're diving into Chapter 2 development soon!",
        news1_date: "Feb 7, 2026",
        news2_title: "New Stage Revealed",
        news2_desc:
            "A strange structure suddenly blocked our way... Earthquake! Meet our new obstacle system.",
        news2_date: "Jan 26, 2026",
        news3_title: "2026 Development Roadmap",
        news3_desc:
            "Sharing our development plans and goals for the year. Thank you for your support!",
        news3_date: "Jan 2, 2026",
        // Email tooltip
        email_copied: "Copied!",
        email_copy: "Copy",
    },
    ko: {
        // Header
        tagline: "중력 너머의 세계를 만듭니다",
        nav_press: "보도자료",
        nav_about: "회사 소개",
        // Sections
        latest_news: "최신 소식",
        our_games: "우리의 게임",
        follow_btn: "𝕏 @Studio_Gravitia 팔로우하기 →",
        // Footer
        privacy: "개인정보 처리방침",
        press_kit: "프레스 킷",
        contact: "문의하기",
        footer_copy: "© 2025 Gravitia. All rights reserved.",
        // Slides
        slide1_title: "Eclipsed Realms",
        slide1_subtitle: "다크 판타지 RPG — 2026년 출시 예정",
        slide1_badge: "신작",
        slide2_title: "Stellar Drift",
        slide2_subtitle: "광활한 우주를 탐험하는 오픈월드 우주 어드벤처",
        slide2_badge: "출시 예정",
        slide3_title: "Shadow Protocol",
        slide3_subtitle: "사이버펑크 메가시티에서 펼쳐지는 스텔스 액션",
        slide3_badge: "개발 중",
        // News
        news1_title: "Chapter 1 개발 완료!",
        news1_desc:
            "어두운 터널 너머에 새로운 스테이지가 기다리고 있습니다. 곧 Chapter 2 개발에 돌입합니다!",
        news1_date: "2026년 2월 7일",
        news2_title: "새로운 스테이지 공개",
        news2_desc:
            "이동 중 갑자기 이상한 구조물이 길을 막았습니다... 지진이다! 새로운 장애물 시스템을 만나보세요.",
        news2_date: "2026년 1월 26일",
        news3_title: "2026년 개발 로드맵",
        news3_desc:
            "올해의 개발 계획과 목표를 공유합니다. 많은 응원 부탁드립니다!",
        news3_date: "2026년 1월 2일",
        // Email tooltip
        email_copied: "복사됨!",
        email_copy: "복사",
    },
};

const LangContext = createContext<LangContextType | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Lang>("ko");

    const t = (key: string) => translations[lang]?.[key] ?? key;

    return (
        <LangContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LangContext.Provider>
    );
}

export function useLang() {
    const ctx = useContext(LangContext);
    if (!ctx) throw new Error("useLang must be used within LangProvider");
    return ctx;
}
