import React from "react";
import infoimage from "../images/infoimage.png";
import AccessAlarmsIcon from "@material-ui/icons/AccessAlarms";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import { ApplyNowButton } from "../components/Buttons";

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
      <div className="navbar-expand-lg">
        <div className="mt-5">
          <ul className="navbar-nav ">
            <li className="">
              <div className="d-flex px-3">
                <div className="px-2">
                  <LibraryBooksIcon className="iconCol"></LibraryBooksIcon>
                </div>

                <div>
                  <h3>COURSES</h3>
                  <p>08 Weeks</p>
                </div>
              </div>
            </li>
            <li className="">
              <div className="d-flex px-3">
                <div className="px-2">
                  <AccessAlarmsIcon className="iconCol"></AccessAlarmsIcon>
                </div>

                <div>
                  <h3>DURATION</h3>
                  <p>70 Hours</p>
                </div>
              </div>
            </li>
            <li className="">
              <div className="d-flex px-3">
                <div className="px-2">
                  <CreditCardIcon className="iconCol"></CreditCardIcon>
                </div>
                <div>
                  <h3>FEE</h3>
                  <p>200,000.00</p>
                </div>
              </div>
            </li>
            <li className="px-3">
              <ApplyNowButton />
            </li>
          </ul>
        </div>
      </div>
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
      <ul className="list-content">
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
