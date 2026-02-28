"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import LatestNews from "./TwitterTimeline";
import { useLang } from "./LangContext";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLang();

  const slides = [
    {
      image: "/banner1.png",
      title: t("slide1_title"),
      subtitle: t("slide1_subtitle"),
      badge: t("slide1_badge"),
    },
    {
      image: "/banner2.png",
      title: t("slide2_title"),
      subtitle: t("slide2_subtitle"),
      badge: t("slide2_badge"),
    },
    {
      image: "/banner3.png",
      title: t("slide3_title"),
      subtitle: t("slide3_subtitle"),
      badge: t("slide3_badge"),
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <>
      {/* Hero Slider */}
      <section className="hero-section">
        <div className="hero-slider">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? "active" : ""}`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                style={{ objectFit: "cover" }}
                priority={index === 0}
              />
              <span className="slide-badge">{slide.badge}</span>
              <div className="slide-overlay">
                <h2 className="game-title">{slide.title}</h2>
                <p className="game-subtitle">{slide.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={index === currentSlide ? "active" : ""}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Latest News */}
      <section className="news-section">
        <h2 className="section-title">{t("latest_news")}</h2>
        <LatestNews />
      </section>

      {/* Our Games */}
      <section className="games-section">
        <h2 className="section-title">{t("our_games")}</h2>
        <div className="games-grid">
          {slides.map((game, index) => (
            <a key={index} href="#" className="game-card">
              <Image
                src={game.image}
                alt={game.title}
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="game-card-overlay">
                <h3>{game.title}</h3>
                <p>{game.subtitle}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
