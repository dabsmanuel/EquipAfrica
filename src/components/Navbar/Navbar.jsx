import { Link } from "react-router-dom";
import { useState } from "react";
import navLogo from "../../Assets/home.png";
import { GrClose } from "react-icons/gr";
import { FiMenu } from "react-icons/fi";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src={navLogo} className="img-fluid navbar-brand" alt="logo" />
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={handleClick}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/mentors" className="nav-links" onClick={handleClick}>
              Mentors
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/country-reps"
              href="#Services"
              className="nav-links"
              onClick={handleClick}
            >
              Reps
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/team" className="nav-links" onClick={handleClick}>
              Team
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={handleClick}>
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-links" onClick={handleClick}>
              Blog
            </Link>
          </li>
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          {click ? <GrClose className="menu" /> : <FiMenu className="menu" />}
        </div>
        {click && (
          <div>
            <ul className="nav-menu-active">
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={handleClick}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/mentors" className="nav-links" onClick={handleClick}>
                  Mentors
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/country-reps"
                  href="#Services"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Reps
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/team" className="nav-links" onClick={handleClick}>
                  Team
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-links" onClick={handleClick}>
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-links" onClick={handleClick}>
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
