import PLACASHERO from "../assets/images/PLACAS-HERO.png";
import BUGGYCASALHERO from "../assets/images/BUGGY-CASAL-HERO.png";

export function Home() {
  return (
    <section className=" relative overflow-hidden bg-[url('./assets/images/PRAIA.png')] bg-cover bg-center rounded-b-7xl rounded-b-[60px] shadow-2xl">
      <div className="container mx-auto px-4 py-8 h-162.5 md:h-187.5 relative">
        <div className="absolute -left-40 bottom-0 w-75 z-10">
          <img src={PLACASHERO} alt=" buggy Jericoacoara" />
        </div>
        <div>
          <div className="relative z-20 flex h-full items-center">
            <div className="max-w-xl">
              <h1 className="text-4xl font-bold text-white mb-4">
                Descubra Jericoacoara com quem é da casa.
              </h1>
              <p>
                Jerilifetur é uma empresa 100% nativa, formada por guias locais
                apaixonados por Jeri. Sabemos que você planeja a viagem durante
                meses ou anos e, por isso, fazemos cada segundo valer a pena.
                Nosso compromisso é com pontualidade, responsabilidade,
                assistência e segurança.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
                Agendar Paaseio
              </button>
              <button className="bg-gray-500 text-white px-4 py-2 rounded mt-4 ml-2">
                Marcar Kite Trip
              </button>
            </div>
          </div>
        </div>
        <div className="absolute -right-80 -bottom-5 w-300 z-100">
          <img
            src={BUGGYCASALHERO}
            alt="Colorful buggy for sale in Jericoacoara"
          />
        </div>
      </div>
    </section>
  );
}
