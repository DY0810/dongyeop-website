import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import GrainOverlay from "@/components/GrainOverlay";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main>
      <GrainOverlay />
      <ScrollProgress />
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
