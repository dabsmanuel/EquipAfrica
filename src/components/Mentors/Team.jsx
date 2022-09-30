import { useState } from "react";

import mentors from "../../mentorData.js";
import Modal from '../modal/Modal';
import "./team.css";

const Team = () => {
  const [openModal, setOpenModal] = useState(false);
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
          {mentors.map((mentor) => {
            return (
              <div className="person" key={mentor.id}>
                <div className="person-image">
                  <img src={mentor.photo} alt="" />
                </div>
                <h5>{mentor.name}</h5>
                <p>{mentor.country}</p>
                <p>{mentor.title}</p>
                <button className="btn-primary" onClick={() => setOpenModal(true)}>
                  Read More..
                </button>
                <Modal open={openModal} onClose={() => setOpenModal(false)} />
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
export default Team;
