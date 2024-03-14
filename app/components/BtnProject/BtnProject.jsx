import { GithubIcon, LinkIcon } from "@/app/svg/svgs";
import { useEffect } from "react";

const BtnProject = ({ link, title, icon }) => {
  useEffect(() => {
    console.log(link);
  }, [icon]);
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 border rounded-xl py-1 px-3 text-lg font-semibold bg-[#141414] shadow-md shadow-black "
    >
      <div className="h-5 w-5">
        <GithubIcon />
      </div>
      {title}
    </a>
  );
};

export default BtnProject;
