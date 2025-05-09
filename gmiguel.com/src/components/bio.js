import Link from "next/link";

export default function Bio() {
  return (
    <section
      id="about"
      className="mb-8 flex flex-col items-center justify-center text-center opacity-0 animate-fade-in min-h-[80vh]"
    >
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-4">
          Hello! I&apos;m{" "}
          <span
            style={{
              fontFamily: "var(--font-playfair)",
            }}
            className="relative inline-block text-6xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent after:content-[''] after:absolute after:w-full after:h-[3px] after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-blue-500 after:via-purple-500 after:to-blue-500 after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
          >
            Miguel Gutierrez
          </span>
        </h2>
        <h3 className="text-2xl font-semibold mb-2">
          IT System Analyst &nbsp;|&nbsp;
          <Link href="/Resume.pdf" target="_blank" className="text-blue-600">
            View Resume
          </Link>
          &nbsp;|&nbsp;
          <Link href="/Resume.pdf" download className="text-blue-600">
            Download Resume
          </Link>
        </h3>
        <div className="text-center">
          <p className="text-xl">Bay Area IT professional</p>
        </div>
      </div>
    </section>
  );
}
