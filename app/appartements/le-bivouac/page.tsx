import type { Metadata } from "next";
import ApartmentLayout from "../../components/ApartmentLayout";

export const metadata: Metadata = {
  title: "Le Bivouac — Gîte 6 personnes à Aussois | Les Gîtes du Loup",
  description:
    "55 m² au cœur du village d'Aussois pour 6 personnes. Sauna, poêle à bois, lit clos savoyard, garage privatif. Classé 3 épis Gîtes de France.",
};

export default function LeBivouacPage() {
  const galleryImages = [
    "https://www.aussois-locations.com/medias/album/img-0305.jpg",
    "https://www.aussois-locations.com/medias/album/img-0302.jpg",
    "https://www.aussois-locations.com/medias/album/img-0304.jpg",
    "https://www.aussois-locations.com/medias/album/img-0289.jpg",
    "https://www.aussois-locations.com/medias/album/img-0292.jpg",
    "https://www.aussois-locations.com/medias/album/img-0310.jpg",
    "https://www.aussois-locations.com/medias/album/img-0270.jpg",
    "https://www.aussois-locations.com/medias/album/img-0272.jpg",
    "https://www.aussois-locations.com/medias/album/img-0269.jpg",
  ];

  return (
    <ApartmentLayout
      title="Le Bivouac"
      subtitle="Classé 3 épis Gîtes de France"
      classification="3 épis Gîtes de France"
      capacity={6}
      surface={60}
      mainImage="https://www.aussois-locations.com/medias/album/img-0302.jpg"
      galleryImages={galleryImages}
      tariffLink="https://www.aussois-locations.com/pages/plannings-et-tarifs/le-trou-le-loup.html"
      description={[
        "Au cœur du village d'Aussois, sur la place, découvrez notre appartement « Le Bivouac » ! Situé au premier étage d'une maison ancienne de deux étages, notre gîte accueille confortablement 6 personnes sur 55 m².",
        "Meublé et décoré avec des matériaux de qualité (pierre, bois, bonne literie) dans un esprit « montagne » et « confort ».",
        "Composition : une chambre pour 2 personnes (lit de 160 cm) avec douche à l'italienne et lavabo — une chambre pour 2 personnes (2 lits de 80 jumelables) — un lit clos (alcôve en bois typiquement savoyarde) pour 2 personnes — séjour/salon/cuisine ouverte — salle de bain avec douche spacieuse — WC séparés — sauna.",
        "En hiver, un casier à skis vous est réservé au pied des pistes. Le ski-bus gratuit s'arrête à 80 mètres. En été, la base de loisirs est à 5 minutes à pied : pump track, tennis, city stade, bassins d'eau, tir à l'arc, pétanque, mini-golf.",
        "Tous les commerces sont à 2 pas du gîte.",
      ]}
      amenities={[
        { icon: "🛁", label: "Sauna" },
        { icon: "🔥", label: "Poêle à bois" },
        { icon: "📶", label: "WiFi gratuit" },
        { icon: "🛏️", label: "Draps inclus" },
        { icon: "🐾", label: "Petits animaux" },
        { icon: "🚗", label: "Garage privatif" },
        { icon: "🍽️", label: "Lave-vaisselle" },
        { icon: "🫕", label: "Raclette & fondue" },
        { icon: "🎿", label: "Ski-bus à 80m" },
        { icon: "🧺", label: "Buanderie" },
        { icon: "🏪", label: "Commerces à 2 pas" },
        { icon: "🏔️", label: "1500m d'altitude" },
      ]}
    />
  );
}
