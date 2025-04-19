import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const SocialLink = () => {
  return (
    <div>
      <div className="flex gap-3">
        <a href="https://github.com/rifat-54" target="_blank">
          <span className="text-4xl ">
            <FaGithub />
          </span>
        </a>

        <a target="_blank" href="">
          <span className="text-4xl text-[#0077B5]">
            <FaLinkedin />
          </span>
        </a>

        <a target="_blank" href="https://www.facebook.com/profile.php?id=61560947461638">
          <span className="text-4xl text-[#0866FF] ">
            <FaFacebook />
          </span>
        </a>

        <a target="_blank" href="https://x.com/rifat_654">
          <span className="text-4xl ">
            <FaTwitter />
          </span>
        </a>
      </div>
    </div>
  );
};

export default SocialLink;
