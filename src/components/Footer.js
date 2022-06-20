// External import
import React from "react";
import { Link } from "react-router-dom";
import {
  FacebookIcon,
  WhatsAppIcon,
  InstagramIcon,
  LinkedInIcon,
} from "../components/Icons";

// Images
import innkeeperlogo from "../assets/images/innkeeperlogo.png";

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
                    style={{ textDecoration: "none" }}
                  >
                    The 8thGear Hub, 11b Colin Onabule Crescent, Diamond Estate
                    Off CMD Road (beside Secretariat/Magodo gate) Lagos Nigeria.
                  </a>
                  <div className="mt-2 pt-2">
                    <a
                      href="tel:+2348098468885"
                      className="text-reset"
                      style={{ textDecoration: "none" }}
                    >
                      {" "}
                      +234 (0) 809-846-8885
                    </a>
                    <p>
                      <a
                        href="mailto:info@innkeeper.work"
                        className="text-reset"
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        info@innkeeper.work
                      </a>
                    </p>
                    <a
                      href="/privacypolicy"
                      className="text-reset"
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      Privacy and Terms
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 d-none d-md-block ms-5 ">
                <h5 className="text-uppercase fw-bold mb-4">Menu</h5>
                <p>
                  <Link
                    to="/"
                    className="text-reset"
                    style={{ textDecoration: "none" }}
                  >
                    Home
                  </Link>
                </p>
                <p>
                  <a
                    href="/careers"
                    className="text-reset"
                    style={{ textDecoration: "none" }}
                  >
                    Careers
                  </a>
                </p>
                <p>
                  <Link
                    to="contact"
                    className="text-reset"
                    style={{ textDecoration: "none" }}
                  >
                    Contact
                  </Link>
                </p>
                <a
                  href="#faq"
                  className="text-reset"
                  style={{ textDecoration: "none" }}
                >
                  FAQ
                </a>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 d-none d-md-block me-5">
                <h5 className="text-uppercase fw-bold mb-4">Courses</h5>
                <Link
                  to="businesssupportacademy"
                  className="text-reset btnText d-flex justify-content-start  pb-3"
                  style={{ textDecoration: "none" }}
                >
                  Business Support Academy
                </Link>

                <Link
                  to="techacademy"
                  className="text-reset btnText d-flex justify-content-start  pb-3"
                  style={{ textDecoration: "none" }}
                >
                  Tech Academy
                </Link>

                <Link
                  to="employability"
                  className="text-reset btnText d-flex justify-content-start  pb-3"
                  style={{ textDecoration: "none" }}
                >
                  Employability / Soft&nbsp;Skills
                </Link>

                <Link
                  to="entrepreneurship"
                  className="text-reset btnText d-flex justify-content-start  pb-3"
                  style={{ textDecoration: "none" }}
                >
                  Entrepreneurship
                </Link>
              </div>

              <div className=" col-md-2 col-lg-2 col-xl-2 mx-auto gs-5 mx-auto mb-md-0 mb-4 sm-3">
                <div className="d-flex justify-content-evenly d-md-block">
                  <a
                    href="https://www.facebook.com/innkeeper.work/"
                    className="btnText d-flex justify-content-end px-3 pb-2 text-reset"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <FacebookIcon />
                    <p className="d-none d-md-block ms-3 me-1">Facebook</p>
                  </a>

                  <a
                    href="https://wa.link/nc43zv"
                    className="btnText d-flex justify-content-end px-3 pb-2 text-reset"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <WhatsAppIcon />
                    <p className="d-none d-md-block ms-3">WhatsApp</p>
                  </a>

                  <a
                    href="https://www.instagram.com/innkeeper.work/"
                    className="btnText d-flex justify-content-end px-3 pb-1 text-reset"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <InstagramIcon />
                    <p className="d-none d-md-block ms-3">Instagram</p>
                  </a>

                  <a
                    href="https://www.linkedin.com/company/innkeeper-work/"
                    className="btnText d-flex justify-content-end px-3 pb-3 text-reset"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
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

// {
//    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 d-none d-md-block ms-5 ">
//                 <h5 className="text-uppercase fw-bold mb-4">Menu</h5>
//                 <ul className="list-unstyled lh-lg">
//                   <li className="">
//                     <Link
//                       to="/"
//                       className="text-reset"
//                       style={{ textDecoration: "none" }}
//                     >
//                       Home
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/careers"
//                       className="text-reset"
//                       style={{ textDecoration: "none" }}
//                     >
//                       Careers
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="contact"
//                       className="text-reset"
//                       style={{ textDecoration: "none" }}
//                     >
//                       Contact
//                     </Link>
//                   </li>
//                   <li>
//                     <a
//                       href="#faq"
//                       className="text-reset"
//                       style={{ textDecoration: "none" }}
//                     >
//                       FAQ
//                     </a>{" "}
//                   </li>
//                 </ul>
//               </div>
// }
