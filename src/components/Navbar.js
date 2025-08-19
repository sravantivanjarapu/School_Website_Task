import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-blue-900 text-white px-6 py-4 shadow-md sticky top-0 z-50">
      <h1 className="text-xl font-bold">🏫 Savitri Model School</h1>
      <ul className="flex space-x-6">
        <li><a href="#header" className="hover:text-yellow-300">Home</a></li>
        <li><a href="#facilities" className="hover:text-yellow-300">Facilities</a></li>
        <li><a href="#academics" className="hover:text-yellow-300">Academics</a></li>
        <li><a href="#about" className="hover:text-yellow-300">About Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
