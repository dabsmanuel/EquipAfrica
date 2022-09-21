import React, { useState } from "react";
import navLogo from "../../Assets/home1logo.png";
import { GrClose } from "react-icons/gr";
import { FiMenu } from "react-icons/fi";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#Home" className="nav-logo">
          <img src={navLogo} className="img-fluid navbar-brand" alt="logo" />
        </a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#Home" className="nav-links" onClick={handleClick}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#About" className="nav-links" onClick={handleClick}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#Services" className="nav-links" onClick={handleClick}>
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="#team" className="nav-links" onClick={handleClick}>
              Team
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-links" onClick={handleClick}>
              Contact
            </a>
          </li>
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          {click ? <GrClose className="menu" /> : <FiMenu className="menu" />}
        </div>
        {click && (
          <div>
            <ul className="nav-menu-active">
              <li className="nav-item">
                <a href="#Home" className="nav-links" onClick={handleClick}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#About" className="nav-links" onClick={handleClick}>
                  About-us
                </a>
              </li>
              <li className="nav-item">
                <a href="#Services" className="nav-links" onClick={handleClick}>
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a href="#Join" className="nav-links" onClick={handleClick}>
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-links" onClick={handleClick}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// function CollapsibleExample() {
//   return (
//     <Navbar
//       collapseOnSelect
//       expand="sm"
//       bg="dark"
//       variant="dark"
//       sticky="top"
//     >
//       <div className="containers d-flex">
//         <Navbar.Brand href="#home">
//           <img src={navLogo} alt="" />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" data-bs-target='#navbarScroll' />
//         <Navbar.Collapse id='#navbarScroll'>
//           <Nav className="ms-auto">
//             <Nav.Link eventKey={1} href="#Home">Home</Nav.Link>
//             <Nav.Link eventKey={2} href="#About">About</Nav.Link>
//             <Nav.Link eventKey={3} href="#Services">Services</Nav.Link>
//             <Nav.Link eventKey={4} href="#Team">Team</Nav.Link>
//             <Nav.Link eventKey={5} href="#contact">Contact</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
  
//       </div>
//     </Navbar>
//   );
// }

// export default CollapsibleExample;
