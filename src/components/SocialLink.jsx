import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import './socialLink.css'
const SocialLink = () => {
  return (
    <div className="flex gap-8 justify-center my-6">
      {/* GitHub */}
      <div className="neon-glow">
        <a href="https://github.com/rifat-54" target="_blank" rel="noreferrer">
          <span className="text-3xl text-white">
            <FaGithub />
          </span>
        </a>
      </div>

      {/* LinkedIn */}
      <div className="neon-glow">
        <a
          href="https://www.linkedin.com/in/md-mashur-rahman-rifat-239357368/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="text-3xl">
            <FaLinkedin />
          </span>
        </a>
      </div>

      {/* Facebook */}
      <div className="neon-glow">
        <a
          href="https://www.facebook.com/profile.php?id=61560947461638"
          target="_blank"
          rel="noreferrer"
        >
          <span className="text-3xl">
            <FaFacebook />
          </span>
        </a>
      </div>

      {/* Twitter */}
      <div className="neon-glow">
        <a href="https://x.com/rifat_654" target="_blank" rel="noreferrer">
          <span className="text-3xl">
            <FaTwitter />
          </span>
        </a>
      </div>
    </div>
  );
};

export default SocialLink;
