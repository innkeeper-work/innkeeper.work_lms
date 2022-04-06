import React, { useState } from "react";
// import { SendButton } from "../components/Buttons";
import contact_image1 from "../images/contact_image1.png";
import contact_image2 from "../images/contact_image2.png";
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  // const [details, setDetails] = useState({
  // 	fullName: "",
  // 	email: "",
  // 	message: "",
  // });

  // const handleChange = (e) => {
  // 	const name = e.target.name;
  // 	const value = e.target.value;
  // 	setDetails({ ...details, [name]: value });
  // };

  // const handleSubmit = (e) => {
  // 	e.preventDefault();
  // 	if (details.fullName && details.email && details.message) {
  // 		setDetails("");
  // 	}
  // };

  return (
    <>
      <div className="homeheroBg mx-auto d-none d-md-block mb-5">
        <Navbar />
      </div>

      <div className="col-md-5 col-sm-12 homeheroBg d-block mx-lg-auto d-xs-block d-md-none col-12 mb-4">
        <Navbar />
        <img
          src={contact_image2}
          alt="Innkeeper.work contact us"
          className="d-block mx-lg-auto d-xs-block d-md-none col-12"
        />
      </div>

      <div className="row justify-content-center g-0">
        <h2 className="d-flex justify-content-center herotextColored pt-3 pb-4">
          <strong> Contact Us</strong>
        </h2>
        <div className="col-md-5 col-sm-10 g-2 mb-5 px-3 py-5 inputContainerBg">
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

          <ContactForm />
        </div>

        <div className="col-md-5 col-sm-12">
          <img
            src={contact_image1}
            alt="Innkeeper.work contact us"
            className="d-block mx-lg-auto img-fluid d-none d-md-block"
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
