import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbarport from "./components/Navbar";
import Hero from "./pages/Hero";

function App() {
  return (
    <div className="App">
      <Navbarport />
      <Hero />
    </div>
  );
}

export default App;
