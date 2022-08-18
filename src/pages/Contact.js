import React, { useState } from "react";
// import { SendButton } from "../components/Buttons";
// import contact_image1 from "../assets/images/hero/contact_image1.png";
// import contact_image2 from "../assets/images/hero/contact_image2.png";
import Navbar from "../components/AllNavbars/GuestNavbar";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <>
      <div className="homeheroBg mx-auto d-none d-md-block mb-5">
        <Navbar />
      </div>

      <div className="col-md-5 col-sm-12 homeheroBg d-block mx-lg-auto d-xs-block d-md-none col-12 mb-4">
        <Navbar />
      </div>

      <div className="row justify-content-center g-0">
        <h2 className="d-flex justify-content-center herotextColored pt-3 pb-4">
          <strong> Contact Us</strong>
        </h2>
        <div className="col-lg-6 col-md-8 col-sm-8 g-2 mb-5 px-3 py-5 inputContainerBg">
          <li className="mb-4">
            Do you have other questions? Don't worry, there aren't any dumb
            questions. Just fill out the form below and we'll get back to you as
            soon as possible.
          </li>
          <li className="mb-4">
            Got a news tip or inside information about a topic we covered? we
            would love to hear from you. Please fill out the form below or send
            a mail to&nbsp;
            <a href="mailto:info@innkeeper.work">info@innkeeper.work</a>&nbsp;
            or you contact
            <a href="tel:+2348098468885"> +2348098468885</a>
          </li>

          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Contact;
