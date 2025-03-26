import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Header() {
  return (
    <header className="flex items-center justify-center p-4 bg-gray-100 text-white">
      <h1 className="text-2xl font-bold"></h1>
      <nav className="space-x-4">
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
          href="#contact"
          className={cn(
            buttonVariants({ variant: "default" }),
            "hover:bg-blue-600 shadow-lg rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"
          )}
        >
          Skills
        </Link>
        <Link
          href="#skills"
          className={cn(
            buttonVariants({ variant: "default" }),
            "hover:bg-blue-600 shadow-lg rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"
          )}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
