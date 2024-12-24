"use client";
import { useState } from "react";

const StackItem = ({ SvgComponent, text }) => {
  const [hover, setHover] = useState("var(--base)");
  function handleHover() {
    hover == "var(--primary_a)"
      ? setHover("var(--base)")
      : setHover("var(--primary_a)");
  }
  return (
    <div
      className="flex flex-col gap-1 items-center hover:text-[--primary_a] hover:scale-105 transition-all duration-300 ease-in-out min-w-24 "
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div className="h-14 w-14">
        <SvgComponent color={hover} />
      </div>
      <p className="text-sm">{text}</p>
    </div>
  );
};

export default StackItem;
