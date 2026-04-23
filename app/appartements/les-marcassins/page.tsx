import type { Metadata } from "next";
import ApartmentLayout from "../../components/ApartmentLayout";

export const metadata: Metadata = {
  title: "Les Marcassins — Gîte 6 personnes à Aussois | Les Gîtes du Loup",
  description:
    "Appartement de 80 m² refait à neuf en 2025, pour 6 personnes. Sauna, poêle à bois, WiFi fibre, lits faits. Classé 3 épis Gîtes de France à Aussois en Vanoise.",
};

export default function LesMarcassinsPage() {
  const galleryImages = [
    "https://www.aussois-locations.com/medias/album/p1070056.jpg",
    "https://www.aussois-locations.com/medias/album/p1070061.jpg",
    "https://www.aussois-locations.com/medias/album/p1070031.jpg",
    "https://www.aussois-locations.com/medias/album/p1070057.jpg",
    "https://www.aussois-locations.com/medias/album/p1070039.jpg",
    "https://www.aussois-locations.com/medias/album/p1070042.jpg",
    "https://www.aussois-locations.com/medias/album/p1070051.jpg",
    "https://www.aussois-locations.com/medias/album/p1070047.jpg",
  ];

  return (
    <ApartmentLayout
      title="Les Marcassins"
      subtitle="Nouveau · Classé 3 épis Gîtes de France"
      classification="3 épis Gîtes de France"
      capacity={6}
      surface={80}
      mainImage="https://www.aussois-locations.com/medias/album/p1070056.jpg"
      galleryImages={galleryImages}
      tariffLink="https://www.aussois-locations.com/pages/plannings-et-tarifs/tarifs-la-petite-bergerie.html"
      description={[
        "Venez découvrir le confort de notre nouveau gîte Les Marcassins à Aussois ! Appartement de 80 m², entièrement refait à neuf en 2025, pour 6 personnes.",
        "Belles prestations : Sauna, WiFi fibre, draps fournis et lits faits à votre arrivée, poêle à bois avec bois fourni. Chaleureuse ambiance « chalet » avec pierre, boiseries et décoration soignée.",
        "Grande pièce à vivre lumineuse de 45 m², au 1er étage de notre maison en ossature bois apparente. Cuisine ouverte toute équipée, grande table à manger, coin salon cosy.",
        "3 chambres : lit double 160×200 cm + douche + lavabo / lit double ou 2 lits simples / 2 lits superposés. Salle de bain avec douche à l'italienne et sauna en pin cembro — idéal pour se délasser après une journée au grand air !",
        "En hiver : casier à skis au pied des pistes et arrêt ski-bus à 50 mètres. En été : face à la base de loisirs avec piscine, pump track, tennis, mini-golf — à 1 minute à pied !",
      ]}
      amenities={[
        { icon: "🛁", label: "Sauna pin cembro" },
        { icon: "🔥", label: "Poêle à bois" },
        { icon: "📶", label: "WiFi Fibre" },
        { icon: "🛏️", label: "Lits faits à l'arrivée" },
        { icon: "🐾", label: "Animaux acceptés" },
        { icon: "🅿️", label: "2 places de parking" },
        { icon: "🚿", label: "Douche à l'italienne" },
        { icon: "👶", label: "Matériel bébé" },
        { icon: "🎿", label: "Ski-bus à 50m" },
        { icon: "🏊", label: "Piscine en face (été)" },
        { icon: "🚲", label: "Local à vélos" },
        { icon: "🧺", label: "Lave-linge & sèche-linge" },
        { icon: "🍳", label: "Cuisine équipée" },
        { icon: "🏔️", label: "1500m d'altitude" },
      ]}
    />
  );
}
