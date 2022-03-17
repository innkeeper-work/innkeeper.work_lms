import React from "react";

import { CoursepageHero } from "../components/Hero";
import { CourseCards } from "../components/Card";
import { InstructorCards } from "../components/Card";
import empsoftskill from "../data/employability_softskills/employability_softskills.json";
import { OurInstructors } from "../components/Ourinstructors";

const Employability = () => {
  return (
    <div>
      <CoursepageHero />
      <EmpSoftSkills />
      <OurInstructors />
      <Instructors />
    </div>
  );
};

let EmpSoftSkills = () => {
  return (
    <div className="webDev m-5 p-5 ">
      <div className="row p-1 d-flex justify-content-between">
        {empsoftskill.empsoftskills.map((singleEmp) => {
          return (
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch py-4"
              key={singleEmp.id}
            >
              <CourseCards {...singleEmp}></CourseCards>
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
      <div className="row p-1 d-flex justify-content-around">
        {empsoftskill.instructors.map((singlecv) => {
          return (
            <div className="col-md-4 col-sm-6" key={singlecv.id}>
              <InstructorCards {...singlecv}></InstructorCards>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Employability;
