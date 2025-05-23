import React from "react";
import RevelUp from "../../components/animation/RevelUp";

const AboutMe = () => {
  return (
    <RevelUp>
      <section className="px-2 sm:px-5 md:px-16" id="about">
        <div className="max-w-4xl mx-auto   hover:shadow-2xl transition-shadow hover:scale-105 hover:transition-transform duration-300 bg-black text-white my-12">
          <h2 className="text-4xl font-bold mb-6 text-center relative inline-block after:block after:h-1 after:w-24 after:bg-blue-500 after:mt-2 after:mx-auto">
            👋 About Me
          </h2>
          <p className="text-lg leading-relaxed text-gray-300">
            Hey! I’m{" "}
            <span className="font-semibold text-3xl text-blue-600">Rifat</span>,
            a passionate web developer who loves turning ideas into interactive,
            user-friendly web applications. My coding journey began with
            curiosity and has grown into a deep interest in full-stack
            development, especially using the{" "}
            <span className="font-medium text-gray-300">MERN Stack</span>.
            <br />
            <br />
            I enjoy working on projects that challenge me and help me
            grow—whether it’s building sleek frontends or solving backend logic
            puzzles. Clean code and meaningful design are what I always aim for.
            <br />
            <br />
            Beyond tech, I’m someone who enjoys a good football match ⚽,
            sketching in free time 🎨, and exploring new tools or trends in the
            dev world. I believe creativity and continuous learning go hand in
            hand, both in coding and in life.
          </p>
        </div>
      </section>
    </RevelUp>
  );
};

export default AboutMe;
