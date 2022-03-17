import React from "react";
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
    <div className="webDev mx-5 px-5 my-5 pb-5 Larger shadow">
      <h3 className="techHead mx-5 px-5 my-5 pt-5">
        Programming and Web Development
      </h3>
      <div className="row">
        {techacademy.webdev.map((singleweb) => {
          return (
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch py-3"
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
    <div className="webDev mx-5 px-5 my-5 pb-5 Larger shadow">
      <h3 className="techHead mx-5 px-5 my-5 pt-5">Cloud Computing</h3>
      <div className="row">
        {techacademy.cloudcomputing.map((singlecloud) => {
          return (
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch py-4"
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
    <div className="webDev mx-5 px-5 my-5 pb-5 Larger shadow">
      <h3 className="techHead mx-5 px-5 my-5 pt-5">Cyber Security</h3>
      <div className="row">
        {techacademy.cybersecurity.map((singlecyber) => {
          return (
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch py-4"
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
    <div className="webDev mx-5 px-5 my-5 pb-5 Larger shadow">
      <h3 className="techHead mx-5 px-5 my-5 pt-5">Big Data</h3>
      <div className="row">
        {techacademy.bigdata.map((singlebig) => {
          return (
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch py-4"
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
    <div className="webDev m-5 p-5">
      <div className="row d-flex justify-content-around">
        {techacademy.instructors.map((singleInstr) => {
          return (
            <div
              className="col-lg-4 col-sm-4 col-md-4 d-flex align-items-stretch"
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
