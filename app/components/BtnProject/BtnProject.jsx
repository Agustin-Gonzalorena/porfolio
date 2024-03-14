"use client";
import { useState } from "react";
import { GithubIcon, LinkIcon } from "@/app/svg/svgs";

const BtnProject = ({ link, title, icon }) => {
  const [hover, setHover] = useState("#fff");
  function handleHover() {
    hover == "#C3FF63" ? setHover("#fff") : setHover("#C3FF63");
  }
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      title={icon == "gh" ? `Ver el código` : `Ver el proyecto`}
      className="flex items-center gap-2 border rounded-xl py-1 px-3 text-lg font-semibold bg-[#141414] shadow-md shadow-black hover:border-[#C3FF63] hover:text-[#C3FF63] transition-all active:scale-95"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div className="h-5 w-5">
        {icon == "gh" ? (
          <GithubIcon color={hover} />
        ) : (
          <LinkIcon color={hover} />
        )}
      </div>
      {title}
    </a>
  );
};

export default BtnProject;
