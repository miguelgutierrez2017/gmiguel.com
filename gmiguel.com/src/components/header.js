import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="flex items-center justify-center p-4 bg-gray-100 text-white">
      <h1 className="text-2xl font-bold"></h1>
      <nav className="space-x-4">
        <Button
          href="#about"
          className="hover:bg-blue-600 shadow-lg rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"
        >
          Home
        </Button>
        <Button
          href="#projects"
          className="hover:bg-blue-600 shadow-lg rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"
        >
          Skills
        </Button>
        <Button
          href="#contact"
          className="hover:bg-blue-600 shadow-lg rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"
        >
          Projects
        </Button>
        <Button
          href="#skills"
          className="hover:bg-blue-600 shadow-lg rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"
        >
          Contact
        </Button>
      </nav>
    </header>
  );
}
