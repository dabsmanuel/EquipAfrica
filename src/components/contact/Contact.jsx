import React from "react";
import contact from "../../Assets/contact.png";
import contData from "../contact/ContactData";
import "./contact.css";

const Contact = () => {
  return (
    <section id='contact'>
      <div className="contact-container containers">
        <h1>Contact Us</h1>
        <div className="contact-body">
          <div className="contact-image">
            <img src={contact} alt="" />
          </div>
          <div className="contact-text">
            {contData.map(({id, pic, title, heading, paragraph}) => {
              return (
                <div className="item" key={id}>
                  <i>{pic}</i>
                  <h2>{title}</h2>
                  <h4>{heading}</h4>
                  <p>{paragraph}</p>
                </div>
              );
            })}
          </div>
        </div> 
      </div>
    </section>
  );
};

export default Contact;
