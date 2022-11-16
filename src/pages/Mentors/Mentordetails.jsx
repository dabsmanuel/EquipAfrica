/* eslint-disable eqeqeq */
import {useState, useEffect,} from 'react';
import {Link, useParams} from 'react-router-dom';
import mentors from "../../mentorData";
import "./team.css";
import "./mentordetails.css"

const Mentordetails = () => {
  const { id } = useParams();
  const [mentorData, setMentorData] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log(mentorData);

  const getSingleMentorData = (arr) => {
    const result = arr.filter((mentor) => mentor.id == id);
    setMentorData(result[0]);
    console.log(result);
    setLoading(false);
  };

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      getSingleMentorData(mentors);
    }

    return () => (mounted = false);
  });

  if (loading) return <p>Loading...</p>;
  
  return (
    <div className="containers blog-container">
      {mentorData && (
        <div className="containers blog-post">
          <img src={mentorData.photo} alt="mentor" />
          <h2>{mentorData.name}</h2>
          <h3>{mentorData.country}</h3>
          <p>{mentorData.description}</p>
          <Link to="/mentors" className="btn-sec button">
            Back
          </Link>
        </div>
      )}
    </div>
  );
}

export default Mentordetails;