import React, { Fragment, useEffect, useState } from "react";
import Button from "../UI/Button";
import { useFormik } from "formik";
import { Navigate, useParams } from "react-router-dom";
import { faBorderStyle } from "@fortawesome/free-solid-svg-icons";
import { loginSchema, signupSchema } from "../../Schema";
import { useDispatch } from "react-redux";
import { authActions } from "../../store";

const Authorize = () => {
  const { type } = useParams();
  const [isSignup, setSignup] = useState(true);
  const [signed, setSigned] = useState(false);
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    number: "",
    skills: "",
    password: "",
  };
  const { values, errors,touched, handleSubmit, handleBlur, handleChange } = useFormik({
    initialValues,
    validationSchema: isSignup ? signupSchema : loginSchema,
    onSubmit: (values, action) => {
      authHandler();
      action.resetForm();
    },
  });
  const authHandler = () => {
    if (type === "client" && isSignup) {
      sessionStorage.setItem('url',"https://binaryhirebackend.onrender.com/clientsignup")
      sessionStorage.setItem('body',JSON.stringify({
        name: values.name,
        email: values.email,
        phone: values.number,
        password: values.password,
        skills: values.skills,
      }));
    } else if (type === "client" && !isSignup) {
      sessionStorage.setItem('url',"https://binaryhirebackend.onrender.com/clientlogin")
      sessionStorage.setItem('body',JSON.stringify({
        email: values.email,
        password: values.password,
      }));
    } else if (type === "freelancer" && isSignup) {
      sessionStorage.setItem('url',"https://binaryhirebackend.onrender.com/freelancersignup")
      sessionStorage.setItem('body',JSON.stringify({
        name: values.name,
        email: values.email,
        phone: values.number,
        password: values.password,
        skills: values.skills,
      }));
    } else if (type === "freelancer" && !isSignup) {
      sessionStorage.setItem('url',"https://binaryhirebackend.onrender.com/freelancerlogin")
      sessionStorage.setItem('body',JSON.stringify({
        email: values.email,
        password: values.password,
      }));
    }
    backend();
  };

  const backend = async () => {
    const url = sessionStorage.getItem('url')
    const body = sessionStorage.getItem('body')
    const Response = await fetch(url, {
      method: "POST",
      body: body,
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': 'http://localhost:3000'
      },
    });

    const data = await Response.json();
    if(data.Auth){
      dispatch(authActions.login())
      setSigned(true)
    }
    sessionStorage.removeItem('url')
    sessionStorage.removeItem('body')
  };
  if (signed) {
    return <Navigate to="/allprojects" />;
  }
  return (
    <div className="w-screen h-screen flex items-center justify-center overflow-hidden">
      <div
        style={{
          background:
            "conic-gradient(from 118.04deg at 50% 50%, #CFDBFF50 0deg, rgba(194, 210, 255, 0) 360deg)",
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
            <Fragment>
              <input
              className="mb-6 text-2xl p-4 rounded-2xl focus:border-none focus:outline-none w-full shadow-lg shadow-gray-500"
              type="text"
              name="name"
              placeholder="Type your Name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.name && errors.name && <p className="text-red-600 text-xl w-full text-center mb-3" >{errors.name}</p>}
            </Fragment>
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
          {touched.email && errors.email && <p className="text-red-600 text-xl w-full text-center mb-3" >{errors.email}</p>}
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
              {touched.number && errors.number && <p className="text-red-600 text-xl w-full text-center mb-3" >{errors.number}</p>}
              <textarea
                rows="5"
                className="mb-6 text-2xl p-4 rounded-2xl focus:border-none focus:outline-none w-full shadow-lg shadow-gray-500"
                placeholder="Type your Skills Here (in Comma seperated manner)"
                name="skills"
                value={values.skills}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.skills && errors.skills && <p className="text-red-600 text-xl w-full text-center mb-3" >{errors.skills}</p>}
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
          {touched.password && errors.password && <p className="text-red-600 text-xl w-full text-center mb-3" >{errors.password}</p>}
        </div>
        <Button className="text-2xl mt-4" type="sumbit">
          {isSignup ? "Join GeekyBuild" : "Log In"}
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
