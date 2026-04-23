"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

interface GiteCardProps {
  title: string;
  subtitle: string;
  capacity: number;
  stars: number;
  description: string;
  imageSrc: string;
  href: string;
  badge?: string;
  amenities: string[];
}

export default function GiteCard({
  title,
  subtitle,
  capacity,
  stars,
  description,
  imageSrc,
  href,
  badge,
  amenities,
}: GiteCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="gite-card reveal">
      {/* Image */}
      <div style={{ position: "relative", height: "240px", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageSrc}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.6s ease",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.05)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")
          }
        />
        {/* Gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(10,16,12,0.3) 0%, rgba(10,16,12,0.2) 50%, rgba(10,16,12,0.85) 100%)",
          }}
        />
        {/* Badges */}
        <div
          style={{
            position: "absolute",
            top: "1rem",
            left: "1rem",
            display: "flex",
            gap: "0.5rem",
          }}
        >
          <span
            style={{
              padding: "0.3rem 0.8rem",
              background: "rgba(15,26,19,0.85)",
              border: "1px solid rgba(201,168,76,0.4)",
              borderRadius: "9999px",
              fontSize: "0.75rem",
              color: "var(--color-gold)",
              backdropFilter: "blur(8px)",
            }}
          >
            {capacity} personnes
          </span>
          {badge && (
            <span
              style={{
                padding: "0.3rem 0.8rem",
                background: "rgba(201,168,76,0.2)",
                border: "1px solid rgba(201,168,76,0.5)",
                borderRadius: "9999px",
                fontSize: "0.75rem",
                color: "#D4B87A",
                backdropFilter: "blur(8px)",
                fontWeight: "bold",
              }}
            >
              {badge}
            </span>
          )}
        </div>
        {/* Stars bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: "0.75rem",
            right: "1rem",
          }}
        >
          <span className="stars" style={{ fontSize: "0.9rem" }}>
            {"⭐".repeat(stars)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "1.5rem" }}>
        <p
          style={{
            fontSize: "0.7rem",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: "var(--color-gold)",
            marginBottom: "0.3rem",
          }}
        >
          {subtitle}
        </p>
        <h3
          className="font-display"
          style={{
            fontSize: "1.5rem",
            color: "var(--color-cream)",
            marginBottom: "0.75rem",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: "0.875rem",
            color: "var(--color-cream-dim)",
            lineHeight: 1.7,
            marginBottom: "1.25rem",
          }}
        >
          {description}
        </p>

        {/* Amenities */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.4rem",
            marginBottom: "1.5rem",
          }}
        >
          {amenities.map((a) => (
            <span key={a} className="amenity-badge">
              {a}
            </span>
          ))}
        </div>

        <Link href={href} className="btn-outline" style={{ width: "100%", justifyContent: "center" }}>
          Voir le gîte →
        </Link>
      </div>
    </div>
  );
}
