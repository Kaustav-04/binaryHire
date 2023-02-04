import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { modalActions } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

const ImageModal = (props) => {
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
        className=" h-5/6 overflow-hidden bg-transparent pl-4 z-40 rounded-md"
        id="mainModal"
      >
        {props.children}
      </motion.div>
    </div>
  );
};

export default ImageModal;
