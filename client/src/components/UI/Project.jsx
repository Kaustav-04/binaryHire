import React from "react";
import Button from "./Button";
import { skills } from "./Post";

const Project = (props) => {
  return (
    <div className="h-fit w-full rounded-xl m-3 bg-white p-3 flex flex-col">
      <div className="text-4xl mb-3 font-semibold">
        <span className="mr-5">{props.name}</span>
      </div>
      <div className="text-2xl mb-5">
        {props.sdesc}
      </div>
      <div className="w-full flex flex-wrap">
        {props.skills.map((i) => (
          <div className="m-1 mr-3 bg-[#4F70C7] px-3 py-1 text-white rounded-2xl text-xl">
            {i}
          </div>
        ))}
      </div>
      <Button
      className='bg-[#459727] text-xl font-medium my-4'
      >
        Project Link
      </Button>
    </div>
  );
};

export default Project;
