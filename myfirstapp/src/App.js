import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Body2 from "./components/Body2";
import Rafce from "./components/rafce";

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
      <Rafce />
    </div>
  );
}

export default App;
