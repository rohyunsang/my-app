"use client";

import { ReactNode } from "react";
import { LangProvider, useLang } from "./LangContext";
import EmailTooltip from "./EmailTooltip";

function TopBar() {
    const { lang, setLang } = useLang();
    return (
        <div className="top-bar">
            <div className="social-icons">
                <a href="https://x.com/Studio_Gravitia" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X" title="Twitter / X">
                    𝕏
                </a>
                <a href="https://www.youtube.com/@Gravitia.studio" target="_blank" rel="noopener noreferrer" aria-label="YouTube" title="YouTube">
                    ▶
                </a>
                <a href="https://discord.gg/ZBhqSnddbR" target="_blank" rel="noopener noreferrer" aria-label="Discord" title="Discord">
                    <svg width="16" height="12" viewBox="0 0 71 55" fill="currentColor"><path d="M60.1 4.9A58.5 58.5 0 0045.4.2a.2.2 0 00-.2.1 40.8 40.8 0 00-1.8 3.7 54 54 0 00-16.2 0A37.4 37.4 0 0025.4.3a.2.2 0 00-.2-.1A58.4 58.4 0 0010.5 5a.2.2 0 00-.1 0A60 60 0 00.4 45.1a.3.3 0 000 .2 58.7 58.7 0 0017.7 9 .2.2 0 00.3-.1 42 42 0 003.6-5.9.2.2 0 00-.1-.3 38.7 38.7 0 01-5.5-2.6.2.2 0 01 0-.4l1.1-.9a.2.2 0 01.2 0 41.9 41.9 0 0035.6 0 .2.2 0 01.2 0l1.1.9a.2.2 0 010 .3 36.4 36.4 0 01-5.5 2.7.2.2 0 00-.1.3 47.2 47.2 0 003.6 5.8.2.2 0 00.3.1A58.5 58.5 0 0070.3 45.3a.2.2 0 000-.2A59.7 59.7 0 0060.2 5a.2.2 0 000 0zM23.7 37c-3.5 0-6.4-3.2-6.4-7.2s2.8-7.1 6.4-7.1 6.5 3.2 6.4 7.1c0 4-2.8 7.2-6.4 7.2zm23.7 0c-3.5 0-6.4-3.2-6.4-7.2s2.8-7.1 6.4-7.1 6.5 3.2 6.4 7.1c0 4-2.9 7.2-6.4 7.2z" /></svg>
                </a>
                <EmailTooltip />
            </div>
            <div className="lang-switch">
                <a
                    href="#"
                    className={lang === "en" ? "active" : ""}
                    onClick={(e) => { e.preventDefault(); setLang("en"); }}
                >
                    EN
                </a>
                <a
                    href="#"
                    className={lang === "ko" ? "active" : ""}
                    onClick={(e) => { e.preventDefault(); setLang("ko"); }}
                >
                    한국어
                </a>
            </div>
        </div>
    );
}

function Header() {
    const { t } = useLang();
    return (
        <header className="site-header">
            <div className="header-inner">
                <div className="logo-area">
                    <h1>Gravitia</h1>
                    <span className="tagline">{t("tagline")}</span>
                </div>
                <nav className="main-nav">
                    <a href="#">{t("slide1_title")}</a>
                    <a href="#">{t("slide2_title")}</a>
                    <a href="#">{t("slide3_title")}</a>
                    <a href="#">{t("nav_press")}</a>
                    <a href="#">{t("nav_about")}</a>
                </nav>
            </div>
        </header>
    );
}

function Footer() {
    const { t } = useLang();
    return (
        <footer className="site-footer">
            <div className="footer-inner">
                <div className="footer-links">
                    <a href="#">{t("privacy")}</a>
                    <a href="#">{t("press_kit")}</a>
                    <a href="#">{t("contact")}</a>
                </div>
                <span className="footer-copy">{t("footer_copy")}</span>
            </div>
        </footer>
    );
}

export default function ClientLayout({ children }: { children: ReactNode }) {
    return (
        <LangProvider>
            <TopBar />
            <Header />
            {children}
            <Footer />
        </LangProvider>
    );
}
