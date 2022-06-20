//External import
import React from "react";

// Components
import {
  ApplyforjobButton,
  UpskillButton,
  HireTalentButton,
} from "../components/Buttons";
import { FacebookIcon } from "../components/Icons";
import { WhatsAppIcon } from "../components/Icons";
import { InstagramIcon } from "../components/Icons";
import { LinkedInIcon } from "../components/Icons";
import { Home } from "../components/Buttons";
import { ContactUs } from "../components/Buttons";
import Navbar from "../components/Navbar";

// Images
import underconstruction from "../assets/images/hero/underconstruction.png";

const UnderConstruction = () => {
  return (
    <>
      {/* <Navbar /> */}
      <UnderConstructionText />
    </>
  );
};

const UnderConstructionText = () => {
  return (
    <div className="px-4 container-fluid homeheroBg py-4">
      <Navbar />
      <div className="row align-items-center justify-content-center mt-5 mb-2 g-0">
        <div className="col-lg-6 col-md-7 col-sm-12 text-center">
          <h2 className="herotextColored d-none d-xl-block d-lg-block d-md-none d-sm-none d-xs-none">
            This page is under construction.&nbsp;
            {/* <span className="herotextColored">Digital age.</span> */}
          </h2>
          <h3 className="herotextColored d-xs-block d-sm-block d-md-block d-lg-none d-xl-none">
            This page is under construction.&nbsp;
            {/* <span className="herotextColored">Digital age.</span> */}
          </h3>
          <p className="herotextblack d-flex">
            We will be back shortly. Go back to home page or click on Upskill to
            learn a new skill.
          </p>
          <div className="">
            {" "}
            <div className="">
              <UpskillButton />
            </div>
            {/* <div className="d-none d-lg-block d-md-block d-sm-none d-xs-none mt-4 ms-2">
              <HireTalentButton />
            </div> */}
          </div>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-10">
          <img
            src={underconstruction}
            className="mx-lg-auto img-fluid"
            alt=""
            loading=""
          />
          {/* <div className="d-xs-block d-sm-block d-md-none d-lg-none mt-4 text-center">
            <UpskillButton />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
