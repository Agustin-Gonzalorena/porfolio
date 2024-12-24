import About from "./components/Sections/About";
import Experience from "./components/Sections/Experience";
import Hero from "./components/Sections/Hero";
import Projects from "./components/Sections/Projects";
import Stack from "./components/Sections/Stack";
import Footer from "./components/Footer";
import GoUp from "./components/GoUp";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";

export default function Home() {
  return (
    <>
      <div className="background"></div>
      <GoUp />
      <main className="flex flex-col items-center">
        <ThemeToggle />
        <Hero />
        <Experience />
        <Projects />
        <About />
        <Stack />
      </main>
      <Footer />
    </>
  );
}
