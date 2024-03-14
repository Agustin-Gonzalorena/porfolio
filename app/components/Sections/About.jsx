import Image from "next/image";
const About = () => {
  return (
    <section className="w-11/12 md:max-w-2xl lg:max-w-3xl xl:max-w-4xl flex flex-col justify-end select-none mb-36">
      About
      <div className="flex w-full justify-end">
        <Image
          className="border-4 border-gray-800 rounded-3xl rotate-6 shadow-lg shadow-black"
          src={"/me.jpeg"}
          alt="me"
          width={250}
          height={250}
        />
      </div>
    </section>
  );
};

export default About;
