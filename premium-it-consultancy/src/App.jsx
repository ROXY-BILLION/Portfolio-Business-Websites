import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Services from "./components/Services";
import Solutions from "./components/Solutions";
import CaseStudies from "./components/CaseStudies";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Solutions />
        <CaseStudies />
        <About />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
