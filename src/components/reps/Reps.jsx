import './reps.css';
import Reps from './Repsdat';

const Rep = () => {
  return (
    <section>
      <div className="reps-container containers">
        <div className="rep-about">
          <h1>Meet Our Country Reps</h1>
          <p>
            Country Reps volunteers their time to promote youth involvement in
            their countries among the Equip Africa community. Country Reps also
            oversee affairs of members within their nationalities. Each Country
            Rep will spend 4 hours each month contributing to community building
            while representing their countries
          </p>
        </div>

        <div className="country-reps">
          {Reps.map((rep) => {
            return (
              <div
                className="country"
                data-aos="fade-up"
                data-aos-duration="1000"
                key={rep.id}
              >
                <img src={rep.pics} alt="" />
                <div className="bio-container">
                  <h2>{rep.repname}</h2>
                  <h3>Country: {rep.country}</h3>
                  <p>{rep.bio}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Rep