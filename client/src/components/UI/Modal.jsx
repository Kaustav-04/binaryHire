import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { modalActions } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

const Modal = (props) => {
  const dispatch = useDispatch();
  const closeModal = (e) => {
    e.stopPropagation();
    dispatch(modalActions.modalClose());
  };
  const open = useSelector((state) => state.modal.loginopen);
  return (
    <div
      className="h-screen w-screen overflow-hidden bg-[#00000060] flex items-center justify-center z-20 absolute top-0 left-0"
      onClick={props.closeModal}
    >
      <motion.div
        initial={{ x: open ? "0vw" : "35vw" }}
        onClick={(e) => e.stopPropagation()}
        animate={{ x: open ? "35vw" : "0vw" }}
        transition={{ duration: 0.7 }}
        className=" w-1/2 h-3/4 overflow-hidden bg-white pl-4 z-40 rounded-md"
        id="mainModal"
      >
        <div className='w-full flex items-center justify-end px-4 text-[2rem] mt-4 mr-2 mb-3 text-[#3c4852]'>
          <FontAwesomeIcon icon={faXmark} onClick={props.closeModal} />
        </div>
        {props.children}
      </motion.div>
    </div>
  );
};

export default Modal;
