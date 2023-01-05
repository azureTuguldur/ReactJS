import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Body2 from "./components/Body2";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
      <div>
        <Header />
        <Body2 />
        <Footer />
      </div>
    </div>
  );
}

export default App;
