import mentors from "../../mentorData";
import "./team.css";

const Team = () => {
  return (
    <section className="containers">
      <div class Name="team-container containers">
        <h1>Meet The Mentors</h1>
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
                <h5>{name}</h5>
                <p>{country}</p>
                <p>{title}</p>
                <button className="btn-primary">Read More..</button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
