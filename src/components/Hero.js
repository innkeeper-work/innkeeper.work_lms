import React from "react";
import heroimage from "../images/heroimage.png";
import Navbar from "./Navbar";
import { GetStartedButton } from "../components/Buttons";

export let HomepageHero = () => {
  return (
    <div className="px-4 py-2 heroBg container-fluid">
      <Navbar />
      <div className="row flex-sm-row-reverse align-items-center">
        <div className="col-lg-5 col-md-6">
          <img
            src={heroimage}
            className="d-block mx-lg-auto img-fluid"
            alt=""
            loading=""
          />
        </div>
        <div className="col-lg-7 ps-lg-5 ps-md-5 col-md-6 py-5">
          <h1 className="herotextWhite">
            Upskill for this&nbsp;
            <span className="herotextColored">Digital age.</span>
          </h1>
          <p className="herotextWhite">
            Mentored Upskilling For Improved Learning Opportunities. Get the
            needed skills for your desired job role.
          </p>
          <div className="my-4">
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
    // <div className="px-4 py-2 heroBg">
    <div className="py-2 heroBg">
      <Navbar />
      {/* <div className="row align-items-center g-0 p-md-4 m-5"> */}
      <div className="row g-0 p-5">
        <div className="col-lg-6 col-sm-12">
          <h1 className="herotextColored">
            {herotitle} <br />
          </h1>
          <p className="herotextWhite">{Description}</p>
          <GetStartedButton />
        </div>
      </div>
    </div>
  );
};

export const CourseinfoHero = (props) => {
  const { coursename } = props;
  return (
    <div className="px-4 py-2 heroBg">
      <Navbar />
      <div className="row align-items-center g-5 p-md-4 my-5">
        <div className="col-lg-6 col-sm-12">
          <h1 className="herotextColored mb-5">{coursename}</h1>
        </div>
      </div>
    </div>
  );
};
