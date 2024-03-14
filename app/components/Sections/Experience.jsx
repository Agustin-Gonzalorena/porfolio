import { Xp } from "@/app/svg/svgs";
import ExperienceItem from "../ExperienceItem";
import { experience } from "@/utils/experience";
const Experience = () => {
  return (
    <section className="w-11/12 md:max-w-2xl lg:max-w-3xl xl:max-w-4xl flex flex-col justify-end mb-36">
      <h2 className="text-3xl font-semibold flex items-center gap-2 mb-10 select-none">
        <div className="h-8 w-8">
          <Xp />
        </div>
        Experiencia Laboral
      </h2>
      <div className="w-full min-h-52">
        <ol>
          {experience.map((item) => {
            return (
              <ExperienceItem
                key={item.id}
                title={item.title}
                subtitle={item.subtitle}
                time={item.time}
                text={item.text}
              />
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
