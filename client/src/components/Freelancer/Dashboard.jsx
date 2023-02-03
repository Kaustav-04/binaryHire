import React, { Fragment } from "react";
import Post, { skills } from "../UI/Post";
import Project from "../UI/Project";

const Dashboard = () => {
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
      <h2 className="font-bold text-5xl">Dashboard</h2>
      <div className="w-full bg-white shadow-lg shadow-gray-400 h-fit p-5 my-3 rounded-xl">
        <h2 className="text-3xl font-semibold">Name</h2>
        <p className="text-2xl">Kaustav</p>
        <div className="w-full my-3 flex flex-wrap">
          {skills.map((i) => (
            <div className="mr-3 bg-[#4F70C7] px-3 py-1 text-white rounded-2xl text-xl">
              {i}
            </div>
          ))}
        </div>
        <h2 className="text-3xl font-semibold">Email</h2>
        <p className="text-2xl">kaustavgiri2017@gmail.com</p>
      </div>
      <div className="w-full bg-transparent no-scrollbar h-3/5 p-5 my-3 rounded-xl flex justify-around flex-wrap overflow-hidden overflow-y-scroll">
        {new Array(10).fill("").map((i) => (
          <Project />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
