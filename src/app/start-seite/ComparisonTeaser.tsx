import { FaClock, FaChartBar } from "react-icons/fa";

const ComparisonTeaser = () => {
  return (
    <section className="bg-white py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Tool-Vergleiche? Bald da!</h2>
      <p className="text-gray-700 mb-8 max-w-xl mx-auto">
        Wir arbeiten gerade an einem Vergleichsbereich, der KI-Tools übersichtlich gegenüberstellt. Sei gespannt!
      </p>

      <div className="inline-flex items-center gap-3 text-green-700 text-lg font-medium bg-[#f3fdf4] px-5 py-3 rounded-full shadow-sm">
        <FaClock />
        Live ab Juli – trag dich ein, um benachrichtigt zu werden
      </div>
    </section>
  );
};

export default ComparisonTeaser;
