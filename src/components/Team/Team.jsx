import React, { useState } from "react";
import mentors from "./mentorData";
import volunteers from "./volunteerData";
import mentorModal from './MentorModal'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./team.css";

const Team = () => {

const [show, setShow] = useState(false);

  return (
    <section className='containers'>
      <div class Name="team-container containers">
        <h1>Meet The Team</h1>
        <p>
          The equipAfrica team is an online community comprising of the Vision
          Bearer, Volunteers, Country Reps and Mentors. We believe in
          Dedication, Passion and Consistency as key to achieving our vision.
        </p>
        <h4>Our first cohort of mentors for Equip Africa</h4>
        <div className="photo-container">
          {mentors.map(({ id, photo, name, country, title }) => {
            return (
              <div className="person" key={id}>
                <div className="person-image">
                  <img src={photo} alt="" />
                </div>
                <h3>{name}</h3>
                <p>{country}</p>
                <p>{title}</p>
                <Button variant="primary" onClick={() => setShow(true)}>
                  Read More..
                </Button>
              </div>
            );
          })}
        </div>

        {
          mentorModal.map(({id, name, description}) => {
            return (
              <div className="modal-container">
                <Modal
                  show={show}
                  onHide={() => setShow(false)}
                  dialogClassName="modal-90w"
                  aria-labelledby="example-custom-modal-styling-title"
                  key={id}
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                      <h2>{name}</h2>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p>
                      <i>{description}</i>
                    </p>
                  </Modal.Body>
                </Modal>
              </div>
            );
          })
        }

        

        <h2>Our Volunteers</h2>
        <div className="photo-container">
          {volunteers.map(({ id, photo, name }) => {
            return (
              <div className="person" key={id}>
                <div className="person-image">
                  <img src={photo} alt="" />
                </div>
                <h3>{name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
