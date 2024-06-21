import Image from "next/image";
import BtnProject from "./BtnProject/BtnProject";

const ProjectItem = ({ title, img, stack, text, links }) => {
  return (
    <div className="min-h-60 w-full flex gap-6 flex-col md:flex-row">
      <div className="h-52 md:h-64 xl:w-1/2  rounded-3xl  overflow-x-hidden overflow-y-hidden shadow-md shadow-black">
        <a href={links.preview} target="_blank" rel="noopener noreferrer">
          <Image
            src={img}
            alt={title}
            title={title}
            className="object-cover object-top hover:scale-[1.05] transition-all duration-300 ease-in-out"
          />
        </a>
      </div>
      <div className="w-11/12 xl:w-1/2 flex flex-col select-text">
        <h3 className="text-3xl font-bold">{title}</h3>
        <div className="w-full py-2 flex gap-2 select-none">
          {stack.map((item) => {
            return item;
          })}
        </div>
        <p className="text-lg font-thin mb-3">{text}</p>
        <div className="flex gap-3 select-none">
          <BtnProject link={links.github} title="Code" icon="gh" />
          <BtnProject link={links.preview} title="Preview" icon="link" />
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
