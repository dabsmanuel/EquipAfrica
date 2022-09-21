import React from 'react'
import headerimage from '../../Assets/headerImage-removebg-preview.png'
import './Header.css'


const Header = () => {
  return (
    <section id='Home'>
      <div className="header-container">
        <div className="header containers">
          <div className="header-one">
            <h1>Raising African Changemakers</h1>
            <h3>
              <span className="redd">Business. </span>
              <span className="green"> Opportunities. </span>
              <span className="brown">Mentorship</span>
            </h3>
            <p>
              Be a part of Africa’s fastest growing community of experts, meet
              experts, build connections, grab opportunities and become a better
              person
            </p>
            <button className="btn-success">Apply here</button>
          </div>

          <div className="header-two">
            <div className="header-two-img">
              <img src={headerimage} alt="africa" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header