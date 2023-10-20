import React from "react";
import infoimage from "../../../../assets/images/techacademy/programming/frontend.png";
import techacademy from "../../../../data/tech_academy_details/techacademy.json";
import HowToApply from "../../../../components/HowToApply";
// import CourseEnroll from "../../../../components/CourseEnroll";
import {
  BookIcon,
  AlarmIcon,
  CreditCardIcon,
} from "../../../../components/Icons";
import { Link } from "react-router-dom";
import { CourseinfoHero } from "../../../../components/Hero";
import { ApplyNowButton } from "../../../../components/Buttons/InnkeeperPhaseOneButtons";
import { CourseCards } from "../../../../components/AllCards/InnkeeperPhaseOneCards";
import { PaymentOptions } from "../../../../components/CourseEnroll";

let FrontendInfo = () => {
  return (
    <div>
      <CourseinfoHero coursename="Frontend Development" />
      <div className="row justify-content-center g-0">
        <div className="col-lg-7 col-md-6 col-sm-10">
          <AboutFrontend />
          <HowToApply />
        </div>
        <div className="col-lg-4 col-md-5 col-sm-10 sectiontwoBg mt-5 h-100">
          <FrontendReq />
          <CourseEnroll />
        </div>
      </div>
      <FrontendRelated />
    </div>
  );
};

let AboutFrontend = () => {
  return (
    <div className="">
      <div className="navbar-expand-lg">
        <div className="mt-5">
          <ul className="navbar-nav ">
            <li className="">
              <div className="d-flex px-3">
                <div className="px-2">
                  <BookIcon />
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
                  <AlarmIcon />
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
                  <CreditCardIcon />
                </div>
                <div>
                  <h3>FEE</h3>
                  <p>&#8358;250,000.00</p>
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
          for post-class activities.
        </p>
      </div>
    </div>
  );
};

let CourseEnroll = () => {
  return (
    <div className="card-body">
      <h3 className="card-title">Available Enrolment Options</h3>
      <ul className="list-content">
        <li className="list-item pb-2">
          Click to{" "}
          <a
            className="text-decoration-none"
            href="https://paystack.com/pay/innkeeper-frontend-development"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>Pay Now</b>
          </a>
        </li>
        <li className="list-item pb-2">
          Click to{" "}
          <a
            href="https://paystack.com/pay/innkeeper-frontend-development-part-payment"
            className="text-decoration-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>Pay Installmentally</b>
          </a>
        </li>
      </ul>
      <PaymentOptions />
    </div>
  );
};

let FrontendReq = () => {
  return (
    <div className="card-body">
      <h3 className="card-title">Requirements</h3>
      <ul className="list-content">
        <li className="list-item pb-2">Good and functioning Laptop.</li>
        <li className="list-item pb-2">Reliable Internet connection.</li>
        <li className="list-item pb-2">Ability to operate a computer.</li>
        <li className="list-item pb-2">Google/Yahoo account.</li>
        <li className="list-item pb-2">Domain name and hosting server</li>
        <li className="list-item pb-2">
          Code editor software (e.g. notepad++, visual studio code, sublime text
          etc)
        </li>
        <li className="list-item pb-2">Flash drive or external hard drive.</li>
        <li className="list-item pb-2">
          Basic knowledge of computer's software applications is useful.
        </li>
      </ul>
    </div>
  );
};

let FrontendRelated = () => {
  return (
    <div className="webDev mx-5 px-5 my-5 pb-5">
      <h3 className="techHead px-5 my-5 pt-5">Related Courses</h3>
      <div className="row">
        {techacademy.webdev.map((singleweb) => {
          if (singleweb.id !== 1) {
            return (
              <div
                className="col-lg-4 col-md-6 col-sm-6 col-xs-12 d-flex align-items-stretch py-4"
                key={singleweb.id}
              >
                <CourseCards {...singleweb}></CourseCards>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default FrontendInfo;
