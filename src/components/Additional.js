import React from "react";

const SchoolInfo = () => {
  return (
    <section id="school-info" className="py-12 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-4">About Savitri Welfare School</h2>
      <p className="max-w-2xl mx-auto text-lg mb-4">
        Savitri Welfare School provides <strong>completely free education</strong> 
        to children from all backgrounds. We focus on holistic development, 
        creativity, and academic excellence.
      </p>

      <div className="max-w-2xl mx-auto text-left">
        <h3 className="text-xl font-semibold mt-4">Mission:</h3>
        <p>To nurture every child with quality education and equal opportunities.</p>

        <h3 className="text-xl font-semibold mt-4">Vision:</h3>
        <p>To empower students with knowledge and skills for a brighter future.</p>

        <h3 className="text-xl font-semibold mt-4">Facilities:</h3>
        <ul className="list-disc ml-6">
          <li>Classrooms, library, and computer lab</li>
          <li>Playground and sports activities</li>
          <li>Art, music, and cultural programs</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">Contact:</h3>
        <p>Address: [Krishnapuram / Srikakulam], [Andhrapradesh], India</p>
        <p>Phone: +91-9014116406</p>
        <p>Email: info@savitriwelfareschool.org</p>
      </div>
    </section>
  );
};

export default SchoolInfo;
