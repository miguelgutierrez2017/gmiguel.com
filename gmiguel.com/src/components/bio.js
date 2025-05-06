import Link from "next/link";

export default function Bio() {
  return (
    <section
      id="about"
      className="mb-8 flex flex-col items-center justify-center text-center opacity-0 animate-fade-in h-screen"
    >
      <div className="flex flex-col items-center">
        <h2 className="text-5xl font-bold mb-4">
          Hello! I&apos;m{" "}
          <span
            style={{
              fontFamily: "'Merriweather', serif",
              textDecoration: "underline",
            }}
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
