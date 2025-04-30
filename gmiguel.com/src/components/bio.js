import Link from "next/link";

export default function Bio() {
  return (
    <section
      id="about"
      className="mb-8 flex flex-col items-center opacity-0 animate-fade-in"
    >
      <div className="flex flex-col items-center mt-4">
        <img
          src="/pfp.jpeg"
          alt="Profile Picture"
          className="w-60 h-60 rounded-full mb-4 shadow-2xl hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105"
        />
        <h2 className="text-4xl font-bold mb-4">
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
        <h3 className="text-xl font-semibold mb-2">
          IT System Analyst &nbsp;|&nbsp;
          <Link href="/Resume.pdf">
            <a target="_blank" className="text-blue-600">
              View Resume
            </a>
          </Link>
          &nbsp;|&nbsp;
          <Link href="/Resume.pdf">
            <a download className="text-blue-600">
              Download Resume
            </a>
          </Link>
        </h3>
        <div className="text-center">
          <p>Bay Area IT professional</p>
        </div>
      </div>
    </section>
  );
}
