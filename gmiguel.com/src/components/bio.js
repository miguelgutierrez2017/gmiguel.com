export default function Bio() {
  return (
    <section id="about" className="mb-8">
      <h2 className="text-xl font-bold mb-4">About Me</h2>
      <div className="flex items-center mt-4">
        <img
          src="/pfp.jpeg"
          alt="Profile Picture"
          className="w-40 h-40 rounded-full mr-4"
        />

        <p>
          I am a DevOps engineer with a passion for automating processes and
          improving system reliability. I have experience with various tools and
          technologies, including Docker, Kubernetes, and AWS.
        </p>
      </div>
    </section>
  );
}
