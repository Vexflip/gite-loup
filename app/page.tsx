import Hero from "./components/Hero";
import GiteCard from "./components/GiteCard";
import TestimonialsStrip from "./components/TestimonialsStrip";
import Link from "next/link";

const gites = [
  {
    title: "Les Marcassins",
    subtitle: "Nouveau · Classé 3 épis",
    capacity: 6,
    stars: 3,
    badge: "✨ NOUVEAU",
    description:
      "Appartement de 80 m² refait à neuf en 2025. Sauna, poêle à bois, balcon, WiFi fibre. Une chaleureuse ambiance chalet avec pierre et boiseries dans notre maison en ossature bois.",
    imageSrc: "https://www.aussois-locations.com/medias/album/p1070056.jpg",
    href: "/appartements/les-marcassins",
    amenities: ["🛁 Sauna", "🔥 Poêle à bois", "📶 WiFi Fibre", "🐾 Animaux OK", "🎿 Ski-bus"],
  },
  {
    title: "Le Bivouac",
    subtitle: "Classé 3 épis",
    capacity: 6,
    stars: 3,
    description:
      "55 m² au cœur du village d'Aussois. Sauna, poêle à bois, lit clos typiquement savoyard, garage privatif. Tout à 2 pas du gîte.",
    imageSrc: "https://www.aussois-locations.com/medias/album/img-0302.jpg",
    href: "/appartements/le-bivouac",
    amenities: ["🛁 Sauna", "🔥 Poêle à bois", "📶 WiFi", "🚗 Garage", "🐾 Animaux OK"],
  },
  {
    title: "La Tanière",
    subtitle: "Classé 4 épis",
    capacity: 13,
    stars: 4,
    description:
      "130 m² de standing avec jacuzzi 3 places, grande pièce à vivre sous charpente en mélèze, balcon de 21 m² face aux montagnes. Idéal pour grandes familles et groupes.",
    imageSrc: "https://www.aussois-locations.com/medias/album/p1050109.jpg",
    href: "/appartements/la-taniere",
    amenities: ["🛁 Jacuzzi", "🔥 Poêle à bois", "☀️ Panneaux solaires", "🍖 Barbecue", "🎿 Ski-bus"],
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* About section */}
      <section
        style={{
          padding: "6rem 0",
          background: "var(--color-forest-dark)",
        }}
      >
        <div className="section-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "3rem",
              alignItems: "center",
            }}
          >
            <div className="reveal">
              <p
                style={{
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: "var(--color-gold)",
                  marginBottom: "0.75rem",
                }}
              >
                Notre histoire
              </p>
              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                  color: "var(--color-cream)",
                  lineHeight: 1.2,
                  marginBottom: "1.5rem",
                }}
              >
                Marion & David
                <br />
                vous accueillent
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--color-cream-dim)",
                  lineHeight: 1.8,
                  marginBottom: "1rem",
                }}
              >
                Au cœur de la Savoie, à 1 500 mètres d&apos;altitude, dans la
                station-village d&apos;Aussois en Vanoise, découvrez 3 appartements
                d&apos;exception en location à la semaine, en court séjour ou en
                week-end.
              </p>
              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--color-cream-dim)",
                  lineHeight: 1.8,
                  marginBottom: "2rem",
                }}
              >
                Marion, guide du patrimoine, et David, guide de haute-montagne,
                mettent leur connaissance du territoire à votre service pour vous
                faire vivre des vacances inoubliables.
              </p>
              <Link href="/contact" className="btn-gold">
                Réserver votre séjour →
              </Link>
            </div>

            {/* Stats */}
            <div
              className="reveal"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
              }}
            >
              {[
                { value: "3", label: "Gîtes de charme", icon: "🏡" },
                { value: "4★", label: "Classement max", icon: "🏅" },
                { value: "1500m", label: "Altitude", icon: "🏔️" },
                { value: "100%", label: "Clients satisfaits", icon: "❤️" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="glass"
                  style={{
                    borderRadius: "1rem",
                    padding: "1.5rem",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "1.75rem", marginBottom: "0.25rem" }}>
                    {stat.icon}
                  </div>
                  <div
                    className="font-display"
                    style={{
                      fontSize: "1.75rem",
                      color: "var(--color-gold)",
                      fontWeight: 700,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--color-cream-dim)",
                      marginTop: "0.25rem",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gites grid */}
      <section
        id="appartements"
        style={{
          padding: "6rem 0",
          background:
            "linear-gradient(180deg, var(--color-forest-dark) 0%, rgba(30,58,47,0.1) 100%)",
        }}
      >
        <div className="section-container">
          <div
            className="reveal"
            style={{ textAlign: "center", marginBottom: "3.5rem" }}
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
              Nos appartements
            </p>
            <h2
              className="font-display"
              style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", color: "var(--color-cream)" }}
            >
              Choisissez votre nid douillet
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--color-cream-dim)",
                marginTop: "0.75rem",
                maxWidth: "520px",
                margin: "0.75rem auto 0",
              }}
            >
              Tous nos gîtes sont labellisés Gîtes de France et meublés avec
              des matériaux de qualité dans un esprit montagne et confort.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            {gites.map((g) => (
              <GiteCard key={g.title} {...g} />
            ))}
          </div>

          {/* La Petite Bergerie note */}
          <div
            className="reveal"
            style={{ marginTop: "2rem" }}
          >
            <div
              className="glass"
              style={{
                borderRadius: "1rem",
                padding: "1.5rem 2rem",
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                flexWrap: "wrap",
              }}
            >
              <div style={{ flex: 1, minWidth: "200px" }}>
                <p style={{ fontSize: "0.875rem", color: "var(--color-cream-dim)" }}>
                  <strong style={{ color: "var(--color-cream)" }}>La Petite Bergerie (2/4 pers.)</strong>
                  {" "}est désormais gérée par l&apos;Agence Immobilière de Haute Maurienne.
                </p>
              </div>
              <Link href="/appartements/la-petite-bergerie" className="btn-outline" style={{ flexShrink: 0 }}>
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsStrip />

      {/* CTA section */}
      <section
        style={{
          padding: "6rem 0",
          background: "var(--color-forest-dark)",
          textAlign: "center",
        }}
      >
        <div className="section-container">
          <div
            className="reveal"
            style={{
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                color: "var(--color-cream)",
                marginBottom: "1.25rem",
              }}
            >
              Prêts pour votre séjour
              <br />
              <span className="text-shimmer">en montagne ?</span>
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--color-cream-dim)",
                lineHeight: 1.7,
                marginBottom: "2.5rem",
              }}
            >
              Contactez-nous pour vérifier les disponibilités et réserver votre
              appartement. Nous sommes ravis de vous accueillir à Aussois !
            </p>
            <div
              style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
            >
              <a href="tel:+33688825609" className="btn-gold">
                 06 88 82 56 09
              </a>
              <Link href="/livre-dor" className="btn-outline">
                Lire nos avis →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
