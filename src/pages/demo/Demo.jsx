import React from "react";

const Demo = () => {
  return (
    <div>
      <section className="px-2 sm:px-5 py-12 md:px-16" id="about">
        <div className="max-w-4xl mx-auto  border-2 border-red-500  bg-black text-white my-12">
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
      <div className="flex gap-8 p-8">
      {/* Box with animated left border */}
      <div className="relative w-40 h-24 cursor-pointer group">
        <div className="absolute top-0 left-0 h-full w-1 bg-blue-500 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300"></div>
        <div className="flex items-center justify-center h-full border border-gray-300 rounded-md">
          Hover Left Border
        </div>
      </div>

      {/* Box with animated top border */}
      <div className="relative w-40 h-24 cursor-pointer group">
        <div className="absolute top-0 left-0 w-full h-1 bg-green-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
        <div className="flex items-center justify-center h-full border border-gray-300 rounded-md">
          Hover Top Border
        </div>
      </div>

      {/* Box with animated right border */}
      <div className="relative w-40 h-24 cursor-pointer group">
        <div className="absolute top-0 right-0 h-full w-1 bg-red-500 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300"></div>
        <div className="flex items-center justify-center h-full border border-gray-300 rounded-md">
          Hover Right Border
        </div>
      </div>

      {/* Box with animated bottom border */}
      <div className="relative w-40 h-24 cursor-pointer group">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500 scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-300"></div>
        <div className="flex items-center justify-center h-full border border-gray-300 rounded-md">
          Hover Bottom Border
        </div>
      </div>
    </div>

    </div>
  );
};

export default Demo;
