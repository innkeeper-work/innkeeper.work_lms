import React from 'react';
import img404 from '../images/404.png';
import { FacebookIcon } from '../components/Icons';
import { TwitterIcon } from '../components/Icons';
import { InstagramIcon } from '../components/Icons';
import { LinkedInIcon } from '../components/Icons';
import { Home } from '../components/Buttons';
import { ContactUs } from '../components/Buttons';

const Error404 = () => {
  return (
    <div className="row">
      <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12 g-0">
        <div className="card-body  col-md-6 col-lg-6 col-sm-6 col-xs-12 g-2 m-auto d-flex justify-content-center d-sm-none">
          <h5 className="herotextColored">
            <strong>UH OH! Page Not Found</strong>
          </h5>
        </div>
        <img className="card-img-top" src={img404} alt="error_page" />
      </div>

      <div className="card-body  col-md-6 col-lg-6 col-sm-6 col-xs-12 g-2 m-auto">
        <h5 className="herotextColored d-none d-sm-block">
          <strong>UH OH! Page Not Found</strong>
        </h5>
        <p className="pb-4">
          The page you are looking for does not exist. Please click on the
          buttons below to either go back to the homepage or contact us
        </p>

        <div className="row d-flex justify-content-center g-4">
          <div className="btn d-flex justify-content-evenly g-2 p-auto">
            <Home />
            <ContactUs />
          </div>

          <div className="herotextColored d-flex justify-content-evenly g-2 p-auto">
            <FacebookIcon className="" />
            <InstagramIcon className />
            <TwitterIcon className />
            <LinkedInIcon className />
          </div>
          <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404;
