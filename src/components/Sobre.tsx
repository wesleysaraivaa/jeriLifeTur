import EquipeNativa from "../assets/images/Equipe-Nativa.png";
import AtendimentoCompleto from "../assets/images/Atendimento-Completo.png";
import PasseiosExclusivos from "../assets/images/Passeios-Exclusivos.png";

export function Sobre() {
  return (
    <section className="bg-[url('./assets/images/FUNDO-PASSEIOS.png')] bg-cover bg-center py-16 ">
      <h1 className="font-caesar-regular text-custom-blue text-5xl text-center mb-12 md:text-8xl uppercase">
        Por que Jerilifetur?
      </h1>

      <div className="container mx-auto px-4 flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-125 rounded-[50px] shadow-2xl overflow-hidden group">
            <img
              src={EquipeNativa}
              className="absolute inset-0 w-full h-full object-cover"
              alt="Equipe Nativa"
            />
            <div className="absolute inset-0 bg-linear-to-t from-custom-blue via-custom-blue/40 to-transparent flex flex-col justify-end p-8 md:p-12 text-center">
              <h2 className="font-caesar-regular text-white text-5xl md:text-6xl mb-2 uppercase">
                Equipe nativa
              </h2>
              <p className="text-white text-lg md:text-xl font-medium">
                Somos da região e conhecemos cada trilha, praia e história; por
                isso mostramos Jeri de maneira correta e explicativa.
              </p>
            </div>
          </div>

          <div className="relative h-125 rounded-[50px] shadow-2xl overflow-hidden group">
            <img
              src={AtendimentoCompleto}
              className="absolute inset-0 w-full h-full object-cover"
              alt="Atendimento Completo"
            />
            <div className="absolute inset-0 bg-linear-to-t from-custom-blue via-custom-blue/40 to-transparent flex flex-col justify-end p-8 md:p-12 text-center">
              <h2 className="font-caesar-regular text-white text-5xl md:text-6xl mb-2 uppercase">
                Atendimento completo
              </h2>
              <p className="text-white text-lg md:text-xl font-medium">
                Assistência contínua para passeios, kite trips e downwinds;
                nosso staff acompanha dentro e fora d’água.
              </p>
            </div>
          </div>
        </div>

        <div className="relative h-125 rounded-[50px] shadow-2xl overflow-hidden group">
          <img
            src={PasseiosExclusivos}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Passeios Exclusivos"
          />
          <div className="absolute inset-0 bg-linear-to-r from-custom-blue via-custom-blue/20 to-transparent flex flex-col justify-center p-8 md:p-16 max-w-2xl">
            <h2 className="font-caesar-regular text-white text-6xl md:text-8xl mb-6 uppercase leading-tight">
              Passeios <br /> exclusivos
            </h2>
            <div className="space-y-4">
              <p className="text-white text-lg md:text-2xl font-medium">
                Veículos revisados, guias credenciados e equipe disponível o dia
                inteiro.
              </p>
              <p className="text-white text-lg md:text-2xl font-medium">
                Roteiros adaptados ao seu perfil, família, casal, amigos ou
                aventureiros.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
