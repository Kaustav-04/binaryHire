import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Post from "../UI/Post";
import PostProject from "./PostProject";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { projActions } from "../../store";


const AllProjects = () => {
  const dispatch = useDispatch();
  const backend = async() => {
    const Response = await fetch('https://binaryhirebackend.onrender.com/allprojects')
    const data = await Response.json();
    const projects = data.AllProjects
    console.log(projects)
    dispatch(projActions.add(projects))
  }
  backend()
  const projArr = useSelector((state)=>state.proj.projects)
  return (
    <div className="w-screen h-screen overflow-hidden overflow-y-auto flex flex-col">
      <div className="flex justify-between items-center">
      <h2 className="px-7 font-semibold text-5xl my-9 ">All Projects</h2>
      <div className="rounded-full p-2 px-3 mr-10 hover:text-white hover:bg-[#000000]"><Link to='/dashboard'><FontAwesomeIcon className="text-3xl" icon={faUser}/></Link></div>
      </div>
      <div className="w-screen h-screen overflow-hidden overflow-y-auto flex flex-wrap no-scrollbar justify-around">
        {projArr.map((i) => (
          <Post key={i._id} name={i.projectdetails.pname} sdesc={i.projectdetails.sdesc} ldesc={i.projectdetails.ldesc} skills={i.projectdetails.skills} rate={i.projectdetails.rate} date={i.projectdetails.completionDate}/>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
