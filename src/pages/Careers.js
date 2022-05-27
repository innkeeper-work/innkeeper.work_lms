//External import
import React from "react";

// Components
import {
  LinkedInIcon,
  LocationIcon,
  PayIcon,
  NatureIcon,
} from "../components/Icons";
import { CareerpageHero } from "../components/Hero";
import {
  ViewOpeningsButton,
  UpskillButton,
  HireTalentButton,
  RateCVButton,
  ReviewCVButton,
} from "../components/Buttons";
import pricings from "../data/pricings.json";
import { Pricing } from "../components/Card";

//Images
import cloud from "../assets/images/careers/cloud.png";
import homehero4 from "../assets/images/hero/homehero4.png";
import cvwritingimage2 from "../assets/images/careers/cvwritingimage2.png";
import linkedinimage from "../assets/images/careers/linkedinimage.png";
import mockinterviewimage2 from "../assets/images/careers/mockinterviewimage2.png";

const Career = () => {
  return (
    <div>
      <CareerpageHero />
      <Vacancies />
      <CVWriting />
      <LinkedIn />
      <MockInterview />
    </div>
  );
};

let Vacancies = () => {
  return (
    <div className="container-fluid text-center py-5">
      <div className="card-body">
        <h3 className="card-title">Our Vacancies</h3>
        <p className="card-text herotextColored mx-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum industry lorem read more.
        </p>
        <div className="row justify-content-center mt-5">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="">
              <img
                src={cloud}
                alt=""
                width="100px"
                height="100px"
                className="rounded-circle ms-3 border border-light border-5"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <b>Lorem Ipsum</b>
                </h5>
                <p className="card-text">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="">
              <img
                src={cloud}
                alt=""
                width="100px"
                height="100px"
                className="rounded-circle ms-3 border border-light border-5"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <b>Lorem Ipsum</b>
                </h5>
                <p className="card-text">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="">
              <img
                src={cloud}
                alt=""
                width="100px"
                height="100px"
                className="rounded-circle ms-3 border border-light border-5"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <b>Lorem Ipsum</b>
                </h5>
                <p className="card-text">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <ViewOpeningsButton />
        </div>
      </div>
    </div>
  );
};

export let CVWriting = () => {
  return (
    <div className="px-4 container-fluid homeheroBg py-5">
      <div className="row align-items-center justify-content-center my-5">
        <div className="col-lg-5 col-md-5 col-sm-12">
          <img
            src={cvwritingimage2}
            className="d-block mx-lg-auto img-fluid"
            alt=""
            loading=""
          />
          {/* <div className="d-xs-block d-sm-block d-md-none d-lg-none mt-4 text-center">
            <GetStartedButton />
          </div> */}
        </div>
        <div className="col-lg-6 col-md-7 col-sm-12">
          <h3 className="herotextblack d-none d-lg-block d-md-none d-sm-none d-xs-none">
            CV Writing
            {/* <span className="herotextColored">Digital age.</span> */}
          </h3>
          <h2 className="herotextblack d-xs-block d-sm-block d-md-block d-lg-none">
            CV Writing
            {/* <span className="herotextColored">Digital age.</span> */}
          </h2>
          <p className="herotextblack d-flex">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum industry. Lorem Ipsum is simplly industry.
            Lorem Ipsum industry. Lorem Ipsum is simplly.
          </p>
          <div className="d-flex">
            {" "}
            <div className="d-none d-lg-block d-md-block d-sm-block d-xs-block mt-4">
              <RateCVButton />
            </div>
            <div className="d-none d-lg-block d-md-block d-sm-block d-xs-block mt-4 ms-2">
              <ReviewCVButton />
            </div>
          </div>
          {/* <div className="d-none d-lg-block d-md-block d-sm-none d-xs-none mt-4">
            <GetStartedButton />
          </div> */}
        </div>
      </div>
      <div className="row justify-content-evenly text-center py-5 g-0 px-5">
        {pricings.pricings.map((pricing) => {
          return (
            <div
              className="col-lg-3 col-md-4 col-sm-8
                    "
              key={pricing.id}
            >
              <Pricing {...pricing}></Pricing>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export let LinkedIn = () => {
  return (
    <div className="px-4 container py-5" style={{ backgroundColor: "#ffffff" }}>
      <div className="row align-items-center justify-content-center mt-4">
        <div className="col-lg-6 col-md-7 col-sm-12">
          <h3 className="herotextblack d-none d-lg-block d-md-none d-sm-none d-xs-none">
            LinkedIn Optimization
            {/* <span className="herotextColored">Digital age.</span> */}
          </h3>
          <h2 className="herotextblack d-xs-block d-sm-block d-md-block d-lg-none">
            LinkedIn Optimization
            {/* <span className="herotextColored">Digital age.</span> */}
          </h2>
          <p className="herotextblack d-flex">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum industry. Lorem Ipsum is simplly industry.
            Lorem Ipsum industry. Lorem Ipsum is simplly.
          </p>
          <div className="d-flex">
            {" "}
            <div className="d-none d-lg-block d-md-block d-sm-none d-xs-none mt-4">
              <RateCVButton />
            </div>
            <div className="d-none d-lg-block d-md-block d-sm-none d-xs-none mt-4 ms-2">
              <ReviewCVButton />
            </div>
          </div>
          {/* <div className="d-none d-lg-block d-md-block d-sm-none d-xs-none mt-4">
            <GetStartedButton />
          </div> */}
        </div>
        <div className="col-lg-5 col-md-5 col-sm-12">
          <img
            src={linkedinimage}
            className="d-block mx-lg-auto img-fluid"
            alt=""
            loading=""
          />
          {/* <div className="d-xs-block d-sm-block d-md-none d-lg-none mt-4 text-center">
            <GetStartedButton />
          </div> */}
        </div>
      </div>
    </div>
  );
};
export let MockInterview = () => {
  return (
    <div className="p-4 container bgSoft rounded my-5 w-75">
      <div className="row align-items-center justify-content-around my-2">
        <div className="col-lg-6 col-md-7 col-sm-12">
          <h3 className="btnText d-none d-lg-block d-md-none d-sm-none d-xs-none">
            Attend a Mock Interview
            {/* <span className="herotextColored">Digital age.</span> */}
          </h3>
          <h2 className="btnText d-xs-block d-sm-block d-md-block d-lg-none">
            Attend a Mock Interview
            {/* <span className="herotextColored">Digital age.</span> */}
          </h2>
          <p className="btnText d-flex">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum industry. Lorem Ipsum is simplly industry.
            Lorem Ipsum industry. Lorem Ipsum is simplly.
          </p>

          <div className="d-none d-lg-block d-md-block d-sm-none d-xs-none mt-4">
            <ReviewCVButton />
          </div>

          {/* <div className="d-none d-lg-block d-md-block d-sm-none d-xs-none mt-4">
            <GetStartedButton />
          </div> */}
        </div>
        <div className="col-lg-5 col-md-5 col-sm-12">
          <img
            src={mockinterviewimage2}
            className="d-block mx-lg-auto img-fluid"
            alt=""
            loading=""
          />
          {/* <div className="d-xs-block d-sm-block d-md-none d-lg-none mt-4 text-center">
            <GetStartedButton />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Career;
