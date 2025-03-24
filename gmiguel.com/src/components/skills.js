export default function Skills() {
  return (
    <section id="skills" className="mb-8">
      <h2 className="text-xl font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 border rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Python</h3>
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
  );
}
