import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Portfolio from "./components/Portfolio/portfolio"
import Contact from "./components/Contact/contact";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
