import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Les Gîtes du Loup — Location chalet à Aussois en Vanoise",
  description:
    "Gîtes de charme à Aussois en Vanoise : La Tanière (13 pers), Le Bivouac (6 pers), Les Marcassins (6 pers). Sauna, WiFi, lits faits. Marion & David vous accueillent.",
  keywords: [
    "gîte Aussois",
    "location chalet Vanoise",
    "Les Gîtes du Loup",
    "vacances montagne Savoie",
    "location appartement Aussois",
  ],
  openGraph: {
    title: "Les Gîtes du Loup — Aussois en Vanoise",
    description:
      "Vivez des vacances de charme à la montagne dans nos gîtes labellisés Gîtes de France.",
    url: "https://www.aussois-locations.com",
    siteName: "Les Gîtes du Loup",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <ScrollReveal />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
