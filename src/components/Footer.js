import React from 'react';
import innkeeperlogo from '../images/innkeeperlogo.png';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start bgSoft">
        <div className="card-body herotextWhite">
          <div className="container text-center text-lg-start mt-5">
            <div className="row mt-3">
              <div
                className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4"
                style={{ textAlign: 'left' }}
              >
                <img src={innkeeperlogo} alt="Innkeeper.work" />
                <h6 className="text-uppercase fw-bold mb-4">
                  <span />
                </h6>
                <p>
                  The 8thGear Hub, 11b Colin Onabule Crescent, Diamond Estate
                  Off CMD Road (beside Secretariat/Magodo gate) Lagos Nigeria.
                  +234 (0) 809-846-8885 info@innkeeper.work
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 d-none d-md-block">
                <h6 className="text-uppercase fw-bold mb-4">Menu</h6>
                <p>
                  <a
                    href="#!"
                    className="text-reset"
                    style={{ textDecoration: 'none' }}
                  >
                    Home
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className="text-reset"
                    style={{ textDecoration: 'none' }}
                  >
                    About Us
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className="text-reset"
                    style={{ textDecoration: 'none' }}
                  >
                    Events
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className="text-reset"
                    style={{ textDecoration: 'none' }}
                  >
                    Contact
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className="text-reset"
                    style={{ textDecoration: 'none' }}
                  >
                    FAQ
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 d-none d-md-block">
                <h6 className="text-uppercase fw-bold mb-4">Courses</h6>
                <p>
                  <a
                    href="#!"
                    className="text-reset"
                    style={{ textDecoration: 'none' }}
                  >
                    Business Support Academy
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className="text-reset"
                    style={{ textDecoration: 'none' }}
                  >
                    Tech Academy
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className="text-reset"
                    style={{ textDecoration: 'none' }}
                  >
                    Employability/Soft Skills
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    className="text-reset"
                    style={{ textDecoration: 'none' }}
                  >
                    Entrepreneurship
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 d-flex d-md-block">
                <p>
                  <a
                    className="btnText d-flex"
                    href="https://facebook.com/"
                    style={{ textDecoration: 'none', marginRight: '50px' }}
                  >
                    <FacebookIcon />
                    <p
                      className="d-none d-md-block "
                      style={{ textDecoration: 'none', marginLeft: '10px' }}
                    >
                      Facebook
                    </p>
                  </a>
                </p>
                <p>
                  <a
                    className="btnText d-flex"
                    href="https://twitter.com/"
                    style={{ textDecoration: 'none', marginRight: '50px' }}
                  >
                    <TwitterIcon />
                    <p
                      className="d-none d-md-block "
                      style={{ textDecoration: 'none', marginLeft: '10px' }}
                    >
                      {' '}
                      Twitter
                    </p>
                  </a>
                </p>
                <p>
                  <a
                    className="btnText d-flex"
                    href="https://instagram.com/"
                    style={{ textDecoration: 'none', marginRight: '50px' }}
                  >
                    <InstagramIcon />
                    <p
                      className="d-none d-md-block "
                      style={{ textDecoration: 'none', marginLeft: '10px' }}
                    >
                      {' '}
                      Instagram
                    </p>
                  </a>
                </p>
                <p>
                  <a
                    className="btnText d-flex"
                    href="https://linked.com/"
                    style={{ textDecoration: 'none', marginRight: '50px' }}
                  >
                    <LinkedInIcon />
                    <p
                      className="d-none d-md-block "
                      style={{ textDecoration: 'none', marginLeft: '10px' }}
                    >
                      {' '}
                      Linkedin
                    </p>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
