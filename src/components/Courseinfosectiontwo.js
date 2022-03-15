import React from "react";
import { Link } from "react-router-dom";
import adamu from "../images/adamu.png";

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
      <h3 className="card-title">Requirements</h3>
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
      <h3 className="card-title">Available Enrolment Options</h3>
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
    <div className="mb-3">
      <div className="instructor_card d-flex align-items-md-center">
        <div>
          <img
            src={adamu}
            width="100px"
            height="100px"
            className="rounded-circle"
          />
        </div>

        <div className="ms-3 lh-lg">
          <h5>About Instructor</h5>
          <p>Name</p>
          <p>Role</p>
        </div>
      </div>
      {/* <div className="row g-0">
        <div className="col-md-4">
          <img
            src={adamu}
            className="img-thumbnail mx-auto rounded-circle text-center"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
           
            <h5 className="card-title">Card Title</h5>
            <p className="card-text">Tech</p>
            <div className="card-text d-flex justify-content-end">
              
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus, praesentium.
              </p>
              
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};
