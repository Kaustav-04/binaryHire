import React from "react";
import image from "../../images/About.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="w-screen h-screen flex justify-around items-center bg-[#6F3DFF]">
      <div className="w-1/3 text-white">
        <h2 className="text-7xl font-medium mb-8">About BinaryHire</h2>
        <p className="text-3xl">
          It aims to bring students into the world of open source development
          and see the power of unified problem-solving in real time. The
          projects that we will host have been carefully hand-picked to
          invigorate creative thinking and encourage collaboration among all
          freelancers.
        </p>
      </div>
      <div className="w-[40%]">
        <img className="h-full w-full" src={image} alt="Image" />
      </div>
    </div>
  );
};

export default About;
