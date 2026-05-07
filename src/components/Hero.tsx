import PLACASHERO from "../assets/images/PLACAS-HERO.png";
import BUGGYCASALHERO from "../assets/images/BUGGY-CASAL-HERO.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[url('./assets/images/PEDRA-FURADA-HERO.png')] bg-cover bg-center rounded-b-7xl rounded-b-[60px] shadow-2xl">
      <div className="container mx-auto px-4 py-8 h-162.5 md:h-250">
        <div className="absolute md:w-120  -left-40 md:top-60 top-30 w-80 z-10 rotate-1">
          <img src={PLACASHERO} alt=" buggy Jericoacoara" />
        </div>
        <div className="relative top-15 z-20 flex h-full items-center">
          <div className="flex flex-col max-w-2xl  md:ml-20 ">
            <div className="flex flex-col rounded-3xl p-8 backdrop-blur-sm border border-white/20 shadow-2xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Descubra{" "}
                <span className="font-caesar-regular">Jericoacoara</span>
                <br></br>com quem é da casa.
              </h1>

              <p className="mt-5 text-white/90 text-lg leading-relaxed max-w-xl">
                A Jerilifetur é uma empresa 100% nativa, formada por guias
                locais apaixonados por Jeri. Transformamos sua viagem em uma
                experiência inesquecível com segurança, pontualidade e
                atendimento real.
              </p>
            </div>
            <div className="mt-8 flex md:justify-normal gap-4 justify-between">
              <button className="group inline-flex items-center gap-3 rounded-full bg-white px-2 py-2 shadow-xl transition-all duration-300 hover:scale-105">
                <span className="pl-4 text-black font-alan-sans-medium">
                  Agendar Passeio
                </span>

                <div className="grid h-10 w-10 place-items-center rounded-full bg-custom-blue-light text-white">
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
              </button>

              <button className="inline-flex items-center gap-3 rounded-full border border-white px-5 py-2 shadow-xl font-alan-sans-medium text-white">
                Agendar Passeio
                <FontAwesomeIcon icon={faArrowRight} />
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
