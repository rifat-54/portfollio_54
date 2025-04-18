import React from "react";
import SocialLink from "../../../../components/SocialLink";

const Contact = () => {
  return (
    <div id="contact" className="mt-20">
      <h2 className="text-3xl font-semibold text-center mb-14"> Contact Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="md:w-4/5 mx-auto opacity-90 rounded-md bg-[#3F3F46] px-4 py-3">
          <h3 className="text-xl">Email:</h3>
          <p>rifat999por@gmail.com</p>
        </div>

        <div className="md:w-4/5 mx-auto opacity-90 rounded-md bg-[#3F3F46] px-4 py-3">
          <h3 className="text-xl">Phone:</h3>
          <p>01784427654</p>
        </div>

        <div className="opacity-90 md:w-4/5 mx-auto rounded-md bg-[#3F3F46] px-4 py-3">
          <h3 className="text-xl">Address:</h3>
          <p>Madhupur,Taingail </p>
          <p>Bangladesh</p>
        </div>

        <div className="md:w-4/5 mx-auto opacity-90 rounded-md bg-[#3F3F46] px-4 py-3">
          <h3 className="text-xl mb-2">Social Link:</h3>
           <div>
            <SocialLink></SocialLink>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
