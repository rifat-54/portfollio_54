import React, { useRef } from "react";
import Swal from "sweetalert2";

const SendMail = () => {
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
   

    try {
      const response = await fetch("https://formspree.io/f/xdkgvbda", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

    
      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Your message has been sent.",
          timer: 1500,
          showConfirmButton: false,
        });
        formRef.current.reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Something went wrong. Try again later.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Network error. Please try again later.",
      });
    }
  };

  return (
    <div className="pb-20 mt-10">
      <h2 className="text-3xl text-center mb-10">Send Mail</h2>
      <div className="my-16 px-4 md:px-24 ">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="card bg-[#3F3F46] w-full md:w-5/6 max-w-3xl mx-auto shadow-2xl custom-glow-section hover:scale-105 transition-transform duration-300"
        >
          {/* Name Field */}
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full  px-4 py-3 mt-8 bg-gray-100 text-black border-2 border-blue-500 rounded-md"
          />

          {/* Email Field */}
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full px-4 py-3 my-8 bg-gray-100 text-black border-2 border-blue-500 rounded-md"
          />

          {/* Message Field */}
          <textarea
            name="message"
            required
            placeholder="Write your message..."
            className="w-full px-4 py-3 mb-6 bg-gray-100 text-black border-2 border-blue-500 rounded-md"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="relative my-6 px-6 py-3 text-white font-semibold tracking-wide rounded-md bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 shadow-md transition-all duration-300 hover:scale-105"
          >
            Send Mail
          </button>
        </form>
      </div>
    </div>
  );
};

export default SendMail;
