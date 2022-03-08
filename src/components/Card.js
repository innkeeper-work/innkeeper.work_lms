import React from "react";
import { ApplyNowButton } from "./Buttons";

export const CourseCards = () => {
  return <div>CoursesCard</div>;
};
export const BlogCards = () => {
  return <div>CoursesCard</div>;
};
export const TechCards = (props) => {
  const { techimg, techtitle, techdescription } = props;
  return (
    <div className="card techCards mx-4  " style={{ width: "" }}>
      <div className="mx-4 my-4 ">
        <img src={techimg} className="card-img-top techImages" alt="..." />
      </div>
      <div className="card-body">
        <h5 className="card-title">{techtitle}</h5>
        <p className="card-text">{techdescription}</p>
        <ApplyNowButton />
      </div>
    </div>
  );
};
export const InstructorCards = () => {
  return <div>CoursesCard</div>;
};
