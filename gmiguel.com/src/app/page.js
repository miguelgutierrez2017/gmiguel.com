import Header from "@/components/header";
import Bio from "@/components/bio";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

// This is my personal website, built with Next.js and Tailwind CSS.
// It showcases my projects, skills, and experience as a dev ops engineer.
export default function Home() {
  return (
    <div className="">
      <Header />
      <main className="p-4">
        <Bio />

        <Skills />

        <Projects />

        <Contact />
      </main>
    </div>
  );
}
