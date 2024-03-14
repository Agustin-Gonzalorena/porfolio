import About from "./components/Sections/About";
import Experience from "./components/Sections/Experience";
import Hero from "./components/Sections/Hero";
import Projects from "./components/Sections/Projects";

export default function Home() {
  return (
    <>
      <div className="background"></div>
      <main className=" flex flex-col items-center">
        <Hero />
        <Experience />
        <Projects />
        <About />
      </main>
    </>
  );
}
