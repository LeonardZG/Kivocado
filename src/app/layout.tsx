import "./globals.css";
import Header from "./header/Header";
import Footer from "./footer/Footer";

export const metadata = {
  title: "Kivocado – KI-Kompass",
  description: "Übersichtliche KI-Tools für Texte, Bilder, Videos & mehr.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="h-full w-full">
      <body className="bg-[#fef9ec] text-black min-h-screen flex flex-col w-full overflow-x-hidden">
        <Header />

        {/* ✅ Main mit voller Breite */}
        <main className="flex-grow w-full pt-6">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}



