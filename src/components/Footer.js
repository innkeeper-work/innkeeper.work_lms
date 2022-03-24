import React from 'react';
import innkeeperlogo from '../images/innkeeperlogo.png';
import {
  FacebookIcon,
  WhatsAppIcon,
  InstagramIcon,
  LinkedInIcon,
} from '../components/Icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="text-left text-lg-start bgSoft">
        <div className="card-body herotextWhite">
          <div className="container text-left text-lg-start mt-5">
            <div className="row mt-3 ms-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <img src={innkeeperlogo} alt="Innkeeper.work" />

                <div className="mt-2 pt-2">
                  <a
                    href=" https://goo.gl/maps/6TWAwZbE7ab3rLoz9"
                    className="mt-4 pt-2 text-reset"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    The 8thGear Hub, 11b Colin Onabule Crescent, Diamond Estate
                    Off CMD Road (beside Secretariat/Magodo gate) Lagos Nigeria.
                  </a>
                  <div className="mt-2 pt-2">
                    +234 (0) 809-846-8885
                    <p>
                      <a
                        href="mailto:info@innkeeper.work"
                        className="text-reset"
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: 'none' }}
                      >
                        info@innkeeper.work
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 d-none d-md-block ms-5 ">
                <h5 className="text-uppercase fw-bold mb-4">Menu</h5>
                <p>
                  <Link
                    to="/"
                    className="text-reset"
                    style={{ textDecoration: 'none' }}
                  >
                    Home
                  </Link>
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
                  <Link
                    to="contact"
                    className="text-reset"
                    style={{ textDecoration: 'none' }}
                  >
                    Contact
                  </Link>
                </p>
                <a
                  href="#faq"
                  className="text-reset"
                  style={{ textDecoration: 'none' }}
                >
                  FAQ
                </a>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 d-none d-md-block me-5">
                <h5 className="text-uppercase fw-bold mb-4">Courses</h5>
                <Link
                  to="businesssupportacademy"
                  className="text-reset btnText d-flex justify-content-start  pb-3"
                  style={{ textDecoration: 'none' }}
                >
                  Business Support Academy
                </Link>

                <Link
                  to="techacademy"
                  className="text-reset btnText d-flex justify-content-start  pb-3"
                  style={{ textDecoration: 'none' }}
                >
                  Tech Academy
                </Link>

                <Link
                  to="employability"
                  className="text-reset btnText d-flex justify-content-start  pb-3"
                  style={{ textDecoration: 'none' }}
                >
                  Employability / Soft&nbsp;Skills
                </Link>

                <Link
                  to="entrepreneurship"
                  className="text-reset btnText d-flex justify-content-start  pb-3"
                  style={{ textDecoration: 'none' }}
                >
                  Entrepreneurship
                </Link>
              </div>

              <div className=" col-md-2 col-lg-2 col-xl-2 mx-auto gs-5 mx-auto mb-md-0 mb-4 sm-3">
                <div className="d-flex justify-content-evenly d-md-block">
                  <a
                    href="https://www.facebook.com/innkeeper.work/"
                    className="btnText d-flex justify-content-end px-3 pb-3 text-reset"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <FacebookIcon />
                    <p className="d-none d-md-block ms-3">Facebook</p>
                  </a>

                  <a
                    href="https://wa.link/nc43zv"
                    className="btnText d-flex justify-content-end px-3 pb-3 text-reset"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <WhatsAppIcon />
                    <p className="d-none d-md-block ms-3">WhatsApp</p>
                  </a>

                  <a
                    href="https://www.instagram.com/innkeeper.work/"
                    className="btnText d-flex justify-content-end px-3 pb-3 text-reset"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <InstagramIcon />
                    <p className="d-none d-md-block ms-3">Instagram</p>
                  </a>

                  <a
                    href="https://www.linkedin.com/company/innkeeper-work/"
                    className="btnText d-flex justify-content-end px-3 pb-3 text-reset"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <LinkedInIcon />
                    <p className="d-none d-md-block ms-3 me-3">Linkedin</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
