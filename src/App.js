import React from "react";
import Navbar from "./components/Navbar"; 
import Header from "./components/Header"; 
import Facilities from "./components/Facilities"; 
import Academics from "./components/Academics"; 
import About from "./components/About"; 
import SchoolInfo from "./components/Additional"; 
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />

      <section id="header">
        <Header />
      </section>

      <section id="facilities">
        <Facilities />
      </section>

      <section id="academics">
        <Academics />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="Additional">
        <SchoolInfo />
      </section>

      <Footer />
    </div>
  );
}

export default App;
