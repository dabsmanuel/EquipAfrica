import { useState } from "react";
import Modal from '../modal/Modal';
import "./team.css";

const Team = ({photo, name, description, country, title}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <section className="containers" id="team">
      <div class Name="team-container containers">
        <h1>Meet The Mentors</h1>
        <p>
          The equipAfrica team is an online community comprising of the Vision
          Bearer, Volunteers, Country Reps and Mentors. We believe in
          Dedication, Passion and Consistency as key to achieving our vision.
        </p>
        <h4>Our first cohort of mentors for Equip Africa</h4>
        <div className="photo-container">
          <div className="person">
            <div className="person-image">
              <img src={photo} alt="" />
            </div>
            <h5>{name}</h5>
            <p>{country}</p>
            <p>{title}</p>
            <button className="btn-primary" onClick={() => setShowModal(true)}>
              Read More..
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
      </div>
    </section>
  );
}
export default Team;
