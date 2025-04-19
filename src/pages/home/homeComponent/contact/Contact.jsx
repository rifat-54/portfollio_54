import React from "react";
import SocialLink from "../../../../components/SocialLink";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
const Contact = () => {
  return (
    <div id="contact" className="mt-20">
      <h2 className="text-3xl font-semibold text-center mb-14"> Contact Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="md:w-4/5 w-full flex items-center gap-5 mx-auto opacity-90 rounded-md bg-[#3F3F46] px-4 py-3">
          <div className="text-white text-2xl md:text-3xl lg:text-4xl">
            <MdOutlineEmail />
          </div>
          <div>
            <h3 className="text-xl">Email:</h3>
            <p>rifat999por@gmail.com</p>
          </div>
        </div>

        <div className="md:w-4/5 w-full  flex items-center gap-5 mx-auto opacity-90 rounded-md bg-[#3F3F46] px-4 py-3">
          <div className="text-white text-xl md:text-2xl lg:text-3xl">
            <FaPhoneAlt />
          </div>
          <div>
            <h3 className="text-xl">Phone:</h3>
            <p>
              <a className="underline hover:text-blue-400  text-green-400" href="tel:+8801784427654" title="Click to call">+880 1784 427 654</a>
            </p>
            <p>
              <a  href="https://wa.me/8801784427654" target="_blank" title="Click to chat on WhatsApp">
                WhatsApp:<span className="underline text-green-400 hover:text-blue-400"> +880 1784 427 654</span>
              </a>
            </p>
          </div>
        </div>

        <div className="opacity-90 w-full flex items-center gap-5 md:w-4/5 mx-auto rounded-md bg-[#3F3F46] px-4 py-3">
          <div className="text-white text-2xl md:text-3xl lg:text-4xl">
            <CiLocationOn />
          </div>
          <div>
            <h3 className="text-xl">Address:</h3>
            <p>Madhupur,Taingail </p>
            <p>Bangladesh</p>
          </div>
        </div>

        <div className="md:w-4/5 w-full flex items-center gap-5 mx-auto opacity-90 rounded-md bg-[#3F3F46] px-4 py-3">
          <div className="text-white text-2xl md:text-3xl lg:text-4xl">
            <IoShareSocialOutline />
          </div>
          <div>
            <h3 className="text-xl mb-2">Social Link:</h3>
            <div>
              <SocialLink></SocialLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
