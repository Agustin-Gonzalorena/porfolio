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
          <p id="p1">
            Siempre me interesó la creación como forma de expresión y resolución
            de problemas. Durante un tiempo exploré ese interés a través de la
            arquitectura, pero fue en el {""}
            <span className="text-[--primary_a]">
              desarrollo de software
            </span>{" "}
            donde encontré una verdadera vocación.
          </p>
          <p id="p2">
            Hoy canalizo esa vocación mediante el desarrollo de aplicaciones
            web, con un enfoque particular en{" "}
            <span className="text-[--primary_a]">
              Java y el ecosistema Spring Boot.
            </span>{" "}
            Me interesa crear soluciones robustas, bien estructuradas y pensadas
            para escalar en el tiempo.
          </p>
          <p id="p3">
            Estudié en la Universidad Nacional del Centro de la Provincia de
            Buenos Aires{" "}
            <a
              href="https://exa.unicen.edu.ar/tudai/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[--primary_a] hover:cursor-pointer transition-all"
              title="Universidad Nacional del Centro de la Provincia de Buenos Aires"
            >
              {" "}
              (UNICEN)
            </a>
            , donde adquirí una base sólida en programación, bases de datos y
            diseño de software.
          </p>
          <p id="p4">
            Sigo comprometido con mi crecimiento técnico y personal,
            manteniéndome actualizado en herramientas y buenas prácticas que
            fortalezcan mi perfil como{" "}
            <span className="text-[--primary_a]">desarrollador backend.</span>
          </p>
        </div>
        <div className="flex">
          <Image
            className="border-4 border-[--bg-socialBtn] rounded-3xl md:rotate-6 shadow-lg shadow-black w-60 h-60 md:w-52 md:h-52 lg:w-64 lg:h-64 hover:-rotate-0 transition-all"
            src={mePhoto}
            alt="Una foto mía"
            title="Agustin Gonzalorena"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
