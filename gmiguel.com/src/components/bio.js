export default function Bio() {
  return (
    <section id="about" className="mb-8 flex flex-col items-center">
      <div className="flex flex-col items-center mt-4">
        <img
          src="/pfp.jpeg"
          alt="Profile Picture"
          className="w-40 h-40 rounded-full mb-4"
        />
        <h2 className="text-4xl font-bold mb-4">Miguel Gutierrez</h2>
        <h3 className="text-xl font-semibold mb-2">DevOps Engineer</h3>
        <div className="text-center">
          <p>
            I am a DevOps engineer with a passion for automating processes and
            improving system reliability. I have experience with various tools
            and technologies, including Docker, Kubernetes, and AWS.
          </p>
          <a
            href="/Resume.pdf"
            target="_blank"
            className="text-blue-500 underline mt-2 block"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}
