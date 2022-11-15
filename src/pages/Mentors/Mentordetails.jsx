import {useState, useEffect,} from 'react';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import mentors from "../../mentorData";

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
  }, []);

  if (loading) return <p>Loading...</p>;
  
  return (
    <>
      {mentorData && (
        <ul>
          <li>
            <img src={mentorData.photo} alt="mentor" />
          </li>
          <li>{mentorData.name}</li>
          <li>{mentorData.country}</li>
          <li>{mentorData.description}</li>
          <Link to='/mentors' className='btn-sec'>Back</Link>
        </ul>
      )}
    </>
  );
}

export default Mentordetails;