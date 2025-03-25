import Header from "@/components/header";
import Bio from "@/components/bio";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

// This is my personal website, built with Next.js and Tailwind CSS.
// It showcases my projects, skills, and experience as a dev ops engineer.
export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <main className="p-4 space-y-16">
        {/* Show Header and Bio at the top */}
        <section
          id="landing"
          className="min-h-screen flex flex-col justify-start relative"
        >
          <Bio />

          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}
