import type { Metadata } from "next";
import ApartmentLayout from "../../components/ApartmentLayout";

export const metadata: Metadata = {
  title: "La Tanière — Gîte 13 personnes à Aussois | Les Gîtes du Loup",
  description:
    "130 m² de standing pour 13 personnes avec jacuzzi, poêle à bois, balcon 21 m² face aux montagnes. Classé 4 épis Gîtes de France à Aussois en Vanoise.",
};

export default function TanierePage() {
  const galleryImages = [
    "https://www.aussois-locations.com/medias/album/p1050109.jpg",
    "https://www.aussois-locations.com/medias/album/p1050111.jpg",
    "https://www.aussois-locations.com/medias/album/p1050187.jpg",
    "https://www.aussois-locations.com/medias/album/p1050123.jpg",
    "https://www.aussois-locations.com/medias/album/chambre-sud-2.jpg",
    "https://www.aussois-locations.com/medias/album/p1050120.jpg",
    "https://www.aussois-locations.com/medias/album/p1050118.jpg",
    "https://www.aussois-locations.com/medias/album/p1050112.jpg",
    "https://www.aussois-locations.com/medias/album/p1050115.jpg",
    "https://www.aussois-locations.com/medias/album/chambre-du-haut-2.jpg",
    "https://www.aussois-locations.com/medias/album/p1050129.jpg",
    "https://www.aussois-locations.com/medias/album/p1050125.jpg",
    "https://www.aussois-locations.com/medias/album/p1050134.jpg",
    "https://www.aussois-locations.com/medias/album/p1050195.jpg",
  ];

  return (
    <ApartmentLayout
      title="La Tanière"
      subtitle="Classé 4 épis Gîtes de France"
      classification="4 épis Gîtes de France"
      capacity={13}
      surface={130}
      mainImage="https://www.aussois-locations.com/medias/album/p1050109.jpg"
      galleryImages={galleryImages}
      tariffLink="https://www.aussois-locations.com/pages/plannings-et-tarifs/planning-la-taniere-13-pers.html"
      description={[
        "La Tanière est un appartement de standing de 130 m² situé au 1er étage de notre petite résidence familiale neuve (2013). Dans un environnement très calme, cette maison en ossature bois vous offre une chaleureuse ambiance chalet avec pierre, boiseries et décoration soignée.",
        "Grande pièce à vivre de 58 m² sous charpente apparente en mélèze, avec baie vitrée donnant sur les montagnes — cuisine ouverte, grande table à manger et canapés pour 13 personnes. Grand balcon de 21 m² ensoleillé idéal pour manger dehors (tables, bancs, transats, barbecue).",
        "5 couchages : 2 chambres avec lit double 160×200 cm + douche + lavabo — 1 chambre lit double ou 2 simples — 1 chambre lit double ou 2 simples + 1 lit-tiroir — 1 lit clos typiquement savoyard — mezzanine avec canapé convertible.",
        "Salle de bain avec douche à l'italienne et Jacuzzi 3 places, idéal pour vous délasser ! 2 WC séparés. Poêle à bois (bois fourni). Chauffage au sol et eau chaude par panneaux solaires. 2 TV écran plat.",
        "En hiver : casier à skis au pied des pistes, ski-bus à 80 mètres. En été : face à la base de loisirs — piscine, pump track, tennis, city stade, bassins d'eau, tir à l'arc, pétanque, mini-golf — à 1 minute à pied !",
      ]}
      amenities={[
        { icon: "🛁", label: "Jacuzzi 3 places" },
        { icon: "🔥", label: "Poêle à bois" },
        { icon: "☀️", label: "Panneaux solaires" },
        { icon: "📶", label: "WiFi gratuit" },
        { icon: "🍖", label: "Barbecue" },
        { icon: "🌿", label: "Balcon 21 m²" },
        { icon: "🐾", label: "Petits animaux" },
        { icon: "🅿️", label: "2 places parking" },
        { icon: "🎿", label: "Ski-bus à 80m" },
        { icon: "🏊", label: "Face base loisirs" },
        { icon: "📺", label: "2 TV écran plat" },
        { icon: "🧺", label: "Buanderie" },
        { icon: "🍽️", label: "Lave-vaisselle" },
        { icon: "🫕", label: "Raclette & fondue" },
        { icon: "🚲", label: "Local à vélos" },
        { icon: "🏔️", label: "1500m d'altitude" },
      ]}
    />
  );
}
