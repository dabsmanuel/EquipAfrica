import {Link} from "react-router-dom"

import "./team.css";
import mentors from "../../mentorData"

const Team = () => {
  return (
    <section id="team" className="team">
      <div className="team-container containers">
        <h1>Meet The Mentors</h1>
        <p>
          The equipAfrica team is an online community comprising of the Vision
          Bearer, Volunteers, Country Reps and Mentors. We believe in
          Dedication, Passion and Consistency as key to achieving our vision.
        </p>
        <h4>Our first cohort of mentors for Equip Africa</h4>
      </div>
      <div
        className="photo-container containers"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {mentors.map(({ id, photo, name, country }) => {
          return (
            <div className="person-mentor" key={id}>
              <div className="person-image">
                <img src={photo} alt="" />
              </div>
              <h5>{name}</h5>
              <h6>{country}</h6>
              <Link to={`/mentor-details/${id}/${name}`} className="team-btn">
                Read More
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Team;
