import React from "react";
import { CoursepageHero } from "../../components/Hero";
import { ApplyNowButton } from "../../components/Buttons";
import { Sectionone } from "../../components/Courseinfosectionone";
import { Sectiontwo } from "../../components/Courseinfosectiontwo";
import { CourseCards } from "../../components/Card";
import techacademy from "../../data/tech_academy_details/techacademy.json";

let CourseInfo = () => {
  return (
    <div>
      <CoursepageHero />
      <div className="row justify-content-center">
        <div className="col-lg-7 col-md-6 col-sm-10">
          <Sectionone />
        </div>
        <div className="col-lg-4 col-md-5 col-sm-10 sectiontwoBg mt-5 h-100">
          <Sectiontwo />
        </div>
      </div>
      <BigData />
    </div>
  );
};

let BigData = () => {
  return (
    <div className="webDev mx-5 px-5 my-5 pb-5">
      <h3 className="techHead px-5 my-5 pt-5">Related Courses</h3>
      <div className="row">
        {techacademy.bigdata.map((singlebig) => {
          return (
            <div className="col-lg-4 col-md-6 col-sm-12" key={singlebig.id}>
              <CourseCards {...singlebig}></CourseCards>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CourseInfo;
