import React, { useState } from "react";
import { SendButton } from "../components/Buttons";
import contact_image1 from "../images/contact_image1.png";
import contact_image2 from "../images/contact_image2.png";
import Navbar from "../components/Navbar";

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
    <>
      <div className="heroBg mx-auto d-none d-md-block mb-5">
        <Navbar />
      </div>

      <div className="col-md-5 col-sm-12 heroBg d-block mx-lg-auto d-xs-block d-md-none col-12 mb-4">
        <Navbar />
        <img
          src={contact_image2}
          alt="Innkeeper.work contact us"
          className="d-block mx-lg-auto d-xs-block d-md-none col-12"
        />
      </div>

      <div className="row mx-4">
        <h2 className="d-flex justify-content-center herotextColored ">
          <strong> Contact Us</strong>
        </h2>
        <div className="col-md-7 col-sm-12 g-2 mb-5">
          <li className="mb-4">
            Do you have other questions? Don't worry, there aren't any dumb
            questions. Just fill out the form below and we'll get back to you as
            soon as possible.
          </li>
          <li className="mb-4">
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

            <a
              href={<SendButton />}
              type="submit"
              className="btn contact-btn bg-bark"
              onClick={handleSubmit}
            >
              <SendButton
                onClick={() => <a href="mailto:sammiebechh@gmail.com">Send</a>}
              />
            </a>
          </form>
        </div>

        <div className="col-md-5 col-sm-12">
          <img
            src={contact_image1}
            alt="Innkeeper.work contact us"
            className="d-block mx-lg-auto img-fluid d-sm-none d-md-block"
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
