import React, { useState } from "react";
import { CorporatepageHero } from "../components/Hero";
import { CheckBox } from "../components/Icons";
import {
  GetStartedCorporateButton,
  HireTalentButton,
  CorporateTrainingsButton,
  ProjectDeliveryButton,
  PartnershipsButton,
} from "../components/Buttons/InnkeeperPhaseOneButtons";

//Images
import cloud from "../assets/images/careers/cloud.png";
import logo from "../assets/images/careers/logo.png";
import hiretalent from "../assets/images/careers/hiretalent.png";
import corporatetraining from "../assets/images/careers/corporatetraining.png";
import projectdelivery from "../assets/images/careers/projectdelivery.png";
import partnerships from "../assets/images/careers/partnerships.png";
import {
  Backend,
  Designers,
  Frontend,
  Data,
  DigitalMarketers,
  Sales,
  CloudComputing,
  CustomerExperience,
  CyberSecurity,
} from "../components/Icons";

const CorporatePage = () => {
  return (
    <>
      <CorporatepageHero />
      <WhyRecruitFromUs />
      <AvailableTalents />
      <CorporateOffers />
      <Testimonials />
      <Partners />
    </>
  );
};

let WhyRecruitFromUs = () => {
  return (
    <div className="container-fluid text-center py-3 my-4">
      <div className="card-body">
        <h3 className="card-title titleFontColor">Why Recruit From Us</h3>
        <div className="row justify-content-center py-5">
          <div className="col-lg-4 col-md-6 col-sm-12 my-3">
            <div className="">
              <img
                src={cloud}
                alt=""
                width="100px"
                height="100px"
                className="rounded-circle ms-3 border border-light border-5"
              />
              <div className="card-body">
                <h5 className="card-title titleFontColor">
                  <b>Lorem Ipsum</b>
                </h5>
                <p className="card-text mx-5">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 my-3">
            <div className="">
              <img
                src={cloud}
                alt=""
                width="100px"
                height="100px"
                className="rounded-circle ms-3 border border-light border-5"
              />
              <div className="card-body">
                <h5 className="card-title titleFontColor">
                  <b>Lorem Ipsum</b>
                </h5>
                <p className="card-text mx-5">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 my-3">
            <div className="">
              <img
                src={cloud}
                alt=""
                width="100px"
                height="100px"
                className="rounded-circle ms-3 border border-light border-5"
              />
              <div className="card-body">
                <h5 className="card-title titleFontColor">
                  <b>Lorem Ipsum</b>
                </h5>
                <p className="card-text mx-5">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
let AvailableTalents = () => {
  return (
    <div className="container-fluid text-center newHeroBg pt-5 my-5">
      <div className="card-body">
        <h3 className="card-title titleFontColor">
          Talents Available in Our Inn
        </h3>
        <div className="row justify-content-center py-5">
          <div className="col-lg-2 col-md-6 col-sm-12 my-3">
            <div className="">
              <Frontend />
              <div className="card-body">
                <h6 className="card-title titleFontColor mt-3">
                  Frontend Developers
                </h6>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-12 my-3">
            <div className="">
              <Backend />
              <div className="card-body">
                <h6 className="card-title titleFontColor mt-3">
                  Backend Developers
                </h6>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-12 my-3">
            <div className="">
              <Designers />
              <div className="card-body">
                <h6 className="card-title titleFontColor mt-3">
                  Creative Designers
                </h6>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-12 my-3">
            <div className="">
              <Data />
              <div className="card-body">
                <h6 className="card-title titleFontColor mt-3">Data Analyst</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-12 my-3">
            <div className="">
              <DigitalMarketers />
              <div className="card-body">
                <h6 className="card-title titleFontColor mt-3">
                  Digital Marketers
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center py-5">
          <div className="col-lg-2 col-md-6 col-sm-12 my-3">
            <div className="">
              <Sales />
              <div className="card-body">
                <h6 className="card-title titleFontColor mt-3">Sales</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-12 my-3">
            <div className="">
              <img
                src={cloud}
                alt=""
                width="100px"
                height="100px"
                className="rounded-circle ms-3 border border-light border-5"
              />
              <div className="card-body">
                <h6 className="card-title titleFontColor mt-3">
                  Cloud Computing
                </h6>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-12 my-3">
            <div className="">
              <CustomerExperience />
              <div className="card-body">
                <h6 className="card-title titleFontColor mt-3">
                  Customer Experience
                </h6>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-12 my-3">
            <div className="">
              <CyberSecurity />
              <div className="card-body">
                <h6 className="card-title titleFontColor mt-3">
                  Cyber Security
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CorporateOffers = () => {
  const [active, setActive] = useState("Firstcard");
  return (
    <div className="container corporateOffer ">
      {active === "Firstcard" && (
        <div className="px-4 container my-5 ">
          <div className="row align-items-center justify-content-center mt-4">
            <div className="col-lg-6 col-md-7 col-sm-12">
              <h1 className="herotextblack d-none d-xl-block d-lg-block d-md-none d-sm-none d-xs-none">
                Seeking to expand your team?&nbsp;
              </h1>
              <h2 className="herotextblack d-xs-block d-sm-block d-md-block d-lg-none d-xl-none">
                Seeking to expand your team?&nbsp;
              </h2>
              <div className="d-flex py-2">
                <CheckBox />
                <p className="ms-3">Best-fit staff in our talent pool</p>
              </div>
              <div className="d-flex py-2">
                <CheckBox />
                <p className="ms-3">Brilliant and experienced pool of talent</p>
              </div>
              <p className="herotextblack d-flex">
                We assist enterprises in finding the best-fit workforce to suit
                their business and digital technology needs. For your company,
                tap into our bright, experienced, and pre-vetted talent pool.
              </p>
              <GetStartedCorporateButton />
            </div>
            <div className="col-lg-5 col-md-5 col-sm-10">
              <img
                src={hiretalent}
                className="mx-lg-auto img-fluid"
                alt=""
                loading=""
              />
            </div>
          </div>
        </div>
      )}
      {active === "Secondcard" && (
        <div className="px-4 container my-5 ">
          <div className="row align-items-center justify-content-center mt-4">
            <div className="col-lg-6 col-md-7 col-sm-12">
              <h1 className="herotextblack d-none d-xl-block d-lg-block d-md-none d-sm-none d-xs-none">
                Seeking to expand your team?&nbsp;
              </h1>
              <h2 className="herotextblack d-xs-block d-sm-block d-md-block d-lg-none d-xl-none">
                Seeking to expand your team?&nbsp;
              </h2>
              <div className="d-flex py-2">
                <CheckBox />
                <p className="ms-3">Best-fit staff in our talent pool</p>
              </div>
              <div className="d-flex py-2">
                <CheckBox />
                <p className="ms-3">Brilliant and experienced pool of talent</p>
              </div>
              <p className="herotextblack d-flex">
                We assist enterprises in finding the best-fit workforce to suit
                their business and digital technology needs. For your company,
                tap into our bright, experienced, and pre-vetted talent pool.
              </p>
              <GetStartedCorporateButton />
            </div>
            <div className="col-lg-5 col-md-5 col-sm-10">
              <img
                src={corporatetraining}
                className="mx-lg-auto img-fluid"
                alt=""
                loading=""
              />
            </div>
          </div>
        </div>
      )}
      {active === "Thirdcard" && (
        <div className="px-4 container my-5 ">
          <div className="row align-items-center justify-content-center mt-4">
            <div className="col-lg-6 col-md-7 col-sm-12">
              <h1 className="herotextblack d-none d-xl-block d-lg-block d-md-none d-sm-none d-xs-none">
                Seeking to expand your team?&nbsp;
              </h1>
              <h2 className="herotextblack d-xs-block d-sm-block d-md-block d-lg-none d-xl-none">
                Seeking to expand your team?&nbsp;
              </h2>
              <div className="d-flex py-2">
                <CheckBox />
                <p className="ms-3">Best-fit staff in our talent pool</p>
              </div>
              <div className="d-flex py-2">
                <CheckBox />
                <p className="ms-3">Brilliant and experienced pool of talent</p>
              </div>
              <p className="herotextblack d-flex">
                We assist enterprises in finding the best-fit workforce to suit
                their business and digital technology needs. For your company,
                tap into our bright, experienced, and pre-vetted talent pool.
              </p>
              <GetStartedCorporateButton />
            </div>
            <div className="col-lg-5 col-md-5 col-sm-10">
              <img
                src={projectdelivery}
                className="mx-lg-auto img-fluid"
                alt=""
                loading=""
              />
            </div>
          </div>
        </div>
      )}
      {active === "Fourthcard" && (
        <div className="px-4 container my-5 ">
          <div className="row align-items-center justify-content-center mt-4">
            <div className="col-lg-6 col-md-7 col-sm-12">
              <h1 className="herotextblack d-none d-xl-block d-lg-block d-md-none d-sm-none d-xs-none">
                Seeking to expand your team?&nbsp;
              </h1>
              <h2 className="herotextblack d-xs-block d-sm-block d-md-block d-lg-none d-xl-none">
                Seeking to expand your team?&nbsp;
              </h2>
              <div className="d-flex py-2">
                <CheckBox />
                <p className="ms-3">Best-fit staff in our talent pool</p>
              </div>
              <div className="d-flex py-2">
                <CheckBox />
                <p className="ms-3">Brilliant and experienced pool of talent</p>
              </div>
              <p className="herotextblack d-flex">
                We assist enterprises in finding the best-fit workforce to suit
                their business and digital technology needs. For your company,
                tap into our bright, experienced, and pre-vetted talent pool.
              </p>
              <GetStartedCorporateButton />
            </div>
            <div className="col-lg-5 col-md-5 col-sm-10">
              <img
                src={partnerships}
                className="mx-lg-auto img-fluid"
                alt=""
                loading=""
              />
            </div>
          </div>
        </div>
      )}
      <div className="d-flex justify-content-center table-responsive">
        <button
          className="btn ms-4 mb-4 active focusBtnColor"
          onClick={() => setActive("Firstcard")}
        >
          Hire a Talent
        </button>
        <button
          className="btn ms-4 mb-4 focusBtnColor"
          mb1
          onClick={() => setActive("Secondcard")}
        >
          Corporate Trainings
        </button>
        <button
          className="btn ms-4 mb-4 focusBtnColor"
          mb1
          onClick={() => setActive("Thirdcard")}
        >
          Project Delivery
        </button>
        <button
          className="btn ms-4 mb-4 focusBtnColor"
          mb1
          onClick={() => setActive("Fourthcard")}
        >
          Partnerships
        </button>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <>
      <div className="container-fluid newHeroBg py-5 my-5">
        <h3 className="card-title titleFontColor text-center">Testimonials</h3>
      </div>
    </>
  );
};
const Partners = () => {
  return (
    <div className="container-fluid py-4">
      {" "}
      <div className="row g-0">
        <h3 className="mt-4 text-center mb-4">Companies who have trusted us</h3>
        <div className="row justify-content-center">
          {/* <div className=" col-lg-2 col-md-4 col-sm-6 col-xs-6 my-3">
            <img src={logo} className="logo1 col-12 w-50"></img>
          </div> */}
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 my-3">
            <img src={logo} className="logo1 col-12 w-50"></img>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 my-3">
            <img src={logo} className="logo1 col-12 w-50"></img>
          </div>
          <div className=" col-lg-3 col-md-4 col-sm-6 col-xs-6 my-3">
            <img src={logo} className="logo1 col-12 w-50"></img>
          </div>
          <div className=" col-lg-3 col-md-4 col-sm-6 col-xs-6 my-3">
            <img src={logo} className="logo1 col-12 w-50"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporatePage;
