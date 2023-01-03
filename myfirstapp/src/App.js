import logo from './logo.svg';
import './App.css';
import './css/sadHeader.css'
import Header from './components/Header';

function App() {

  // Zeppilins

  const menu = [
    {name: "PORTFOLIO"},
    {name: "BLOG"},
    {name: "CV"},
    {name: "STORE"},
    {name: "FREELANCE"},
    {name: "ABOUT ME"},
    {name: "CONTACT"}
  ]

  // Zeppilins

  return (
    <div className="App">

      <Header />
      {/* <Body />
      <Footer /> */}

    </div>
  );
}

export default App;
