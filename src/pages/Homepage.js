import React from "react";
import { Link } from "react-router-dom";
import { HomepageHero } from "../components/Hero";
import aiki from "../images/aiki.png";
import lady from "../images/lady.png";
import categories from "../data/categories.json";
import { CourseCategoryCards } from "../components/Card";
import { BlogCards } from "../components/Card";
import { LearnMoreButton } from "../components/Buttons";
import { BeginCoursesButton } from "../components/Buttons";
import { SubscribeButton } from "../components/Buttons";

import blogimage1 from "../images/blogimage1.png";
import videoicon from "../images/videoicon.png";

const Homepage = () => {
  return (
    <div>
      <HomepageHero />
      <Homepagemain />
      <Homepagewelcome />
      <Homepagesoft />
      <CourseCategory />
      <Homepagetest />
      <Testimonial />
      <div className="row">
        <h4 className="text-center mt-5">Blog</h4>
        <div className="col-6">
          <BlogCards img="blogimage1.png">
            LSETF/USADF partners with us to begin a fully-funded scholarship for
            youths in Lagos.
          </BlogCards>
        </div>
        <div className="col-6">
          <BlogCards>
            Two weeks intensive internship training commences.
          </BlogCards>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

let Homepagemain = () => {
  return (
    <div className="container-fluid mx-auto mainBg">
      <div className="card-group">
        <div className="col-3">
          <div className="row">
            <img src="" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Self-Paced Learning</h5>
              <p className="card-text">
                We are empathic on serving you with the best based on your
                convenience.
              </p>
            </div>
          </div>
          <div className="row">
            <img src="" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Flexibility-support</h5>
              <p className="card-text">
                Classes are stress-free with our flexible payment system.
              </p>
            </div>
          </div>
        </div>
        <div className="col-6">
          <img src={lady} className="card-img-top" alt="..." />
        </div>
        <div className="col-3">
          <div className="row">
            <img src="" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Instructor-Led Learning</h5>
              <p className="card-text">
                Our instructors are top- notch in the various courses of
                interest Be assured of getting the best.
              </p>
            </div>
          </div>
          <div className="row">
            <img src="" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Scholarship-Support</h5>
              <p className="card-text">
                We provide fully-funded training in collaboration with
                organizations that share the same goals so as to ensure
                upskilling of youths in Nigeria.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

let Homepagewelcome = () => {
  return (
    <div className="text-center mt-5">
      <div className="card-body">
        <h5 className="card-title">Welcome to our Inn</h5>
        <p className="card-text ">
          We are that digital inn where you get equipped and positioned to
          become financially independent. Innkeeper.work is an upskilling
          platform that allows for collaborative learning, leveraging self-paced
          and instructor-led approaches.
        </p>
        <LearnMoreButton />
      </div>
    </div>
  );
};
let Homepagesoft = () => {
  return (
    <div className="text-center mt-5 py-5 bgSoft">
      <div className="card-body herotextWhite">
        <h5 className="card-title">
          Join our community to get certified for that professional role you
          desire.
        </h5>
        <p className="card-text">Take our free soft skill courses today!</p>
        <BeginCoursesButton />
      </div>
    </div>
  );
};

let CourseCategory = () => {
  return (
    <div className="category">
      <h4 className="text-center pt-5">Our Courses</h4>
      <div className="row">
        {categories.coursecategories.map((category) => {
          return (
            <div className="col-lg-4 col-md-6 col-sm-6" key={category.id}>
              {/* <div className="col-lg-4 col-md-6 col-sm-6 d-flex align-items-stretch" key={category.id}> */}
              <CourseCategoryCards {...category}></CourseCategoryCards>
            </div>
          );
        })}
      </div>
    </div>
  );
};

let Homepagetest = () => {
  return (
    <div
      className="text-center py-5
     bgSoft"
    >
      <div className="card-body herotextWhite">
        <h6 className="card-title">
          "My entire team was good to go at the end of the training! The soft
          skills available on innkeeper platform was used to train my team. This
          was needful because my teamrelates with people often. I witnessed some
          part of the role plays and it was impactful. Thanks to innkeeper.work”
        </h6>

        <img src={aiki} className="img-fluid rounded-start mt-4" alt="..." />

        <h6 className="card-title mt-3">Hafsatu Shinkafi</h6>
        <p className="card-text">CEO, AIKI Services</p>
      </div>
    </div>
  );
};

let Testimonial = () => {
  return (
    <div className="p-5 text-center testBg">
      {/* <div className="card testTextBg" style={{ width: "18rem" }}>
        <h1 className="">Success Story</h1>
      </div> */}
      <div className="card testTextBg m-auto p-3" style={{ width: "25rem" }}>
        <h3 className="">Success Story</h3>
        <div className="">
          <p>
            I opted for the Sales/Customer Service course and I was not
            disappointed. The trainers are competent and professionals.For me,
            my confidence grew during the Course and my interest in Sales as a
            career was ignited. I had a great experience and I will gladly
            recommend this program.
          </p>
          <b className="">Jelilat Akinremi</b>
          <p className="">Sales/Customer Service Graduate</p>
          <Link to="" className="">
            <img
              src={videoicon}
              className="d-block mx-auto img-fluid rounded-circle"
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

let Newsletter = () => {
  return (
    <div className="text-center py-5">
      <div className="card-body">
        <h5 className="card-title">Our News Channel</h5>
        <p className="card-text">
          Welcome to our news channel, subscribe to receive daily updates.
        </p>

        <input
          type="email"
          className="form-control w-25 mx-auto"
          id="exampleFormControlInput1"
          placeholder="Your email"
        ></input>
        <div className="mt-3">
          <SubscribeButton />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
