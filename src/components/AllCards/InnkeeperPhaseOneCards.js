// import { useState } from "react";
import React from "react";
import { ApplyNowButton } from "../Buttons/InnkeeperPhaseOneButtons";
import { LinkedInIcon, LocationIcon, PayIcon, NatureIcon } from "../Icons";

//Components
import {
  VacancyApplyButton,
  ReviewCVButton,
} from "../../components/Buttons/InnkeeperPhaseOneButtons";

// Images
import event1 from "../../assets/images/home/event1.png";
import event2 from "../../assets/images/home/event2.png";
import cloud from "../../assets/images/careers/cloud.png";
// import favicon from "../../assets/images/vacancy/favicon.png";

//homepage cards
export const CourseCategoryCards = ({
  title,
  img,
  description,
  Link,
  cardStyle,
}) => {
  // const [current, setCurrent] = useState(0);
  // const slidelength = slides.length;
  // const { title, img, description, Link } = props;
  return (
    <div className="row p-3 g-0">
      <div className={`card rounded card-shadow ${cardStyle}`}>
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
            <h3 className="card-title">Fully funded scholarship</h3>
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
            <h3 className="card-title">Get trained, pay later</h3>
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
        <h4 className="card-title">{title}</h4>
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

export const AvailableOpenings = ({
  logo,
  role,
  company,
  description,
  location,
  pay,
  nature,
}) => {
  return (
    <div className="card pricingCard mb-5">
      <div className="d-flex">
        <div className="pt-3">
          <img
            src={logo}
            alt=""
            width="60px"
            height="60px"
            className="rounded-circle ms-3 border border-light border-5"
          />
        </div>
        <div className="mt-4 mx-2">
          {" "}
          <h5 class="card-title">
            {" "}
            <b>{role}</b>
          </h5>
          <p class="card-text">{company}</p>
        </div>
      </div>

      <div className="px-4 pt-4 pb-3">
        <h6 class="card-title">Job Description</h6>
        <p class="card-text">{description}</p>
        <div className="d-flex justify-content-between pb-3">
          <div className="d-flex">
            <LocationIcon />
            <p class="card-text ms-2">{location}</p>
          </div>
          <div className="d-flex">
            <PayIcon />
            <p class="card-text ms-2">{pay}</p>
          </div>
          <div className="d-flex">
            <NatureIcon />
            <p class="card-text ms-2">{nature}</p>
          </div>
          {/* <div className="text-center">
            <LocationIcon />
            <p class="card-text">{location}</p>
          </div>
          <div className="text-center">
            <PayIcon />
            <p class="card-text">{pay}</p>
          </div>
          <div className="text-center">
            <NatureIcon />
            <p class="card-text">{nature}</p>
          </div> */}
        </div>
        <div className="float-end">
          <VacancyApplyButton />
        </div>
      </div>
    </div>
  );
};

export let Pricing = ({
  plan,
  price,
  offer1,
  offer2,
  offer3,
  offer4,
  offer5,
}) => {
  return (
    // <div className="row justify-content-around">
    <div className="card pricingCard mb-5">
      <div className="card-body">
        {/* <div className="pt-3">
          <img
            src={cloud}
            alt=""
            width="100px"
            height="100px"
            className="rounded-circle border border-light border-5"
          />
        </div> */}
        <h5 className="card-title  pricePlanText mt-4 titleFontColor">
          {plan}
        </h5>
        <p className="card-text priceText">&#8358;{price}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{offer1}</li>
        <li className="list-group-item">{offer2}</li>
        <li className="list-group-item">{offer3}</li>
        <li className="list-group-item">{offer4}</li>
        <li className="list-group-item">{offer5}</li>
      </ul>
      <div className="card-body">
        <ReviewCVButton />
      </div>
    </div>
    // </div>
  );
};
