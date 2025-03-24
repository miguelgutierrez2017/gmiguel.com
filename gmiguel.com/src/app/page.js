import Image from "next/image";

// This is my personal website, built with Next.js and Tailwind CSS.
// It showcases my projects, skills, and experience as a dev ops engineer.
export default function Home() {
  return (
    <div className=''>

      <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <h1 className="text-2xl font-bold">Miguel Gutierrez</h1>
        <nav className="space-x-4">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>
      <main className="p-4">
        <section id="about" className="mb-8">
          <h2 className="text-xl font-bold mb-4">About Me</h2>
          <p>
            I am a DevOps engineer with a passion for automating processes and improving system reliability. I have experience with various tools and technologies, including Docker, Kubernetes, and AWS.
          </p>
        </section>

        <section id="skills" className="mb-8">
          <h2 className="text-xl font-bold mb-4">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Docker</h3>
              <p>Containerization and orchestration</p>
            </div>
            <div className="p-4 border rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Kubernetes</h3>
              <p>Container orchestration and management</p>
            </div>
            <div className="p-4 border rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">AWS</h3>
              <p>Cloud infrastructure and services</p>
            </div>
            <div className="p-4 border rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">CI/CD</h3>
              <p>Continuous integration and delivery</p>
            </div>
            <div className="p-4 border rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Terraform</h3>
              <p>Infrastructure as code</p>
            </div>
            <div className="p-4 border rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Ansible</h3>
              <p>Configuration management</p>
            </div>
          </div>
        </section>

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
          <p>If you would like to get in touch, please email me at <a href="mailto:miguel@example.com" className="text-blue-500 hover:underline">miguel@example.com</a>.</p>
        </section>
      </main>
    </div>
  );
}
