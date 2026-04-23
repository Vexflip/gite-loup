"use client";
import type { Metadata } from "next";

const pageTitle = "Contact — Les Gîtes du Loup Aussois";
const pageDescription = "Contactez Marion et David pour réserver votre gîte à Aussois en Vanoise. Téléphone, email et adresse des Gîtes du Loup.";

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <div
        style={{
          position: "relative",
          paddingTop: "160px",
          paddingBottom: "6rem",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Montagne"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -2,
          }}
        />
        <div
          className="page-hero-overlay"
          style={{ position: "absolute", inset: 0, zIndex: -1 }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "120px",
            background: "linear-gradient(to bottom, transparent, var(--color-forest-dark))",
            zIndex: -1,
          }}
        />
        <div className="section-container" style={{ position: "relative", zIndex: 10 }}>
          <p
            style={{
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "#FFFFFF",
              marginBottom: "0.5rem",
            }}
          >
            Nous joindre
          </p>
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: "#FFFFFF",
              marginBottom: "1rem",
            }}
          >
            Contact
          </h1>
          <p
            style={{
              fontSize: "1rem",
              color: "#F0EBE1",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            N&apos;hésitez pas à nous contacter pour vérifier les disponibilités
            ou pour toute question sur nos gîtes.
          </p>
        </div>
      </div>

      {/* Content */}
      <section style={{ padding: "5rem 0", background: "var(--color-forest-dark)" }}>
        <div className="section-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            {/* Phone */}
            <a
              href="tel:+33688825609"
              style={{ textDecoration: "none" }}
            >
              <div
                className="glass"
                style={{
                  borderRadius: "1.5rem",
                  padding: "2.5rem 2rem",
                  textAlign: "center",
                  cursor: "pointer",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 40px rgba(0,0,0,0.3)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>📞</div>
                <h3
                  className="font-display"
                  style={{ fontSize: "1.25rem", color: "var(--color-gold)", marginBottom: "0.5rem" }}
                >
                  Téléphone
                </h3>
                <p style={{ fontSize: "1.1rem", color: "var(--color-cream)", fontWeight: 600 }}>
                  06 88 82 56 09
                </p>
                <p style={{ fontSize: "0.8125rem", color: "var(--color-cream-dim)", marginTop: "0.5rem" }}>
                  Marion & David
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:contact@aussois-locations.com"
              style={{ textDecoration: "none" }}
            >
              <div
                className="glass"
                style={{
                  borderRadius: "1.5rem",
                  padding: "2.5rem 2rem",
                  textAlign: "center",
                  cursor: "pointer",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 40px rgba(0,0,0,0.3)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✉️</div>
                <h3
                  className="font-display"
                  style={{ fontSize: "1.25rem", color: "var(--color-gold)", marginBottom: "0.5rem" }}
                >
                  Email
                </h3>
                <p style={{ fontSize: "1rem", color: "var(--color-cream)", fontWeight: 500 }}>
                  Envoyer un message →
                </p>
                <p style={{ fontSize: "0.8125rem", color: "var(--color-cream-dim)", marginTop: "0.5rem" }}>
                  Réponse sous 24h
                </p>
              </div>
            </a>

            {/* Address */}
            <div
              className="glass"
              style={{
                borderRadius: "1.5rem",
                padding: "2.5rem 2rem",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>📍</div>
              <h3
                className="font-display"
                style={{ fontSize: "1.25rem", color: "var(--color-gold)", marginBottom: "0.5rem" }}
              >
                Adresse
              </h3>
              <address
                style={{
                  fontStyle: "normal",
                  color: "var(--color-cream)",
                  lineHeight: 1.8,
                  fontSize: "0.9375rem",
                }}
              >
                1 impasse du loup
                <br />
                73500 Aussois
                <br />
                <span style={{ color: "var(--color-cream-dim)", fontSize: "0.875rem" }}>
                  Savoie, France
                </span>
              </address>
            </div>
          </div>

          {/* Map embed */}
          <div
            style={{
              marginTop: "3rem",
              maxWidth: "900px",
              margin: "3rem auto 0",
              borderRadius: "1.5rem",
              overflow: "hidden",
              border: "1px solid rgba(201,168,76,0.15)",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.5!2d6.8464!3d45.2285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zQXVzc29pcw!5e0!3m2!1sfr!2sfr!4v1"
              width="100%"
              height="360"
              style={{ border: 0, display: "block", filter: "invert(0.9) hue-rotate(180deg) brightness(0.8)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation Les Gîtes du Loup — Aussois en Vanoise"
            />
          </div>

          {/* Info note */}
          <div
            style={{
              marginTop: "2rem",
              maxWidth: "900px",
              margin: "2rem auto 0",
              padding: "1.5rem 2rem",
              background: "rgba(201,168,76,0.06)",
              border: "1px solid rgba(201,168,76,0.2)",
              borderRadius: "1rem",
              fontSize: "0.875rem",
              color: "var(--color-cream-dim)",
              lineHeight: 1.7,
              textAlign: "center",
            }}
          >
            Gîtes labellisés <strong style={{ color: "var(--color-cream)" }}>Gîtes de France</strong>
            {" · "}
            Station-village d&apos;Aussois en Vanoise, à 1 500 m d&apos;altitude, au cœur de la Savoie.
          </div>
        </div>
      </section>
    </>
  );
}
