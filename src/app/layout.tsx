import "./globals.css";
import Header from "./header/Header";
import Footer from "./footer/Footer";

export const metadata = {
  title: "Kivocado – KI-Kompass",
  description: "Übersichtliche KI-Tools für Texte, Bilder, Videos & mehr.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className="h-full">
      <body className="bg-[#fef9ec] text-black min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}



