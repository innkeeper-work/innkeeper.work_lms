import React from "react";
import { ApplyNowButton } from "./Buttons";
import { LinkedInIcon } from "./Icons";
import event1 from "../images/event1.png";
import event2 from "../images/event2.png";

//homepage cards
export const CourseCategoryCards = (props) => {
  const { title, img, description, Link } = props;
  return (
    <div className="row p-3 g-0">
      <div className="card rounded card-shadow">
        <img src={img} alt="" />

        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{description}</p>
          <a href={Link}> Read More</a>
        </div>
      </div>
    </div>
  );
};

export const BlogCards = (props) => {
  return (
    <div className="card m-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={event1}
            className="img-fluid rounded-start h-100"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">Blog title</h3>
            <p className="card-text">{props.children}</p>
            <p className="card-text">
              <i className="fa fa-map-marker m-1" aria-hidden="true"></i>
              <small className="text-muted">Magodo, Lagos</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BlogCardsTwo = (props) => {
  return (
    <div className="card m-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={event2}
            className="img-fluid rounded-start h-100"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">Blog title</h3>
            <p className="card-text">{props.children}</p>
            <p className="card-text">
              <i className="fa fa-map-marker m-1" aria-hidden="true"></i>
              <small className="text-muted">Magodo, Lagos</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

//courses cards

export const CourseCards = (props) => {
  const { img, title, description, Link } = props;

  return (
    <div className="card card-shadow">
      <div className="m-3">
        <img src={img} className="card-img-top img-radius" alt={title} />{" "}
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>{" "}
        <div className="d-flex align-self-end">
          {" "}
          <a href={Link}>
            <ApplyNowButton />
          </a>
        </div>
      </div>
    </div>
  );
};

export const InstructorCards = (props) => {
  const { img, instructorname, role, linkedinprofile } = props;
  return (
    <>
      <div className="card ins-shadow">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{instructorname}</h5>
          <p className="card-text">{role}</p>
          <div className="card-text d-flex justify-content-end">
            <a href={linkedinprofile} target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
      {/* <div className="card m-2">
				<div className="row ">
					<div className="col-md-6 d-flex justify-content-center">
						<img
							src={img}
							className=" img-fluid rounded-start h-100"
							alt="..."
						/>
					</div>

					<div className="col-md-6 d-flex justify-content-center p-2">
						<div className="card-body">
							<h5 className="card-title">{instructorname}</h5>
							<p className="card-text">{role}</p>
							<div className="card-text d-flex justify-content-end">
								<a href={linkedinprofile} target="_blank" rel="noreferrer">
									<LinkedInIcon />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</> */}
    </>
  );
};
