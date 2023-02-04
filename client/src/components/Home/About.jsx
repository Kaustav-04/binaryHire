import React from "react";
import image from "../../images/About.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="w-screen h-screen flex justify-around items-center bg-[#6F3DFF]">
      <div className="w-1/3 text-white">
        <h2 className="text-7xl font-medium mb-8">
          About <span className="text-[#ffffff70]">GeekyBuild</span>
        </h2>
        <p className="text-3xl mb-8">
          We aim to bring college students into the world of Crowd Source
          Development and cognize the power of real life problem-solving. The
          work of the freelancers is uploaded as minted NFTs, hence providing a
          secure Workspace. The works are airdropped to the Client, providing
          them a plethora of options. 
        </p>
        <p className="text-3xl">Build your Portfolio with us.</p>
      </div>
      <div className="w-[40%]">
        <img className="h-full w-full" src={image} alt="Image" />
      </div>
    </div>
  );
};

export default About;
