import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section id="contact" className="mb-8 flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Contact</h2>
      <p className="text-center">
        <a
          href="mailto:miguel@example.com"
          className="text-blue-500 hover:underline"
        >
          <MdEmail className="inline mr-1" />
          miguelgut.a3@gmail.com
        </a>
      </p>

      <ul className="list-none mt-2">
        <li>
          <a
            href="https://www.linkedin.com/in/miguelg2023"
            className="text-blue-500 hover:underline flex flex-row items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/miguelgutierrez2017"
            className="text-blue-500 hover:underline flex flex-row items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            GitHub
          </a>
        </li>
        <li>
          {/* <a
                    href="https://twitter.com/your-twitter-profile"
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Twitter */}
          {/* </a> */}
        </li>
      </ul>
    </section>
  );
}
