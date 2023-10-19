// External import
import React from "react";
import { Link } from "react-router-dom";

// Components
// import { SignInButton } from "../../components/Buttons/InnkeeperPhaseOneButtons";
import {
  SalesPageSignInButton,
  SignInButton,
} from "../../components/Buttons/InnkeeperPhaseOneButtons";

// Images
import innkeeperlogo197 from "../../assets/images/innkeeperlogo197.png";
import newinnkeeperlogo from "../../assets/images/newinnkeeperlogo.png";

import { FacebookIcon } from "../Icons";
import { WhatsAppIcon } from "../Icons";
import { InstagramIcon } from "../Icons";
import { LinkedInIcon } from "../Icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid px-2">
        <Link to="/" className="navbar-brand ms-2">
          {" "}
          <img src={newinnkeeperlogo} className="" alt="" />
        </Link>
        <button
          className="navbar-toggler btn"
          type=""
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDarkDropdown"
          aria-controls="navbarNavDarkDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDarkDropdown"
        >
          <a href="https://www.facebook.com/innkeeper.work/" target="_blank">
            <div className="mx-2 herotextblack" style={{ fontSize: "1.4rem" }}>
              <FacebookIcon />
            </div>
          </a>
          <a href="https://wa.link/nc43zv" target="_blank">
            <div className="mx-2 herotextblack" style={{ fontSize: "1.4rem" }}>
              <WhatsAppIcon />
            </div>
          </a>
          <a href="https://www.instagram.com/innkeeper.work/" target="_blank">
            <div className="mx-2 herotextblack" style={{ fontSize: "1.4rem" }}>
              {" "}
              <InstagramIcon />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/company/innkeeper-work/"
            target="_blank"
          >
            <div className="mx-2 herotextblack" style={{ fontSize: "1.4rem" }}>
              {" "}
              <LinkedInIcon />
            </div>
          </a>
          {/* <div className="mx-2" style={{ fontSize: "1.4rem" }}></div>
          <div className="mx-2" style={{ fontSize: "1.4rem" }}></div>
          <div className="mx-2" style={{ fontSize: "1.4rem" }}>
            {" "}
          </div>
          <div className="mx-2" style={{ fontSize: "1.4rem" }}></div> */}
          {/* <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link active mx-3"
                aria-current="page"
                style={{ color: "#000" }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                to=""
                className="nav-link dropdown-toggle mx-3"
                style={{ color: "#000" }}
                id="navbarDarkDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Upskill
              </Link>

              <ul
                className="dropdown-menu dropdown-menu-dark"
                aria-labelledby="navbarDarkDropdownMenuLink"
              >
                <li>
                  <Link to="/techacademy" className="dropdown-item">
                    Tech Academy
                  </Link>
                </li>
                <li>
                  <Link to="/businesssupportacademy" className="dropdown-item">
                    Business Support Academy
                  </Link>
                </li>
                <li>
                  <Link to="/employability" className="dropdown-item">
                    {" "}
                    Employability/Soft Skills
                  </Link>
                </li>
                <li>
                  <Link to="/entrepreneurship" className="dropdown-item">
                    Entrepreneurship
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link
                to="/underconstruction"
                className="nav-link mx-3"
                style={{ color: "#000" }}
              >
                {" "}
                Careers
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/underconstruction"
                className="nav-link mx-3"
                style={{ color: "#000" }}
              >
                {" "}
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/underconstruction"
                className="nav-link mx-3"
                style={{ color: "#000" }}
              >
                Community
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-link mx-3"
                style={{ color: "#000" }}
              >
                Contact
              </Link>
            </li>
          </ul> */}
          {/* <SignInButton /> */}
        </div>
      </div>
    </nav>
  );
};

export const SalesPageNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid px-2 py-2">
        <Link to="/" className="navbar-brand ms-1">
          {" "}
          <img src={newinnkeeperlogo} className="" alt="" />
        </Link>
        <button
          className="navbar-toggler btn"
          type=""
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDarkDropdown"
          aria-controls="navbarNavDarkDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDarkDropdown"
        >
          {/* <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/innkeeperTraining"
                className="nav-link mx-3"
                style={{ color: "#000" }}
              >
                {" "}
                Courses
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/talent"
                className="nav-link mx-3"
                style={{ color: "#000" }}
              >
                Talent
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/corporate"
                className="nav-link mx-3"
                style={{ color: "#000" }}
              >
                Corporate
              </Link>
            </li>
          </ul> */}
          <SignInButton />
          {/* <SalesPageSignInButton /> */}
        </div>
      </div>
    </nav>
  );
};
// export const SalesPageNavbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light">
//       <div className="container-fluid px-2 py-2">
//         <Link to="/" className="navbar-brand ms-1">
//           {" "}
//           <img src={newinnkeeperlogo} className="" alt="" />
//         </Link>
//         <button
//           className="navbar-toggler btn"
//           type=""
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNavDarkDropdown"
//           aria-controls="navbarNavDarkDropdown"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div
//           className="collapse navbar-collapse justify-content-end"
//           id="navbarNavDarkDropdown"
//         >
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <Link
//                 to="/innkeeperTraining"
//                 className="nav-link mx-3"
//                 style={{ color: "#000" }}
//               >
//                 {" "}
//                 Courses
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 to="/talent"
//                 className="nav-link mx-3"
//                 style={{ color: "#000" }}
//               >
//                 Talent
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/" className="nav-link mx-3" style={{ color: "#000" }}>
//                 Corporate
//               </Link>
//             </li>
//           </ul>
//           <SalesPageSignInButton />
//         </div>
//       </div>
//     </nav>
//   );
// };
export const CareersNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid px-2 py-2">
        <Link to="/" className="navbar-brand ms-1">
          {" "}
          <img src={newinnkeeperlogo} className="" alt="" />
        </Link>
        <button
          className="navbar-toggler btn"
          type=""
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDarkDropdown"
          aria-controls="navbarNavDarkDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDarkDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/innkeeperTraining"
                className="nav-link mx-3"
                style={{ color: "#000" }}
              >
                {" "}
                Courses
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/talent"
                className="nav-link mx-3"
                style={{ color: "#000" }}
              >
                Talent
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/corporate"
                className="nav-link mx-3"
                style={{ color: "#000" }}
              >
                Corporate
              </Link>
            </li>
          </ul>
          {/* <SalesPageSignInButton /> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
