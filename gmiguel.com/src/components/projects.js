import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function Projects() {
  return (
    <section id="projects" className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="flex flex-col items-center gap-12">
        {/* Project One */}
        <div className="w-full max-w-2xl p-4 border rounded-lg shadow-2xl hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105 bg-secondary relative">
          {/* Date */}
          <div className="absolute top-4 right-4 text-sm text-gray-500">
            January 2025
          </div>
          <div className="mb-4">
            <h3 className="text-2xl font-semibold mb-2">Home Server</h3>
            <p className="text-lg">
              A server using a Raspberry Pi 4 to host my website, game server,
              and media server.
            </p>
            <Badge className="mr-2 mt-2" variant="outline">
              Raspberry Pi
            </Badge>
            <Badge className="mr-2 mt-2" variant="outline">
              Docker
            </Badge>
            <Badge className="mr-2 mt-2" variant="outline">
              Nginx
            </Badge>
          </div>
          {/* Add an image below the text */}
          <img
            src="server.png"
            alt="Project One Screenshot"
            className="rounded-b-lg shadow-md"
          />
        </div>

        {/* Project Two */}
        <div className="w-full max-w-2xl p-4 border rounded-lg shadow-2xl hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105 bg-secondary relative">
          {/* Date */}
          <div className="absolute top-4 right-4 text-sm text-gray-500">
            March 2025
          </div>
          <h3 className="text-2xl font-semibold mb-4">Portfolio Website</h3>
          <p className="text-lg">
            My portfolio website created to showcase my projects and skills.
          </p>
          <Badge className="mr-2 mt-2" variant="outline">
            Next.js
          </Badge>
          <Badge className="mr-2 mt-2" variant="outline">
            Tailwind CSS
          </Badge>
          <Badge className="mr-2 mt-2" variant="outline">
            Vercel
          </Badge>
          {/* Add an image below the text */}
          <img
            src="portfolio.png"
            alt="Project Two Screenshot"
            className="rounded-b-lg shadow-md mt-4"
          />
        </div>

        {/* Project Three */}
        <div className="w-full max-w-2xl p-4 border rounded-lg shadow-2xl hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105 bg-secondary relative">
          {/* Date */}
          <div className="absolute top-4 right-4 text-sm text-gray-500">
            May 2025
          </div>
          <h3 className="text-2xl font-semibold mb-4">Coming Soon</h3>
          <p className="text-lg">
            A project I am currently working on that will be revealed soon...
          </p>
          <Progress value={20} className="mt-4" />
        </div>
      </div>
    </section>
  );
}
