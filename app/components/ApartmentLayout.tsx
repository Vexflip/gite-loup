import Link from "next/link";
import AmenityBadge from "./AmenityBadge";
import PhotoGallery from "./PhotoGallery";

interface Amenity {
  icon: string;
  label: string;
}

interface ApartmentLayoutProps {
  title: string;
  subtitle: string;
  classification: string;
  capacity: number;
  surface: number;
  description: string[];
  amenities: Amenity[];
  mainImage: string;
  tariffLink?: string;
  externalNote?: React.ReactNode;
  galleryImages?: string[];
}

export default function ApartmentLayout({
  title,
  subtitle,
  classification,
  capacity,
  surface,
  description,
  amenities,
  mainImage,
  tariffLink,
  externalNote,
  galleryImages,
}: ApartmentLayoutProps) {
  return (
    <>
      {/* Page hero */}
      <div
        style={{
          position: "relative",
          height: "90vh",
          minHeight: "600px",
          overflow: "hidden",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={mainImage}
          alt={title}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{ position: "absolute", inset: 0, background: "rgba(10, 16, 12, 0.4)" }}
        />
        <div
          className="page-hero-overlay"
          style={{ position: "absolute", inset: 0 }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "160px",
            background: "linear-gradient(to bottom, transparent, var(--color-forest-dark))",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            right: 0,
            transform: "translateY(-50%)",
            textAlign: "center",
          }}
        >
          <div className="section-container">
            <p
              style={{
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "#D4B87A",
                fontWeight: "bold",
                marginBottom: "0.5rem",
                textShadow: "0 2px 10px rgba(0,0,0,0.3)",
              }}
            >
              {subtitle}
            </p>
            <h1
              className="font-display"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                color: "#FFFFFF",
                textShadow: "0 2px 10px rgba(0,0,0,0.3)",
              }}
            >
              {title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <section style={{ padding: "5rem 0", background: "var(--color-forest-dark)" }}>
        <div className="section-container">
          {/* Breadcrumb */}
          <nav
            style={{
              display: "flex",
              gap: "0.5rem",
              alignItems: "center",
              marginBottom: "3rem",
              fontSize: "0.8125rem",
              color: "var(--color-cream-dim)",
            }}
          >
            <Link href="/" style={{ color: "var(--color-gold)", textDecoration: "none" }}>
              Accueil
            </Link>
            <span style={{ opacity: 0.4 }}>›</span>
            <Link href="/#appartements" style={{ color: "var(--color-cream-dim)", textDecoration: "none" }}>
              Nos Appartements
            </Link>
            <span style={{ opacity: 0.4 }}>›</span>
            <span>{title}</span>
          </nav>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "4rem",
            }}
          >
            {/* Left: description */}
            <div>
              {/* Classification badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.5rem 1.25rem",
                  background: "rgba(201,168,76,0.1)",
                  border: "1px solid rgba(201,168,76,0.3)",
                  borderRadius: "9999px",
                  marginBottom: "2rem",
                }}
              >
                <span style={{ color: "var(--color-gold)", fontSize: "0.875rem" }}>🏅 {classification}</span>
              </div>

              {description.map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "1rem",
                    color: "var(--color-cream-dim)",
                    lineHeight: 1.85,
                    marginBottom: "1.25rem",
                  }}
                >
                  {para}
                </p>
              ))}

              {externalNote && (
                <div
                  style={{
                    marginTop: "2rem",
                    padding: "1.25rem 1.5rem",
                    background: "rgba(201,168,76,0.06)",
                    border: "1px solid rgba(201,168,76,0.2)",
                    borderRadius: "1rem",
                    fontSize: "0.875rem",
                    color: "var(--color-cream-dim)",
                    lineHeight: 1.7,
                  }}
                >
                  {externalNote}
                </div>
              )}

              {tariffLink && (
                <a
                  href={tariffLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                  style={{ marginTop: "2rem", display: "inline-flex" }}
                >
                  📅 Voir les tarifs & disponibilités
                </a>
              )}
            </div>

            {/* Right: info card */}
            <div>
              {/* Quick facts */}
              <div
                className="glass"
                style={{
                  borderRadius: "1.5rem",
                  padding: "2rem",
                  marginBottom: "1.5rem",
                }}
              >
                <h3
                  className="font-display"
                  style={{
                    fontSize: "1.25rem",
                    color: "var(--color-gold)",
                    marginBottom: "1.5rem",
                  }}
                >
                  En un coup d&apos;œil
                </h3>
                <div
                  style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}
                >
                  {[
                    { icon: "👥", label: "Capacité", value: `${capacity} personnes` },
                    { icon: "📐", label: "Surface", value: `${surface} m²` },
                    { icon: "🏅", label: "Classement", value: classification },
                    { icon: "📍", label: "Village", value: "Aussois, 1500m" },
                  ].map((fact) => (
                    <div
                      key={fact.label}
                      style={{
                        padding: "1rem",
                        background: "rgba(201,168,76,0.05)",
                        borderRadius: "0.75rem",
                        border: "1px solid rgba(201,168,76,0.1)",
                      }}
                    >
                      <div style={{ fontSize: "1.25rem", marginBottom: "0.25rem" }}>
                        {fact.icon}
                      </div>
                      <div
                        style={{
                          fontSize: "0.7rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          color: "var(--color-gold)",
                          marginBottom: "0.2rem",
                        }}
                      >
                        {fact.label}
                      </div>
                      <div style={{ fontSize: "0.875rem", color: "var(--color-cream)", fontWeight: 500 }}>
                        {fact.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div
                className="glass"
                style={{ borderRadius: "1.5rem", padding: "2rem" }}
              >
                <h3
                  className="font-display"
                  style={{
                    fontSize: "1.25rem",
                    color: "var(--color-gold)",
                    marginBottom: "1.25rem",
                  }}
                >
                  Équipements & Services
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {amenities.map((a) => (
                    <AmenityBadge key={a.label} icon={a.icon} label={a.label} />
                  ))}
                </div>
              </div>

              {/* Contact CTA */}
              <div style={{ marginTop: "1.5rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <a href="tel:+33688825609" className="btn-gold" style={{ flex: 1, justifyContent: "center" }}>
                  📞 Réserver
                </a>
                <Link href="/contact" className="btn-outline" style={{ flex: 1, justifyContent: "center" }}>
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Photo Gallery */}
          {galleryImages && galleryImages.length > 0 && (
            <PhotoGallery images={galleryImages} />
          )}
        </div>
      </section>

      {/* Back link */}
      <div
        style={{
          padding: "2rem 0 5rem",
          background: "var(--color-forest-dark)",
        }}
      >
        <div className="section-container">
          <div className="divider-gold" style={{ marginBottom: "2rem" }} />
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
            <Link href="/" style={{ color: "var(--color-gold)", textDecoration: "none", fontSize: "0.9rem" }}>
              ← Retour à l&apos;accueil
            </Link>
            <Link href="/#appartements" style={{ color: "var(--color-cream-dim)", textDecoration: "none", fontSize: "0.9rem" }}>
              Tous nos appartements →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
