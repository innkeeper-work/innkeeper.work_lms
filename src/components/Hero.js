import React from "react";
// import barter from "../images/barter.jpg";
import innkeeperlogo from "../images/innkeeperlogo.png";
import heroimage from "../images/heroimage.png";
import Navbar from "./Navbar";

export let HomepageHero = () => {
  return (
    <div className="col-xxl-8 px-4 py-2 heroBg">
      <Navbar />
      <div className="row flex-lg-row-reverse align-items-center g-5">
        <div className="col-lg-6 col-sm-12">
          <img
            src={heroimage}
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6 col-sm-12">
          <h3 className="herotextWhite">
            Mentored Upskilling For Improved <br />
            <span className="herotextColored">Learning Opportunities</span>
          </h3>
          <button type="button" class="btn btn-primary btn-sm mt-3 ctaColor">
            GET STARTED
          </button>
          {/* <button type="button" class="btn w-25 mt-3 btnText btnColor">
            SIGNUP NOW
          </button> */}
        </div>
      </div>
    </div>
  );
};

export const CoursepageHero = () => {
  return <div></div>;
};
