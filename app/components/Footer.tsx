"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--color-charcoal)",
        borderTop: "1px solid rgba(194, 168, 120, 0.08)",
        padding: "3.5rem 0 2rem",
      }}
    >
      <div className="section-container">
        {/* Top section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "2.5rem",
            marginBottom: "2.5rem",
          }}
        >
          {/* Brand */}
          <div>
            <h3
              className="font-display"
              style={{
                fontSize: "1.4rem",
                color: "var(--color-gold)",
                marginBottom: "0.75rem",
              }}
            >
              Les Gîtes du Loup
            </h3>
            <p
              style={{
                fontSize: "0.875rem",
                color: "var(--color-cream-dim)",
                lineHeight: 1.7,
              }}
            >
              Vivez des vacances de charme à la montagne
              <br />
              en Vanoise, à Aussois en Savoie.
            </p>
            <div
              style={{
                marginTop: "1rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.4rem 0.9rem",
                border: "1px solid rgba(201,168,76,0.3)",
                borderRadius: "2rem",
                fontSize: "0.75rem",
                color: "var(--color-gold-light)",
              }}
            >
              Gîtes de France labellisés
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              style={{
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--color-gold)",
                marginBottom: "1rem",
              }}
            >
              Nos Appartements
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                { href: "/appartements/les-marcassins", label: "Les Marcassins — 6 pers." },
                { href: "/appartements/le-bivouac", label: "Le Bivouac — 6 pers." },
                { href: "/appartements/la-taniere", label: "La Tanière — 13 pers." },
                { href: "/appartements/la-petite-bergerie", label: "La Petite Bergerie — 2/4 pers." },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--color-cream-dim)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-gold)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-cream-dim)")
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--color-gold)",
                marginBottom: "1rem",
              }}
            >
              Nous Trouver
            </h4>
            <address
              style={{
                fontStyle: "normal",
                fontSize: "0.875rem",
                color: "var(--color-cream-dim)",
                lineHeight: 1.8,
              }}
            >
              1 impasse du loup
              <br />
              73500 Aussois
              <br />
              <a
                href="tel:+33688825609"
                style={{
                  color: "var(--color-gold)",
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                06 88 82 56 09
              </a>
              <br />
              <a
                href="mailto:marion@aussois-locations.com"
                style={{
                  color: "var(--color-cream-dim)",
                  textDecoration: "none",
                  fontSize: "0.8125rem",
                }}
              >
                Contacter Marion &rarr;
              </a>
            </address>
          </div>
        </div>

        <div className="divider-gold" style={{ marginBottom: "1.5rem" }} />

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p style={{ fontSize: "0.8125rem", color: "var(--color-cream-dim)", opacity: 0.6 }}>
            © {new Date().getFullYear()} Les Gîtes du Loup — Aussois en Vanoise
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <Link
              href="/cgv"
              style={{
                fontSize: "0.8125rem",
                color: "var(--color-cream-dim)",
                opacity: 0.6,
                textDecoration: "none",
              }}
            >
              Conditions générales de vente
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
