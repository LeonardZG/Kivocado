'use client';

const WarumKivocadoSection = () => {
  return (
    <section className="bg-[#fef9ec] text-black px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Warum Kivocado?
        </h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12 text-lg">
          Erfahre, warum Kivocado der ideale Einstiegspunkt in die Welt der <strong>KI-Tools</strong> ist – verständlich, kuratiert und nachhaltig gedacht.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">Kuratiert & unabhängig</h3>
            <p className="text-sm text-gray-700">
              Wir zeigen nur die besten Tools – ausgewählt mit Sorgfalt und ohne Werbung.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">Klar & verständlich</h3>
            <p className="text-sm text-gray-700">
              KI muss nicht kompliziert sein. Bei uns bekommst du klare Erklärungen und praktische Tipps.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">Immer aktuell</h3>
            <p className="text-sm text-gray-700">
              Die KI-Welt verändert sich schnell – wir halten dich mit regelmäßigen Updates auf dem Laufenden.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">Grün gedacht</h3>
            <p className="text-sm text-gray-700">
              Nachhaltigkeit liegt uns am Herzen – bei Technologie, Design und Mindset.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WarumKivocadoSection;
