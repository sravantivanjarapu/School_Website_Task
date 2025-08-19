import React from "react";

const Header = () => {
  return (
    <header
      id="header"
      className="h-[70vh] flex flex-col justify-center items-center bg-cover bg-center text-white text-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1606326608693-5d18b8d2cdbd?auto=format&fit=crop&w=1600')",
      }}
    >
      <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
        Welcome to Savitri Welfare School
      </h1>
      <p className="mt-4 text-lg md:text-2xl drop-shadow-md">
        Where learning meets excellence!
      </p>
    </header>
  );
};

export default Header;
