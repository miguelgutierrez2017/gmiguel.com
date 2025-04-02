"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useTheme } from "next-themes";

export default function Projects() {
  const [isMounted, setIsMounted] = useState(false); // Track if the component is mounted
  const { resolvedTheme } = useTheme(); // Get the current theme

  useEffect(() => {
    setIsMounted(true); // Set mounted to true after the component is mounted
  }, []);

  const projects = [
    {
      id: 1,
      title: "Home Server",
      date: "January 2025",
      description:
        "A server using a Raspberry Pi 4 to host my website, game server, and media server.",
      badges: ["Raspberry Pi", "Docker", "Nginx"],
      image: "server.png",
    },
    {
      id: 2,
      title: "Portfolio Website",
      date: "March 2025",
      description:
        "My portfolio website created to showcase my projects and skills.",
      badges: ["Next.js", "Tailwind CSS", "Vercel"],
      image:
        isMounted && resolvedTheme === "dark"
          ? "darkportfolio.png"
          : "portfolio.png", // Only use resolvedTheme after mounting
    },
    {
      id: 3,
      title: "Coming Soon",
      date: "May 2025",
      description:
        "A project I am currently working on that will be revealed soon...",
      badges: [],
      progress: 20,
    },
  ];

  return (
    <section id="projects" className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="flex flex-col items-center gap-12">
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-full max-w-2xl p-4 border rounded-lg shadow-2xl hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105 bg-secondary relative"
          >
            {/* Date */}
            <div className="absolute top-4 right-4 text-sm text-gray-500">
              {project.date}
            </div>
            <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
            <p className="text-lg">{project.description}</p>
            {project.badges.map((badge, index) => (
              <Badge key={index} className="mr-2 mt-2" variant="outline">
                {badge}
              </Badge>
            ))}
            {project.progress && (
              <Progress value={project.progress} className="mt-4" />
            )}
            {project.image && (
              <img
                src={project.image}
                alt={`${project.title} Screenshot`}
                className="rounded-b-lg shadow-md mt-4"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
