
import React, { useState } from "react";
import { SendButton } from "../components/Buttons";
import contact_image from "../images/contact_image.png";

const Contact = () => {
  const [person, setPerson] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [people, setPeople] = useState([]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.fullName && person.email && person.subject && person.message) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({
        fullName: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <div className="p-2 m-3">
      <h2 className="d-flex justify-content-center">Contact Us</h2>
      <div className="row g-5">
        <div className="col-md-7 col-sm-12">

          <li>
            Do you have other questions? Don't worry, there aren't any dumb
            questions. Just fill out the form below and we'll get back to you as 
            soon as possible.
          </li>
          <li>
            Got a news tip or inside information about a topic we covered? we
            would love to hear from you. Please fill out the form below or send
            a mail to

            <a href="mailto:info@innkeeper.work">info@innkeeper.work</a>
            or you contact
            <a href="tel:+2348098468885"> +2348098468885</a>
          </li>
          <form className="form">
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Your Fullname"
              aria-label="Your Fullname"
              id="fullName"
              name="fullName"
              value={person.fullName}
              onChange={handleChange}
            />

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Your email"
              aria-label="Your email"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Subject"
              aria-label="Subject"
              id="subject"
              name="subject"
              value={person.subject}
              onChange={handleChange}
            />
            <div>
              <textarea
                name="message"
                aria-label="Subject"
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Message"
                value={person.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn contact-btn bg-bark"
              onClick={handleSubmit}
            >
              <SendButton />

            </button>
          </form>
        </div>

        <div className="col col-md-5 col-sm-12">
          <img src={contact_image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
