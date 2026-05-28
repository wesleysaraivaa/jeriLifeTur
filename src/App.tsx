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
      
      <div className="relative z-20 flex justify-center -my-4">
        <div className="text-white font-medium whitespace-nowrap overflow-hidden font-caesar-regular text-2xl">
          JERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETUR
          JERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETUR
          JERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETUR
        </div>
      </div>
      
      <Sobre />

      <div className="relative z-30 flex justify-center -my-4">
        <div className="text-white font-medium whitespace-nowrap overflow-hidden font-caesar-regular text-2xl">
          JERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETUR
          JERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETUR
          JERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETURJERILIFETUR
        </div>
      </div>

      <SobreJeri />
      <Contato />
    </>
  );
}

export default App;
