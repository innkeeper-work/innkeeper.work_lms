import React from 'react';
import { ApplyNowButton } from './Buttons';
// import img from "../images/barter.jpg";
import blogimage1 from '../images/blogimage1.png';
import blogimage2 from '../images/blogimage2.png';

//homepage cards
export const CourseCategoryCards = (props) => {
  const { title, img, description } = props;
  return (
    <div className="row p-3 m-0 g-0">
      <div className="card rounded">
        <img src={img} alt="" />

        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export const BlogCards = (props) => {
  return (
    <div class="card m-3" style={{ maxWidth: '540px' }}>
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src={blogimage1}
            className="img-fluid rounded-start h-100"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h3 class="card-title">Blog title</h3>
            <p class="card-text">{props.children}</p>
            <p class="card-text">
              <i class="fa fa-map-marker m-1" aria-hidden="true"></i>
              <small class="text-muted">Magodo, Lagos</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BlogCardsTwo = (props) => {
  return (
    <div class="card m-3" style={{ maxWidth: '540px' }}>
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src={blogimage2}
            className="img-fluid rounded-start h-100"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h3 class="card-title">Blog title</h3>
            <p class="card-text">{props.children}</p>
            <p class="card-text">
              <i class="fa fa-map-marker m-1" aria-hidden="true"></i>
              <small class="text-muted">Magodo, Lagos</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

//courses cards

export const CourseCards = (props) => {
  const { img, title, description } = props;
  return (
    <div className="card techCards">
      <div className="m-3">
        <img src={img} className="card-img-top techImages" alt={title} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <div className="d-flex align-self-end">
          <ApplyNowButton />
        </div>
      </div>
    </div>
  );
};

export const InstructorCards = (props) => {
  const { img, instructorname, role, linkedinprofile } = props;
  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={img}
              className="img-fluid rounded-start h-100"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{instructorname}</h5>
              <p className="card-text">{role}</p>
              <div className="card-text d-flex justify-content-end">
                <a href={linkedinprofile} target="_blank" rel="noreferrer">
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
