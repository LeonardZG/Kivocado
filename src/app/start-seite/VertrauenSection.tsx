'use client';

const VertrauenSection = () => {
  return (
    <section className="bg-[#fef9ec] text-black px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Dein Vertrauen ist uns wichtig</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
          Kivocado steht für Transparenz, Datenschutz und eine klare Haltung: Wir zeigen dir nur, was wirklich relevant und hilfreich ist – ganz ohne Werbe-Algorithmen oder Bezahlung durch Anbieter.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg mb-2">🔒 DSGVO-konform</h3>
            <p className="text-sm text-gray-700">
              Wir speichern keine personenbezogenen Daten ohne deine ausdrückliche Zustimmung.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg mb-2">⭐ Unabhängig & objektiv</h3>
            <p className="text-sm text-gray-700">
              Unsere Bewertungen sind redaktionell – keine gekauften Empfehlungen.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg mb-2">📬 Kontakt jederzeit</h3>
            <p className="text-sm text-gray-700">
              Fragen oder Feedback? Schreib uns – wir antworten persönlich und schnell.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VertrauenSection;
