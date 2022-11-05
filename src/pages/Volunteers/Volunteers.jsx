import volunteers from "../Volunteers/volunteerData";
import './volunteer.css'


const Volunteers = () => {
  return (
    <section>
      <div className="volunteer-container containers">
        <h1>Meet Our Strategic Team</h1>

        <div className="volunteers" >
          {volunteers.map(({ id, photo, name, Role }) => {
            return (
              <div className="vol" data-aos="fade-up" data-aos-duration="1000" key={id}>
                <div className="volunteer-group" >
                  <div className="volunteer-image">
                    <img src={photo} alt="" />
                  </div>
                  <h5>{name}</h5>
                  <h6>{Role}</h6>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Volunteers