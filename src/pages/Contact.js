import React from "react";
import { Link } from "react-router-dom";
import contact_image from "../images/contact_image.png";

const Contact = () => {
  const handleSubmit = (e) => {
    console.log("Hello");
  };
  return (
    <div className="p-2 m-3">
      <h2 className="d-flex justify-content-center">Contact Us</h2>
      <div className="row g-5">
        <div className="col-md-7 col-sm-12">
          <p>
            Do you have other questions? Don't worry, there aren't any dumb
            questions. Just fill out the form below and we'll get back to you as
            soon as possible.
          </p>
          <p>
            Got a news tip or inside information about a topic we covered? we
            would love to hear from you. Please fill out the form below or send
            a mail to
            <a href="info@innkeeper.work"> info@innkeeper.work</a> or you
            contact
            <a href="08098468885"> 08098468885</a>
          </p>

          <form className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Your name"
              aria-label="Your name"
              id="name"
              name="name"
            />

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Your mail"
              aria-label="Your mail"
              id="mail"
              name="mail"
            />

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Subject"
              aria-label="Subject"
              id="subject"
              name="subject"
            />
            <div>
              <textarea
                name="subject"
                aria-label="Subject"
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Message"
              ></textarea>
            </div>

            <button type="submit" className="btn contact-btn bg-bark">
              Submit
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
