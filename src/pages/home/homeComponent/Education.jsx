import React from "react";
import RevelUp from "../../../components/animation/RevelUp";
import "./hoverGlow.css";

const Education = () => {
  return (
    <RevelUp>
      <div>
        <section
          id="education"
          className="bg-black text-white py-12 px-6 md:px-20"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-20 text-center text-white">
              🎓 Education
            </h2>

            <div className="space-y-8">
              {/* BSc */}
              <div className="bg-[#1e1e1e]  p-6 rounded-xl shadow-lg border-l-4 border-blue-500  relative glow-border-3side opacity-90 hover:scale-105 hover:transition-transform duration-300 ">
                <h3 className="text-2xl font-semibold">
                  BSc in Computer Science & Engineering
                </h3>
                <p className="text-gray-300">Tejgaon University</p>
                <p className="text-gray-400 text-sm">Running</p>
              </div>

              {/* HSC */}
              <div className="bg-[#1e1e1e] p-6 rounded-xl shadow-lg border-l-4 border-green-500 relative glow-border-3side opacity-90 hover:scale-105 hover:transition-transform duration-300 ">
                <h3 className="text-2xl font-semibold">
                  Higher Secondary Certificate (HSC)
                </h3>
                <p className="text-gray-300">Dhaka Residential Model College</p>
                <p className="text-gray-400 text-sm">2019 - 2021</p>
              </div>

              {/* SSC */}
              <div className="bg-[#1e1e1e] p-6 rounded-xl shadow-lg border-l-4 border-yellow-500 relative glow-border-3side opacity-90 hover:scale-105 hover:transition-transform duration-300  ">
                <h3 className="text-2xl font-semibold">
                  Secondary School Certificate (SSC)
                </h3>
                <p className="text-gray-300">Shahid Smrity High School</p>
                <p className="text-gray-400 text-sm">2017 - 2019</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </RevelUp>
  );
};

export default Education;
