import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Livre d'Or — Avis clients | Les Gîtes du Loup Aussois",
  description:
    "Découvrez les avis de nos hôtes sur nos gîtes à Aussois en Vanoise. Témoignages authentiques de familles et couples ayant séjourné à La Tanière, Le Bivouac, Les Marcassins et La Petite Bergerie.",
};

const reviews = [
  {
    id: 1,
    name: "Moncourtois",
    date: "Juillet 2022",
    gite: "La Petite Bergerie",
    text: "2 séjours à la petite Bergerie pour nous. Que dire... tout simplement génial. Bien situé, ambiance chaleureuse. Nous y sommes allés en novembre (premières neiges et soleil) et ensuite en février. La prochaine fois nous essaierons peut-être le bivouac. Rien que les photos, cela donne envie. Concernant les propriétaires, des personnes avenantes et sympathiques. Nous recommandons les yeux fermés.",
  },
  {
    id: 2,
    name: "La meute Jouanne",
    date: "Mai 2022",
    gite: "La Tanière",
    text: "La meute présente du 5 au 12 février 2022 a encore plébiscité le séjour dans sa Tanière. Merci Marion pour cet accueil toujours au top et avec de la NEIGE enfin ! Nous gardons cette destination Tanière ou essaierons le Bivouac une autre fois. À bientôt et bonne continuation. Pascale et Emmanuel Jouanne.",
  },
  {
    id: 3,
    name: "Famille Juery",
    date: "Mai 2022",
    gite: "La Petite Bergerie",
    text: "Nous sommes accueillis dans le gîte de la Petite Bergerie depuis quelques années pour une semaine en famille au moment de Noël : ski et détente. La proximité des commerces et des pistes en font une destination idéale pour faire tout à pied durant tout le séjour et profiter d'une station à taille humaine. Le gîte offre tout le confort pour des vacances vraiment réussies !",
  },
  {
    id: 4,
    name: "Alexandre Prévost",
    date: "Février 2022",
    gite: "La Petite Bergerie",
    text: "Superbe séjour comme toujours à Aussois dans ce superbe gîte cosy et bien situé. L'espace est suffisant même avec deux jeunes enfants et l'alcôve pour le lit est romantique à souhaits. Cocooning assuré par les propriétaires avec bouteille de vin de Savoie offerte à l'arrivée et génépy maison au moment de partir. C'est assez rare pour le souligner et bien agréable !",
  },
  {
    id: 5,
    name: "Isabelle D.",
    date: "Janvier 2022",
    gite: "La Petite Bergerie",
    text: "Nous avons passé une semaine début janvier 2022 dans le gîte La Petite Bergerie, parfaitement bien agencé et confortable. Je tiens à souligner l'accueil très chaleureux de Marion et sa disponibilité tout au long du séjour. Le Gîte La Tanière donne également énormément envie pour accueillir plus de personnes !",
  },
  {
    id: 6,
    name: "Dominique & Hubert Brunet",
    date: "Août 2021",
    gite: "La Tanière",
    text: "Nous avons apprécié à sa juste mesure votre gîte « La Tanière » tant pour sa conception que pour sa décoration. Vous en avez fait un endroit chaleureux où l'on se sent bien. Grand plaisir aussi d'avoir une batterie de cuisine vraiment digne de ce nom. Merci pour la disponibilité, et toujours avec le sourire !",
  },
  {
    id: 7,
    name: "Gérard, Pascale & famille",
    date: "Mai 2021",
    gite: "La Tanière",
    text: "Nous avons été enchantés de notre séjour dans le gîte de la Tanière : de la place pour chacun, les petites intentions à l'arrivée, une cuisine bien équipée, un appartement confortable et joliment décoré, une hôte disponible si besoin. Bref, petits et grands ont été ravis et ont bien profité du jacuzzi ! On recommande sans modération !",
  },
  {
    id: 8,
    name: "Michel et Sylviane",
    date: "Janvier 2021",
    gite: "La Petite Bergerie",
    text: "Nous avons passé une excellente semaine de détente à Aussois à La Petite Bergerie. Nous avons été très bien accueillis par Marion. Le gîte est chaleureux, confortable et très bien agencé. Ski de fond, de rando, courses au village et cocooning étaient au programme. Le paysage est magnifique.",
  },
  {
    id: 9,
    name: "Chabert Rosemonde",
    date: "Septembre 2019",
    gite: "La Tanière",
    text: "Nous avons passé un super séjour au Gîte du Loup à Aussois. Super appartement tout équipé avec SPA, terrasse et barbecue — appartement très agréable et très propre. Superbe vue sur les montagnes. Merci Marion pour votre accueil, disponible et discret. Si vous venez dans ce paradis reposant, venez chez Marion, vous ne serez vraiment pas déçu !",
  },
  {
    id: 10,
    name: "Pierre & Nicole",
    date: "Juin 2019",
    gite: "La Tanière",
    text: "Début juin, nous avons passé une très belle semaine au gîte de La Tanière, à 7 adultes. Accueil très chaleureux, de beaux volumes, équipement complet, jacuzzi bien agréable en rentrant de rando. Tout était parfait, le soleil sur la terrasse... Nous recommanderons ce gîte à notre entourage.",
  },
];

export default function LivreDOrPage() {
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
            Témoignages
          </p>
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: "#FFFFFF",
              marginBottom: "1rem",
            }}
          >
            Livre d'Or
          </h1>
          <p
            style={{
              fontSize: "1rem",
              color: "#F0EBE1",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Découvrez ce que nos hôtes pensent de leur séjour dans nos gîtes à
            Aussois en Vanoise.
          </p>
        </div>
      </div>

      {/* Reviews grid */}
      <section
        style={{ padding: "5rem 0", background: "var(--color-forest-dark)" }}
      >
        <div className="section-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {reviews.map((review, i) => (
              <article
                key={review.id}
                className="glass"
                style={{
                  borderRadius: "1.25rem",
                  padding: "2rem",
                  animation: `fade-up 0.6s ease ${i * 0.08}s both`,
                }}
              >
                {/* Stars */}
                <div
                  style={{
                    color: "var(--color-gold)",
                    fontSize: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  ★★★★★
                </div>

                {/* Quote */}
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "var(--color-cream-dim)",
                    lineHeight: 1.75,
                    fontStyle: "italic",
                    marginBottom: "1.5rem",
                  }}
                >
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Footer */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    paddingTop: "1rem",
                    borderTop: "1px solid rgba(201,168,76,0.1)",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg, var(--color-forest), var(--color-gold))",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      color: "white",
                      flexShrink: 0,
                    }}
                  >
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        color: "var(--color-cream)",
                      }}
                    >
                      {review.name}
                    </div>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--color-gold)",
                        marginTop: "0.1rem",
                      }}
                    >
                      {review.gite} · {review.date}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div
            style={{
              textAlign: "center",
              marginTop: "4rem",
              padding: "3rem 2rem",
              background: "rgba(30,58,47,0.3)",
              border: "1px solid rgba(201,168,76,0.15)",
              borderRadius: "1.5rem",
            }}
          >
            <h2
              className="font-display"
              style={{
                fontSize: "1.75rem",
                color: "var(--color-cream)",
                marginBottom: "1rem",
              }}
            >
              À votre tour de vivre l&apos;expérience !
            </h2>
            <p
              style={{
                color: "var(--color-cream-dim)",
                marginBottom: "1.75rem",
                fontSize: "0.9375rem",
              }}
            >
              Rejoignez nos hôtes satisfaits et réservez votre séjour à Aussois.
            </p>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a href="tel:+33688825609" className="btn-gold">
                📞 06 88 82 56 09
              </a>
              <Link href="/contact" className="btn-outline">
                Formulaire de contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
