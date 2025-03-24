export default function Projects() {
  return (
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
  );
}
