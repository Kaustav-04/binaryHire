import React, { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import { modalActions } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import Content from "./Content";
import FullImage from "./FullImage";
export const skills = ["NodeJS", "ReactJs", "Javascript", "TailwindCSS"];

const Post = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.modal.contentmodal);
  const imageopen = useSelector((state) => state.modal.imagemodal);
  const closeModal = (e) => {
    e.stopPropagation();
    dispatch(modalActions.modalClose());
  };
  const [URL, setURL] = useState(null);
  return (
      <div className="flex flex-col p-4 border w-[30%] border-gray-400 rounded-xl shadow-lg shadow-gray-500 m-2">
        <div className="text-4xl">
          <span className="mr-5">Portfolio website</span>
          <span className="bg-[#4F70C7] px-3 py-1 text-white rounded-2xl text-xl">
            New
          </span>
        </div>
        <div className="flex text-gray-500 text-lg mb-5">
          <span className="">Fixed Price</span>
          <span>-</span>
          <span>Posted on 29th Jan</span>
        </div>
        <div className="flex text-2xl text-gray-700 mb-5">
          <div className="flex flex-col mr-5">
            <span>$10000</span>
            <span className="font-semibold">Fixed Price</span>
          </div>
          <div className="flex flex-col">
            <span>1st Feburary</span>
            <span className="font-semibold">Completion Date</span>
          </div>
        </div>
        <div className="text-2xl my-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
          adipisci non, corrupti rerum vero quae consequatur minus iste quia
          nesciunt! Eos minima dicta magnam, maiores animi repellat consectetur
          temporibus impedit necessitatibus provident? Facere, voluptates?
        </div>
        <div className="w-full  flex flex-wrap">
          {skills.map((i) => (
            <div className="m-1 mr-3 bg-[#4F70C7] px-3 py-1 text-white rounded-2xl text-xl">
              {i}
            </div>
          ))}
        </div>
        <div className="flex">
          <button
            onClick={() => dispatch(modalActions.modalOpen())}
            className="bg-[#3F8825] text-white w-fit rounded-xl p-3 text-xl mt-4 mr-5"
          >
            See More
          </button>
          <button className="bg-[#3F8825] text-white w-fit rounded-xl p-3 text-xl mt-4">
            Work on the Project
          </button>
        </div>
        {open && (
          <Modal closeModal={closeModal}>
            <Content imageURL={setURL} />
          </Modal>
        )}
        {imageopen && <FullImage src={URL} />}
      </div>
  );
};

export default Post;
