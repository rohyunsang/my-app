"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import TwitterTimeline from "./TwitterTimeline";

const slides = [
  {
    image: "/banner1.png",
    title: "Eclipsed Realms",
    subtitle: "A dark fantasy RPG — Coming 2026",
    badge: "NEW",
  },
  {
    image: "/banner2.png",
    title: "Stellar Drift",
    subtitle: "Explore the cosmos in this open-world space adventure",
    badge: "COMING SOON",
  },
  {
    image: "/banner3.png",
    title: "Shadow Protocol",
    subtitle: "Stealth action in a cyberpunk mega-city",
    badge: "IN DEVELOPMENT",
  },
];



export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

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
        <h2 className="section-title">Latest News</h2>
        <TwitterTimeline />
      </section>

      {/* Our Games */}
      <section className="games-section">
        <h2 className="section-title">Our Games</h2>
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
