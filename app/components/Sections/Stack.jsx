import { StackSvg } from "@/app/svg/svgs";

import StackBox from "../StackBox";

const Stack = () => {
  return (
    <section className="w-11/12 md:max-w-2xl lg:max-w-3xl xl:max-w-4xl flex flex-col justify-end select-none mb-36">
      <h2 className="text-3xl font-semibold flex items-center gap-2 mb-10 select-none">
        <div className="h-7 w-7">
          <StackSvg />
        </div>
        Tecnologías
      </h2>
      <StackBox />
    </section>
  );
};

export default Stack;
