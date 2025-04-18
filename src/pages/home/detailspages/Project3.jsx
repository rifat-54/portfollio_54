import React from "react";
import groupstudy from '../../../assets/groupstudy.png'
const Project3 = () => {
  return (
    <div>
      <div>
        <div className="pt-10 pb-16">
          <div className="card bg-base-100 max-w-3xl mx-auto shadow-sm">
            <figure>
              <img
                src={groupstudy}
                alt="Group Study Project"
              />
            </figure>
            <div className="card-body bg-black">
              <p className="text-gray-300 md:text-xl">
                Group Study is a collaborative academic platform where students
                can create or join study groups, manage learning sessions, and
                interact with peers. It also includes a robust assignment
                management system, allowing students to submit assignments and
                view their status, while instructors can create, update, and
                evaluate them. With a role-based dashboard and a clean UI, it
                supports a seamless and productive group learning experience.
              </p>

              <h2 className="card-title mb-3 mt-5">
                🔧 Main Technology Stack:
              </h2>
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
                    Axios, Firebase, JWT, React Hook Form
                  </span>
                </li>
              </ul>

              <h2 className="mt-5 text-2xl">🌐 Live Project Link:</h2>
              <a
                className="text-green-500"
                target="_blank"
                href="https://group-study-be847.web.app/"
              >
                https://group-study-be847.web.app/
              </a>

              <h2 className="mt-5 text-2xl">📁 GitHub Repository:</h2>
              <a
                className="text-green-500"
                target="_blank"
                href="https://github.com/rifat-54/a-11-group-study-client-site"
              >
                https://github.com/rifat-54/a-11-group-study-client-site
              </a>

              <h2 className="mt-5 text-2xl">
                ⚠️ Challenges Faced During Development:
              </h2>
              <ul>
                <li className="text-gray-300 md:text-xl list-disc list-inside">
                  Implementing secure login and protecting private study group
                  content
                </li>
                <li className="text-gray-300 md:text-xl list-disc list-inside">
                  Managing dynamic user roles (admin, member, guest)
                </li>
                <li className="text-gray-300 md:text-xl list-disc list-inside">
                  Setting up real-time updates for group activities/events
                </li>
                <li className="text-gray-300 md:text-xl list-disc list-inside">
                  Creating a smooth and responsive mobile experience
                </li>
              </ul>

              <h2 className="mt-5 text-2xl">
                🚀 Potential Improvements & Future Plans:
              </h2>
              <ul>
                <li className="text-gray-300 md:text-xl list-disc list-inside">
                  Integrating live chat and video conference options
                </li>
                <li className="text-gray-300 md:text-xl list-disc list-inside">
                  Adding study material uploads with preview/download feature
                </li>
                <li className="text-gray-300 md:text-xl list-disc list-inside">
                  Implementing notifications and reminders for group events
                </li>
                <li className="text-gray-300 md:text-xl list-disc list-inside">
                  Gamifying progress and group achievements for motivation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project3;
