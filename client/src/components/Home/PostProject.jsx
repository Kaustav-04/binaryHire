import { useFormik } from "formik";
import React from "react";
import Logo from "../../images/PostProject.png";
import Button from "../UI/Button";

const PostProject = () => {
  const initialValues = {
    name: "",
    sdesc: "",
    ldesc: "",
    skills: "",
    rate: "",
    date: "",
    upload: "",
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      onSubmit: (values, action) => {
        backend();
      },
    });
  const backend = async () => {
    console.log('sending')
    const Response = await fetch(
      "https://binaryhirebackend.onrender.com/newproject",
      {
        method: "POST",
        body: JSON.stringify({
          projectetails: {
            pname: values.name,
            sdesc: values.sdesc,
            ldesc: values.ldesc,
            skills: values.skills.split(",").map((i) => i.trim()),
            rate: values.rate,
            completionDate: values.date,
          },
          email: "kaustavgiri2017@gmail.com",
        }),
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': 'http://localhost:3000'
        },
      }
    );

    const data = await Response.json();
    console.log('sent')
    console.log(data)
  };
  return (
    <div
      style={{
        background:
          "conic-gradient(from 102.04deg at 50% 50%, #C5D4FF 0deg, rgba(191, 207, 255, 0.114583) 318.75deg, rgba(192, 208, 255, 0.0677083) 335.63deg, rgba(194, 210, 255, 0) 360deg)",
      }}
      className="w-screen h-screen overflow-hidden flex flex-col items-center justify-center"
    >
      {/* <div className='w-full h-[5%] bg-[#7A4BFF]'></div> */}
      <div className="w-full h-full bg-[#D7E1FF4D] flex items-center justify-around">
        <div className="flex flex-col w-1/2 py-8 h-full">
          <h2 className="text-[#8155FF] text-4xl mb-5">
            Tell us about your project
          </h2>
          <form
            className="bg-[#ffffff] rounded-2xl shadow-lg py-5 shadow-gray-500 w-full text-2xl overflow-hidden overflow-y-scroll no-scrollbar"
            onSubmit={handleSubmit}
          >
            <div className="w-full px-4 flex flex-col my-9">
              <label htmlFor="name">Choose a name for your project</label>
              <input
                type="text"
                name="name"
                id="name"
                className="border border-[#1919196f] rounded-full p-3 my-2 shadow-lg shadow-gray-400"
                placeholder="eg: Build me a website"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="w-full px-4 flex flex-col my-9">
              <label htmlFor="sdesc">Project Description (small)</label>
              <textarea
                type="text"
                style={{ height: "150px" }}
                name="sdesc"
                id="sdesc"
                className="border resize-none border-[#1919196f] rounded-2xl p-3 my-2 shadow-lg shadow-gray-400"
                placeholder="Describe your project here..."
                value={values.sdesc}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="w-full px-4 flex flex-col my-9">
              <label htmlFor="ldesc">Project Description (large)</label>
              <textarea
                type="text"
                style={{ height: "150px" }}
                name="ldesc"
                id="ldesc"
                className="border resize-none border-[#1919196f] rounded-2xl p-3 my-2 shadow-lg shadow-gray-400"
                placeholder="Describe your project here..."
                value={values.ldesc}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="w-full px-4 flex flex-col my-9">
              <label htmlFor="skills">Skills Required</label>
              <textarea
                type="text"
                name="skills"
                id="skills"
                style={{ height: "100px" }}
                className="border resize-none border-[#1919196f] rounded-2xl p-3 my-2 shadow-lg shadow-gray-400"
                placeholder="Type the skills Required (in commma seperated manner)"
                value={values.skills}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="w-fit px-4 flex items-center">
              <div className="w-fit px-4 flex flex-col my-9">
                <label htmlFor="rate">Rate for the work</label>
                <input
                  type="text"
                  name="rate"
                  id="rate"
                  className="border border-[#1919196f] rounded-xl p-3 my-2 shadow-lg shadow-gray-400"
                  placeholder="Payment for the freelancer"
                  value={values.rate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="w-fit px-4 flex flex-col my-9">
                <label htmlFor="date">Date of Completion</label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="border border-[#1919196f] rounded-xl p-3 my-2 shadow-lg shadow-gray-400"
                  placeholder="Payment for the freelancer"
                  value={values.date}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </div>
            <div className="w-full px-4 flex flex-col my-9">
              <label htmlFor="upload">Images for the Project</label>
              <input
                value={values.upload}
                onChange={handleChange}
                onBlur={handleBlur}
                multiple={true}
                webkitdirectory={"true"}
                mozdirectory={"true"}
                directory={"true"}
                className="hidden"
                type="file"
                name="upload"
                id="upload"
              />
              <div
                onClick={(e) => e.target.previousElementSibling.click()}
                className="border border-dashed border-black text-center w-full py-5 text-3xl mt-3"
              >
                Click to add Images
              </div>
            </div>
            <div className="w-full flex items-center justify-center">
              <Button type="submit">Post the Project</Button>
            </div>
          </form>
        </div>
        <div className="w-1/3">
          <img src={Logo} alt="Logo" className="h-full w-full" />
        </div>
      </div>
    </div>
  );
};

export default PostProject;
