import React from "react";
import infoimage from "../../images/infoimage.png";
import { Link } from "react-router-dom";
import { CourseinfoHero } from "../../components/Hero";
import adamu from "../../images/adamu.png";
import { ApplyNowButton } from "../../components/Buttons";
import { CourseCards } from "../../components/Card";
import techacademy from "../../data/tech_academy_details/techacademy.json";

let SecurityauditInfo = () => {
  return (
    <div>
      <CourseinfoHero coursename="Security Audit" />
      <div className="row justify-content-center">
        <div className="col-lg-7 col-md-6 col-sm-10">
          <AboutSecurityaudit />
          <SecurityauditApplyHere />
        </div>
        <div className="col-lg-4 col-md-5 col-sm-10 sectiontwoBg mt-5 h-100">
          {/* <RiskmgtReq /> */}
          <SecurityauditEnrol />
          <SecurityauditInstructor />
        </div>
      </div>
      <SecurityauditRelated />
    </div>
  );
};

let AboutSecurityaudit = () => {
  return (
    <div className="">
      <div className="navbar-expand-lg">
        <div className="mt-5">
          <ul className="navbar-nav ">
            <li className="">
              <div className="d-flex px-3">
                <div className="px-2">
                  <i class="bi bi-book iconCol"></i>
                </div>

                <div>
                  <h3>COURSES</h3>
                  <p>04 Weeks</p>
                </div>
              </div>
            </li>
            <li className="">
              <div className="d-flex px-3">
                <div className="px-2">
                  <i class="bi bi-clock iconCol"></i>
                </div>

                <div>
                  <h3>DURATION</h3>
                  <p>50 Hours</p>
                </div>
              </div>
            </li>
            <li className="">
              <div className="d-flex px-3">
                <div className="px-2">
                  <i class="bi bi-wallet2 iconCol"></i>
                </div>
                <div>
                  <h3>FEE</h3>
                  <p>200,000.00</p>
                </div>
              </div>
            </li>
            <li className="px-3">
              <ApplyNowButton />
            </li>
          </ul>
        </div>
      </div>
      <img src={infoimage} className="card-img-top" alt="..." />
      <div className="card-body">
        <h3 className="card-title">About Course</h3>
        <p className="card-text">
          This course introduces key processes, systems and documentation used
          in security auditing for organizations. Real world use cases are
          utilized to understand changes required to improve the integrity of
          systems in organizations to run efficiently or effectively.
        </p>
      </div>
    </div>
  );
};

let SecurityauditApplyHere = () => {
  return (
    <div className="card-body">
      <h3 className="card-title">How to Apply</h3>
      <ul className="list-content">
        <li className="list-item pb-2">
          Read about the course content and indicate interest.
        </li>
        <li className="list-item pb-2">
          Select a payment/enrolment method HERE.
        </li>
        <li className="list-item pb-2">
          Except you pay the stipulated amount, every other course enrolment
          method will require the admin to permit you to class.
        </li>
        <li className="list-item pb-2">
          Alternatively, you can sign up to begin class HERE.
        </li>
        <li className="list-item pb-2">
          Go to your e-mail and complete registration via the link that will be
          sent to you.
        </li>
        <li className="list-item pb-2">
          Then from your dashboard, click all courses to display the list of
          courses available according to academy, then request for your desired
          course.
        </li>
      </ul>
    </div>
  );
};

// let RiskmgtReq = () => {
//   return (
//     <div className="card-body">
//       <h3 className="card-title">Requirements</h3>
//       <ul className="list-content">
//         <li className="list-item pb-2">
//           Working with, maintaining, and developing with SQL Server.
//         </li>
//         <li className="list-item pb-2">
//           Experience with Azure, such as deploying and managing resources.
//         </li>
//       </ul>
//     </div>
//   );
// };

let SecurityauditEnrol = () => {
  return (
    <div className="card-body">
      <h3 className="card-title">Available Enrolment Options</h3>
      <ul className="list-content">
        <li className="list-item pb-2">
          Click to{" "}
          <Link to="" className="text-decoration-none">
            <b>Pay Now</b>
          </Link>
        </li>
        <p className="">NB: Instalmental payment is accepted (T and C Apply)</p>
        <li className="list-item pb-2">
          Apply for Student loan{" "}
          <Link to="" className="text-decoration-none">
            <b>HERE</b>
          </Link>
        </li>
        <li className="list-item pb-2">
          Apply via our training bond{" "}
          <Link to="" className="text-decoration-none">
            <b>HERE</b>
          </Link>
        </li>
        <li className="list-item pb-2">Apply for scholarship.</li>
        <p className="">
          (See available ones{" "}
          <Link to="" className="text-decoration-none">
            <b>HERE</b>
          </Link>
          )
        </p>
      </ul>
    </div>
  );
};

let SecurityauditInstructor = () => {
  return (
    <div className="mb-3">
      <div className="instructor_card d-flex align-items-md-center">
        <div>
          <img
            src={adamu}
            alt=""
            width="100px"
            height="100px"
            className="rounded-circle"
          />
        </div>

        <div className="ms-3">
          <h5>About Instructor</h5>
          <p>AbdulRahman Adamu</p>
          <p>Frontend Developer</p>
        </div>
        {/* <Link to=""></Link> */}
      </div>
    </div>
  );
};

let SecurityauditRelated = () => {
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
export default SecurityauditInfo;
