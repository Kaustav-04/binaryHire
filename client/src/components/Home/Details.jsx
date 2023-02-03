import React from "react";
import Image from "../../images/Details.png";
import Button from "../UI/Button";

const Details = () => {
  return (
    <div className="w-screen h-screen overflow-hidden flex justify-around items-center">
      <div
        style={{
          background:
            "linear-gradient(180deg, #C9D6FF 0%, rgba(231, 237, 255, 0) 100%)",
          transform: " matrix(1, 0, 0, -1, 0, 0)",
        }}
        className="w-screen h-screen overflow-hidden absolute top-0 left-0 -z-30"
      ></div>
      <div className="h-4/6 ">
        <img className="w-full h-full" src={Image} alt="Details" />
      </div>
      <div className="w-1/2">
        <h2 className="text-7xl font-semibold mb-10">Post today, hire tomorrow</h2>
        <p className="text-3xl font-normal mb-8">
          We've got you covered from idea to delivery. Post your job and you'll
          start getting proposals. Once you've found your expert, you can talk
          timings, availability, and prices before going ahead.
        </p>
        <Button className='text-2xl px-4' style={{'border-radius':'23px'}}>Post a Project</Button>
      </div>
    </div>
  );
};

export default Details;
