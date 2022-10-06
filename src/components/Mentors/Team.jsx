import { useState } from "react";
import Modal from "../modal/Modal";
import "./team.css";

const Team = ({ photo, name, description, country, title }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <section id="team-container">
      <div className="photo-container">
        <div className="person">
          <div className="person-image">
            <img src={photo} alt="" />
          </div>
          <h5>{name}</h5>
          <p>{country}</p>
          <p>{title}</p>
          <button className="btn-primary" onClick={() => setShowModal(true)}>
            Read More
          </button>
          {showModal && (
            <Modal
              setShowModal={setShowModal}
              photo={photo}
              name={name}
              description={description}
            />
          )}
        </div>
      </div>
    </section>
  );
};
export default Team;
