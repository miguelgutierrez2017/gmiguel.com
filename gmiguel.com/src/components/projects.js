export default function Projects() {
  return (
    <section id="projects" className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="flex flex-col items-center gap-12">
        {/* Project One */}
        <div className="w-full max-w-2xl p-4 border rounded-lg shadow-2xl hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105 bg-white">
          <div className="mb-4">
            <h3 className="text-2xl font-semibold mb-2">Home Server</h3>
            <p className="text-lg">
              Made a server using a Raspberry Pi 4 to host my website, game
              server, and media server. Features:
              <ul className="list-disc list-inside">
                <li>Website hosting with Nginx</li>
                <li>Game server for Minecraft</li>
                <li>Media server using Plex</li>
              </ul>
            </p>
          </div>
          {/* Add an image below the text */}
          <img
            src="serverpi2.jpg"
            alt="Project One Screenshot"
            className="rounded-b-lg shadow-md"
          />
        </div>

        {/* Project Two */}
        <div className="w-full max-w-2xl p-8 border rounded-lg shadow-2xl hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105 bg-white">
          <h3 className="text-2xl font-semibold mb-4">Project Two</h3>
          <p className="text-lg">
            A detailed description of the project, highlighting its purpose,
            features, and technologies used. This project focuses on cloud
            infrastructure and automation.
          </p>
        </div>

        {/* Project Three */}
        <div className="w-full max-w-2xl p-8 border rounded-lg shadow-2xl hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105 bg-white">
          <h3 className="text-2xl font-semibold mb-4">Project Three</h3>
          <p className="text-lg">
            A detailed description of the project, highlighting its purpose,
            features, and technologies used. This project showcases expertise in
            DevOps and CI/CD pipelines.
          </p>
        </div>
      </div>
    </section>
  );
}
