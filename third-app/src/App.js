import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Hero from "./pages/Hero";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Skills from "./pages/Skills";
import NavbarCreated from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <NavbarCreated />
      <Hero />
      <Contact />
      <Project />
      <Skills />
    </div>
  );
}

export default App;
