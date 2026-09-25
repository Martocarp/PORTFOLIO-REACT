import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Tech from "./components/Tech";
import "./App.css";
import { useState } from "react";

function App() {
  const [darkMode, setdarkMode] = useState(true);
  return (
    <div className={`portfolio ${darkMode ? "dark" : "light"}`}>
      <aside className="left-column">
        <button className="theme-button" onClick={() => setdarkMode(!darkMode)}>
          {darkMode ? "LIGHT MODE" : "DARK MODE"}
        </button>
        <br />
        <br />
        <br />
        <Hero />
        <Header />
      </aside>

      <main className="right-column">
        <About />
        <Tech />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
