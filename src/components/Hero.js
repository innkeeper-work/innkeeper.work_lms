// External import
import React from "react";

// Components
import Navbar from "./Navbar";
import {
  GetStartedBond,
  GetStartedButton,
  ApplyforjobButton,
  UpskillButton,
  HireTalentButton,
} from "../components/Buttons";

// Images
import homehero4 from "../assets/images/hero/homehero4.png";
import trainingbond from "../assets/images/scholarships_payments/trainingbond.png";
import coursepage from "../assets/images/hero/coursepage.png";
import careerheroimage2 from "../assets/images/hero/careerheroimage2.png";
import careerheroimage from "../assets/images/hero/careerheroimage.png";

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
            Mentored Upskilling For Improved Earning Opportunities. Get the
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
export let TrainingBondHero = () => {
  return (
    <div className="px-4 container-fluid homeheroBg pt-3 pb-4">
      <Navbar />
      <div className="row align-items-center justify-content-center mt-4">
        <div className="col-lg-6 col-md-7 col-sm-12">
          <h1 className="herotextColored d-none d-lg-block d-md-none d-sm-none d-xs-none">
            Begin Learning Via Training Bond
          </h1>
          <h2 className="herotextColored d-xs-block d-sm-block d-md-block d-lg-none">
            Begin Learning Via Training Bond
          </h2>
          <p className="herotextblack d-flex">
            Get certified for a high demand skill in tech and business support
            today.
          </p>
          <div className="d-none d-lg-block d-md-block d-sm-none d-xs-none mt-4">
            <GetStartedBond />
          </div>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-12">
          <img
            src={trainingbond}
            className="d-block mx-lg-auto img-fluid"
            alt="trainingbond"
            loading=""
          />
          <div className="d-xs-block d-sm-block d-md-none d-lg-none mt-4 text-center">
            <GetStartedBond />
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
          <h2 className="herotextColored d-none d-lg-block d-md-none d-sm-none d-xs-none">
            {herotitle} <br />
          </h2>
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
    <div className="px-4 py-4 homeheroBg">
      <Navbar />
      <div className="row align-items-center my-5 ps-4 py-4">
        <div className="col-lg-12 col-sm-12">
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

export let CareerpageHero = () => {
  return (
    <div className="px-4 container-fluid homeheroBg py-4">
      <Navbar />
      <div className="row align-items-center justify-content-center mt-4">
        <div className="col-lg-6 col-md-7 col-sm-12">
          <h1 className="herotextblack d-none d-xl-block d-lg-block d-md-none d-sm-none d-xs-none">
            Lorem Ipsum is simply dummy.&nbsp;
            {/* <span className="herotextColored">Digital age.</span> */}
          </h1>
          <h2 className="herotextblack d-xs-block d-sm-block d-md-block d-lg-none d-xl-none">
            Lorem Ipsum is simply dummy.&nbsp;
            {/* <span className="herotextColored">Digital age.</span> */}
          </h2>
          <p className="herotextblack d-flex">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum industry. Lorem Ipsum is simplly.
          </p>
          <div className="d-flex">
            {" "}
            <div className="d-none d-lg-block d-md-block d-sm-none d-xs-none mt-4">
              <ApplyforjobButton />
            </div>
            <div className="d-none d-lg-block d-md-block d-sm-none d-xs-none mt-4 ms-2">
              <HireTalentButton />
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-10">
          <img
            src={careerheroimage}
            className="mx-lg-auto img-fluid"
            alt=""
            loading=""
          />
          <div className="d-xs-block d-sm-block d-md-none d-lg-none mt-4 text-center">
            <ApplyforjobButton /> <HireTalentButton />
          </div>
        </div>
      </div>
    </div>
  );
};
export let VacancypageHero = () => {
  return (
    <div className="px-3 container-fluid vacancyheroBg py-4">
      <Navbar />
      <div className="row align-items-center justify-content-center mt-4 py-5">
        <div className="col-lg-6 col-md-7 col-sm-12">
          <h2 className="herotextblack d-none d-lg-block d-md-none d-sm-none d-xs-none text-center">
            Find your Dream job here.&nbsp;
          </h2>
          <h3 className="herotextblack d-xs-block d-sm-block d-md-block d-lg-none text-center">
            Find your Dream job here.&nbsp;
          </h3>
          <p className="herotextblack d-flex text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum industry. Lorem Ipsum is simplly industry
            lorem.
          </p>
          <div className="d-xs-block d-sm-block d-md-none d-lg-none mt-4 text-center">
            <UpskillButton />
          </div>
        </div>
      </div>
    </div>
  );
};
export const PrivacyPolicyHero = (props) => {
  // const { coursename } = props;
  return (
    <div className="px-4 py-4 homeheroBg">
      <Navbar />
      <div className="row align-items-center my-5 ps-4">
        <div className="col-lg-12 col-sm-12">
          <h1 className="herotextColored d-none d-lg-block d-md-none d-sm-none d-xs-none px-5">
            INNKEEPER PRIVACY POLICY
          </h1>
          <h3 className="herotextColored d-xs-block d-sm-block d-md-block d-lg-none">
            INNKEEPER PRIVACY POLICY
          </h3>
        </div>
      </div>
    </div>
  );
};
