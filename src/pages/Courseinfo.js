import React from 'react';
import { CoursepageHero } from '../components/Hero';
// import { ApplyNowButton } from "../components/Buttons";
import { Sectionone } from '../components/Courseinfosectionone';
import { Sectiontwo } from '../components/Courseinfosectiontwo';
import { CourseCards } from '../components/Card';
import techacademy from '../data/tech_academy_details/techacademy.json';
import AccessAlarmsIcon from '@material-ui/icons/AccessAlarms';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import Footer from '../components/Footer';

let CourseInfo = () => {
  return (
    <div>
      <CoursepageHero />
      <CourseDuration />
      <div className="row justify-content-center">
        <div className="col-lg-7 col-md-6 col-sm-10">
          <Sectionone />
        </div>
        <div className="col-lg-4 col-md-5 col-sm-10 sectiontwoBg my-5">
          <Sectiontwo />
        </div>
      </div>
      <BigData />
      <Footer />
    </div>
  );
};

let CourseDuration = () => {
  return (
    <div className="d-flex justify-content-start">
      <div className="">
        <div className="iconCol">
          <LibraryBooksIcon />
        </div>
        <h3>COURSES</h3>
        <p>08 Weeks</p>
      </div>
      <div className="">
        <div className="iconCol">
          <AccessAlarmsIcon />
        </div>
        <h3>DURATION</h3>
        <p>70 Hours</p>
      </div>
      <div className="">
        <div className="iconCol">
          <CreditCardIcon />
        </div>
        <h3>FEE</h3>
        <p>200,000.00</p>
      </div>
    </div>
  );
};

let BigData = () => {
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
export default CourseInfo;
