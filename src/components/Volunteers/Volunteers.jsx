import volunteers from "../Volunteers/volunteerData";
import '../Mentors/team.css'


const Volunteers = () => {
  return (
    <section>
      <div className="volunteer-container containers">
        <h1>Meet Our Volunteers</h1>

        <div className="photo-container">
          {volunteers.map(({ id, photo, name, Role }) => {
            return (
              <div className="person" key={id}>
                <div className="person-image">
                  <img src={photo} alt="" />
                </div>
                <h5>{name}</h5>
                <p>{Role}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Volunteers