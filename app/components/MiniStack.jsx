import Image from "next/image";
import nextSvg from "../assets/icons/next.svg";
import tailwindSvg from "../assets/icons/tailwind.svg";
import firebaseSvg from "../assets/icons/firebase.svg";
import reactSvg from "../assets/icons/react.svg";
import meliSvg from "../assets/icons/meli.svg";
import svSvg from "../assets/icons/server.svg";

export const MiniNext = () => {
  return (
    <div className="min-w-12 rounded-full text-xs lg:text-sm py-1 px-3 bg-black text-white flex items-center gap-1">
      <div className="h-4 w-4 ">
        <Image src={nextSvg} alt="next" />
      </div>
      Next.js
    </div>
  );
};

export const MiniTailwind = () => {
  return (
    <div className="min-w-12 rounded-full text-xs lg:text-sm py-1 px-3 bg-[#13465e] text-white flex items-center gap-1">
      <div className="h-4 w-4 ">
        <Image src={tailwindSvg} alt="tailwind" />
      </div>
      Tailwind CSS
    </div>
  );
};

export const MiniFirebase = () => {
  return (
    <div className="min-w-12 rounded-full text-xs lg:text-sm py-1 px-3 bg-[#582b11] text-white flex items-center gap-1">
      <div className="h-4 w-4 ">
        <Image src={firebaseSvg} alt="firebase" />
      </div>
      Firebase
    </div>
  );
};

export const MiniReact = () => {
  return (
    <div className="min-w-12 rounded-full text-xs lg:text-sm py-1 px-3 bg-[#0e2046] text-white flex items-center gap-1">
      <div className="h-4 w-4 ">
        <Image src={reactSvg} alt="firebase" />
      </div>
      React
    </div>
  );
};

export const MiniMeli = () => {
  return (
    <div className="min-w-12 rounded-full text-xs lg:text-sm py-1 px-3 bg-[#6a6d15] text-white flex items-center gap-1">
      <div className="h-5 w-5 ">
        <Image src={meliSvg} alt="firebase" />
      </div>
      API MercadoLibre
    </div>
  );
};

export const MiniSv = () => {
  return (
    <div className="min-w-12 rounded-full text-xs lg:text-sm py-1 px-3 bg-[#473333] text-white flex items-center gap-1">
      <div className="h-5 w-5 ">
        <Image src={svSvg} alt="firebase" />
      </div>
      Server Local
    </div>
  );
};
