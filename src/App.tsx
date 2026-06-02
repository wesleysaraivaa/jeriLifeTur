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
      <section id="home">
        <Hero />
      </section>
      <section id="tour-leste">
        <TourLeste />
      </section>
      <section id="tour-oeste">
        <TourOeste />
      </section>
      <section id="passeios">
        <Passeios />
      </section>
      
      <div className="relative z-20 flex justify-center -my-4">
        <div className="text-white font-medium whitespace-nowrap overflow-hidden font-caesar-regular text-2xl">
          JERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETUR
          JERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETUR
          JERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETUR
        </div>
      </div>
      
      <section id="sobre">
        <Sobre />
      </section>

      <div className="relative z-30 flex justify-center -my-4">
        <div className="text-white font-medium whitespace-nowrap overflow-hidden font-caesar-regular text-2xl">
          JERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETUR
          JERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETUR
          JERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETUR
        </div>
      </div>

      <section id="sobre-jeri">
        <SobreJeri />
      </section>
      <section id="contato">
        <Contato />
      </section>
    </>
  );
}

export default App;
