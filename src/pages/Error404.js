import React from 'react';
import img404 from '../images/404.png';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import { Home } from '../components/Buttons';
import { ContactUs } from '../components/Buttons';

const Error404 = () => {
  return (
    <div className="row">
      <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12 g-0">
        <img className="card-img-top" src={img404} alt="error_page" />
      </div>
      <div className="col-md-5 m-auto">
        <h5 className="herotextColored">UH OH! Page Not Found</h5>
        <p>
          The page you are looking for does not exist. Please click on the
          buttons below to either go back to the homepage or contact us
        </p>
        <div className="btn">
          <Home />
        </div>
        <div className="btn">
          <ContactUs />
        </div>
        <div>
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <LinkedInIcon />
        </div>
      </div>
    </div>
  );
};

export default Error404;
