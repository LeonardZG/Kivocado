'use client';

const BlogIntroSection = () => {
  return (
    <section className="bg-[#fef9ec] text-black px-6 py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">
          Willkommen im Kivocado Blog
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Hier findest du regelmäßig neue Beiträge zu <strong>Künstlicher Intelligenz</strong>, smarten Tools und echten Anwendungsbeispielen. Verständlich. Ehrlich. Und immer mit Blick auf das, was dir wirklich weiterhilft.
        </p>
        <p className="text-md text-gray-600">
          Egal ob du gerade erst anfängst oder schon tiefer in der KI-Welt steckst – wir holen dich dort ab, wo du stehst.
        </p>
      </div>
    </section>
  );
};

export default BlogIntroSection;
