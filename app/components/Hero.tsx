"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      style={{
        position: "relative",
        height: "100vh",
        minHeight: "680px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Parallax background */}
      <div
        ref={bgRef}
        style={{
          position: "absolute",
          inset: "-20%",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          willChange: "transform",
        }}
      />

      {/* Overlay */}
      <div
        className="page-hero-overlay"
        style={{
          position: "absolute",
          inset: 0,
        }}
      />

      {/* Animated bottom gradient */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "200px",
          background:
            "linear-gradient(to bottom, transparent, var(--color-forest-dark))",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          padding: "0 1.5rem",
          maxWidth: "900px",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.4rem 1.2rem",
            background: "rgba(201,168,76,0.12)",
            border: "1px solid rgba(255, 255, 255, 0.25)",
            borderRadius: "9999px",
            fontSize: "0.8125rem",
            color: "#FFFFFF",
            marginBottom: "1.75rem",
            animation: "fade-in 0.8s ease forwards",
          }}
        >
          Aussois en Vanoise · 1500m d'altitude
        </div>

        {/* Headline */}
        <h1
          className="font-display"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            lineHeight: 1.15,
            color: "#FFFFFF",
            marginBottom: "1.5rem",
            animation: "fade-up 0.9s ease 0.1s both",
          }}
        >
          Vivez des vacances
          <br />
          <span className="text-shimmer">de charme à la montagne</span>
        </h1>

        {/* Sub */}
        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            color: "#F0EBE1",
            lineHeight: 1.7,
            maxWidth: "620px",
            margin: "0 auto 2.5rem",
            animation: "fade-up 0.9s ease 0.25s both",
          }}
        >
          Marion, guide du patrimoine, et David, guide de haute-montagne,
          vous accueillent dans leurs gîtes de charme au cœur de la Savoie.
        </p>

        {/* CTA */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
            animation: "fade-up 0.9s ease 0.4s both",
          }}
        >
          <Link href="/appartements/les-marcassins" className="btn-white">
            Découvrir nos gîtes →
          </Link>
          <Link href="/contact" className="btn-outline-white">
            Nous contacter
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          opacity: 0.5,
          animation: "fade-in 1.5s ease 1s both",
        }}
      >
        <span style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#FFFFFF" }}>
          Découvrir
        </span>
        <div
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(to bottom, #FFFFFF, transparent)",
            animation: "fade-up 1.5s ease infinite",
          }}
        />
      </div>
    </section>
  );
}
