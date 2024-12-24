"use client";
import { useState } from "react";
import { GithubIcon, LinkIcon } from "@/app/svg/svgs";

const BtnProject = ({ link, title, icon }) => {
  const [hover, setHover] = useState("var(--base)");
  function handleHover() {
    hover == "var(--primary_a)"
      ? setHover("var(--base)")
      : setHover("var(--primary_a)");
  }
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      title={icon == "gh" ? `Ver el código` : `Ver el proyecto`}
      className="flex items-center gap-2 border rounded-xl py-1 px-3 text-lg font-semibold bg-[--bg-socialBtn] shadow-md shadow-black hover:border-[--primary_a] hover:text-[--primary_a] transition-all active:scale-95"
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
