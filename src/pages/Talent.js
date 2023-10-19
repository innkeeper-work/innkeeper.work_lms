// //External import
// import React from "react";
// // import React, { Component } from "react";

// import UnderConstruction from "./UnderConstruction";

// // Components
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
  MockInterviewButton,
  RateCVButton,
  ReviewCVButton,
} from "../components/Buttons/InnkeeperPhaseOneButtons";
import pricings from "../data/pricings.json";
import { Pricing } from "../components/AllCards/InnkeeperPhaseOneCards";

// //Images
import cloud from "../assets/images/careers/cloud.png";
import homehero4 from "../assets/images/hero/homehero4.png";
import cvimage from "../assets/images/careers/cvimage.png";
import linkedinimage2 from "../assets/images/careers/linkedinimage2.png";
import mockinterviewimage2 from "../assets/images/careers/mockinterviewimage2.png";

const Career = () => {
  return (
    <div>
      {/* <UnderConstruction /> */}
      <CareerpageHero />
      <Vacancies />
      <CVWriting />
      <LinkedIn />
      <MockInterview />
      {/* <Side /> */}
    </div>
  );
};

let Vacancies = () => {
  return (
    <div className="container-fluid text-center py-3 my-4">
      <div className="card-body">
        <h3 className="card-title titleFontColor">Our Vacancies</h3>
        <p className="card-text mx-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum industry lorem read more.
        </p>
        <div className="row justify-content-center">
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
        <div className="mt-5">
          <ViewOpeningsButton />
        </div>
      </div>
    </div>
  );
};

export let CVWriting = () => {
  return (
    <div className="container-fluid newHeroBg pt-4">
      <h3 className="card-title titleFontColor text-center mt-3 mb-5">
        Employability
      </h3>
      <div className="row align-items-center justify-content-center mt-4 mx-2">
        <div className="col-lg-5 col-md-5 col-sm-12 d-flex justify-content-center">
          <img src={cvimage} className="img-fluid" alt="" loading="" />
        </div>
        <div className="col-lg-6 col-md-7 col-sm-10">
          <h2 className="d-none d-lg-block d-md-none d-sm-none d-xs-none mt-4 titleFontColor">
            CV Writing
          </h2>
          <h3 className="d-xs-block d-sm-block d-md-block d-lg-none mt-5 titleFontColor">
            CV Writing
          </h3>
          <p className="herotextblack d-flex">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum industry. Lorem Ipsum is simplly industry.
            Lorem Ipsum industry. Lorem Ipsum is simplly.
          </p>
          <div className="d-flex">
            {" "}
            <div className="">
              <RateCVButton />
            </div>
            <div className="ms-2">
              <ReviewCVButton />
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-evenly text-center p-5 mt-5">
        {pricings.pricings.map((pricing) => {
          return (
            <div
              className="col-md-4 col-sm-10
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
    <div className="container-fluid" style={{ backgroundColor: "#ffffff" }}>
      <div className="row align-items-center justify-content-center my-4 mx-3">
        <div className="col-lg-6 col-md-7 col-sm-10">
          <h2 className="herotextblack d-none d-lg-block d-md-none d-sm-none d-xs-none mt-2">
            Linkedin Optimization
            {/* <span className="herotextColored">Digital age.</span> */}
          </h2>
          <h3 className="herotextblack d-xs-block d-sm-block d-md-block d-lg-none mt-2">
            Linkedin Optimization
            {/* <span className="herotextColored">Digital age.</span> */}
          </h3>
          <p className="herotextblack d-flex">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum industry. Lorem Ipsum is simplly industry.
            Lorem Ipsum industry. Lorem Ipsum is simplly.
          </p>
          <div className="d-flex">
            {" "}
            <div className="">
              <RateCVButton />
            </div>
            <div className="ms-2">
              <ReviewCVButton />
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-12 d-flex justify-content-center mt-4">
          <img src={linkedinimage2} className="img-fluid" alt="" loading="" />
        </div>
      </div>
      <div className="row justify-content-evenly text-center p-5">
        {pricings.pricings.map((pricing) => {
          return (
            <div
              className="col-md-4 col-sm-8
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

// // export class Side extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       clicks: 0,
// //       show: true,
// //     };
// //   }

// //   IncrementItem = () => {
// //     this.setState({ clicks: this.state.clicks + 1 });
// //   };
// //   DecreaseItem = () => {
// //     this.setState({ clicks: this.state.clicks - 1 });
// //   };
// //   ToggleClick = () => {
// //     this.setState({ show: !this.state.show });
// //   };

// //   render() {
// //     return (
// //       <div>
// //         <button onClick={this.IncrementItem}>Click to increment by 1</button>
// //         <button onClick={this.DecreaseItem}>Click to decrease by 1</button>
// //         <button onClick={this.ToggleClick}>
// //           {this.state.show ? "Hide number" : "Show number"}
// //         </button>
// //         {this.state.show ? <h2>{this.state.clicks}</h2> : ""}
// //       </div>
// //     );
// //   }
// // }

export let MockInterview = () => {
  return (
    <div className="p-4 container bgMockInterview rounded mb-5">
      <div className="row align-items-center justify-content-around">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <h2 className="d-none d-lg-block d-md-none d-sm-none d-xs-none titleFontColor">
            Attend a Mock Interview
          </h2>
          <h3 className="d-xs-block d-sm-block d-md-block d-lg-none titleFontColor">
            Attend a Mock Interview
          </h3>
          <p className="d-flex">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum industry. Lorem Ipsum is simplly industry.
            Lorem Ipsum industry. Lorem Ipsum is simplly.
          </p>

          <div className="d-block my-4">
            <MockInterviewButton />
          </div>
        </div>
        <div className="col-lg-5 col-md-12 col-sm-12 justify-content-center">
          <img
            src={mockinterviewimage2}
            className="d-block mx-lg-auto img-fluid w-100 h-auto"
            alt=""
            loading=""
          />
        </div>
      </div>
    </div>
  );
};

export default Career;
