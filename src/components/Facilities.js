import React from "react";

const Facilities = () => {
  const items = ["📚 Library", "🛌Accommodation", "🍛Free-Food","⚽ Sports Ground"];
  return (
    <section id="facilities" className="py-12 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Our Facilities</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {items.map((f, i) => (
          <div key={i} className="bg-white shadow-lg p-6 rounded-xl w-60 hover:scale-105 transition">
            {f}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Facilities;
