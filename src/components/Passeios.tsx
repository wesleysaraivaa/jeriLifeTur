import Buggy from "../assets/images/buggy.png";
import Quadri from "../assets/images/quadri.png";
import QuatroXQuatro from "../assets/images/4x4.png";

export function Passeios() {
  return (
    <section className="relative bg-[url('./assets/images/FUNDO-PASSEIOS.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-linear-to-r from-custom-blue/70 to-transparent"></div>
      <div className="relative z-20 flex justify-center -mb-6">
        <div className="w-0 h-0 border-l-40 border-l-transparent border-r-40 border-r-transparent border-t-40 md:border-l-60 md:border-r-60 md:border-t-60 border-t-custom-blue drop-shadow-lg"></div>
      </div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <h1 className="text-5xl mt-10 mb-20 text-center text-white ">
          <span className="font-bold">Oferecemos passeios privativos </span>
          ou compartilhados em:
        </h1>
        <div className="flex flex-col items-center md:flex-row md:flex-wrap justify-center gap-10 md:gap-16 mt-10">
          <div className="relative bg-custom-blue-light rounded-2xl flex w-90 md:w-110 h-20 items-center justify-start px-8 mb-4">
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <p className="absolute left-2 top-1/2 -translate-y-1/2 font-caesar-regular font-bold text-7xl text-custom-blue/20 pointer-events-none select-none">
                BUGGY
              </p>
            </div>
            <p className="relative z-10 font-caesar-regular text-5xl text-white">
              BUGGY
            </p>
            <img
              src={Buggy}
              alt="Buggy"
              className="absolute z-20 bottom-0 right-4 w-44"
            />
          </div>
          <div className="relative bg-custom-blue-light rounded-2xl flex w-90 md:w-110 h-20 items-center justify-start px-8 mb-4">
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <p className="absolute left-2 top-1/2 -translate-y-1/2 font-caesar-regular font-bold text-7xl text-custom-blue/20 pointer-events-none select-none">
                QUADRI
              </p>
            </div>
            <p className="relative z-10 font-caesar-regular text-5xl text-white">
              QUADRI
            </p>
            <img
              src={Quadri}
              alt="Quadri"
              className="absolute z-20 bottom-0 right-4 w-44"
            />
          </div>
          <div className="relative bg-custom-blue-light rounded-2xl flex w-90 md:w-110 h-20 items-center justify-start px-8 mb-4">
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <p className="absolute left-2 top-1/2 -translate-y-1/2 font-caesar-regular font-bold text-7xl text-custom-blue/20 pointer-events-none select-none">
                TRANSFER
              </p>
            </div>
            <p className="relative z-10 font-caesar-regular text-5xl text-white">
              TRANSFER
            </p>
            <img
              src={QuatroXQuatro}
              alt="Transfer"
              className="absolute z-20 bottom-0 right-4 w-44"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 flex flex-col items-center gap-10 md:gap-16 relative z-10">
        <div className="w-full flex flex-col lg:block relative rounded-[30px] md:rounded-[50px] shadow-2xl overflow-hidden group">
          <div className="lg:hidden w-full h-64 sm:h-80 md:h-112.5 bg-[url('./assets/images/KiteTripseDownwind.png')] bg-cover bg-center" />

          <div className="lg:bg-[url('./assets/images/KiteTripseDownwind.png')] bg-cover bg-center w-full min-h-fit lg:min-h-137.5 flex items-center justify-end p-5 sm:p-8 md:p-12 lg:p-16">
            <div className="w-full lg:max-w-xl bg-custom-blue/80 lg:bg-white/10 lg:backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-[25px] md:rounded-3xl lg:border lg:border-white/20 lg:shadow-2xl text-white">
              <h2 className="text-[clamp(1.5rem,5vw,3rem)] font-caesar-regular mb-4 leading-tight drop-shadow-lg uppercase">
                Kite Trips e Downwind
              </h2>
              <p className="text-[clamp(0.875rem,2vw,1.125rem)] font-medium leading-relaxed drop-shadow-md">
                Entre julho e janeiro, os ventos constantes fazem de
                Jericoacoara um dos melhores lugares do mundo para o kitesurf.
                Organizamos Kite Trips e downwinds com acompanhamento de
                profissionais, carro 4x4 de apoio e assistência dentro e fora
                d’água.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col lg:block relative rounded-[30px] md:rounded-[50px] shadow-2xl overflow-hidden group">
          <div className="lg:hidden w-full h-64 sm:h-80 md:h-112.5 bg-[url('./assets/images/TransferseLogística.png')] bg-cover bg-center" />

          <div className="lg:bg-[url('./assets/images/TransferseLogística.png')] bg-cover bg-center w-full min-h-fit lg:min-h-137.5 flex items-center justify-end p-5 sm:p-8 md:p-12 lg:p-16">
            <div className="w-full lg:max-w-xl bg-custom-blue/80 lg:bg-white/10 lg:backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-[25px] md:rounded-3xl lg:border lg:border-white/20 lg:shadow-2xl text-white">
              <h2 className="text-[clamp(1.5rem,5vw,3rem)] font-caesar-regular mb-4 leading-tight drop-shadow-lg uppercase">
                Transfers e Logística
              </h2>
              <p className="text-[clamp(0.875rem,2vw,1.125rem)] font-medium leading-relaxed drop-shadow-md">
                Realizamos transfers em veículos 4x4 entre Fortaleza, o
                Aeroporto Regional de Jericoacoara (JJD) e a vila. Nossa equipe
                está disponível 24 horas para garantir conforto e segurança do
                início ao fim da sua viagem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
