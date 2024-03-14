import { Me } from "@/app/svg/svgs";
import Image from "next/image";
import mePhoto from "/public/me.jpeg";

const About = () => {
  return (
    <section className="w-11/12 md:max-w-2xl lg:max-w-3xl xl:max-w-4xl flex flex-col justify-end select-none mb-36">
      <h2 className="text-3xl font-semibold flex items-center gap-2 mb-10 select-none">
        <div className="h-7 w-7">
          <Me />
        </div>
        Acerca de mi
      </h2>
      <div className="flex gap-10 flex-col-reverse items-center md:flex-row">
        <div className="w-full md:w-2/3 flex flex-col gap-5 text-lg text-pretty select-text">
          <p>
            Desde joven, siempre disfruté creando cosas. Inicialmente, me
            sumergí en el estudio de la arquitectura, pero pronto me di cuenta
            de que{" "}
            <span className="text-[#C3FF63]">
              mi verdadera pasión estaba en la creación de software
            </span>{" "}
            en lugar de edificios.
          </p>
          <p>
            Como programador, busco canalizar esa creatividad y funcionalidad
            para{" "}
            <span className="text-[#C3FF63]">
              ofrecer soluciones a través del desarrollo de aplicaciones web
            </span>
            . Por el momento, no he podido decidirme entre enfocarme en el
            front-end o el back-end, así que me dedico a desarrollar habilidades
            en ambos aspectos.
          </p>
          <p>
            En este momento, me encuentro inmerso en la investigación y el
            estudio de blockchain, centrándome especialmente en{" "}
            <span className="text-[#C3FF63]">
              su aplicación en el desarrollo de aplicaciones descentralizadas
            </span>{" "}
            utilizando Solidity.
          </p>
        </div>
        <div className="flex">
          <Image
            className="border-4 border-gray-800 rounded-3xl md:rotate-6 shadow-lg shadow-black w-60 h-60 md:w-52 md:h-52 lg:w-64 lg:h-64 hover:-rotate-0 transition-all"
            src={mePhoto}
            alt="Una foto mía"
            title="Una foto mía"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
