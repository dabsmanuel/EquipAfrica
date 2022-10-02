import "./Modal.css";

const Modal = ({ setShowModal, photo, name, description }) => {
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <button className="close-btn" onClick={() => setShowModal(false)}>
          x
        </button>

          
            <div className="modal-body">
              <img src={photo} alt="" />
              <h3>{name} </h3>
              <p>
                <i>{description}</i>
              </p>
            </div>
      </div>
    </div>
  );
};
export default Modal;
