import Header from "@/components/header";
import Bio from "@/components/bio";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import { FaArrowDownLong } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <main className="p-4 space-y-16">
        {/* Landing section with only Header and Bio */}
        <section
          id="landing"
          className="min-h-screen flex flex-col justify-start relative"
        >
          <Bio />
        </section>
        {/* Scroll down arrow with bounce animation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-gray-600 hover:text-blue-600">
            <FaArrowDownLong size={30} />
          </a>
        </div>
        {/* Other sections are scrollable */}
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}
