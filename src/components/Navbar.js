import React from "react";
import { Link } from "react-router-dom";
import innkeeperlogo from "../images/innkeeperlogo.png";
import { SignInButton } from "../components/Buttons";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link to="" className="navbar-brand ms-2">
          {" "}
          <img src={innkeeperlogo} className="" alt="" />
        </Link>

        <button
          className="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav navText">
            <Link
              to="/"
              className="nav-link active mx-3"
              style={{ color: "#fff" }}
              aria-current="page"
            >
              Home
            </Link>
            <Link
              to="/courses"
              className="nav-link mx-3 navText"
              style={{ color: "#fff" }}
            >
              Courses
            </Link>

            <Link
              to="/blog"
              className="nav-link mx-3 navText"
              style={{ color: "#fff" }}
            >
              Blog
            </Link>
            <Link
              to="/community"
              className="nav-link mx-3 navText"
              style={{ color: "#fff" }}
            >
              {" "}
              Community
            </Link>
            <Link
              to="/contact"
              className="nav-link mx-3 navText"
              style={{ color: "#fff" }}
            >
              {" "}
              Contact
            </Link>

            <SignInButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
