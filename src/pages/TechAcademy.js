import React from 'react';
import { CourseCards } from '../components/Card';
import { OurInstructors } from '../components/Ourinstructors';
import techacademy from '../data/tech_academy_details/techacademy.json';
import { CoursepageHero } from '../components/Hero';
import { InstructorCards } from '../components/Card';

const TechAcademy = () => {
  return (
    <>
      <div className="d-none d-md-block">
        <TechHero />
        <div className="webDev m-5 p-5">
          <WebDev />
        </div>
        <div className="webDev m-5 p-5">
          <CloudComputing />
        </div>
        <div className="webDev m-5 p-5">
          <CyberSecurity />
        </div>
        <div className="webDev m-5 p-5">
          <BigData />
        </div>
        <div className="m-5 p-5">
          <OurInstructors />
        </div>
        <div className="webDev m-5 p-5">
          <Instructors />
        </div>
        <div>
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>

      <div className="d-block d-md-none">
        <TechHero />
        <div className="webDev p-4 mb-5">
          <WebDev />
        </div>
        <div className="webDev p-4 mb-5">
          <CloudComputing />
        </div>
        <div className="webDev p-4 mb-5">
          <CyberSecurity />
        </div>
        <div className="webDev p-4 mb-5">
          <BigData />
        </div>

        <OurInstructors />
        <div className="webDev p-4 mt-5 mb-5">
          <Instructors />
        </div>
        <div>
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </>
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
    <div>
      <h3 className="techHead pb-3">Programming and Web Development</h3>
      <div className="row p-1 d-flex justify-content-between">
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
    <div>
      <h3 className="techHead pb-3">Cloud Computing</h3>
      <div className="row p-1 d-flex justify-content-between">
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
    <div>
      <h3 className="techHead pb-3">Cyber Security</h3>
      <div className="row p-1 d-flex justify-content-between">
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
    <div>
      <h3 className="techHead pb-3">Big Data</h3>
      <div className="row p-1 d-flex justify-content-between">
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
    <div>
      <div className="row">
        {techacademy.instructors.map((singleInstr) => {
          return (
            <div
              className="col-lg-4 col-md-6 col-sm-6 col-xs-12"
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
