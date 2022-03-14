import React from "react";
import infoimage from "../images/infoimage.png";

export let Sectionone = () => {
  return (
    <div>
      <Aboutcourse />
      <ApplyHere />
    </div>
  );
};

let Aboutcourse = () => {
  return (
    <div className="">
      <img src={infoimage} className="card-img-top" alt="..." />
      <div className="card-body">
        <h3 className="card-title">About Course</h3>
        <p className="card-text">
          This is a hybrid learning that blends self-paced and instructor-led
          learning for 8 weeks. The training takes place for a period of 6 weeks
          and a 2 weeks practical with live projects. Areas to be covered
          include HTML, JavaScript, React, Bootstrap, CSS, Figma, and Redux.
          Applicants are encouraged to pay in instalments if full payment cannot
          be made. Instructors are seasoned industry-based and can be reached
          for post-class activities.-
        </p>
      </div>
    </div>
  );
};

let ApplyHere = () => {
  return (
    <div className="card-body">
      <h3 className="card-title">How to Apply</h3>
      <ul className="">
        <li className="list-item pb-2">
          Read about the course content and indicate interest.
        </li>
        <li className="list-item pb-2">
          Select a payment/enrolment method HERE.
        </li>
        <li className="list-item pb-2">
          Except you pay the stipulated amount, every other course enrolment
          method will require the admin to permit you to class.
        </li>
        <li className="list-item pb-2">
          Alternatively, you can sign up to begin class HERE.
        </li>
        <li className="list-item pb-2">
          Go to your e-mail and complete registration via the link that will be
          sent to you.
        </li>
        <li className="list-item pb-2">
          Then from your dashboard, click all courses to display the list of
          courses available according to academy, then request for your desired
          course.
        </li>
      </ul>
    </div>
  );
};
