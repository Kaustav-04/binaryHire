import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/Landing.png";
import Button from "../UI/Button";
import About from "./About";
import Details from './Details'

const Landing = () => {
  return (
    <div className="w-screen h-screen overflow-hidden overflow-y-auto">
      <div className="flex items-center justify-around bg-[#E7EDFF] h-screen w-screen">
        <div className="flex absolute top-0 right-0 p-5"></div>
        <div className="w-2/5 flex flex-col">
          <h2 className="text-6xl font-bold mb-5 w-full leading-snug">
            Visualizing <span className="text-[#8155FF]">Freelancing</span> as
            Open Source
          </h2>
          <p className="text-2xl l font-medium mb-5 w-4/5 leading-relaxed">
            It aims to bring students into the world of open source development
            and see the power of unified problem-solving in real time.{" "}
          </p>
          <div className="flex">
            <Link to='/auth'><Button className="text-3xl mr-6">Log In as Freelancer</Button></Link>
            <Link to='/auth'><Button className="text-3xl">Log In as Assignor</Button></Link>
          </div>
        </div>
        <div className="w-1/3">
          <img className="w-full h-full" src={Logo} alt="Logo" />
        </div>
      </div>
      <About/>
      <Details />
    </div>
  );
};

export default Landing;
