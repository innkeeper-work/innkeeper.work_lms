// External import
import React from "react";

// Components
import { CourseCards } from "../components/Card";
import { OurInstructors } from "../components/Ourinstructors";
import techacademy from "../data/tech_academy_details/techacademy.json";
import { CoursepageHero } from "../components/Hero";
import { InstructorCards } from "../components/Card";

const TechAcademy = () => {
  return (
    <div>
      <TechHero />
      <WebDev />
      <CloudComputing />
      <CyberSecurity />
      <BigData />
      <OurInstructors />
      <Instructors />
    </div>
  );
};

let TechHero = () => {
  return (
    <div>
      {techacademy.techacademyheroinfo.map((singlehero) => {
        return (
          <div key={singlehero.id}>
            <CoursepageHero {...singlehero}></CoursepageHero>
          </div>
        );
      })}
    </div>
  );
};

let WebDev = () => {
  return (
    <div className="p-4 m-3">
      {/* <h3 className="techHead mx-5 px-5 my-5 pt-5"> */}
      <h3 className="techHead ms-2 py-2">Programming and Web Development</h3>
      <div className="row p-1 d-flex justify-content-center">
        {techacademy.webdev.map((singleweb) => {
          return (
            <div
              className="col-lg-4 col-md-6 col-sm-6 col-xs-12 d-flex align-items-stretch py-4"
              key={singleweb.id}
            >
              <CourseCards {...singleweb}></CourseCards>
            </div>
          );
        })}
      </div>
    </div>
  );
};
let CloudComputing = () => {
  return (
    <div className="p-4 mx-3 my-4">
      <h3 className="techHead ms-2 py-2">Cloud Computing</h3>
      <div className="row p-1 d-flex justify-content-center">
        {techacademy.cloudcomputing.map((singlecloud) => {
          return (
            <div
              className="col-lg-4 col-md-6 col-sm-6 col-xs-12 d-flex align-items-stretch py-4"
              key={singlecloud.id}
            >
              <CourseCards {...singlecloud}></CourseCards>
            </div>
          );
        })}
      </div>
    </div>
  );
};
let CyberSecurity = () => {
  return (
    <div className="p-4 mx-3 my-4">
      <h3 className="techHead ms-2 py-2">Cyber Security</h3>
      <div className="row p-1 d-flex justify-content-center">
        {techacademy.cybersecurity.map((singlecyber) => {
          return (
            <div
              className="col-lg-4 col-md-6 col-sm-6 col-xs-12 d-flex align-items-stretch py-4"
              key={singlecyber.id}
            >
              <CourseCards {...singlecyber}></CourseCards>
            </div>
          );
        })}
      </div>
    </div>
  );
};
let BigData = () => {
  return (
    <div className="p-4 mx-3 my-4">
      <h3 className="techHead ms-2 py-2">Big Data</h3>
      <div className="row p-1 d-flex justify-content-center">
        {techacademy.bigdata.map((singlebig) => {
          return (
            <div
              className="col-lg-4 col-md-6 col-sm-6 col-xs-12 d-flex align-items-stretch py-4"
              key={singlebig.id}
            >
              <CourseCards {...singlebig}></CourseCards>
            </div>
          );
        })}
      </div>
    </div>
  );
};
let Instructors = () => {
  return (
    <div className="webDev m-4 p-4">
      <div className="row d-flex justify-content-around">
        {techacademy.instructors.map((singleInstr) => {
          return (
            <div
              className="col-lg-4 col-sm-6 col-md-6 d-flex align-items-stretch mb-5"
              key={singleInstr.id}
            >
              <InstructorCards {...singleInstr}></InstructorCards>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechAcademy;
