import React from "react";
import homehero4 from "../images/homehero4.png";
import coursepage from "../images/coursepage.png";
import Navbar from "./Navbar";
import { GetStartedButton } from "../components/Buttons";

export let HomepageHero = () => {
  return (
    <div className="px-4 container-fluid homeheroBg pt-3 pb-4">
      <Navbar />
      <div className="row align-items-center justify-content-center mt-4">
        <div className="col-lg-6 col-md-7 col-sm-12">
          <h1 className="herotextblack d-none d-lg-block d-md-none d-sm-none d-xs-none">
            Upskill for this&nbsp;
            <span className="herotextColored">Digital age.</span>
          </h1>
          <h2 className="herotextblack d-xs-block d-sm-block d-md-block d-lg-none">
            Upskill for this&nbsp;
            <span className="herotextColored">Digital age.</span>
          </h2>
          <p className="herotextblack d-flex">
            Mentored Upskilling For Improved Learning Opportunities. Get the
            needed skills for your desired job role.
          </p>
          <div className="d-none d-lg-block d-md-block d-sm-none d-xs-none mt-4">
            <GetStartedButton />
          </div>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-12">
          <img
            src={homehero4}
            className="d-block mx-lg-auto img-fluid"
            alt=""
            loading=""
          />
          <div className="d-xs-block d-sm-block d-md-none d-lg-none mt-4 text-center">
            <GetStartedButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export const CoursepageHero = (props) => {
  const { herotitle, Description } = props;
  return (
    <div className="py-2 homeheroBg">
      <Navbar />
      <div className="row g-0 align-items-center justify-content-center px-4">
        <div className="col-lg-6 col-md-7 col-sm-12 pt-3">
          <h1 className="herotextColored d-none d-lg-block d-md-none d-sm-none d-xs-none">
            {herotitle} <br />
          </h1>
          <h3 className="herotextColored d-xs-block d-sm-block d-md-block d-lg-none">
            {herotitle} <br />
          </h3>
          <p className="herotextblack">{Description}</p>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-12">
          <img
            src={coursepage}
            className="d-block mx-lg-auto img-fluid"
            alt=""
            loading=""
          />
        </div>
      </div>
    </div>
  );
};

export const CourseinfoHero = (props) => {
  const { coursename } = props;
  return (
    <div className="px-4 py-2 homeheroBg">
      <Navbar />
      <div className="row align-items-center my-5 ps-4">
        <div className="col-lg-6 col-sm-12">
          <h1 className="herotextColored d-none d-lg-block d-md-none d-sm-none d-xs-none">
            {coursename}
          </h1>
          <h3 className="herotextColored d-xs-block d-sm-block d-md-block d-lg-none">
            {coursename}
          </h3>
        </div>
      </div>
    </div>
  );
};
