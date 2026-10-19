
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Navbar />

            <main id="home">
                <Hero />
                <Services />
                <Projects />
                <Testimonials />
                <Contact />
            </main>

            <Footer />
        </>
    );
}

export default App;
