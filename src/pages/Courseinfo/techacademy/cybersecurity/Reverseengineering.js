import React from "react";
import infoimage from "../../../../assets/images/techacademy/cybersecurity/cybersecurityhero.png";
import techacademy from "../../../../data/tech_academy_details/techacademy.json";
import { PaymentOptions } from "../../../../components/CourseEnroll";
import HowToApply from "../../../../components/HowToApply";
import {
  BookIcon,
  AlarmIcon,
  CreditCardIcon,
} from "../../../../components/Icons";
import { Link } from "react-router-dom";
import { CourseinfoHero } from "../../../../components/Hero";
import { ApplyNowButton } from "../../../../components/Buttons/InnkeeperPhaseOneButtons";
import { CourseCards } from "../../../../components/AllCards/InnkeeperPhaseOneCards";

let ReverseInfo = () => {
  return (
    <div>
      <CourseinfoHero coursename="Reverse Engineering" />
      <div className="row justify-content-center g-0">
        <div className="col-lg-7 col-md-6 col-sm-10">
          <AboutReverse />
          <HowToApply />
        </div>
        <div className="col-lg-4 col-md-5 col-sm-10 sectiontwoBg mt-5 h-100">
          <ReverseReq />
          <CourseEnroll />
          {/* <ReverseInstructor /> */}
        </div>
      </div>
      <ReverseRelated />
    </div>
  );
};

let AboutReverse = () => {
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
                  <p>04 Weeks</p>
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
                  <p>50 Hours</p>
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
          This course introduces you to reverse engineering, the concepts and
          tools used world wide by professionals. Exploitation of applications
          and identifying vulnerabilities is achieved via reverse engineering.
          Participants will be able to perform reverse engineering on different
          applications on both mobile and web applications.
        </p>
      </div>
    </div>
  );
};

let ReverseReq = () => {
  return (
    <div className="card-body">
      <h3 className="card-title">Requirement</h3>
      <ul className="list-content">
        <li className="list-item pb-2">Windows OS and Linux OS basics</li>
      </ul>
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
            href="https://paystack.com/pay/innkeeper-cyber-security-reverse-engineering"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>Pay Now</b>
          </a>
        </li>
        <li className="list-item pb-2">
          Click to{" "}
          <a
            href="https://paystack.com/pay/innkeeper-cybersecurity-part-payment"
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

let ReverseRelated = () => {
  return (
    <div className="webDev mx-5 px-5 my-5 pb-5">
      <h3 className="techHead px-5 my-5 pt-5">Related Courses</h3>
      <div className="row">
        {techacademy.cybersecurity.map((singlecloud) => {
          if (singlecloud.id !== 3) {
            return (
              <div
                className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch"
                key={singlecloud.id}
              >
                <CourseCards {...singlecloud}></CourseCards>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
export default ReverseInfo;
