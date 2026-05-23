import Buggy from "../assets/images/buggy.png";
import Quadri from "../assets/images/quadri.png";
import QuatroXQuatro from "../assets/images/4x4.png";
import ARROWPASSEIOS from "../assets/images/arrow-passeios.png";

export function Passeios() {
  return (
    <section className="bg-[url('./assets/images/FUNDO-PASSEIOS.png')] bg-cover bg-center bg-[#07356B]">
      <div className="relative h-4 w-full flex items-center justify-center z-20">
        <div className="absolute top-0 -translate-y-1/2 w-full flex justify-center">
          <img src={ARROWPASSEIOS} alt="" className="h-12 md:h-16 w-auto" />
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl mt-10 mb-20 text-center text-white">
          <span className="font-bold">Oferecemos passeios privativos </span>
          ou compartilhados em:
        </h1>
        <div className="flex flex-col items-center md:flex-row md:flex-wrap md:justify-between gap-16 mt-10">
          <div className="relative bg-custom-blue-light rounded-2xl flex w-90 h-20 items-center justify-start px-8 mb-4">
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
          <div className="relative bg-custom-blue-light rounded-2xl flex w-90  h-20 items-center justify-start px-8 mb-4">
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
          <div className="relative bg-custom-blue-light rounded-2xl flex w-90 h-20 items-center justify-start px-8 mb-4">
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

      <div className="container mx-auto px-4 py-16 flex flex-col items-center gap-16">
        <div className="bg-[url('./assets/images/KiteTripseDownwind.png')] bg-cover bg-center w-full min-h-100 relative rounded-[50px] shadow-2xl overflow-hidden flex items-center justify-end p-6 md:p-12">
          <div className="max-w-xl bg-custom-blue/40 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-2xl text-white">
            <h2 className="text-3xl md:text-5xl font-caesar-regular mb-4 leading-tight">
              KITE TRIPS E DOWNWIND
            </h2>
            <p className="text-base md:text-lg font-medium leading-relaxed">
              Entre julho e janeiro, os ventos constantes fazem de Jericoacoara
              um dos melhores lugares do mundo para o kitesurf. Organizamos Kite
              Trips e downwinds com acompanhamento de profissionais, carro 4x4
              de apoio e assistência dentro e fora d’água.
            </p>
          </div>
        </div>

        <div className="bg-[url('./assets/images/TransferseLogística.png')] bg-cover bg-center w-full min-h-100 relative rounded-[50px] shadow-2xl overflow-hidden flex items-center justify-end p-6 md:p-12">
          <div className="max-w-xl bg-custom-blue/40 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-2xl text-white">
            <h2 className="text-3xl md:text-5xl font-caesar-regular mb-4 leading-tight">
              TRANSFERS E LOGÍSTICA
            </h2>
            <p className="text-base md:text-lg font-medium leading-relaxed">
              Realizamos transfers em veículos 4x4 entre Fortaleza, o Aeroporto
              Regional de Jericoacoara (JJD) e a vila. Nossa equipe está
              disponível 24 horas para garantir conforto e segurança do início
              ao fim da sua viagem
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
