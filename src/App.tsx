import Navbar from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TourLeste } from "./components/TourLeste";
import { TourOeste } from "./components/TourOeste";
import { Passeios } from "./components/Passeios";
import { Sobre } from "./components/Sobre";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TourLeste />
      <TourOeste />
      <Passeios />
      <Sobre />
    </>
  );
}

export default App;
