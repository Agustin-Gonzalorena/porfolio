import BtnSocial from "../BtnSocial/BtnSocial";
import { social } from "@/utils/social";

const Hero = () => {
  return (
    <section className="w-11/12 md:max-w-2xl lg:max-w-3xl xl:max-w-4xl flex flex-col justify-end select-none mb-36 mt-32">
      <h1 className="font-bold text-5xl mb-5">Agustin Gonzalorena</h1>
      <div className="text-xl mb-8">
        <p>
          <span className="text-[#C3FF63]">
            Desarrollador Web y Blockchain Entusiasta
          </span>{" "}
          de Buenos Aires, Argentina 🇦🇷.
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
