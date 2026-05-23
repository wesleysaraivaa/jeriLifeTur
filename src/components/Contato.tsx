import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import CelularInstagram from "../assets/images/CelularInstagram.png";

export function Contato() {
  return (
    <section className="bg-[url('./assets/images/FUNDO-PASSEIOS.png')] bg-cover bg-center bg-[#07356B] pt-32 sm:pt-48 md:pt-64 lg:pt-80 sm:pb-24 md:pb-32 lg:pb-48 relative overflow-hidden flex flex-col items-center">
      <div className="container mx-auto px-4 relative z-10 py-10 sm:py-20">
        <div className="w-full md:w-[65%] lg:w-[55%] xl:w-[50%] bg-white/10 backdrop-blur-xl border border-white/20 rounded-[30px] sm:rounded-[40px] md:rounded-[50px] p-6 sm:p-10 md:p-12 lg:p-14 xl:p-16 shadow-2xl relative z-10">
          <h1 className="font-caesar-regular text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white mb-4 sm:mb-6 uppercase leading-[0.9] tracking-tighter text-center md:text-left">
            Pronto para <br className="hidden sm:block" /> embarcar?
          </h1>
          <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-8 sm:mb-10 md:mb-12 leading-tight max-w-2xl mx-auto md:mx-0 text-center md:text-left font-medium">
            Entre em contato para montar seu roteiro sob medida.{" "}
            <span className="font-bold">
              A Jerilifetur oferece pacotes diários e combinados,
            </span>{" "}
            além de transfers e suporte completo.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-4 sm:gap-3 md:gap-4 lg:gap-6">
            <button className="bg-white text-custom-blue py-3 sm:py-3.5 md:py-4 px-6 sm:px-5 md:px-8 lg:px-10 rounded-full font-bold flex items-center justify-center gap-2 sm:gap-3 hover:bg-custom-blue-light hover:text-white transition-all duration-300 shadow-xl group text-sm sm:text-base md:text-lg lg:text-xl whitespace-nowrap">
              AGENDAR PASSEIO
              <FontAwesomeIcon
                icon={faArrowUp}
                className="rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </button>
            <button className="border-2 border-white/50 text-white py-3 sm:py-3.5 md:py-4 px-6 sm:px-5 md:px-8 lg:px-10 rounded-full font-bold flex items-center justify-center gap-2 sm:gap-3 hover:bg-white hover:text-custom-blue transition-all duration-300 group text-sm sm:text-base md:text-lg lg:text-xl whitespace-nowrap">
              Marcar Kite Trip
              <FontAwesomeIcon
                icon={faArrowUp}
                className="rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="relative md:absolute right-0 bottom-0 w-full md:w-[45%] lg:w-[50%] flex justify-center md:justify-end items-end z-20 pointer-events-none mt-10 md:mt-0">
        <img
          src={CelularInstagram}
          alt="Instagram Jerilifetur"
          className="w-full h-auto sm:max-w-120 md:max-w-162.5 lg:max-w-212.5 xl:max-w-200.5 object-contain drop-shadow-[0_40px_40px_rgba(0,0,0,0.5)] pointer-events-auto transform translate-x-4 md:translate-x-8 translate-y-4 md:translate-y-8"
        />
      </div>
    </section>
  );
}
