import { useState } from 'react';
import headerimage from '../../Assets/headerImage-removebg-preview.png';
import HeaderModal from '../headerModal/HeaderModal';
import './Header.css'


const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <section id="Home">
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
            <button className="btn-success" onClick={() => setOpenModal(true)}>
              Apply here
            </button>
            <HeaderModal open={openModal} onClose={() => setOpenModal(false)}/>
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