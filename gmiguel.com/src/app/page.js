import Header from "@/components/header";
import Bio from "@/components/bio";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import FloatingButton from "@/components/floatbutton.js"; // Import the FloatingButton component
import { FaArrowDownLong } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="bg-secondary min-h-screen flex flex-col">
      <main className="p-4 space-y-16">
        {/* Landing section with Header and Bio */}
        <section
          id="landing"
          className="min-h-screen flex flex-col justify-start relative"
        >
          <Header />
          <Bio />
        </section>

        {/* Scroll down arrow with bounce animation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#projects" className="text-gray-600 hover:text-blue-600">
            <FaArrowDownLong size={30} />
          </a>
        </div>

        {/* Other sections are scrollable */}
        <section id="projects" className="max-w-5xl mx-auto px-4">
          <Projects />
        </section>
        <section id="skills" className="max-w-5xl mx-auto px-4">
          <Skills />
        </section>
        <section id="contact" className="max-w-5xl mx-auto px-4">
          <Contact />
        </section>
      </main>

      {/* Floating button to go back to the landing page */}
      <FloatingButton />
    </div>
  );
}
