import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import mentors from "../../mentorData"

const Mentordetails = () => {
  const { id } = useParams()
  
  return (
    <div className="containers ">
      {mentors.map(({ photo, name, country, description }) => {
        return (
          <div className="person-details" key={id}>
            <div className="person-image">
              <img src={photo} alt="" />
            </div>
            <h3>{name}</h3>
            <p>{country}</p>
            <p>{description}</p>
            <Link to="/mentors" className="btn-sec">
              Back
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Mentordetails