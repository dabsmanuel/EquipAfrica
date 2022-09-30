import React from "react";
import mentors from "../../mentorData";

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <>
      {mentors.map(({ id, photo, description }) => {
        return (
          <div onClick={onClose} className="overlay" key={id}>
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="modalContainer"
            >
              <img src={photo} alt="" />
              <div className="modalRight">
                <button onClick={onClose} className="closeBtn">
                  X
                </button>
              </div>
              <div className="modalContent">
                <p>
                  <i>{description}</i>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Modal;
