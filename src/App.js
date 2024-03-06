import './App.css';
import NavBar from './component/NavBar/NavBar';
import Home from './component/Home/Home'
import About from './component/About/About'
import Gallery from './component/Gallery/Galary'
import Services from './component/Services/Services';
import Contact from './component/Contact/Contact';

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Gallery />
      <Services />
      <Contact />
    </>
  );
}

export default App;
