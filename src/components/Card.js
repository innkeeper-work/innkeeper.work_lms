import React from "react";
import { ApplyNowButton } from "./Buttons";

export const CourseCategoryCards = (props) => {
  const { herotitle, techimg, description } = props;
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      <div class="col">
        <div class="card">
          <img src={techimg} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{herotitle}</h5>
            <p class="card-text">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
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

export const InstructorCards = (props) => {
  const { techimg, instructorname, role, linkedinprofile } = props;
  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={techimg}
              className="img-fluid rounded-start h-100"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{instructorname}</h5>
              <p className="card-text">{role}</p>
              <div className="card-text d-flex justify-content-end">
                <a href="https://www.linkedin.com" target="_blank">
                  <i className="fa fa-linkedin iconCol" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
