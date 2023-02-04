import React, { Fragment, useState } from "react";
import Button from "../UI/Button";
import { useFormik } from "formik";
import { Navigate } from "react-router-dom";

const Authorize = () => {
  const [isSignup, setSignup] = useState(true);
  const [signed, setSigned] = useState(false)
  const initialValues = {
    name: "",
    email: "",
    number: "",
    skills: "",
    password: "",
  };
  const { values, errors, handleSubmit, handleBlur, handleChange } = useFormik({
    initialValues,
    onSubmit: (values, action) => {
      isSignup ? signupHandler() : loginHandler();
      action.resetForm();
      setSigned(true)
    },
  });
  const loginHandler = () => {
    console.log("LogIn");
    console.log(values);
  };
  const signupHandler = () => {
    console.log("SignUp");
    console.log(values);
  };
  if(signed){
    return <Navigate to='/allprojects' />
  }
  return (
    <div
      className="w-screen h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        style={{
          background:
            "conic-gradient(from 118.04deg at 50% 50%, #CFDBFF50 0deg, rgba(194, 210, 255, 0) 360deg)"
        }}
        className="w-screen h-screen absolute top-0 left-0 -z-30"
      ></div>
      <form
        className="bg-[#E6E4FF] py-10 h-2/3 w-1/4 flex flex-col justify-center rounded-2xl items-center"
        onSubmit={handleSubmit}
      >
        <h2 className="mb-4 text-4xl p-4 font-semibold">
          {isSignup ? "Sign Up" : "Log In"}
        </h2>
        <div className="w-full h-auto overflow-hidden overflow-y-auto no-scrollbar px-3">
          {isSignup && (
            <input
              className="mb-6 text-2xl p-4 rounded-2xl focus:border-none focus:outline-none w-full shadow-lg shadow-gray-500"
              type="text"
              name="name"
              placeholder="Type your Name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          )}
          <input
            className="mb-6 text-2xl p-4 rounded-2xl focus:border-none focus:outline-none w-full shadow-lg shadow-gray-500"
            type="email"
            name="email"
            placeholder="Type your Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {isSignup && (
            <Fragment>
              <input
                className="mb-6 text-2xl p-4 rounded-2xl focus:border-none focus:outline-none w-full shadow-lg shadow-gray-500"
                type="text"
                name="number"
                placeholder="Type your Phone Number"
                value={values.number}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <textarea
                rows="5"
                className="mb-6 text-2xl p-4 rounded-2xl focus:border-none focus:outline-none w-full shadow-lg shadow-gray-500"
                placeholder="Type your Skills Here (in Comma seperated manner)"
                name="skills"
                value={values.skills}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Fragment>
          )}
          <input
            className="mb-10 text-2xl p-4 rounded-2xl focus:border-none focus:outline-none w-full shadow-lg shadow-gray-500"
            type="password"
            name="password"
            placeholder="Type your Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <Button className="text-2xl mt-4" type="sumbit">
          {isSignup ? "Join BinnaryHire" : "Log In"}
        </Button>
        <p className="mt-8 text-xl font-medium">
          {isSignup ? "Already having an Accoun?" : "New Here?"}{" "}
          <span
            onClick={() => setSignup((prev) => !prev)}
            className="text-[#8155FF]"
          >
            {isSignup ? "Log In" : "Sign Up"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Authorize;
