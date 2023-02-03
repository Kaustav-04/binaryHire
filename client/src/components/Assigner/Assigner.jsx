import React, { useState } from "react";
import Content from "../UI/Content";
import Profiles from "../UI/Profiles";

const Assigner = () => {
  const [project, setProject] = useState(true);
  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col pt-8 px-8">
      <div
        style={{
          background:
            "conic-gradient(from 200.41deg at 72.99% 35.67%, #C5D4FF 0deg, rgba(255, 255, 255, 0) 360deg)",
          transform: "matrix(-1, 0, 0, 1, 0, 0)",
        }}
        className="w-screen h-screen overflow-hidden absolute top-0 left-0 -z-30"
      ></div>
      <h2 className="font-bold text-5xl mb-5">Posted Project</h2>
      <div className="w-full pb-4 bg-white shadow-lg shadow-gray-400 h-5/6 my-3 rounded-xl overflow-hidden">
        <div className="h-fit w-full flex justify-between mb-4 bg-gray-100">
          <span
            onClick={() => setProject(true)}
            className={`text-3xl font-semibold px-5 py-3 w-1/2 text-center ${
              project ? "bg-white" : "bg-transparent"
            } rounded-t-xl`}
          >
            Project
          </span>
          <span
            onClick={() => setProject(false)}
            className={`text-3xl font-semibold px-5 py-3 w-1/2 text-center ${
              !project ? "bg-white" : "bg-transparent"
            } rounded-t-xl`}
          >
            Freelancer
          </span>
        </div>
        {project && <Content />}
        {!project && <Profiles />}
      </div>
    </div>
  );
};

export default Assigner;
