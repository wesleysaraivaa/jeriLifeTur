import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import MangueSeco from "../assets/images/Mangue-Seco.png";
import LagoadaTatajuba from "../assets/images/Lagoa-da-Tatajuba.png";
import DunasMoveis from "../assets/images/Dunas-Moveis.png";
import VilarejosRusticos from "../assets/images/Vilarejos-Rusticos.png";
import LadoOesteBg from "../assets/images/lado-Oeste.png";

export function TourOeste() {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 bg-cover bg-center -scale-y-100"
        style={{ backgroundImage: `url(${LadoOesteBg})` }}
      />
      <section className="container gap-20 mx-auto px-4 py-16 relative z-10">
        <div className="flex items-center gap-4 m-10 flex-col">
          <h1 className="font-caesar-regular text-custom-blue text-5xl text-center md:text-8xl">
            Tour lado Oeste
          </h1>
          <p className="text-custom-gray text-base text-center font-bold md:text-md lg:text-lg">
            Para quem busca aventura, o lado oeste traz contato com a natureza e
            cultura local:
          </p>
        </div>

        <div className="flex items-start flex-col gap-20 justify-center md:grid md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 justify-center mb-2 text-custom-blue-light">
              {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} />
              ))}
            </div>
            <div className="flex flex-col items-center">
              <img
                src={MangueSeco}
                alt=""
                className="h-90 w-90 object-cover rounded-2xl shadow-lg"
              />
              <h2 className="font-bold text-2xl m-3"> Mangue Seco </h2>
              <p className="text-base text-custom-gray max-w-xl text-balance text-center md:text-lg">
                O local é famoso por sua paisagem exótica de árvores de mangue
                que secaram devido ao avanço do mar e da areia, criando um
                cenário de raízes expostas e retorcidas que rendem fotos únicas.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 justify-center mb-2 text-custom-blue-light">
              {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} />
              ))}
            </div>
            <div className="flex flex-col items-center">
              <img
                src={LagoadaTatajuba}
                alt=""
                className="h-90 w-90 object-cover rounded-2xl shadow-lg"
              />
              <h2 className="font-bold text-2xl m-3"> Lagoa da Tatajuba </h2>
              <p className="text-base text-custom-gray max-w-xl text-balance text-center md:text-lg">
                O local é famoso por suas águas calmas e quentes, cercadas por
                dunas móveis e manguezais, oferecendo o cenário clássico das
                redes dentro da água para relaxar.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 justify-center mb-2 text-custom-blue-light">
              {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} />
              ))}
            </div>
            <div className="flex flex-col items-center">
              <img
                src={DunasMoveis}
                alt=""
                className="h-90 w-90 object-cover rounded-2xl shadow-lg"
              />
              <h2 className="font-bold text-2xl m-3"> Dunas Móveis </h2>
              <p className="text-base text-custom-gray max-w-xl text-balance text-center md:text-lg">
                Elas formam um campo de dunas brancas que mudam constantemente
                de lugar devido à força dos ventos alísios, criando o cenário
                perfeito para os famosos passeios de buggy "com emoção".
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 justify-center mb-2 text-custom-blue-light">
              {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} />
              ))}
            </div>
            <div className="flex flex-col items-center">
              <img
                src={VilarejosRusticos}
                alt=""
                className="h-90 w-90 object-cover rounded-2xl shadow-lg"
              />
              <h2 className="font-bold text-2xl m-3"> Vilarejos Rusticos </h2>
              <p className="text-base text-custom-gray max-w-xl text-balance text-center md:text-lg">
                Preservam a essência rústica de comunidades de pescadores, com
                ruas de areia e pousadas sustentáveis integradas à natureza.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
