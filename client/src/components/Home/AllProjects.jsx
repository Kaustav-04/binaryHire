import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Post from "../UI/Post";
import PostProject from "./PostProject";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const arr = new Array(10).fill("");

const AllProjects = () => {
  return (
    <div className="w-screen h-screen overflow-hidden overflow-y-auto flex flex-col">
      <div className="flex justify-between items-center">
      <h2 className="px-7 font-semibold text-5xl my-9 ">All Projects</h2>
      <div className="rounded-full p-2 px-3 mr-10 hover:text-white hover:bg-[#000000]"><Link to='/dashboard'><FontAwesomeIcon className="text-3xl" icon={faUser}/></Link></div>
      </div>
      <div className="w-screen h-screen overflow-hidden overflow-y-auto flex flex-wrap no-scrollbar justify-around">
        {arr.map((i) => (
          <Post />
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
