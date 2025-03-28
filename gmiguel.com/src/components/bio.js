export default function Bio() {
  return (
    <section id="about" className="mb-8 flex flex-col items-center">
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
          <a href="/Resume.pdf" target="_blank" className="text-blue-600">
            Resume
          </a>
        </h3>
        <div className="text-center">
          <p>Bay Area IT professional</p>
        </div>
      </div>
    </section>
  );
}
