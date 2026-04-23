"use client";

import Image from "next/image";

interface PhotoGalleryProps {
  images: string[];
}

export default function PhotoGallery({ images }: PhotoGalleryProps) {
  if (!images || images.length === 0) return null;

  return (
    <div className="section-container" style={{ marginTop: "4rem" }}>
      <div className="reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h3
          className="font-display"
          style={{
            fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
            color: "var(--color-cream)",
            marginBottom: "0.5rem",
          }}
        >
          Visite en images
        </h3>
        <div className="divider-gold" style={{ width: "80px", margin: "0 auto" }} />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1.5rem",
          paddingBottom: "2rem",
        }}
      >
        {images.map((src, i) => (
          <div
            key={src}
            className="reveal"
            style={{
              position: "relative",
              aspectRatio: "4/3",
              borderRadius: "1rem",
              overflow: "hidden",
              background: "var(--color-forest-dark)",
              transitionDelay: `${i * 0.1}s`, // Staggered animation
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt="Photo de l'appartement"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            />
            {/* Soft overlay on hover */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(7,12,9,0.5), transparent)",
                opacity: 0,
                transition: "opacity 0.4s ease",
                pointerEvents: "none",
              }}
              className="gallery-overlay"
            />
          </div>
        ))}
      </div>
      
      <style>{`
        .reveal:hover .gallery-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
}
