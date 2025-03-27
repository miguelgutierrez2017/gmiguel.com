"use client"; // Add this directive at the top

import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

export default function Navigation() {
  return (
    <nav className="flex-1 flex justify-center space-x-4">
      <Link
        href="#about"
        className={cn(
          buttonVariants({ variant: "default" }),
          "hover:bg-blue-600 shadow-lg rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"
        )}
      >
        Home
      </Link>
      <Link
        href="#projects"
        className={cn(
          buttonVariants({ variant: "default" }),
          "hover:bg-blue-600 shadow-lg rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"
        )}
      >
        Projects
      </Link>
      <Link
        href="#skills"
        className={cn(
          buttonVariants({ variant: "default" }),
          "hover:bg-blue-600 shadow-lg rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"
        )}
      >
        Skills
      </Link>
      <Link
        href="#contact"
        className={cn(
          buttonVariants({ variant: "default" }),
          "hover:bg-blue-600 shadow-lg rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"
        )}
      >
        Contact
      </Link>
    </nav>
  );
}
