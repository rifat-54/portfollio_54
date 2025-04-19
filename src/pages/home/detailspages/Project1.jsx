import React from "react";

const Project1 = () => {
  return (
    <div className="pt-10 pb-16">
      <div className="card bg-base-100 max-w-3xl mx-auto shadow-sm">
        <figure>
          <img
          referrerPolicy="no-referrer"
            src="https://i.ibb.co.com/BWkn5nJ/Screenshot-19.png"
            alt="Food"
          />
        </figure>
        <div className="card-body bg-black">

          <p className="text-gray-300 md:text-xl">Bistro Boss Restaurant is a modern and responsive restaurant website showcasing an engaging UI, dynamic menu, customer testimonials, and a streamlined ordering experience. It also includes admin functionalities like adding new menu items and managing users.</p>


          <h2 className="card-title mb-3 mt-5">🔧 Main Technology Stack:</h2>
          <ul className="">
            <li className="list-disc list-inside"><span className="text-2xl font-semibold">Frontend : </span><span className="text-xl text-gray-300">React.js, Tailwind CSS, DaisyUI, React Router</span></li>

            <li className="list-disc list-inside"><span className="text-2xl font-semibold">Backend: </span><span className="text-xl text-gray-300">Firebase (for authentication), MongoDB, Express.js (if used)</span></li>

            <li className="list-disc list-inside"><span className="text-2xl font-semibold">Tools: </span><span className="text-xl text-gray-300"> Axios, Swiper.js,  etc..</span></li>
          </ul>

          <h2 className="mt-5 text-2xl">🌐 Live Project Link:</h2>
          <a className="text-green-500" target="_blank" href="https://bistro-boss-restaurant-42687.web.app/">https://bistro-boss-restaurant-42687.web.app/</a>

          <h2 className="mt-5 text-2xl">📁 GitHub Repository:</h2>
          <a className="text-green-500" target="_blank" href="https://github.com/rifat-54/bistro-restaurant-client-and-server/tree/main/bistro-boss-restaurant-client">https://github.com/rifat-54/bistro-restaurant-client-and-server/tree/main/bistro-boss-restaurant-client</a>
        

        <h2 className="mt-5 text-2xl">⚠️ Challenges Faced During Development:</h2>
        <ul>
            <li className="text-gray-300 md:text-xl list-disc list-inside">Integrating Firebase authentication with role-based access control for admin routes</li>

            <li className="text-gray-300 md:text-xl list-disc list-inside">Designing a clean, responsive UI across all screen sizes</li>

            <li className="text-gray-300 md:text-xl list-disc list-inside">Handling secure API calls with JWT and protecting routes</li>

            <li className="text-gray-300 md:text-xl list-disc list-inside">Managing conditional rendering and state management for dashboard functionality</li>
        </ul>

        
        <h2  className="mt-5 text-2xl">🚀 Potential Improvements & Future Plans:</h2>
        <ul>
            
        <li className="text-gray-300 md:text-xl list-disc list-inside">Improving accessibility and SEO performance</li>

        
        <li className="text-gray-300 md:text-xl list-disc list-inside">Adding multi-language support and dark mode toggle</li>
        </ul>



        </div>
      </div>
    </div>
  );
};

export default Project1;
