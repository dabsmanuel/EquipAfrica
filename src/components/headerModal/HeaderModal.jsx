import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import './headerModal.css';

const HeaderModal = ({ open, onClose }) => {
  const form = useRef();
  if (!open) return null;

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_0s7kcjm",
      "template_htpib84",
      form.current,
      "jymc7E4wWndMBhd6b"
    );

    e.target.reset();
  };
  return (
    <section>
      <div className="modal-wrapper">
        <div className="modal">
          <button className="close-btn fixed-btn" onClick={onClose}>
            X
          </button>

          <div className="modal-body">
            <div className="warning">
                <h2>Oops!!! There are no calls for Equippers right now!!</h2>
                <p>But, You can fill the form to join our waitlist. You'll be contacted immediately we have new openings for Equippers </p>
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                name="First name"
                placeholder="Your First Name"
                required
              />
              <input
                type="text"
                name="Last name"
                placeholder="Your Last Name"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <input
                type="phone number"
                name="phone number"
                placeholder="Your Phone Number"
                required
              />
              <textarea
                name="Message"
                rows="7"
                placeholder="Tell us About Yourself"
                required
              ></textarea>
              <button type="submit" className="btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderModal;
