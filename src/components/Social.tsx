import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
const Social: React.FC = () => (
  <div className="flex items-center justify-center gap-5 md:justify-start">
    <a
      aria-label="GitHub profile"
      href="https://github.com/grace-nguyen"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 transition hover:text-purple-300"
    >
      <FaGithub size={23} />
    </a>
    <a
      aria-label="LinkedIn profile"
      href="https://www.linkedin.com/in/gracenguyen1911/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 transition hover:text-purple-300"
    >
      <FaLinkedin size={23} />
    </a>
    <a
      aria-label="Send Grace an email"
      href="mailto:grace.nnguyen1911@gmail.com"
      className="text-gray-300 transition hover:text-purple-300"
    >
      <FaEnvelope size={23} />
    </a>
  </div>
);
export default Social;
