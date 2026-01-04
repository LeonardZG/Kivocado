import Head from "next/head";
import HeroIntroSection from "./start-seite/HeroIntroSection";
import OverviewSection from "./start-seite/OverviewSection";
import WarumKivocadoSection from "./start-seite/WarumKivocadoSection";
import KIVerstehenSection from "./start-seite/KIVerstehenSection";
import BlogTeaserSection from "./start-seite/BlogTeaserSection";
import VertrauenSection from "./start-seite/VertrauenSection";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Kivocado – Die besten KI-Tools für Text, Bild, Video & mehr</title>
        <meta
          name="description"
          content="Kivocado hilft dir, die besten KI-Tools für Texterstellung, Bildgenerierung und Videoschnitt zu finden – klar, verständlich, grün."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Kivocado – Dein KI-Kompass" />
        <meta
          property="og:description"
          content="Vergleiche smarte KI-Tools für kreative Projekte, Marketing oder Business. Dein digitaler Kompass für künstliche Intelligenz."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo-kivocado.png" />
        <meta property="og:locale" content="de_DE" />
      </Head>

      <HeroIntroSection />
      <OverviewSection />
      <WarumKivocadoSection />
      <KIVerstehenSection />
      <BlogTeaserSection />
      <VertrauenSection />
    </>
  );
}
