import { Pj } from "@/app/svg/svgs";
import { projects } from "@/utils/projects";
import ProjectItem from "../ProjectItem";

const Projects = () => {
  return (
    <section className="w-11/12 md:max-w-2xl lg:max-w-3xl xl:max-w-4xl flex flex-col justify-end select-none mb-36">
      <h2 className="text-3xl font-semibold flex items-center gap-2 mb-10">
        <div className="h-6 w-6">
          <Pj />
        </div>
        Proyectos
      </h2>
      <div className="flex flex-col gap-16">
        {projects.map((item) => {
          return (
            <ProjectItem
              key={item.id}
              title={item.title}
              img={item.img}
              stack={item.stack}
              text={item.text}
              links={item.links}
            />
          );
        })}
      </div>
      <div className="flex justify-center mt-16">
        <a
          href="https://github.com/Agustin-Gonzalorena?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-gray-800 rounded-3xl py-2 px-4 text-lg font-semibold bg-[#141414] shadow-md shadow-black  hover:border-[#C3FF63] transition-all duration-300 ease-in-out active:scale-95"
        >
          Más proyectos
        </a>
      </div>
    </section>
  );
};

export default Projects;
