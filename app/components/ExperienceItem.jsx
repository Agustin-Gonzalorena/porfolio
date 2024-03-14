const ExperienceItem = ({ title, subtitle, time, text }) => {
  return (
    <li className="min-h-52 border-l ml-4 flex gap-7 md:gap-14 flex-col md:flex-row pl-10 relative pb-12 md:pb-0">
      <span className="h-5 w-5 bg-[#C3FF63] rounded-full absolute -left-2.5 top-5"></span>
      <div>
        <div>
          <h3 className="text-xl font-bold text-[#ADFF29]">{title}</h3>
          <h4 className="text-xl font-semibold">{subtitle}</h4>
          <p className="font-thin">{time}</p>
        </div>
      </div>
      <div className="md:w-2/3">{text}</div>
    </li>
  );
};

export default ExperienceItem;
