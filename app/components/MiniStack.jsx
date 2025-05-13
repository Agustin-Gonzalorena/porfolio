import Image from "next/image";
import nextSvg from "../assets/icons/next.svg";
import tailwindSvg from "../assets/icons/tailwind.svg";
import firebaseSvg from "../assets/icons/firebase.svg";
import reactSvg from "../assets/icons/react.svg";
import javaSvg from "../assets/icons/java.svg";
import springSvg from "../assets/icons/spring.svg";

export const MiniNext = () => {
  return (
    <div className="min-w-12 rounded-full text-xs lg:text-sm py-1 px-3 bg-black text-white flex items-center gap-1">
      <div className="h-4 w-4 ">
        <Image src={nextSvg} alt="next" title="next" />
      </div>
      Next.js
    </div>
  );
};

export const MiniTailwind = () => {
  return (
    <div className="min-w-12 rounded-full text-xs lg:text-sm py-1 px-3 bg-[#13465e] text-white flex items-center gap-1">
      <div className="h-4 w-4 ">
        <Image src={tailwindSvg} alt="tailwind" title="tailwind" />
      </div>
      Tailwind CSS
    </div>
  );
};

export const MiniFirebase = () => {
  return (
    <div className="min-w-12 rounded-full text-xs lg:text-sm py-1 px-3 bg-[#582b11] text-white flex items-center gap-1">
      <div className="h-4 w-4 ">
        <Image src={firebaseSvg} alt="firebase" title="firebase" />
      </div>
      Firebase
    </div>
  );
};

export const MiniReact = () => {
  return (
    <div className="min-w-12 rounded-full text-xs lg:text-sm py-1 px-3 bg-[#0e2046] text-white flex items-center gap-1">
      <div className="h-4 w-4 ">
        <Image src={reactSvg} alt="react" title="react" />
      </div>
      React
    </div>
  );
};

export const MiniJava = () => {
  return (
    <div className="min-w-12 rounded-full text-xs lg:text-sm py-1 px-3 bg-[#795738] text-white flex items-center gap-1">
      <div className="h-5 w-5 ">
        <Image src={javaSvg} alt="java" title="java" />
      </div>
      Java
    </div>
  );
};
export const MiniSpring = () => {
  return (
    <div className="min-w-12 rounded-full text-xs lg:text-sm py-1 px-3 bg-[#275a1d] text-white flex items-center gap-1">
      <div className="h-5 w-5 ">
        <Image src={springSvg} alt="spring" title="spring" />
      </div>
      SpringBoot
    </div>
  );
};
