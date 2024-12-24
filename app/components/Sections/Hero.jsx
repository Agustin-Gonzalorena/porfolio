import Image from "next/image";
import BtnSocial from "../BtnSocial/BtnSocial";
import { social } from "@/utils/social";
import argentina from "@/app/assets/imgs/argentina.webp";

const Hero = () => {
  return (
    <section className="w-11/12 md:max-w-2xl lg:max-w-3xl xl:max-w-4xl flex flex-col justify-end select-none mb-36 mt-32">
      {/* <!-- No traducir: Agustin Gonzalorena --> */}
      <h1 id="Nombre personal" className="font-bold text-5xl mb-5">
        Agustin Gonzalorena
      </h1>
      <div className="text-xl mb-8">
        <p className="text-pretty">
          <span className="text-primary_light dark:text-primary_a">
            Desarrollador Web Full Stack
          </span>
          , de Buenos Aires, Argentina{" "}
          <Image
            src={argentina}
            className="h-5 w-5 inline select-none pointer-events-none"
            title="Argentina"
            alt="Argentina"
          />{" "}
          .
        </p>
        <p>Especializado en la creación de aplicaciones web personalizadas.</p>
      </div>
      <div className="flex gap-5">
        {social.map((i) => {
          return (
            <BtnSocial key={i.text} url={i.url} text={i.text} icon={i.icon} />
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
