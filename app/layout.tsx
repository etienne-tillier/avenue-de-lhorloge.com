import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Avenue de l'Horloge | Expert Montres & Horlogerie",
    template: "%s | Avenue de l'Horloge",
  },
  description:
    "Guides experts en horlogerie : entretien, réparation, choix de montres. Conseils techniques pour tous garde-temps, du quotidien au prestige.",
  openGraph: {
    title: "Avenue de l'Horloge - Votre Expert en Horlogerie",
    description:
      "Guides experts en horlogerie : entretien, réparation, choix de montres. Conseils techniques pour tous garde-temps, du quotidien au prestige.",
    url: "https://avenue-de-lhorloge.com",
    siteName: "Avenue de l'Horloge",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avenue de l'Horloge | Expert Montres & Horlogerie",
    description:
      "Guides experts en horlogerie : entretien, réparation, choix de montres.",
  },
  metadataBase: new URL("https://avenue-de-lhorloge.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main style={{ minHeight: "60vh" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
