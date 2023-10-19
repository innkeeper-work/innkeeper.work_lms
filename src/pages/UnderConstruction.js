//External import
import React from "react";
import { Link } from "react-router-dom";
// Components
import {
  ApplyforjobButton,
  UpskillButton,
  HireTalentButton,
} from "../components/Buttons/InnkeeperPhaseOneButtons";
import { FacebookIcon } from "../components/Icons";
import { WhatsAppIcon } from "../components/Icons";
import { InstagramIcon } from "../components/Icons";
import { LinkedInIcon } from "../components/Icons";
import { Home } from "../components/Buttons/InnkeeperPhaseOneButtons";
import { ContactUs } from "../components/Buttons/InnkeeperPhaseOneButtons";
import Navbar from "../components/AllNavbars/GuestNavbar";

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
    <div className="px-4 container-fluid py-4">
      <Navbar />
      <div className="row align-items-center justify-content-center mt-5 mb-2 g-0">
        <div className="col-lg-6 col-md-7 col-sm-12 text-center">
          <h2 className=" d-none d-xl-block d-lg-block d-md-none d-sm-none d-xs-none">
            We are building something great with you in mind.&nbsp;
            {/* <span className="herotextColored">Digital age.</span> */}
          </h2>
          <h3 className=" d-xs-block d-sm-block d-md-block d-lg-none d-xl-none">
            We are building something great with you in mind.&nbsp;
            {/* <span className="herotextColored">Digital age.</span> */}
          </h3>
          {/* <p className="herotextblack ">
            Visit our social media platorms for more details
          </p> */}
          <div className="">
            {" "}
            <Link to="/innkeeperTraining">
              {" "}
              <div
                className="herotextColored d-flex justify-content-center pt-4"
                style={{ fontSize: "1.1rem" }}
              >
                <strong>View Our Available Courses</strong>
                {/* <UpskillButton /> */}
              </div>
            </Link>
            {/* <div className=""> */}
            {/* <div className="pt-3">
              {" "}
              <a
                href="mailto:info@innkeeper.work"
                className="mx-2 text-decoration-none herotextblack"
              >
                info@innkeeper.work
              </a>
              <a
                href="tel:+2348098468885"
                className="mx-2 text-decoration-none herotextblack"
              >
                +234 (0) 809-846-8885
              </a>
            </div> */}
            {/* </div> */}
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
      <div className="row d-flex text-center">
        {" "}
        {/* <p className="herotextblack ">
          Visit our social media platorms for more details
        </p> */}
        <a
          href="mailto:info@innkeeper.work"
          className="mx-2 mt-5 text-decoration-none herotextblack"
        >
          info@innkeeper.work
        </a>
        <a
          href="tel:+2348098468885"
          className="mx-2 mt-2 text-decoration-none herotextblack"
        >
          +234 (0) 809-846-8885
        </a>
      </div>
    </div>
  );
};

export default UnderConstruction;
