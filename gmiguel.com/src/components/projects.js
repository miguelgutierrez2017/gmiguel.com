"use client";

import { useState, useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useTheme } from "next-themes";

export default function Projects() {
  const { resolvedTheme } = useTheme(); // Get the current theme
  const [isMounted, setIsMounted] = useState(false); // Track if the component is mounted
  const [visibleProjects, setVisibleProjects] = useState([]); // Track visible projects
  const projectRefs = useRef([]); // Store refs for each project card

  useEffect(() => {
    setIsMounted(true); // Set mounted to true after the component is mounted
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index;
            setVisibleProjects((prev) => [...new Set([...prev, index])]); // Add the visible project index
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the card is visible
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
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
      title: "VPS",
      date: "May 2025",
      description:
        "Using a VPS to learn and test Docker , Kubernetes, and Pi-Holw",
      badges: ["Pi-hole, Docker, Kubernetes"],
    },
    {
      id: 4,
      title: "Coming Soon",
      date: "June 2025",
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
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => (projectRefs.current[index] = el)} // Assign ref to each project card
            data-index={index} // Add index as a data attribute
            className={`w-full max-w-2xl p-4 border rounded-lg shadow-2xl hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105 bg-secondary relative ${
              visibleProjects.includes(index.toString())
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            } transition-all duration-[1500ms]`} // Slower fade-in duration
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
