import React from 'react';
import contact_image from '../images/contact_image.png';

const Contact = () => {
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [messgae, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fullName, email, subject, messgae);

const Contact = () => {

  const handleSubmit = (e) => {
    console.log("Hello");
  };

  return (
    <div className="p-2 m-3">
      <h2 className="d-flex justify-content-center">Contact Us</h2>
      <div className="row g-5">
        <div className="col-md-7 col-sm-12">

          <input
            type="text"
            className="form-control"
            placeholder="First name"
            aria-label="First name"
          />
        </div>
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

          <form className="form">
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Your Fullname"
              aria-label="Your Fullname"
              id="fullname"
              name="fullname"
              value={fullName}
              onChange={(e) => setFullname(e.target.value)}

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


              placeholder="Your email"
              aria-label="Your email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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


              value={subject}
              onChange={(e) => setSubject(e.target.value)}

            />
            <div>
              <textarea
                name="subject"
                aria-label="Subject"
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Message"

                value={messgae}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn contact-btn bg-bark"
              onClick={handleSubmit}
            >

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
