"use client";
import { useState } from "react";

const StackItem = ({ SvgComponent, text }) => {
  const [hover, setHover] = useState("#fff");
  function handleHover() {
    hover === "#C3FF63" ? setHover("#fff") : setHover("#C3FF63");
  }
  return (
    <div
      className="flex flex-col gap-1 items-center hover:text-[#C3FF63] hover:scale-105 transition-all duration-300 ease-in-out min-w-24 "
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div className="h-16 w-16">
        <SvgComponent color={hover} />
      </div>
      <p>{text}</p>
    </div>
  );
};

export default StackItem;
