"use client";

import { useState, useRef, useEffect } from "react";
import { useLang } from "./LangContext";

export default function EmailTooltip() {
    const [open, setOpen] = useState(false);
    const [copied, setCopied] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const { t } = useLang();

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
                setCopied(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleCopy = async () => {
        await navigator.clipboard.writeText("lionhas99@naver.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div ref={ref} style={{ position: "relative", display: "inline-flex" }}>
            <a
                href="#"
                aria-label="Email"
                title="Email"
                onClick={(e) => {
                    e.preventDefault();
                    setOpen(!open);
                    setCopied(false);
                }}
            >
                ✉
            </a>
            {open && (
                <div
                    style={{
                        position: "absolute",
                        top: "calc(100% + 8px)",
                        right: 0,
                        background: "#1a1a1a",
                        border: "1px solid #2a2a2a",
                        borderRadius: "8px",
                        padding: "12px 16px",
                        whiteSpace: "nowrap",
                        zIndex: 200,
                        boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontSize: "13px",
                    }}
                >
                    <span style={{ color: "#ededed" }}>lionhas99@naver.com</span>
                    <button
                        onClick={handleCopy}
                        style={{
                            background: copied ? "#22c55e" : "#e63946",
                            color: "#fff",
                            border: "none",
                            borderRadius: "4px",
                            padding: "4px 10px",
                            fontSize: "12px",
                            cursor: "pointer",
                            transition: "background 0.2s",
                        }}
                    >
                        {copied ? t("email_copied") : t("email_copy")}
                    </button>
                </div>
            )}
        </div>
    );
}
