// External import
import React from "react";
import { Link } from "react-router-dom";

// Components
import { SignInButton } from "../components/Buttons";

// Images
import innkeeperlogo197 from "../assets/images/innkeeperlogo197.png";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light">
			<div className="container-fluid px-2">
				<Link to="/" className="navbar-brand ms-2">
					{" "}
					<img src={innkeeperlogo197} className="" alt="" />
				</Link>
				<button
					className="navbar-toggler btn"
					type=""
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavDarkDropdown"
					aria-controls="navbarNavDarkDropdown"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse justify-content-end"
					id="navbarNavDarkDropdown">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link
								to="/"
								className="nav-link active mx-3"
								aria-current="page"
								style={{ color: "#000" }}>
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
								aria-expanded="false">
								Courses
							</Link>

							<ul
								className="dropdown-menu dropdown-menu-dark"
								aria-labelledby="navbarDarkDropdownMenuLink">
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
								to="/blog"
								className="nav-link mx-3"
								style={{ color: "#000" }}>
								{" "}
								Blog
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/community"
								className="nav-link mx-3"
								style={{ color: "#000" }}>
								Community
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/contact"
								className="nav-link mx-3"
								style={{ color: "#000" }}>
								Contact
							</Link>
						</li>
					</ul>
					<SignInButton />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
