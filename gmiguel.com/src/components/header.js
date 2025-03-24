export default function Header() {
  return (
      <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <h1 className="text-2xl font-bold">Miguel Gutierrez</h1>
        <nav className="space-x-4">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>
  );
}