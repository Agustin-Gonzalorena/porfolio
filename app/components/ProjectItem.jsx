import Image from "next/image";
import { GithubIcon, LinkIcon } from "@/app/svg/svgs";

const ProjectItem = ({ title, img, stack, text, links }) => {
  return (
    <div className="min-h-60 w-full flex gap-6 flex-col md:flex-row">
      <div className="h-52 md:h-64 xl:w-1/2  rounded-3xl  overflow-x-hidden overflow-y-hidden shadow-md shadow-black">
        <Image
          src={img}
          alt="efemeride"
          className="object-cover object-top hover:scale-[1.05] transition-all duration-300 ease-in-out"
        />
      </div>
      <div className="w-11/12 xl:w-1/2 flex flex-col select-text">
        <h3 className="text-3xl font-bold">{title}</h3>
        <div className="w-full py-2 flex gap-2">
          {stack.map((item) => {
            return item;
          })}
        </div>
        <p className="text-lg font-thin mb-3">{text}</p>
        <div className="flex gap-3 select-none">
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border rounded-xl py-1 px-3 text-lg font-semibold bg-[#141414] shadow-md shadow-black "
          >
            <div className="h-5 w-5">
              <GithubIcon />
            </div>
            Code
          </a>
          <a
            href={links.preview}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border rounded-xl py-1 px-3 font-semibold bg-[#141414] shadow-md shadow-black"
          >
            <div className="h-5 w-5">
              <LinkIcon />
            </div>
            Preview
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
