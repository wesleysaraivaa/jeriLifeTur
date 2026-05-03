import LagoaDoParaiso from "../assets/images/Lagoa-Do-Paraiso.png";
import LagoaAzul from "../assets/images/Lagoa-Azul.png";
import ArvoredaPreguica from "../assets/images/Arvore-da-Preguica.png";
import PedraFurada from "../assets/images/Pedra-Furada.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export function TourLeste() {
  return (
    <section className="container gap-20 mx-auto px-4 py-16">
      <div className="flex items-center gap-4 m-10 flex-col">
        <h1 className="font-caesar-regular text-custom-blue text-5xl text-center">
          Tours Lado Leste
        </h1>
        <p className="text-custom-gray text-base text-center font-bold">
          No lado leste do Parque Nacional você encontra as lagoas mais
          cristalinas. Roteiros típicos incluem:
        </p>
      </div>
      <div className="flex items-center flex-col gap-20 justify-center">
        <div>
          <div className="flex items-center gap-1 justify-center mb-2 text-custom-blue-light">
            {[...Array(5)].map((_, index) => (
              <FontAwesomeIcon key={index} icon={faStar} />
            ))}
          </div>
          <div className="flex flex-col items-center">
            <img
              src={LagoaDoParaiso}
              alt="Lagoa do Paraíso"
              className=" h-100 w-100 object-cover rounded-2xl shadow-lg"
            />
            <h2 className="font-bold text-2xl m-3"> Lagoa do Paraíso </h2>
            <p className="text-base text-custom-gray max-w-xl text-balance text-center ">
              Famosa por suas águas cristalinas e redes submersas,
              proporcionando um cenário paradisíaco para os visitantes.
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-1 justify-center mb-2 text-custom-blue-light">
            {[...Array(5)].map((_, index) => (
              <FontAwesomeIcon key={index} icon={faStar} />
            ))}
          </div>
          <div className="flex flex-col items-center">
            <img
              src={LagoaAzul}
              alt="Lagoa Azul"
              className=" h-100 w-100 object-cover rounded-2xl shadow-lg"
            />
            <h2 className="font-bold text-2xl m-3"> Lagoa Azul </h2>
            <p className="text-base text-custom-gray max-w-xl text-balance text-center ">
              Conhecida por sua profundidade e cores intensas, a Lagoa Azul
              oferece uma experiência única para os entusiastas de natureza.
            </p>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-1 justify-center mb-2 text-custom-blue-light">
            {[...Array(5)].map((_, index) => (
              <FontAwesomeIcon key={index} icon={faStar} />
            ))}
          </div>
          <div className="flex flex-col items-center">
            <img
              src={ArvoredaPreguica}
              alt="Árvore da Preguiça"
              className=" h-100 w-100 object-cover rounded-2xl shadow-lg"
            />
            <h2 className="font-bold text-2xl m-3"> Árvore da Preguiça </h2>
            <p className="text-base text-custom-gray max-w-xl text-balance text-center ">
              Uma árvore icônica que se destaca por sua forma única, oferecendo
              um cenário fotogênico e uma experiência de conexão com a natureza.
            </p>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-1 justify-center mb-2 text-custom-blue-light ">
            {[...Array(5)].map((_, index) => (
              <FontAwesomeIcon key={index} icon={faStar} />
            ))}
          </div>
          <div className="flex flex-col items-center">
            <img
              src={PedraFurada}
              alt="Pedra Furada"
              className=" h-100 w-100 object-cover rounded-2xl shadow-lg"
            />
            <h2 className="font-bold text-2xl m-3"> Pedra Furada </h2>
            <p className="text-base text-custom-gray max-w-xl text-balance text-center ">
              Um dos cartões-postais de Jericoacoara, a Pedra Furada é uma
              formação rochosa com um arco natural, proporcionando um cenário
              impressionante para os visitantes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
