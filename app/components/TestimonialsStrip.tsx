"use client";

const reviews = [
  { name: "Moncourtois", text: "Tout simplement génial. Bien situé, ambiance chaleureuse. Nous recommandons les yeux fermés." },
  { name: "La meute Jouanne", text: "Merci Marion pour cet accueil toujours au top ! Nous gardons cette destination Tanière." },
  { name: "Famille Juery", text: "La proximité des commerces et des pistes en font une destination idéale. Tout le confort pour des vacances vraiment réussies !" },
  { name: "Alexandre Prévost", text: "Superbe séjour comme toujours à Aussois dans ce superbe gîte cosy et bien situé. Coccooning assuré par les propriétaires !" },
  { name: "Isabelle D.", text: "Gîte parfaitement bien agencé et confortable. Je tiens à souligner l'accueil très chaleureux de Marion." },
  { name: "Dominique & Hubert B.", text: "Un endroit chaleureux où l'on se sent bien. Merci pour la disponibilité, et toujours avec le sourire !" },
  { name: "Famille Jouanne", text: "De la place pour chacun, une cuisine bien équipée, un appartement confortable et joliment décoré. On recommande sans modération !" },
  { name: "Michel et Sylviane", text: "Excellente semaine de détente. Le gite est chaleureux, confortable et très bien agencé." },
  { name: "Chabert Rosemonde", text: "Super appartement tout équipé avec SPA, terrasse et barbecue. Superbe vue sur les montagnes. Merci Marion !" },
  { name: "Pierre & Nicole", text: "Accueil très chaleureux, de beaux volumes, équipement complet, jacuzzi bien agréable en rentrant de rando. Tout était parfait !" },
];

// Duplicate for seamless loop
const allReviews = [...reviews, ...reviews];

export default function TestimonialsStrip() {
  return (
    <section
      style={{
        padding: "5rem 0",
        overflow: "hidden",
        background:
          "linear-gradient(180deg, var(--color-forest-dark) 0%, rgba(30,58,47,0.15) 50%, var(--color-forest-dark) 100%)",
      }}
    >
      {/* Header */}
      <div
        className="section-container reveal"
        style={{ textAlign: "center", marginBottom: "3rem" }}
      >
        <p
          style={{
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "var(--color-gold)",
            marginBottom: "0.5rem",
          }}
        >
          Témoignages
        </p>
        <h2
          className="font-display"
          style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "var(--color-cream)" }}
        >
          Ce que disent nos hôtes
        </h2>
      </div>

      {/* Marquee track */}
      <div
        style={{
          display: "flex",
          gap: "1.5rem",
          animation: "marquee 50s linear infinite",
          width: "max-content",
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLDivElement).style.animationPlayState = "paused")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLDivElement).style.animationPlayState = "running")
        }
      >
        {allReviews.map((review, i) => (
          <div
            key={i}
            style={{
              flexShrink: 0,
              width: "320px",
              background: "#FFFFFF",
              border: "1px solid var(--color-gold)",
              borderRadius: "1.25rem",
              padding: "1.75rem",
              boxShadow: "0 8px 30px rgba(158, 132, 81, 0.1)",
            }}
          >
            <div style={{ color: "var(--color-gold)", fontSize: "1.25rem", marginBottom: "0.75rem" }}>
              ★★★★★
            </div>
            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--color-cream-dim)",
                lineHeight: 1.7,
                marginBottom: "1.25rem",
                fontStyle: "italic",
              }}
            >
              &ldquo;{review.text}&rdquo;
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, var(--color-forest), var(--color-gold))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  flexShrink: 0,
                }}
              >
                {review.name.charAt(0)}
              </div>
              <span
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  color: "var(--color-cream)",
                }}
              >
                {review.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
