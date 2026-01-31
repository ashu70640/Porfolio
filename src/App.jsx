import Navbar from './components/Navbar';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <a href="#home" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Home />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
