import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gravitia — Indie Game Studio",
  description:
    "Gravitia is an indie game studio crafting immersive gaming experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Top Bar */}
        <div className="top-bar">
          <div className="social-icons">
            <a href="#" aria-label="Twitter / X" title="Twitter / X">
              𝕏
            </a>
            <a href="#" aria-label="YouTube" title="YouTube">
              ▶
            </a>
            <a href="#" aria-label="Discord" title="Discord">
              💬
            </a>
            <a href="#" aria-label="Email" title="Email">
              ✉
            </a>
          </div>
          <div className="lang-switch">
            <a href="#" className="active">
              EN
            </a>
            <a href="#">한국어</a>
          </div>
        </div>

        {/* Header */}
        <header className="site-header">
          <div className="header-inner">
            <div className="logo-area">
              <h1>Gravitia</h1>
              <span className="tagline">Crafting Worlds Beyond Gravity</span>
            </div>
            <nav className="main-nav">
              <a href="#">Eclipsed Realms</a>
              <a href="#">Stellar Drift</a>
              <a href="#">Shadow Protocol</a>
              <a href="#">Press</a>
              <a href="#">About Us</a>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        {children}

        {/* Footer */}
        <footer className="site-footer">
          <div className="footer-inner">
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Press Kit</a>
              <a href="#">Contact</a>
            </div>
            <span className="footer-copy">
              © 2025 Gravitia. All rights reserved.
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
