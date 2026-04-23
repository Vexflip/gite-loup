import type { Metadata } from "next";
import ApartmentLayout from "../../components/ApartmentLayout";

export const metadata: Metadata = {
  title: "La Petite Bergerie — Gîte 2/4 personnes à Aussois | Les Gîtes du Loup",
  description:
    "Appartement cosy de 32 m² pour 2 à 4 personnes avec lit clos savoyard, terrasse privative, poêle à bois. Désormais géré par l'Agence de Haute Maurienne.",
};

export default function PetiteBergeriePage() {
  const galleryImages = [
    "https://www.aussois-locations.com/medias/album/p1050046.jpg",
    "https://www.aussois-locations.com/medias/album/p1050052.jpg",
    "https://www.aussois-locations.com/medias/album/p1050053.jpg",
    "https://www.aussois-locations.com/medias/album/p1040969.jpg",
    "https://www.aussois-locations.com/medias/album/p1040974.jpg",
    "https://www.aussois-locations.com/medias/album/p1060362.jpg",
  ];

  return (
    <ApartmentLayout
      title="La Petite Bergerie"
      subtitle="2 à 4 personnes · Gîtes de France"
      classification="Gîtes de France"
      capacity={4}
      surface={32}
      mainImage="https://www.aussois-locations.com/medias/album/p1050109.jpg"
      galleryImages={galleryImages}
      externalNote={
        <>
          <strong style={{ color: "var(--color-gold)" }}>ℹ️ Réservations via l&apos;agence partenaire</strong>
          <br />
          La Petite Bergerie est désormais gérée par l&apos;
          <strong>Agence Immobilière de Haute Maurienne</strong>
          {" "}(85, rue du Mont Cenis — 73480 Lanslebourg-Valcenis).
          <br />
          Infos & réservations :{" "}
          <a
            href="tel:+33479059004"
            style={{ color: "var(--color-gold)", textDecoration: "none" }}
          >
            04 79 05 90 04
          </a>
          {" · "}
          <a
            href="mailto:anne-sophie@dhm73.fr"
            style={{ color: "var(--color-gold)", textDecoration: "none" }}
          >
            anne-sophie@dhm73.fr
          </a>
          {" · "}
          <a
            href="http://destination-haute-maurienne.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--color-gold)", textDecoration: "none" }}
          >
            destination-haute-maurienne.com →
          </a>
        </>
      }
      description={[
        "La Petite Bergerie est un appartement cosy de 32 m² situé au rez-de-chaussée de notre petite résidence familiale (2013). L'appartement est tout équipé pour 2 à 4 personnes.",
        "Le couchage principal est un lit clos — couchage typiquement savoyard — avec un lit double de 140×190 cm tout confort : un cocon douillet pour vos vacances à la montagne ! Les 2 autres couchages se font sur une banquette convertible avec matelas Bultex.",
        "Cuisine équipée (four, micro-ondes, lave-vaisselle, plaques vitro-céramique, frigo, vaisselle, appareil à raclette, à fondue). Poêle-cuisinière à bois (bois fourni). Salle de bain avec douche à l'italienne. WC séparés.",
        "Une porte-fenêtre donne accès à une terrasse privative en bois avec transats, table, chaises et barbecue. Chauffage au sol et eau chaude solaire. TV avec TNT sur support pivotant — regardez la TV depuis le salon ou depuis le lit clos !",
        "Buanderie au sous-sol avec lave-linge et sèche-linge. Local à vélos sécurisé. Internet en Wi-Fi gratuit.",
      ]}
      amenities={[
        { icon: "🛏️", label: "Lit clos savoyard" },
        { icon: "🔥", label: "Poêle à bois" },
        { icon: "🌿", label: "Terrasse privée" },
        { icon: "🍖", label: "Barbecue" },
        { icon: "☀️", label: "Eau chaude solaire" },
        { icon: "♨️", label: "Chauffage au sol" },
        { icon: "📶", label: "WiFi gratuit" },
        { icon: "📺", label: "TV pivotante" },
        { icon: "🧺", label: "Buanderie" },
        { icon: "🚲", label: "Local à vélos" },
        { icon: "🍽️", label: "Lave-vaisselle" },
        { icon: "🫕", label: "Raclette & fondue" },
      ]}
    />
  );
}
