import PLACASHERO from "../assets/images/PLACAS-HERO.png";
import BUGGYCASALHERO from "../assets/images/BUGGY-CASAL-HERO.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden min-h-160 sm:min-h-205 md:min-h-260.5  bg-[url('./assets/images/PEDRA-FURADA-HERO.png')] 
    bg-cover bg-center rounded-b-[60px] shadow-2xl"
    >
      <div className="container mx-auto px-4 py-8 md:h-250">
        <div className="absolute md:w-120  -left-40 md:top-60 top-30 w-80 z-10 rotate-1">
          <img src={PLACASHERO} alt=" buggy Jericoacoara" />
        </div>
        <div className="relative top-15 z-20 flex h-full items-center">
          <div className="flex flex-col max-w-2xl md:ml-20 ">
            <div className="flex flex-col md:rounded-3xl p-8 md:backdrop-blur-sm md:border md:border-white/20 md:shadow-2xl">
              <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] text-white mb-4 sm:mb-6 leading-[0.9] text-center md:text-left">
                Descubra{" "}
                <span className="font-caesar-regular">Jericoacoara</span>
                <br></br>com quem é da casa.
              </h1>

              <p
                className="text-white text-[clamp(0.875rem,2.5vw,1.5rem)] mt-5
                mb-8 sm:mb-10 md:mb-12 leading-tight max-w-2xl mx-auto md:mx-0 text-center md:text-left font-medium"
              >
                A Jerilifetur é uma empresa 100% nativa, formada por guias
                locais apaixonados por Jeri. Transformamos sua viagem em uma
                experiência inesquecível com segurança, pontualidade e
                atendimento real.
              </p>
            </div>
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-normal gap-3 sm:gap-4">

              <button className="bg-white text-custom-blue py-3 sm:py-3.5 md:py-4 px-6 sm:px-5 md:px-8 lg:px-10 rounded-full font-bold flex items-center justify-center gap-2 sm:gap-3 hover:bg-custom-blue-light hover:text-white transition-all duration-300 shadow-xl group text-[clamp(0.75rem,2vw,1.25rem)] whitespace-nowrap">
                Agendar Passeio
                <div className="grid h-7 w-7 sm:h-8 sm:w-8 place-items-center rounded-full bg-custom-blue-light text-white group-hover:bg-white group-hover:text-custom-blue transition-all duration-300">
                  <FontAwesomeIcon
                    icon={faArrowUp}
                    className="rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </div>
              </button>

              <button className="text-white border border-white bg-white/10 backdrop-blur-sm py-3 sm:py-3.5 md:py-4 px-6 sm:px-5 md:px-8 lg:px-10 rounded-full font-bold flex items-center justify-center gap-2 sm:gap-3 hover:bg-custom-blue-light hover:text-white transition-all duration-300 shadow-xl group text-[clamp(0.75rem,2vw,1.25rem)] whitespace-nowrap">
                Nossos Roteiros
                <div className="grid h-7 w-7 sm:h-8 sm:w-8 place-items-center rounded-full text-white group-hover:bg-custom-blue-light transition-all duration-300">
                  <FontAwesomeIcon
                    icon={faArrowUp}
                    className="rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </div>
              </button>

            </div>
          </div>
        </div>
        <div className="md:w-300 -right-60 -bottom-5 w-300 z-10 hidden md:absolute md:block rotate-1">
          <img
            src={BUGGYCASALHERO}
            alt="Colorful buggy for sale in Jericoacoara"
            className="flex"
          />
        </div>
      </div>
    </section>
  );
}
