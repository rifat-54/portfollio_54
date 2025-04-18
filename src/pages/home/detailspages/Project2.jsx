import React from "react";

const Project2 = () => {
  return (
    <div>
      <div className="pt-10 pb-16">
        <div className="card bg-base-100 max-w-3xl mx-auto shadow-sm">
          <figure>
            <img
              src="https://i.ibb.co.com/TB8nvQ5y/Screenshot-21.png"
              alt="Learn Nest Project"
            />
          </figure>
          <div className="card-body bg-black">
            <p className="text-gray-300 md:text-xl">
              Learn Nest is an educational platform designed to streamline the
              learning process for students and tutors. It offers user
              role-based dashboards, course browsing, class management, and a
              seamless, responsive UI with secure authentication and protected
              routes.
            </p>

            <h2 className="card-title mb-3 mt-5">🔧 Main Technology Stack:</h2>
            <ul>
              <li className="list-disc list-inside">
                <span className="text-2xl font-semibold">Frontend : </span>
                <span className="text-xl text-gray-300">
                  React.js, Tailwind CSS, DaisyUI, React Router
                </span>
              </li>
              <li className="list-disc list-inside">
                <span className="text-2xl font-semibold">Backend: </span>
                <span className="text-xl text-gray-300">
                  Node.js, Express.js, MongoDB
                </span>
              </li>
              <li className="list-disc list-inside">
                <span className="text-2xl font-semibold">Tools: </span>
                <span className="text-xl text-gray-300">
                  Axios, Firebase, JWT, React Hook Form, Swiper.js
                </span>
              </li>
            </ul>

            <h2 className="mt-5 text-2xl">🌐 Live Project Link:</h2>
            <a
              className="text-green-500"
              target="_blank"
              href="https://a-12-learnnest.web.app/"
            >
              https://a-12-learnnest.web.app/
            </a>
            <p className="text-gray-300">Admin email: admin@123gmail.com </p>
            <p className="text-gray-300">Admin password: 1234aA@</p>

            <h2 className="mt-5 text-2xl">📁 GitHub Repository:</h2>
            <a
              className="text-green-500"
              target="_blank"
              href="https://github.com/rifat-54/a-12-LearnNest-client-site"
            >
              https://github.com/rifat-54/a-12-LearnNest-client-site
            </a>

            <h2 className="mt-5 text-2xl">
              ⚠️ Challenges Faced During Development:
            </h2>
            <ul>
              <li className="text-gray-300 md:text-xl list-disc list-inside">
                Implementing role-based route protection using Firebase Auth and
                JWT
              </li>
              <li className="text-gray-300 md:text-xl list-disc list-inside">
                Creating dynamic dashboards for admin, instructor, and student
                roles
              </li>
              <li className="text-gray-300 md:text-xl list-disc list-inside">
                Managing secure API calls with token-based authentication
              </li>
              <li className="text-gray-300 md:text-xl list-disc list-inside">
                Validating form inputs with React Hook Form and handling
                real-time updates
              </li>
            </ul>

            <h2 className="mt-5 text-2xl">
              🚀 Potential Improvements & Future Plans:
            </h2>
            <ul>
              <li className="text-gray-300 md:text-xl list-disc list-inside">
                Adding real-time chat functionality between students and
                instructors
              </li>
              <li className="text-gray-300 md:text-xl list-disc list-inside">
                Course progress tracking and certificate generation
              </li>
              <li className="text-gray-300 md:text-xl list-disc list-inside">
                Improving performance with React Query
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project2;
