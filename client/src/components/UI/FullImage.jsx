import React from "react";
import Modal from "./Modal";
import { modalActions } from "../../store";
import { useDispatch } from "react-redux";
import ImageModal from "./ImageModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const FullImage = (props) => {
  const dispatch = useDispatch();
  const closeModal = (e) => {
    e.stopPropagation();
    dispatch(modalActions.imageClose());
  };
  return (
    <ImageModal closeModal={closeModal}>
      <img className="h-full w-full" src={props.src} alt="Image" />
      <div className="absolute top-2 right-4 text-white text-4xl">
        <FontAwesomeIcon icon={faXmark} onClick={closeModal}/>
      </div>
    </ImageModal>
  );
};

export default FullImage;
