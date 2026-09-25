import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Tech from "./components/Tech";
import "./App.css";

function App() {
  return (
    <div className="portfolio">
      <aside className="left-column">
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
