import footerlogo from "../../Assets/footerlogo.png";
import { FiFacebook } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import "./footer.css";

const Footer = () => {
  return (
    <div className="home6">
      <div className="container">
        <div className="footer">
          <div className="footerimg ">
            <img src={footerlogo} className="img-fluid" alt="footer-img" />
          </div>
          <div className="footerlist">
            <ul>
              <li>
                <a href="#Home" className="text-uppercase">
                  Home
                </a>
              </li>
              <li>
                <a href="#About" className="text-uppercase">
                  About-us
                </a>
              </li>
              <li>
                <a href="#Services" className="text-uppercase">
                  Services
                </a>
              </li>
              <li className="fs-5">
                <a href="/" className="text-uppercase">
                  FAQs
                </a>
              </li>
              <li className="fs-5">
                <a href="/" className="text-uppercase">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="end">
          <div className="socal">
            <a
              href="https://facebook.com/groups/347902206767013/?ref=share"
              target="_blanc"
            >
              <FiFacebook />
            </a>
            <a href="https://linkedin.com/groups/14097541" target="_blanc">
              <FaLinkedin />
            </a>

            <a
              href="https://instagram.com/we_equipafrica?igshid=YmMyMTA2M2Y"
              target="_blanc"
            >
              <GrInstagram />
            </a>
          </div>
          <p className="copy">
            Copyright @ {new Date().getFullYear()}. All rights Reserved.
            equipAfrica.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
