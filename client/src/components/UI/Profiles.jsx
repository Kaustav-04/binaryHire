import React from "react";
import Button from "./Button";
const arr = new Array(10).fill("");

const Profiles = () => {
  return (
    <div
      style={{ height: "calc(100% - 60px)" }}
      className="w-full p-3 overflow-hidden overflow-y-scroll no-scrollbar scroll-smooth"
    >
      {arr.map((i, index) => (
        <div
          className={`flex justify-between items-center px-6 py-2 pb-5 ${
            index < arr.length - 1 ? "border-b border-gray-300" : "border-none"
          }`}
        >
          <span className="text-3xl tracking-wide font-semibold">
            Kaustav Giri
          </span>
          <Button className="text-2xl shadow-none">Accept Work</Button>
        </div>
      ))}
    </div>
  );
};

export default Profiles;
