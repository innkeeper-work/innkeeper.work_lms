import { CourseinfoHero } from "../components/Hero";
import scholarshipbg from "../images/scholarshipbg.png";
import { CreditCardIcon } from "../components/Icons";
import { Link } from "react-router-dom";

let Scholarships = () => {
  return (
    <>
      <CourseinfoHero coursename="Available Scholarships" />
      <Scholarship />
    </>
  );
};

let Scholarship = () => {
  return (
    <div className="container-fluid py-4">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-4 mt-5">
          <img src={scholarshipbg} class="card-img" alt="..." />
        </div>
        <div className="col-lg-6 col-md-6 my-auto">
          <div className="card-body">
            <h5 className="card-title">
              Available scholarships are listed below, kindly select your choice
              to apply:{" "}
            </h5>
            <ul className="list-content ">
              <div className="d-flex">
                <div className="px-2">{/* <CreditCardIcon /> */}</div>
                <div>
                  <li className="">
                    <Link to="" className="scholarship text-decoration-none">
                      <b>LSETF/USADF</b>
                    </Link>
                  </li>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scholarships;
