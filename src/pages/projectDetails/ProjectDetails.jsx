import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import RevelUp from "../../components/animation/RevelUp";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "./swiperStyle.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const ProjectDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/projectData.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);
  // console.log(data);

  const projectData = data.find((item) => item?.id === id);

  console.log(projectData, id);

  //   swiper

  console.log("gallery-> ", projectData?.details?.gallery);
  return (
    <RevelUp>
      <div className="pt-10 pb-16">
        <div className="card bg-base-100 max-w-3xl mx-auto shadow-sm">
          <figure>
            <div className="overflow-hidden max-h-96">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                {projectData?.details?.gallery?.map((imga, idx) => (
                  <SwiperSlide key={idx}>
                    <img src={imga} alt="image" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </figure>
          <div className="card-body bg-black">
            <p className="text-gray-300 md:text-xl">
              {projectData?.details?.description}
            </p>

            <h2 className="card-title mb-3 mt-5">🔧 Main Technology Stack:</h2>
            <ul className="">
              <li className="list-disc list-inside">
                <span className="text-2xl font-semibold">Frontend : </span>

                <span className="text-xl text-gray-300">
                  {projectData?.details?.techStack?.frontend}
                </span>
              </li>

              <li className="list-disc list-inside">
                <span className="text-2xl font-semibold">Backend: </span>
                <span className="text-xl text-gray-300">
                  {projectData?.details?.techStack?.backend}
                </span>
              </li>

              <li className="list-disc list-inside">
                <span className="text-2xl font-semibold">Tools: </span>
                <span className="text-xl text-gray-300">
                  {projectData?.details?.techStack?.tools}
                </span>
              </li>
            </ul>

            <h2 className="mt-5 text-2xl">🌐 Live Project Link:</h2>
            <a
              className="text-green-500"
              target="_blank"
              href={projectData?.details?.liveLink}
            >
              {projectData?.details?.liveLink}
            </a>
            {/* admin */}
            {projectData?.details?.admin && 
            <div>
                <p>{projectData?.details?.admin?.user}</p>
                <p>{projectData?.details?.admin?.pass}</p>
            </div>
            }
            {/* subadmin */}
            {projectData?.details?.subAdmin && 
            <div>
                <p>{projectData?.details?.subAdmin?.user}</p>
                <p>{projectData?.details?.subAdmin?.pass}</p>
            </div>
            }


            <h2 className="mt-5 text-2xl">📁 GitHub Repository:</h2>
            <a
              className="text-green-500"
              target="_blank"
              href={projectData?.details?.githubLink}
            >
              {projectData?.details?.githubLink}
            </a>

            <h2 className="mt-5 text-2xl">
              ⚠️ Challenges Faced During Development:
            </h2>
            <ul>
              {projectData?.details?.challenges?.map((item, idx) => (
                <li
                  key={idx}
                  className="text-gray-300 md:text-xl list-disc list-inside"
                >
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="mt-5 text-2xl">
              🚀 Potential Improvements & Future Plans:
            </h2>
            <ul>
              {projectData?.details?.futurePlans?.map((item, idx) => (
                <li
                  key={idx}
                  className="text-gray-300 md:text-xl list-disc list-inside"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </RevelUp>
  );
};

export default ProjectDetails;
