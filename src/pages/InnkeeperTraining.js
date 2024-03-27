import React from "react";
import { Link } from "react-router-dom";

// Components
import { InnkeeperAugustCohortHero } from "../components/Hero";
import { SalesPageSignInButton } from "../components/Buttons/InnkeeperPhaseOneButtons";
import { TestimonialCarousel } from "../components/CarouselContainer";
import digitalmarketing from "../assets/images/innkeeperaugustcohort/digitalmarketing.png";
import frontend from "../assets/images/innkeeperaugustcohort/frontend.png";
import customerexperience from "../assets/images/innkeeperaugustcohort/customerexperience.png";
import dataanalysis from "../assets/images/innkeeperaugustcohort/dataanalysis.png";
import uiux from "../assets/images/innkeeperaugustcohort/uiux.png";
import fullstack from "../assets/images/innkeeperaugustcohort/fullstack.jpeg";
import cyberSecurity from "../assets/images/innkeeperaugustcohort/cybersecurity.jpeg";
import creativeDesign from "../assets/images/innkeeperaugustcohort/creativedesign.jpeg";
import productmgt from "../assets/images/innkeeperaugustcohort/productmgt.jpeg";

import { CheckBox } from "../components/Icons";
// import Footer from "../components/Footer";

const InnkeeperTraining = () => {
  return (
    <div>
      <InnkeeperAugustCohortHero />
      <OurOfferings />
      <SalesCoursesSection />
      <TestimonialCarousel />
    </div>
  );
};

let OurOfferings = () => {
  return (
    <div className="container-fluid p-5">
      <div className="">
        {" "}
        <h3 className="text-center pb-4">Why Choose Us</h3>
        <div className="card-group">
          {/* <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-5">
          <img src={whychooseus} className="card-img-top" alt="..." />
        </div> */}
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 m-auto">
            <div className="row d-lg-flex d-md-flex ">
              <div className="col-lg-4 col-md-6 d-flex py-2">
                <CheckBox />

                {/* <h3>Self-Paced Learning</h3> */}
                <p className="ms-3">
                  Automatic enlistment in our talent pool for paid internship
                  and possible job placement.
                </p>
              </div>
              <div className="col-lg-4 col-md-6 d-flex py-2">
                <CheckBox />
                {/* <h3>Flexibility-support</h3> */}
                <p className="ms-3">
                  Training on employability/soft skills including Cover Letter,
                  CV Review and LinkedIn Optimization.
                </p>
              </div>
              <div className="col-lg-4 col-md-6 d-flex  py-2">
                <CheckBox />
                {/* <h3>Flexibility-support</h3> */}
                <p className="ms-3">
                  Access to career mentorship with tech experts during and after
                  training.
                </p>
              </div>
              <div className="col-lg-4 col-md-6 d-flex  py-2">
                <CheckBox />
                {/* <h3>Flexibility-support</h3> */}
                <p className="ms-3">
                  Entrepreneurship classes to help you grow your idea.
                </p>
              </div>
              <div className="col-lg-4 col-md-6 d-flex  py-2">
                <CheckBox />
                {/* <h3>Flexibility-support</h3> */}
                <p className="ms-3"> Virtual and In Class Learning</p>
              </div>
              <div className="col-lg-4 col-md-6 d-flex  py-2">
                <CheckBox />
                {/* <h3>Flexibility-support</h3> */}
                <p className="ms-3">
                  {" "}
                  Certificate of Completion after training.
                </p>
              </div>
              {/* <div className="col-lg-4 col-md-6 d-flex  py-2">
                <CheckBox />
                <p className="ms-3">
                  {" "}
                  Free Entrepreneurship classes for business minded person that goe
                </p>
              </div> */}
            </div>
            {/* <div className="col-4 d-lg-flex d-md-flex ">
            <div className="col-lg-4 d-flex">
            <CheckBox/>
              <h3>Instructor-Led Learning</h3>
              <p className="ms-3">
              
              </p>
            </div>
            <div className="col-lg-4 d-flex ms-md-3">
            <CheckBox/>
              <h3>Scholarship-Support</h3>
              <p className="ms-3">
                {" "}
                Certificate of Completion after training.
              </p>
            </div>
          </div> */}
          </div>
          {/* 
        <div className="col-lg-">
          <div className="row">
            <div>
              {" "}
              <i className="bi bi-tv iconCol"></i>
              <h3>Instructor-Led Learning</h3>
              <p>
                Our instructors are top- notch in the various courses of
                interest Be assured of getting the best.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="">
              <i className="bi bi-pip iconCol"></i>
              <h3>Scholarship-Support</h3>
              <p>
                We provide fully-funded training in collaboration with
                organizations that share the same goals so as to ensure
                upskilling of youths in Nigeria.
              </p>
            </div>
          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
};

const SalesCoursesSection = () => {
  return (
    <div className="container-fluid px-4 pb-5 newHeroBg">
      <div className="row justify-content-center">
        <h3 className="text-center my-5">Our Available Courses</h3>

        {/* DIGITAL MARKETING */}
        <div className="col-lg-4 col-md-6 col-sm-10 px-4 d-flex justify-content-center align-items-stretch">
          {" "}
          <div
            className="card mb-5"
            style={{
              borderStyle: "solid",
              borderWidth: "3px",
              borderColor: "#00114C",
              borderRadius: "10px",
            }}
          >
            <img
              src={digitalmarketing}
              className="card-img-top p-3"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title" style={{ color: "#00114C" }}>
                <b>Digital Marketing</b>
              </h5>
              {/* <p className="card-text">Lead Instructor/Co-Founder</p>
               */}
              <ul class="">
                <li class="bullet">SEO and SEM</li>
                <li class="bullet">Social Media Marketing </li>
                <li class="bullet">Ad’s Campaign</li>
                <li class="bullet">Influencer Marketing</li>
                <li class="bullet">Display Advertising </li>
                <li class="bullet">Content Marketing</li>
                <li class="bullet">With loads of benefits</li>
              </ul>
              <div className="mt-5">
                <h4 className="text-center " style={{ color: "#00114C" }}>
                  Payment Plan
                </h4>
                <ul class="bullet">
                  <li class="bullet">Full payment: &#8358; 200,000</li>
                  <li class="bullet text-wrap">
                    Spread Payment: Available but with extra charges
                  </li>
                </ul>
                <a
                  href="https://drive.google.com/file/d/1eHdIFsltv5h62xuoko6FUlijLciti9_D/view?usp=drivesdk"
                  className=""
                  style={{ color: "#F27216" }}
                >
                  <p className="text-center textBold"> View Brochure</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FRONTEND DEVELOPMENT */}
        <div className="col-lg-4 col-md-6 col-sm-10 px-4 d-flex justify-content-center align-items-stretch">
          {" "}
          <div
            className="card mb-5"
            style={{
              borderStyle: "solid",
              borderWidth: "3px",
              borderColor: "#00114C",
              borderRadius: "10px",
            }}
          >
            <img src={frontend} className="card-img-top p-3" alt="..." />
            <div className="card-body">
              <h5 className="card-title" style={{ color: "#00114C" }}>
                <b>Frontend Development</b>
              </h5>
              <ul class="">
                <li class="bullet">HTML and CSS</li>
                <li class="bullet">Bootstrap </li>
                <li class="bullet">Intro to UI/UX</li>
                <li class="bullet">JavaScript</li>
                <li class="bullet">Git/GitHub</li>
                <li class="bullet">React</li>
                <li class="bullet">Intro to Product Management</li>
                <li class="bullet">With loads of benefits</li>
              </ul>
              <div className="mt-4">
                <h4 className="text-center " style={{ color: "#00114C" }}>
                  Payment Plan
                </h4>
                <ul class="bullet">
                  <li class="bullet">Full payment: &#8358; 300,000</li>
                  <li class="bullet">
                    Spread Payment: Available but with extra charges{" "}
                  </li>
                </ul>
                <a
                  href="https://drive.google.com/file/d/10xKTPI2zcRIOkvOckxuYlrQfbEU3Z_la/view?usp=sharing"
                  className=""
                  style={{ color: "#F27216" }}
                >
                  <p className="text-center textBold"> View Brochure</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FULL STACK DEVELOPMENT */}
        <div className="col-lg-4 col-md-6 col-sm-10 px-4 d-flex justify-content-center align-items-stretch">
          {" "}
          <div
            className="card mb-5"
            style={{
              borderStyle: "solid",
              borderWidth: "3px",
              borderColor: "#00114C",
              borderRadius: "10px",
            }}
          >
            <img
              src={fullstack}
              className="card-img-top p-3"
              style={{ maxHeight: "220px", maxWidth: "400px" }}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title" style={{ color: "#00114C" }}>
                <b>Fullstack Development</b>
              </h5>
              <ul class="">
                <li class="bullet">HTML and CSS</li>
                <li class="bullet">Bootstrap </li>
                <li class="bullet">Intro to UI/UX</li>
                <li class="bullet">JavaScript</li>
                <li class="bullet">Git/GitHub</li>
                <li class="bullet">React</li>
                <li class="bullet">TypeScript</li>
                <li class="bullet">Nodejs</li>
                <li class="bullet">Express</li>
                <li class="bullet">Database(SQL/NoSQL)</li>
              </ul>
              <div className="mt-4">
                <h4 className="text-center " style={{ color: "#00114C" }}>
                  Payment Plan
                </h4>
                <ul class="bullet">
                  <li class="bullet">Full payment: &#8358; 600,000</li>
                  <li class="bullet">
                    Spread Payment: Available but with extra charges{" "}
                  </li>
                </ul>
                {/* <a
                  href="https://drive.google.com/file/d/10xKTPI2zcRIOkvOckxuYlrQfbEU3Z_la/view?usp=sharing"
                  className=""
                  style={{ color: "#F27216" }}
                >
                  <p className="text-center textBold"> View Brochure</p>
                </a> */}
                <p className="text-center">
                  Brochure would be made available soon
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CUSTOMER EXPERIENCE */}
        <div className="col-lg-4 col-md-6 col-sm-10 px-4 d-flex justify-content-center align-items-stretch">
          {" "}
          <div
            className="card mb-5"
            style={{
              borderStyle: "solid",
              borderWidth: "3px",
              borderColor: "#00114C",
              borderRadius: "10px",
            }}
          >
            <div>
              {" "}
              <img
                src={customerexperience}
                style={{ maxHeight: "220px", maxWidth: "400px" }}
                className="card-img-top p-3"
                alt="..."
              />
            </div>

            <div className="card-body">
              <h5 className="card-title" style={{ color: "#00114C" }}>
                <b>Customer Experience</b>
              </h5>
              <ul class="">
                <li class="bullet">Understanding Tech Product</li>
                <li class="bullet">
                  Customer Service and Support <br />
                  Fundamentals{" "}
                </li>
                <li class="bullet">Customer Effort</li>
                <li class="bullet">Customer User Journey</li>
                <li class="bullet">Customer Strategy</li>
                <li class="bullet">With loads of benefits</li>
              </ul>
              <div className="mt-5">
                <h4 className="text-center " style={{ color: "#00114C" }}>
                  Payment Plan
                </h4>
                <ul class="">
                  <li class="bullet">Full payment: &#8358; 100,000</li>
                  <li class="bullet">
                    Spread Payment: Available but with extra charges{" "}
                  </li>
                </ul>
                <a
                  href="https://drive.google.com/file/d/1Esp9F04hXVyOV1M1pji1beFNNVAeXeZn/view?usp=drivesdk"
                  className=""
                  style={{ color: "#F27216" }}
                >
                  <p className="text-center textBold"> View Brochure</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CYBERSECURITY */}
        <div className="col-lg-4 col-md-6 col-sm-10 px-4 d-flex justify-content-center align-items-stretch">
          {" "}
          <div
            className="card mb-5"
            style={{
              borderStyle: "solid",
              borderWidth: "3px",
              borderColor: "#00114C",
              borderRadius: "10px",
            }}
          >
            <img
              src={cyberSecurity}
              className="card-img-top p-3"
              style={{ maxHeight: "220px", maxWidth: "400px" }}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title" style={{ color: "#00114C" }}>
                <b>Cyber Security</b>
              </h5>
              <ul class="">
                <li class="bullet">Network security</li>
                <li class="bullet">Operating system security</li>
                <li class="bullet">Application security</li>
                <li class="bullet">Cloud security</li>
                <li class="bullet">Incident response</li>
                <li class="bullet">System Hacking</li>
                <li class="bullet">Cryptography</li>
                <li class="bullet">Security awareness and training</li>
                <li class="bullet">Ethical hacking</li>
              </ul>
              <div className="mt-4">
                <h4 className="text-center " style={{ color: "#00114C" }}>
                  Payment Plan
                </h4>
                <ul class="bullet">
                  <li class="bullet">Full payment: &#8358; 500,000</li>
                  <li class="bullet">
                    Spread Payment: Available but with extra charges{" "}
                  </li>
                </ul>
                <a
                  href="https://drive.google.com/file/d/1GSPtgjczzEzC-BwxTeeddfT_gF3yZxiH/view?usp=sharing"
                  className=""
                  style={{ color: "#F27216" }}
                >
                  <p className="text-center textBold"> View Brochure</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* DATA ANALYSIS */}
        <div className="col-lg-4 col-md-6 col-sm-10 px-4 d-flex justify-content-center align-items-stretch">
          {" "}
          <div
            className="card mb-5"
            style={{
              borderStyle: "solid",
              borderWidth: "3px",
              borderColor: "#00114C",
              borderRadius: "10px",
            }}
          >
            <div>
              {" "}
              <img
                src={dataanalysis}
                className="card-img-top p-3"
                style={{ maxHeight: "220px", maxWidth: "400px" }}
                alt="..."
              />
            </div>

            <div className="card-body">
              <h5 className="card-title" style={{ color: "#00114C" }}>
                <b>Data Analysis</b>
              </h5>
              <ul class="">
                <li class="bullet">Advance Excel</li>
                <li class="bullet">Power BI </li>
                <li class="bullet">Problem Solving</li>
                <li class="bullet">Data Communication</li>
                <li class="bullet">SQL</li>
                <li class="bullet">Python</li>
                <li class="bullet">With loads of benefits</li>
              </ul>
              <div className="mt-4">
                <h4 className="text-center " style={{ color: "#00114C" }}>
                  Payment Plan
                </h4>
                <ul class="">
                  <li class="bullet">Full payment: &#8358; 300,000</li>
                  <li class="bullet">
                    Spread Payment: Available but with extra charges{" "}
                  </li>
                </ul>
                <a
                  href="https://drive.google.com/file/d/1QPH7AbMn-FkXxDWE0UhpPiGMOD4yVq14/view?usp=sharing"
                  className=""
                  style={{ color: "#F27216" }}
                >
                  <p className="text-center textBold"> View Brochure</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* UI/UX */}
        <div className="col-lg-4 col-md-6 col-sm-10 px-4 d-flex justify-content-center align-items-stretch">
          {" "}
          <div
            className="card mb-5"
            style={{
              borderStyle: "solid",
              borderWidth: "3px",
              borderColor: "#00114C",
              borderRadius: "10px",
            }}
          >
            <img
              src={uiux}
              className="card-img-top p-3"
              style={{ maxHeight: "220px", maxWidth: "400px" }}
              alt="..."
            />
            <div className="card-body ">
              <h5 className="card-title">
                <b>Product Design (UI/UX) </b>
              </h5>
              <ul class="">
                <li class="bullet">Design Research and Strategy</li>
                <li class="bullet">Prototyping and Wireframing </li>
                <li class="bullet">Usability Test</li>
                <li class="bullet">Responsive Web Design</li>
                <li class="bullet">With loads of benefits</li>
              </ul>

              <div className="mt-5">
                {" "}
                <h4 className="text-center " style={{ color: "#00114C" }}>
                  Payment Plan
                </h4>
                <ul class="bullet">
                  <li class="bullet">Full payment: &#8358; 300,000</li>
                  <li class="bullet">
                    Spread Payment: Available but with extra charges{" "}
                  </li>
                </ul>
                <a
                  href="https://drive.google.com/file/d/1tmgT5lnRHWm_AIs0Ph9x_eB2xUxORpn1/view?usp=drivesdk"
                  className=""
                  style={{ color: "#F27216" }}
                >
                  <p className="text-center textBold"> View Brochure</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CREATIVE DESIGN */}
        <div className="col-lg-4 col-md-6 col-sm-10 px-4 d-flex justify-content-center align-items-stretch">
          {" "}
          <div
            className="card mb-5"
            style={{
              borderStyle: "solid",
              borderWidth: "3px",
              borderColor: "#00114C",
              borderRadius: "10px",
            }}
          >
            <img
              src={creativeDesign}
              className="card-img-top p-3"
              style={{ maxHeight: "220px", maxWidth: "400px" }}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title" style={{ color: "#00114C" }}>
                <b>Creative Design</b>
              </h5>
              <ul class="">
                <li class="bullet">Fundamentals of Desigs</li>
                <li class="bullet">Typography</li>
                <li class="bullet">Color</li>
                <li class="bullet">Layout and Composition</li>
                <li class="bullet">Introduction to Adobe Illustration</li>
                <li class="bullet">Introduction to Adobe Photoshop</li>
                <li class="bullet">Create Design for Prints and Web</li>
                <li class="bullet">Photo editing and Manipulation</li>
                <li class="bullet">Logo Design</li>
              </ul>
              <div className="mt-4">
                <h4 className="text-center " style={{ color: "#00114C" }}>
                  Payment Plan
                </h4>
                <ul class="bullet">
                  <li class="bullet">Full payment: &#8358; 150,000</li>
                  <li class="bullet">
                    Spread Payment: Available but with extra charges{" "}
                  </li>
                </ul>
                <a
                  href="https://drive.google.com/file/d/1eh_BClbGaWBULAQukDcKD8ZSPIZx9ReL/view?usp=sharing"
                  className=""
                  style={{ color: "#F27216" }}
                >
                  <p className="text-center textBold"> View Brochure</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* PRODUCT MANAGEMENT */}
        <div className="col-lg-4 col-md-6 col-sm-10 px-4 d-flex justify-content-center align-items-stretch">
          {" "}
          <div
            className="card mb-5"
            style={{
              borderStyle: "solid",
              borderWidth: "3px",
              borderColor: "#00114C",
              borderRadius: "10px",
            }}
          >
            <img
              src={productmgt}
              className="card-img-top p-3"
              style={{ maxHeight: "220px", maxWidth: "400px" }}
              alt="..."
            />
            <div className="card-body ">
              <h5 className="card-title" style={{ color: "#00114C" }}>
                <b>Product Management</b>
              </h5>
              {/* <ul class="">
                <li class="bullet">Fundamentals of Desigs</li>
                <li class="bullet">Typography</li>
                <li class="bullet">Color</li>
                <li class="bullet">Layout and Composition</li>
                <li class="bullet">Introduction to Adobe Illustration</li>
                <li class="bullet">Introduction to Adobe Photoshop</li>
                <li class="bullet">Create Design for Prints and Web</li>
                <li class="bullet">Photo editing and Manipulation</li>
                <li class="bullet">Logo Design</li>
              </ul> */}
              <p className="text-center p-5 mt-5 mb-2 fs-3">
                More Details coming soon...
              </p>
              <div className="mt-4">
                <h4 className="text-center " style={{ color: "#00114C" }}>
                  Payment Plan
                </h4>
                <ul class="bullet">
                  <li class="bullet">Full payment: &#8358; 200,000</li>
                  <li class="bullet">
                    Spread Payment: Available but with extra charges{" "}
                  </li>
                </ul>
                {/* <a
                  href="https://drive.google.com/file/d/10xKTPI2zcRIOkvOckxuYlrQfbEU3Z_la/view?usp=sharing"
                  className=""
                  style={{ color: "#F27216" }}
                >
                  <p className="text-center textBold"> View Brochure</p>
                </a> */}
                <p className="text-center">
                  Brochure would be made available soon
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* GET STARTED BUTTON */}
        <div className="text-center">
          <SalesPageSignInButton />
        </div>
      </div>
      {/* <h3 className="text-center py-5 ">OUR AVAILABLE COURSES</h3>
        <div class="row justify-content-evenly">
            
  <div className="col-lg-4 col-md-2 col-sm-12 pb-5">
    <div className="card h-100">
      <img src={digitalmarketing} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col-lg-4 col-md-2 col-sm-12 pb-5">
    <div className="card h-100">
      <img src={frontend} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a short card.</p>
      </div>
    </div>
  </div>
  <div className="col-lg-4 col-md-2 col-sm-12 pb-5">
    <div className="card h-100">
      <img src={customerexperience} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div className="col-lg-4 col-md-2 col-sm-12 pt-5">
    <div className="card h-100">
      <img src={dataanalysis} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col-lg-4 col-md-2 col-sm-12 pt-5">
    <div className="card h-100">
      <img src={uiux} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div> */}
    </div>
  );
};

export default InnkeeperTraining;
