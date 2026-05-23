import Navbar from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TourLeste } from "./components/TourLeste";
import { TourOeste } from "./components/TourOeste";
import { Passeios } from "./components/Passeios";
import { Sobre } from "./components/Sobre";
import { SobreJeri } from "./components/SobreJeri";
import { Contato } from "./components/Contato";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TourLeste />
      <TourOeste />
      <Passeios />
      <Sobre />
      <SobreJeri />
      <Contato />
    </>
  );
}

export default App;
