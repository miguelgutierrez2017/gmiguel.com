import Header from "@/components/header";
import Bio from "@/components/bio";
import Skills from "@/components/skills";

// This is my personal website, built with Next.js and Tailwind CSS.
// It showcases my projects, skills, and experience as a dev ops engineer.
export default function Home() {
  return (
    <div className="">
      <Header />
      <main className="p-4">
        <Bio />

        <Skills />

        <section id="projects" className="mb-8">
          <h2 className="text-xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Project One</h3>
              <p>A brief description of the project.</p>
            </div>
            <div className="p-4 border rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Project Two</h3>
              <p>A brief description of the project.</p>
            </div>
            <div className="p-4 border rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Project Three</h3>
              <p>A brief description of the project.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="mb-8">
          <h2 className="text-xl font-bold mb-4">Contact</h2>
          <p>
            If you would like to get in touch, please email me at{" "}
            <a
              href="mailto:miguel@example.com"
              className="text-blue-500 hover:underline"
            >
              miguel@example.com
            </a>
            .
          </p>
        </section>
      </main>
    </div>
  );
}
