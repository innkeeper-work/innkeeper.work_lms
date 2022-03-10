import React from "react";
import { Link } from "react-router-dom";
import abdulrahman from "../images/abdulrahman.png";

export let Sectiontwo = () => {
  return (
    <div>
      <Requirements />
      <EnrolOptions />
      <AboutInstructor />
    </div>
  );
};

let Requirements = () => {
  return (
    <div className="card-body">
      <h5 className="card-title">Requirements</h5>
      <ul className="">
        <li className="list-item pb-2">Good and functioning Laptop.</li>
        <li className="list-item pb-2">Reliable Internet connection.</li>
        <li className="list-item pb-2">Ability to operate a computer.</li>
        <li className="list-item pb-2">Google/Yahoo account.</li>
        <li className="list-item pb-2">Domain name and hosting server</li>
        <li className="list-item pb-2">
          Code editor software (e.g. notepad++, visual studio code, sublime text
          etc)
        </li>
        <li className="list-item pb-2">Flash drive or external hard drive.</li>
        <li className="list-item pb-2">
          Basic knowledge of computer's software applications is useful.
        </li>
      </ul>
    </div>
  );
};

let EnrolOptions = () => {
  return (
    <div className="card-body">
      <h5 className="card-title">Requirements</h5>
      <ul className="">
        <li className="list-item pb-2">Click to Pay Now</li>
        <p className="">NB: Instalmental payment is accepted (T and C Apply)</p>
        <li className="list-item pb-2">Apply for Student loan HERE</li>
        <li className="list-item pb-2">Apply via our training bond HERE</li>
        <li className="list-item pb-2">Apply for scholarship.</li>
        <p className="">(See available ones HERE)</p>
      </ul>
    </div>
  );
};

let AboutInstructor = () => {
  return (
    <div className="card-body">
      <h5 className="card-title">About the Instructor</h5>
      <div className="mb-3">
        <div className="row">
          <div className="col-md-4">
            <img
              src={abdulrahman}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <p className="card-title">AbdulRahman Adamu</p>
              <p className="card-text">Frontend Developer</p>
              <Link to="" target="_blank" rel="noreferrer">
                <i
                  className="fa fa-linkedin iconCol ms-3"
                  aria-hidden="true"
                ></i>
              </Link>
              <Link to="" target="_blank" rel="noreferrer">
                <i
                  className="fa fa-facebook iconCol ms-3"
                  aria-hidden="true"
                ></i>
              </Link>
              <Link to="" target="_blank" rel="noreferrer">
                <i
                  className="fa fa-instagram iconCol ms-3"
                  aria-hidden="true"
                ></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
