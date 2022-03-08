import React from "react";
import { Link } from "react-router-dom";
import innkeeperlogo from "../images/innkeeperlogo.png";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand ms-2" href="#">
          <img src={innkeeperlogo} class="" alt="" />
        </a>
        <button
          className="navbar-toggler"
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
            <a
              className="nav-link active mx-3"
              style={{ color: "#fff" }}
              aria-current="page"
              href="#"
            >
              Home
            </a>
            <a
              className="nav-link mx-3 navText"
              style={{ color: "#fff" }}
              href="#"
            >
              About
            </a>
            <a
              className="nav-link mx-3 navText"
              style={{ color: "#fff" }}
              href="#"
            >
              Courses
            </a>
            <a
              className="nav-link mx-3 navText"
              style={{ color: "#fff" }}
              href="#"
            >
              Blog
            </a>
            <a
              className="nav-link mx-3 navText"
              style={{ color: "#fff" }}
              href="#"
            >
              Community
            </a>
            <a
              className="nav-link mx-3 navText"
              style={{ color: "#fff" }}
              href="#"
            >
              Contact
            </a>
            <button type="button" class="btn w-100 btnText btnColor">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Navbar = () => {
	return (
		<div>
			<ul>
				<li>
					<Link to="techacademy">Tech Academy</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
