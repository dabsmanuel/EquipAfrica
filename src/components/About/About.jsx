import aboutImage from "../../Assets/home2.png";
import "./About.css";

const About = () => {
  return (
    <section id="About">
      <div className="containers about-container">
        <h1>About Us</h1>
        <div className="about-grid">
          <div className="grid-1">
            <img src={aboutImage} alt="" />
          </div>
          <div className="grid-2">
            <p>
              At equip Africa, we are building a community of Changemakers
              equipped with the needed resources such as access to
              opportunities, mentorship and guidance to transform Africa. with
              Equip Africa, youth gain access to information through daily
              updates, mentorships through booking free weekly mentorship
              sessions with various African Change-leaders across various
              spheres of influence. We also provide bi-monthly Knowledge
              sessions, monthly workshops coaching calls, accountability
              partners and reading resources. Our mission is to improve the
              harnessing power of African youths through community building,
              mentorship and information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
