"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Accueil" },
  {
    href: "/appartements",
    label: "Nos Appartements",
    children: [
      { href: "/appartements/les-marcassins", label: "Les Marcassins — 6 pers. ✨ NOUVEAU" },
      { href: "/appartements/le-bivouac", label: "Le Bivouac — 6 pers." },
      { href: "/appartements/la-taniere", label: "La Tanière — 13 pers." },
      { href: "/appartements/la-petite-bergerie", label: "La Petite Bergerie — 2/4 pers." },
    ],
  },
  { href: "/livre-dor", label: "Livre d'Or" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "background 0.4s ease, box-shadow 0.4s ease",
        background: scrolled
          ? "rgba(247, 245, 240, 0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(32px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(32px)" : "none",
        boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.05)" : "none",
        borderBottom: scrolled ? "1px solid rgba(158, 132, 81, 0.15)" : "none",
        "--nav-text": scrolled ? "var(--color-charcoal)" : "#FAFAFA",
        "--nav-text-dim": scrolled ? "var(--color-cream-dim)" : "#EAEAEA",
        "--nav-hover": scrolled ? "var(--color-gold)" : "#E5D5AE",
      } as React.CSSProperties}
    >
      <div
        className="section-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "var(--nav-hover)",
              }}
            >
              Les Gîtes du Loup
            </span>
            <span
              style={{
                fontSize: "0.7rem",
                color: "var(--nav-text-dim)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Aussois en Vanoise
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.href}
                style={{ position: "relative" }}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    color: "var(--nav-text-dim)",
                    fontSize: "0.9375rem",
                    fontWeight: 500,
                    fontFamily: "var(--font-body)",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.color =
                      "var(--nav-hover)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.color =
                      "var(--nav-text-dim)")
                  }
                >
                  {link.label}
                  <span style={{ fontSize: "0.65rem", opacity: 0.7 }}>▾</span>
                </button>

                {dropdownOpen && (
                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: "50%",
                      transform: "translateX(-50%)",
                      paddingTop: "12px",
                      zIndex: 50,
                    }}
                  >
                    <div
                      style={{
                        background: "#FFFFFF",
                        border: "1px solid var(--color-gold)",
                        borderRadius: "1rem",
                        padding: "0.5rem",
                        minWidth: "260px",
                        boxShadow: "0 8px 30px rgba(158, 132, 81, 0.15)",
                        animation: "slide-down 0.25s ease forwards",
                        transformOrigin: "top center",
                      }}
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          style={{
                            display: "block",
                            padding: "0.65rem 1rem",
                            borderRadius: "0.5rem",
                            fontSize: "0.875rem",
                            color: "var(--color-charcoal)",
                            textDecoration: "none",
                            transition: "all 0.15s ease",
                            whiteSpace: "nowrap",
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.background =
                              "rgba(158, 132, 81, 0.08)";
                            (e.currentTarget as HTMLAnchorElement).style.color =
                              "var(--color-gold)";
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.background =
                              "transparent";
                            (e.currentTarget as HTMLAnchorElement).style.color =
                              "var(--color-charcoal)";
                          }}
                          onClick={() => setDropdownOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link key={link.href} href={link.href} className="nav-link">
                {link.label}
              </Link>
            )
          )}

          <a href="tel:+33688825609" className="btn-gold" style={{ padding: "0.6rem 1.25rem", fontSize: "0.875rem" }}>
            📞 06 88 82 56 09
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          style={{
            background: "none",
            border: "1px solid rgba(201,168,76,0.3)",
            borderRadius: "0.5rem",
            padding: "0.5rem",
            cursor: "pointer",
            color: "var(--nav-hover)",
            fontSize: "1.2rem",
            display: "none",
          }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          style={{
            background: "var(--color-charcoal)",
            borderTop: "1px solid rgba(158, 132, 81, 0.15)",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            animation: "slide-down 0.3s ease forwards",
          }}
          className="mobile-drawer"
        >
          {navLinks.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  color: "var(--nav-text)",
                  textDecoration: "none",
                  fontSize: "1rem",
                  fontWeight: 500,
                  padding: "0.5rem 0",
                  borderBottom: "1px solid rgba(158, 132, 81, 0.1)",
                }}
              >
                {link.label}
              </Link>
              {link.children && (
                <div style={{ paddingLeft: "1rem", marginTop: "0.5rem" }}>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMenuOpen(false)}
                      style={{
                        display: "block",
                        color: "var(--nav-text-dim)",
                        textDecoration: "none",
                        fontSize: "0.875rem",
                        padding: "0.4rem 0",
                      }}
                    >
                      → {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a href="tel:+33688825609" className="btn-gold" style={{ marginTop: "0.5rem", textAlign: "center" }}>
            📞 06 88 82 56 09
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
